import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
const root=path.resolve(path.dirname(url.fileURLToPath(import.meta.url)),'..');
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const release=read('content/release-state.json');
const truth=read('content/publication-truth.json');
const routes=read('content/routes.json');
const redirects=read('content/redirects.json');
const third=read('content/third-party-registry.json');
const dns=read('content/dns-email-state.json');
const blockers=Object.entries(release.production).filter(([,v])=>v!==true).map(([k])=>k);

// Manifest v2: categorías informativas. productionReady conserva su semántica conservadora (todos los flags).
const enabledThirdParties=third.providers.filter(p=>p.enabled);
const analyticsIntegrationActive=enabledThirdParties.some(p=>p.category==='analytics'||p.category==='advertising');
const categories={
  publicSiteTechnical:['napApproved','redirectsVerified','dnsEmailVerified','performanceQaPassed','accessibilityQaPassed','mobileQaPassed','rollbackTested','monitoringEnabled','smokeTestPassed'],
  commercialLegal:['termsApproved','privacyApproved','warrantiesApproved','rpcaNomResolved'],
  // La aprobación de privacidad de analytics sólo es requisito técnico cuando hay una integración activa.
  conditionalIntegrations:['analyticsPrivacyApproved'],
};
const categorized=new Set(Object.values(categories).flat());
const uncategorized=Object.keys(release.production).filter(k=>!categorized.has(k));
const unknown=[...categorized].filter(k=>!(k in release.production));
if(uncategorized.length||unknown.length){
  console.error(`Release manifest: flags sin categoría [${uncategorized.join(', ')}] o inexistentes [${unknown.join(', ')}].`);
  process.exit(1);
}
const publicSiteRequirements=[...categories.publicSiteTechnical,...(analyticsIntegrationActive?['analyticsPrivacyApproved']:[])];
const pending=keys=>keys.filter(k=>release.production[k]!==true);
const publicSiteTechnicalBlockers=pending(publicSiteRequirements);
const commercialLegalBlockers=pending(categories.commercialLegal);

// Rutas con hard gate (requireReleasedInProduction): 404 en Production mientras su flag sea false.
const gatedRoutes=[
  {path:'/garantias/',file:'src/app/garantias/page.tsx',flag:'production.warrantiesApproved'},
  {path:'/legal/terminos-y-condiciones/',file:'src/app/legal/terminos-y-condiciones/page.tsx',flag:'production.termsApproved'},
  {path:'/legal/aviso-de-privacidad/',file:'src/app/legal/aviso-de-privacidad/page.tsx',flag:'production.privacyApproved'},
  {path:'/proyectos/',file:'src/app/proyectos/page.tsx',flag:'routes.projectsPublic'},
  {path:'/proyectos/[slug]/',file:'src/app/proyectos/[slug]/page.tsx',flag:'routes.projectsPublic'},
];
const hardGatedRoutes=gatedRoutes.map(({path:route,file,flag})=>{
  const source=fs.readFileSync(path.join(root,file),'utf8');
  if(!source.includes(`requireReleasedInProduction(release.${flag})`)){
    console.error(`Release manifest: ${file} no aplica requireReleasedInProduction(release.${flag}).`);
    process.exit(1);
  }
  const [group,key]=flag.split('.');
  return {path:route,flag,enabledInProduction:release[group][key]===true};
});

const out={generatedAt:new Date().toISOString(),manifestVersion:2,sourceOfTruthVersion:release.sourceOfTruthVersion,canonicalBaseUrl:truth.site.canonicalBaseUrl,implementationApproved:release.implementationApproved,
  productionReady:blockers.length===0,productionBlockers:blockers,
  publicSiteTechnicalReady:publicSiteTechnicalBlockers.length===0,
  publicSiteTechnicalNote:'Indicador técnico/informativo de la web pública activa. No implica cumplimiento legal aprobado.',
  publicSiteTechnicalRequirements:publicSiteRequirements,publicSiteTechnicalBlockers,
  commercialLegalReady:commercialLegalBlockers.length===0,
  commercialLegalRequirements:categories.commercialLegal,commercialLegalBlockers,
  analytics:{integrationActive:analyticsIntegrationActive,privacyApproved:release.production.analyticsPrivacyApproved===true,requiredForPublicSite:analyticsIntegrationActive},
  hardGatedRoutes,
  indexableRouteCount:routes.filter(r=>r.indexable).length,approvedRedirectCount:redirects.filter(r=>r.status==='APPROVED').length,enabledThirdParties:enabledThirdParties.map(p=>p.id),dnsEmailStatus:dns.status,infrastructure:release.infrastructure};
fs.writeFileSync(path.join(root,'docs/RELEASE_MANIFEST.generated.json'),JSON.stringify(out,null,2)+'\n');
console.log(`Release manifest generado. Production blockers: ${blockers.length} (sitio público técnico: ${publicSiteTechnicalBlockers.length}, comercial/legal: ${commercialLegalBlockers.length}).`);
