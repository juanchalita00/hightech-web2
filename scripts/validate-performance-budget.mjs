import fs from 'node:fs'; import path from 'node:path'; import url from 'node:url';
const root=path.resolve(path.dirname(url.fileURLToPath(import.meta.url)),'..');
const b=JSON.parse(fs.readFileSync(path.join(root,'content/performance-budget.json'),'utf8'));
const expected={lcpMsMax:2500,inpMsMax:200,clsMax:0.10}; const failures=[];
for(const [k,v] of Object.entries(expected)) if(b.coreWebVitals?.[k]!==v) failures.push(`${k}: ${b.coreWebVitals?.[k]} != ${v}`);
if((b.criticalPathThirdPartiesMax??99)!==0) failures.push('criticalPathThirdPartiesMax debe ser 0');
if(!Array.isArray(b.routes)||b.routes.length<5) failures.push('faltan rutas de performance');
for(const [k,v] of Object.entries(b.transferBudgetsKb||{})) if(!(Number.isFinite(v)&&v>0)) failures.push(`${k}: budget inválido`);
if(failures.length){console.error('Performance budget inválido');failures.forEach(x=>console.error('- '+x));process.exit(1)}
console.log(`Performance budget OK: ${b.routes.length} rutas, CWV y transfer budgets definidos.`);
