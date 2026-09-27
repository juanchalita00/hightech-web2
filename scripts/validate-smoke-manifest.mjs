import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
const root=path.resolve(path.dirname(url.fileURLToPath(import.meta.url)),'..');
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const manifest=read('content/smoke-tests.json');
const routes=read('content/routes.json');
const fixtures=read('content/redirect-fixtures.json');
const redirects=read('content/redirects.json').filter(r=>r.status==='APPROVED');
const known=new Set(routes.map(r=>r.path));
const errors=[];
for(const c of manifest.pageChecks){if(!known.has(c.path))errors.push(`Smoke route no registrada: ${c.path}`);if(c.canonical!==c.path)errors.push(`Canonical smoke incorrecto: ${c.path}`);}
if(manifest.notFoundCheck?.expectedStatus!==404)errors.push('El probe 404 debe esperar 404.');
if(fixtures.length!==redirects.length)errors.push('Fixtures de redirect no cubren todos los redirects APPROVED.');
for(const r of redirects){const f=fixtures.find(x=>x.source===r.source);if(!f)errors.push(`Sin fixture: ${r.source}`);else if(f.expectedStatus!==r.code||f.destination!==r.destination)errors.push(`Fixture inconsistente: ${r.source}`);}
if(errors.length){console.error('\nSMOKE MANIFEST GATE FAILED\n');errors.forEach(e=>console.error(`- ${e}`));process.exit(1);}
console.log(`Smoke manifest OK: ${manifest.pageChecks.length} páginas, ${manifest.endpointChecks.length} endpoints, ${fixtures.length} redirects.`);
