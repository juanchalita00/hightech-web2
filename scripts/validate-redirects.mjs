import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const root=path.resolve(path.dirname(url.fileURLToPath(import.meta.url)),"..");
const read=(file)=>JSON.parse(fs.readFileSync(path.join(root,file),"utf8"));
const redirects=read("content/redirects.json");
const routes=read("content/routes.json");
const release=read("content/release-state.json");
const fixtures=read("content/redirect-fixtures.json");
const routePaths=new Set(routes.map(r=>r.path));
const sources=new Set();
const errors=[];const warnings=[];

for(const item of redirects){
  if(sources.has(item.source)) errors.push(`Redirect source duplicado: ${item.source}`);
  sources.add(item.source);
  if(!item.source.startsWith("/")||!item.destination.startsWith("/")) errors.push(`Redirect debe ser path interno: ${item.source}`);
  if(item.source===item.destination) errors.push(`Redirect circular directo: ${item.source}`);
  if(item.code!==301) warnings.push(`${item.source}: code ${item.code}; revisar si debe ser permanente.`);
  if(item.status==="APPROVED" && item.destination!=="/sitemap.xml" && !routePaths.has(item.destination)) errors.push(`Destino APPROVED no registrado: ${item.source} -> ${item.destination}`);
  if(item.status==="PROJECT_ROUTE_GATE" && release.routes.projectsPublic) warnings.push(`${item.source}: projectsPublic=true; revisar si ya puede pasar a APPROVED.`);
}
for(const item of redirects.filter(x=>x.status==="APPROVED")){
  if(sources.has(item.destination)) errors.push(`Cadena potencial en redirects APPROVED: ${item.source} -> ${item.destination}`);
}
for(const item of redirects.filter(x=>x.status==="APPROVED")){
  const fixture=fixtures.find(f=>f.source===item.source);
  if(!fixture) errors.push(`Falta fixture para redirect APPROVED: ${item.source}`);
  else if(fixture.expectedStatus!==item.code||fixture.destination!==item.destination) errors.push(`Fixture inconsistente: ${item.source}`);
}
if(errors.length){console.error("\nREDIRECT GATE FAILED\n");errors.forEach(e=>console.error(`- ${e}`));process.exit(1);}
console.log(`Redirect gate OK: ${redirects.filter(x=>x.status==="APPROVED").length} activos, ${redirects.length} registrados.`);
warnings.forEach(w=>console.warn(`WARN: ${w}`));
