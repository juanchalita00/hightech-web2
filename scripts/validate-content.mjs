import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const root = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const readJson = (file) => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
const truth = readJson("content/publication-truth.json");
const routes = readJson("content/routes.json");
const release = readJson("content/release-state.json");
const legal = readJson("content/legal-documents.json");
const warranties = readJson("content/warranties.json");
const projects = readJson("content/projects.json");
const reviews = readJson("content/reviews.json");

const errors = [];
const thirdParty = readJson("content/third-party-registry.json");
if (!release.production.analyticsPrivacyApproved && thirdParty.providers.some((provider) => provider.enabled === true)) {
  errors.push("Hay terceros de analytics/ads habilitados sin aprobación de privacidad.");
}
if (truth.site?.canonicalBaseUrl !== "https://polarizadoshightech.com") {
  errors.push("Canonical base URL no coincide con la política aprobada.");
}

if (release.sourceOfTruthVersion !== "0.19") errors.push("release-state no apunta a System of Truth v0.19.");
if (truth.meta?.source !== "HIGHTECH_Web2_System_of_Truth_v0.19") errors.push("publication-truth no apunta a System of Truth v0.19.");
const expected = {
  IR75: [75, 99, 95, 950, 59],
  IR50: [48, 99, 95, 950, 72],
  IR35: [35, 99, 95, 950, 79],
  IR15: [15, 99, 95, 950, 87],
  IR5: [3, 99, 95, 950, 96],
};

for (const product of truth.nano) {
  const canonical = expected[product.id];
  if (!canonical) errors.push(`Producto nano inesperado: ${product.id}`);
  else {
    const actual = [product.vlt, product.uv, product.infraredRejection, product.infraredWavelengthNm, product.tser];
    if (JSON.stringify(actual) !== JSON.stringify(canonical)) errors.push(`Specs alteradas para ${product.id}: ${actual.join("/")}`);
  }
}

const paths = routes.map((r) => r.path);
if (new Set(paths).size !== paths.length) errors.push("Hay rutas duplicadas en content/routes.json");

if (!release.production.napApproved && truth.contact.exactAddress) {
  errors.push("NAP no está aprobado pero publication-truth expone una dirección exacta.");
}

if (!release.production.warrantiesApproved && warranties.length > 0) {
  errors.push("Hay garantías públicas cargadas aunque warrantiesApproved=false.");
}

for (const doc of legal) {
  if (doc.status.endsWith("BLOCKED") && doc.version) errors.push(`${doc.documentId}: documento bloqueado no debe tener versión pública activa.`);
}

if (truth.jaliscoAutomotive.operationalReference.status !== "ACTIVE_OPERATIONAL_REFERENCE") {
  errors.push("La referencia operativa 75/35/20 perdió su estado activo.");
}
if (truth.jaliscoAutomotive.windshieldLegalConclusion !== "UNRESOLVED") {
  errors.push("La conclusión jurídica específica de parabrisas debe seguir UNRESOLVED.");
}

if (truth.technicalPolicy?.infrared?.currentEvidenceScope !== "POINT_MEASUREMENT_ONLY") {
  errors.push("El alcance IR debe seguir limitado a medición puntual.");
}
if (truth.technicalPolicy?.infrared?.supportedWavelengthNm !== 950) {
  errors.push("La única longitud de onda IR cuantitativa soportada actualmente debe ser 950 nm.");
}
if (truth.technicalPolicy?.infrared?.spectralCurveAvailable !== false || truth.technicalPolicy?.infrared?.multiWavelengthClaimsAllowed !== false) {
  errors.push("No existe curva espectral ni permiso para claims IR multi-longitud de onda.");
}


if (truth.servicePolicy?.automotive?.installationMode !== "WORKSHOP_ONLY") {
  errors.push("La instalación automotriz debe conservar WORKSHOP_ONLY.");
}

const publicProjectRecords = projects.items.filter((project) => project.publicationAllowed === true && project.status === "PUBLISHED");
if (!release.routes.projectsPublic && publicProjectRecords.length) {
  errors.push("Hay proyectos marcados PUBLISHED aunque projectsPublic=false.");
}
if (release.routes.projectsPublic && !publicProjectRecords.length) {
  errors.push("projectsPublic=true sin proyectos publicables.");
}
for (const project of publicProjectRecords) {
  for (const field of ["productId", "problem", "observedResult", "permission"]) {
    if (!project[field] || project[field] === "UNKNOWN") errors.push(`${project.projectId}: falta ${field} para publicación.`);
  }
}

const publicReviews = reviews.items.filter((review) => review.publicationAllowed === true);
if (!release.routes.reviewsPublic && publicReviews.length) {
  errors.push("Hay reviews publicables aunque reviewsPublic=false.");
}
if (release.routes.reviewsPublic && !publicReviews.length) {
  errors.push("reviewsPublic=true sin reviews verificadas.");
}
for (const review of publicReviews) {
  if (!review.source || !review.sourceUrl || !review.publishedAt || !review.quote) errors.push(`${review.reviewId}: review incompleta.`);
}

if (errors.length) {
  console.error("\nCONTENT GATE FAILED\n");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Content gate OK: ${truth.nano.length} productos nano, ${routes.length} rutas registradas.`);
