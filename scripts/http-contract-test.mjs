import fs from 'node:fs'; import path from 'node:path'; import url from 'node:url';
const root=path.resolve(path.dirname(url.fileURLToPath(import.meta.url)),'..');
const cfg=JSON.parse(fs.readFileSync(path.join(root,'content/http-contract-tests.json'),'utf8'));
const base=(process.env[cfg.baseUrlEnv]||'').replace(/\/$/,''); const env=(process.env[cfg.deploymentEnvVar]||'staging').toLowerCase();
if(!base){console.error(`${cfg.baseUrlEnv} es obligatorio`);process.exit(2)}
const failures=[];
for(const p of cfg.routes){const res=await fetch(base+p);const html=await res.text(); if(res.status!==200)failures.push(`${p}: status ${res.status}`);
 for(const [k,v] of Object.entries(cfg.requiredHeaders)){const got=res.headers.get(k); if(!got||!got.toLowerCase().includes(v.toLowerCase())) failures.push(`${p}: header ${k}=${got}`)}
 if(env==='production')for(const [k,v] of Object.entries(cfg.productionOnlyHeaders)){const got=res.headers.get(k); if(!got||!got.toLowerCase().includes(v.toLowerCase())) failures.push(`${p}: falta production header ${k}`)}
 if(!html.includes('rel="canonical"')||!html.includes(cfg.canonicalHost)) failures.push(`${p}: canonical host faltante`);
 if(process.env.NEXT_PUBLIC_ANALYTICS_ENABLED!=='true') for(const token of cfg.forbiddenHtmlTokensWhenAnalyticsDisabled) if(html.includes(token)) failures.push(`${p}: tracker inesperado ${token}`);
}
if(failures.length){console.error('HTTP CONTRACT FAILED');failures.forEach(x=>console.error('- '+x));process.exit(1)}
console.log(`HTTP contract OK contra ${base}.`);
