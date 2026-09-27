import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
const root=path.resolve(path.dirname(url.fileURLToPath(import.meta.url)),'..');
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const manifest=read('content/smoke-tests.json');
const fixtures=read(manifest.redirectFixtureFile);
const truth=read('content/publication-truth.json');
const deployment=(process.env[manifest.deploymentEnvVar]||'staging').toLowerCase();
const base=(process.env[manifest.baseUrlEnv]||'').replace(/\/$/,'');
if(!base){console.error(`${manifest.baseUrlEnv} es obligatorio, por ejemplo https://staging.example.com`);process.exit(2);}
const failures=[];
const get=async(p,opts={})=>fetch(`${base}${p}`,opts);
const canonicalsIn=html=>[...html.matchAll(/<link\b[^>]*\brel="canonical"[^>]*>/g)].map(m=>(m[0].match(/\bhref="([^"]*)"/)||[])[1]);
const checkCanonical=(label,html,canonicalPath)=>{const expected=new URL(canonicalPath,truth.site.canonicalBaseUrl).toString();const found=canonicalsIn(html);if(found.length!==1||found[0]!==expected)failures.push(`${label}: canonical ${found.length?found.join(', '):'ausente'}, esperado exactamente ${expected}.`);};
for(const c of manifest.pageChecks){
  const res=await get(c.path,{redirect:'manual'}); const html=await res.text();
  if(res.status!==c.expectedStatus)failures.push(`${c.path}: status ${res.status}, esperado ${c.expectedStatus} sin redirect${res.headers.get('location')?` (Location ${res.headers.get('location')})`:''}`);
  checkCanonical(c.path,html,c.canonical);
}
for(const c of manifest.endpointChecks){const res=await get(c.path);const body=await res.text();if(res.status!==c.expectedStatus)failures.push(`${c.path}: status ${res.status}`);const expectedText=c.contains ?? (deployment==='production'?c.productionContains:c.stagingContains);if(expectedText&&!body.toLowerCase().includes(expectedText.toLowerCase()))failures.push(`${c.path}: falta contenido esperado ${expectedText}`);}
{const c=manifest.notFoundCheck;const res=await get(c.path);if(res.status!==c.expectedStatus)failures.push(`${c.path}: esperaba 404 y recibió ${res.status}`);}
for(const f of fixtures){const res=await get(f.source,{redirect:'manual'});if(res.status!==f.expectedStatus)failures.push(`${f.source}: redirect ${res.status}, esperado ${f.expectedStatus}`);const loc=res.headers.get('location');if(!loc||!loc.endsWith(f.destination))failures.push(`${f.source}: Location ${loc}, esperado ${f.destination}`);const dest=await get(f.destination,{redirect:'manual'});const destHtml=await dest.text();if(dest.status!==f.expectedFinalStatus)failures.push(`${f.source}: destino ${f.destination} status ${dest.status}, esperado ${f.expectedFinalStatus}`);checkCanonical(`${f.source} -> ${f.destination}`,destHtml,f.expectedCanonical);}
if(failures.length){console.error('\nRUNTIME SMOKE FAILED\n');failures.forEach(x=>console.error(`- ${x}`));process.exit(1);}
console.log(`Runtime smoke OK contra ${base}.`);
