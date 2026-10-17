// Escribe los redirects de afiliados (/<slug> → WhatsApp) en vercel.json.
// Vercel no decodifica el destino, así que el texto va codificado una sola vez.
import { readFileSync, writeFileSync } from "node:fs";

const afiliados = JSON.parse(readFileSync(new URL("../content/afiliados.json", import.meta.url), "utf8"));
const vercelPath = new URL("../vercel.json", import.meta.url);
const config = JSON.parse(readFileSync(vercelPath, "utf8"));

const isAffiliate = (r) => typeof r.destination === "string" && r.destination.startsWith("https://wa.me/523322289017?text=");
const affiliates = Object.entries(afiliados).flatMap(([slug, { message }]) => {
  const destination = `https://wa.me/523322289017?text=${encodeURIComponent(message)}`;
  return [`/${slug}`, `/${slug}/`].map((source) => ({ source, destination, permanent: false }));
});

config.redirects = [...(config.redirects ?? []).filter((r) => !isAffiliate(r)), ...affiliates];
writeFileSync(vercelPath, JSON.stringify(config, null, 2) + "\n");
console.log(`sync-afiliados: ${affiliates.length} redirects en vercel.json`);
