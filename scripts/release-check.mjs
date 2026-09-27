import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const mode = process.argv[2] ?? "staging";
if (!["staging", "production"].includes(mode)) {
  console.error("Uso: node scripts/release-check.mjs staging|production");
  process.exit(2);
}

const root = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const state = JSON.parse(fs.readFileSync(path.join(root, "content/release-state.json"), "utf8"));

if (!state.implementationApproved) {
  console.error("Implementation gate cerrado: no se debe construir todavía.");
  process.exit(1);
}

if (mode === "staging") {
  const infraFailures = Object.entries(state.infrastructure ?? {}).filter(([key, passed]) => key !== "runtimeBrowserQa" && passed !== true).map(([key]) => key);
  if (infraFailures.length) {
    console.error("\nSTAGING INFRASTRUCTURE BLOCKED\n");
    infraFailures.forEach((failure) => console.error(`- ${failure}`));
    process.exit(1);
  }
  console.log("Staging gate OK: plumbing base listo; blockers de producción permanecen aislados.");
  process.exit(0);
}

const failures = Object.entries(state.production).filter(([, passed]) => passed !== true).map(([key]) => key);
if (failures.length) {
  console.error("\nPRODUCTION RELEASE BLOCKED\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  console.error("\nEsto es esperado hasta cerrar Legal + Privacy + Warranty + NAP + Migration + QA.");
  process.exit(1);
}

console.log("Production release gate OK.");
