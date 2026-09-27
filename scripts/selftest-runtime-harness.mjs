import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=f=>JSON.parse(fs.readFileSync(path.join(root,f),'utf8'));
const smoke=read('content/smoke-tests.json');
const fixtures=read(smoke.redirectFixtureFile);
const truth=read('content/publication-truth.json');
const canonicalBase=truth.site.canonicalBaseUrl.replace(/\/$/,'');
const pagePaths=new Set(smoke.pageChecks.map(x=>x.path));

function canonicalFor(p){return new URL(p, `${canonicalBase}/`).toString();}
function makeServer(mode){
  return http.createServer((req,res)=>{
    const pathname=new URL(req.url,'http://localhost').pathname;
    const redirect=fixtures.find(x=>x.source===pathname);
    const common={
      'X-Content-Type-Options':'nosniff',
      'X-Frame-Options':'SAMEORIGIN',
      'Referrer-Policy':'strict-origin-when-cross-origin',
      ...(mode==='production'?{'Strict-Transport-Security':'max-age=31536000; includeSubDomains'}:{})
    };
    for(const [k,v] of Object.entries(common))res.setHeader(k,v);
    if(redirect){res.statusCode=redirect.expectedStatus;res.setHeader('Location',redirect.destination);return res.end();}
    if(pathname==='/robots.txt'){
      res.statusCode=200;res.setHeader('Content-Type','text/plain');
      return res.end(mode==='production'?`User-agent: *\nAllow: /\nSitemap: ${canonicalBase}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n');
    }
    if(pathname==='/sitemap.xml'){
      res.statusCode=200;res.setHeader('Content-Type','application/xml');
      return res.end(`<urlset><url><loc>${canonicalBase}/</loc></url></urlset>`);
    }
    if(pathname===smoke.notFoundCheck.path){res.statusCode=404;return res.end('Not found');}
    if(pagePaths.has(pathname) || pathname==='/peliculas/nanoceramica/' || pathname==='/contacto/' || pathname==='/automotriz/'){
      res.statusCode=200;res.setHeader('Content-Type','text/html; charset=utf-8');
      return res.end(`<!doctype html><html><head><link rel="canonical" href="${canonicalFor(pathname)}"></head><body>HIGHTECH QA fixture</body></html>`);
    }
    res.statusCode=404;res.end('Not found');
  });
}
function runNode(script,env){
  return new Promise((resolve,reject)=>{
    const child=spawn(process.execPath,[path.join(root,script)],{cwd:root,env:{...process.env,...env},stdio:'inherit'});
    child.on('exit',code=>code===0?resolve():reject(new Error(`${script} exited ${code}`)));
    child.on('error',reject);
  });
}
async function phase(mode){
  const server=makeServer(mode);
  await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(0,'127.0.0.1',resolve)});
  const {port}=server.address();
  const base=`http://127.0.0.1:${port}`;
  try{
    await runNode('scripts/smoke-test.mjs',{SMOKE_BASE_URL:base,SMOKE_DEPLOYMENT_ENV:mode});
    await runNode('scripts/http-contract-test.mjs',{QA_BASE_URL:base,QA_DEPLOYMENT_ENV:mode,NEXT_PUBLIC_ANALYTICS_ENABLED:'false'});
  } finally {
    await new Promise(resolve=>server.close(resolve));
  }
}
await phase('staging');
await phase('production');
console.log('Runtime QA harness self-test OK in staging and production fixture modes. This validates the test harness, not the Next application runtime.');
