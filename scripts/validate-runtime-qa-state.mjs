import fs from 'node:fs'; import path from 'node:path'; import url from 'node:url';
const root=path.resolve(path.dirname(url.fileURLToPath(import.meta.url)),'..');
const s=JSON.parse(fs.readFileSync(path.join(root,'content/runtime-qa-state.json'),'utf8'));
const failures=[];
for (const [k,v] of Object.entries(s.checks||{})) {
  if (typeof v.passed!=='boolean') failures.push(`${k}: passed debe ser boolean`);
  if (v.passed===true && !v.evidence) failures.push(`${k}: PASS sin evidencia`);
}
if (failures.length){console.error('Runtime QA state inválido'); failures.forEach(x=>console.error('- '+x)); process.exit(1)}
console.log(`Runtime QA state OK: ${Object.keys(s.checks).length} checks controlados; PASS requiere evidencia.`);
