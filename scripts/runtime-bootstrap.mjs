import fs from 'node:fs';
import path from 'node:path';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const args=new Set(process.argv.slice(2));
const doInstall=args.has('--install');
const port=Number(process.env.PORT || 3100);
const evidenceDir=path.join(root,'docs','runtime-evidence');
fs.mkdirSync(evidenceDir,{recursive:true});
const evidence={timestamp:new Date().toISOString(),steps:[],notes:[]};
const record=(name,passed,detail)=>{evidence.steps.push({name,passed,detail});console.log(`${passed?'PASS':'FAIL'} ${name}${detail?`: ${detail}`:''}`)};
const run=(cmd,cmdArgs,env={})=>spawnSync(cmd,cmdArgs,{cwd:root,env:{...process.env,...env},encoding:'utf8',stdio:'pipe'});

const nodeMajor=Number(process.versions.node.split('.')[0]);
record('node>=22',nodeMajor>=22,process.versions.node);
if(nodeMajor<22) finish(1);

if(!fs.existsSync(path.join(root,'node_modules','next','package.json'))){
  if(!doInstall){record('dependencies',false,'node_modules incomplete; rerun with --install in an environment with npm network access');finish(2);}
  console.log('Installing dependencies...');
  const install=run('npm',['install','--no-audit','--no-fund']);
  if(install.stdout)process.stdout.write(install.stdout); if(install.stderr)process.stderr.write(install.stderr);
  record('npm install',install.status===0,`exit ${install.status}`);
  if(install.status!==0) finish(install.status||1);
}
record('dependencies',true,'Next/React node_modules present');

for(const [name,cmdArgs] of [
  ['static gates',['run','validate:all-static']],
  ['typecheck',['run','typecheck']],
  ['next build',['run','build']]
]){
  const r=run('npm',cmdArgs,{NEXT_PUBLIC_DEPLOYMENT_ENV:'staging',NEXT_PUBLIC_ANALYTICS_ENABLED:'false'});
  if(r.stdout)process.stdout.write(r.stdout); if(r.stderr)process.stderr.write(r.stderr);
  record(name,r.status===0,`exit ${r.status}`);
  if(r.status!==0) finish(r.status||1);
}

const server=spawn('npm',['run','start','--','-p',String(port)],{cwd:root,env:{...process.env,NEXT_PUBLIC_DEPLOYMENT_ENV:'staging',NEXT_PUBLIC_ANALYTICS_ENABLED:'false'},stdio:['ignore','pipe','pipe']});
server.stdout.on('data',d=>process.stdout.write(d)); server.stderr.on('data',d=>process.stderr.write(d));
const base=`http://127.0.0.1:${port}`;
let ready=false;
for(let i=0;i<40;i++){
  await new Promise(r=>setTimeout(r,500));
  try{const res=await fetch(base+'/'); if(res.status<500){ready=true;break}}catch{}
  if(server.exitCode!==null)break;
}
record('server start',ready,base);
if(!ready){server.kill('SIGTERM');finish(1);}
try{
  for(const [name,script,env] of [
    ['runtime smoke','scripts/smoke-test.mjs',{SMOKE_BASE_URL:base,SMOKE_DEPLOYMENT_ENV:'staging'}],
    ['http contract','scripts/http-contract-test.mjs',{QA_BASE_URL:base,QA_DEPLOYMENT_ENV:'staging',NEXT_PUBLIC_ANALYTICS_ENABLED:'false'}]
  ]){
    const r=run(process.execPath,[script],env);
    if(r.stdout)process.stdout.write(r.stdout); if(r.stderr)process.stderr.write(r.stderr);
    record(name,r.status===0,`exit ${r.status}`);
    if(r.status!==0) finish(r.status||1);
  }
} finally { server.kill('SIGTERM'); }
finish(0);

function finish(code){
  const name=`bootstrap-${new Date().toISOString().replace(/[:.]/g,'-')}.json`;
  const out=path.join(evidenceDir,name);
  fs.writeFileSync(out,JSON.stringify(evidence,null,2)+'\n');
  console.log(`Evidence written: ${out}`);
  process.exit(code);
}
