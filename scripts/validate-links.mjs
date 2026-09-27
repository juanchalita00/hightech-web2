import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const root=path.resolve(path.dirname(url.fileURLToPath(import.meta.url)),"..");
const routes=JSON.parse(fs.readFileSync(path.join(root,"content/routes.json"),"utf8"));
const known=new Set(routes.map(r=>r.path));
known.add("/sitemap.xml");known.add("/robots.txt");
const files=[];
function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const full=path.join(dir,entry.name);if(entry.isDirectory())walk(full);else if(/\.(tsx|ts)$/.test(entry.name))files.push(full);}}
walk(path.join(root,"src"));
const errors=[];let count=0;
for(const file of files){const text=fs.readFileSync(file,"utf8");const rx=/(?:href|sourcePage)=[{]?\s*["'`]([^"'`$]+)["'`]/g;let m;while((m=rx.exec(text))){const href=m[1];if(!href.startsWith("/"))continue;count++;const clean=href.split(/[?#]/)[0];if(clean.includes("["))continue;if(!known.has(clean) && !clean.startsWith("/proyectos/")) errors.push(`${path.relative(root,file)} -> ${clean}`);}}
if(errors.length){console.error("\nLINK GATE FAILED\n");errors.forEach(e=>console.error(`- ${e}`));process.exit(1);}
console.log(`Link gate OK: ${count} rutas internas literales comprobadas.`);
