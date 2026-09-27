import dns from 'node:dns/promises';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const requiredMajor = 22;
const nodeMajor = Number(process.versions.node.split('.')[0]);
const requiredPackages = ['next','react','react-dom','typescript','tailwindcss'];
const packageState = Object.fromEntries(requiredPackages.map(name => [name, fs.existsSync(path.join(root,'node_modules',name,'package.json'))]));
let registryDns = { ok:false, detail:null };
try {
  const results = await dns.lookup('registry.npmjs.org',{all:true});
  registryDns = { ok:results.length>0, detail:results.map(x=>x.address) };
} catch (error) {
  registryDns = { ok:false, detail:error?.code || error?.message || String(error) };
}
const report = {
  timestamp:new Date().toISOString(),
  node:{version:process.versions.node, requiredMajor, ok:nodeMajor>=requiredMajor},
  npm:{userAgent:process.env.npm_config_user_agent ?? null},
  packageLockPresent:fs.existsSync(path.join(root,'package-lock.json')),
  nodeModulesPresent:fs.existsSync(path.join(root,'node_modules')),
  packages:packageState,
  registryDns,
  canAttemptInstall:registryDns.ok,
  note:'A successful environment probe does not equal a verified Next build.'
};
console.log(JSON.stringify(report,null,2));
if(!report.node.ok) process.exitCode=1;
