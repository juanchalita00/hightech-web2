import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'hightech-types-'));
const stubs=path.join(tmp,'runtime-stubs.d.ts');
const cfg=path.join(tmp,'tsconfig.json');
fs.writeFileSync(stubs, `
declare const process: { env: Record<string, string | undefined> };
declare namespace React {
  type ReactNode = any;
  interface MouseEvent<T = Element> { preventDefault(): void; currentTarget: T; }
}
declare namespace JSX {
  interface Element { }
  interface ElementChildrenAttribute { children: {}; }
  interface IntrinsicAttributes { key?: any; }
  interface IntrinsicElements { [elemName: string]: any }
}
declare module "react" {
  export type ReactNode = any;
  export type CSSProperties = Record<string, string | number | undefined>;
  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T;
}
declare module "next" {
  export type Metadata = any;
  export namespace MetadataRoute { type Robots = any; type Sitemap = any; }
  export type NextConfig = any;
}
declare module "next/link" { const Link: any; export default Link; }
declare module "next/image" { const Image: any; export default Image; }
declare module "next/navigation" { export function notFound(): never; }
`);
fs.writeFileSync(cfg, JSON.stringify({
  compilerOptions:{
    target:'ES2022', lib:['dom','dom.iterable','esnext'], allowJs:false, skipLibCheck:true,
    strict:true, noEmit:true, esModuleInterop:true, module:'esnext', moduleResolution:'bundler',
    resolveJsonModule:true, isolatedModules:true, jsx:'preserve', paths:{'@/*':[`${root}/src/*`]}
  },
  include:[stubs,`${root}/**/*.ts`,`${root}/**/*.tsx`],
  exclude:[`${root}/node_modules`]
},null,2));
const candidates=[path.join(root,'node_modules','.bin','tsc'),'tsc'];
let result;
for(const bin of candidates){
  result=spawnSync(bin,['-p',cfg,'--pretty','false'],{encoding:'utf8'});
  if(result.error?.code==='ENOENT') continue;
  break;
}
if(!result || result.error?.code==='ENOENT'){
  console.error('Structural typecheck unavailable: TypeScript compiler not found.');
  process.exit(2);
}
if(result.stdout) process.stdout.write(result.stdout);
if(result.stderr) process.stderr.write(result.stderr);
if(result.status!==0){
  console.error('Structural typecheck FAILED. This check uses module stubs and does not replace the real Next/React typecheck.');
  process.exit(result.status ?? 1);
}
const files=[];
for(const dir of ['src']){
  const walk=p=>{for(const e of fs.readdirSync(p,{withFileTypes:true})){const q=path.join(p,e.name);if(e.isDirectory())walk(q);else if(/\.(ts|tsx)$/.test(e.name))files.push(q)}};
  walk(path.join(root,dir));
}
console.log(`Structural typecheck OK: ${files.length} TS/TSX files. External Next/React types were stubbed; real npm typecheck remains required.`);
