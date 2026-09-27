import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const root=path.resolve(path.dirname(url.fileURLToPath(import.meta.url)),'..');
const read=(p)=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const truth=read('content/publication-truth.json');
const routes=read('content/routes.json');
const release=read('content/release-state.json');
const errors=[];

if(truth.site?.canonicalBaseUrl!=='https://polarizadoshightech.com') errors.push('canonicalBaseUrl debe ser https://polarizadoshightech.com');
if(truth.site?.canonicalHost!=='polarizadoshightech.com') errors.push('canonicalHost inesperado.');

for(const route of routes){
  if(route.canonical!==route.path) errors.push(`${route.path}: canonical registry no coincide con path.`);
  if(route.indexable && ['BUILD_READY_CONTENT_BLOCKED','CONTENT_BLOCKED','LEGAL_CONTENT_REVIEW'].includes(route.status)) errors.push(`${route.path}: ruta bloqueada marcada indexable.`);
}

const staticPages=routes.filter(r=>!r.path.includes('[') && !r.path.startsWith('/peliculas/nanoceramica/ir'));
for(const route of staticPages){
  const rel=route.path==='/'?'src/app/page.tsx':`src/app/${route.path.replace(/^\//,'').replace(/\/$/,'')}/page.tsx`;
  const full=path.join(root,rel);
  if(!fs.existsSync(full)){errors.push(`${route.path}: page.tsx no encontrado.`);continue;}
  const text=fs.readFileSync(full,'utf8');
  if(!text.includes(`canonical: "${route.path}"`) && !text.includes(`canonical:"${route.path}"`)) errors.push(`${route.path}: falta canonical explícito en metadata.`);
}

const tone=fs.readFileSync(path.join(root,'src/app/peliculas/nanoceramica/[tone]/page.tsx'),'utf8');
if(!tone.includes('alternates:{canonical:`/peliculas/nanoceramica/${tone.toLowerCase()}/`}')) errors.push('Tone template sin canonical dinámico.');
const project=fs.readFileSync(path.join(root,'src/app/proyectos/[slug]/page.tsx'),'utf8');
if(!project.includes('alternates:{canonical:`/proyectos/${slug}/`}')) errors.push('Project template sin canonical dinámico.');

const layout=fs.readFileSync(path.join(root,'src/app/layout.tsx'),'utf8');
if(!layout.includes('organizationSchema()') || !layout.includes('websiteSchema()')) errors.push('Falta schema Organization/WebSite global.');
if(!layout.includes('localBusinessSchema()')) errors.push('Falta LocalBusiness condicionado por gate NAP.');

if(release.production.napApproved===false && truth.contact.exactAddress!==null) errors.push('NAP cerrado=false pero existe dirección exacta en publication truth.');

if(errors.length){console.error('\nSEO GATE FAILED\n');errors.forEach(e=>console.error(`- ${e}`));process.exit(1);}
console.log(`SEO gate OK: ${routes.length} rutas con canonical registry + schema gates.`);
