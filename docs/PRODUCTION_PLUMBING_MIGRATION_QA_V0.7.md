# HIGHTECH Web 2.0 — Production Plumbing + Migration QA v0.7

**Fecha:** 27 de septiembre de 2026  
**Base:** Starter v0.6  
**System of Truth:** v0.18

## 1. Objetivo

Preparar la implementación para staging y posterior producción sin abrir prematuramente los gates jurídicos, NAP, evidencia, analytics ni QA.

## 2. Canonical policy

Host canónico:

`https://polarizadoshightech.com`

Reglas:
- HTTP → HTTPS;
- `www` → host canónico;
- rutas de contenido con slash final;
- cada ruta registrada tiene `canonical` explícito;
- staging conserva canonical al host de producción y se bloquea por robots/deployment protection.

Se añadieron canonicals explícitos a las páginas existentes y templates dinámicos de tonos/proyectos.

## 3. Structured data

Se implementan globalmente:
- `Organization`;
- `WebSite`.

`LocalBusiness` **no se renderiza** mientras:
- `napApproved=false`, o
- `exactAddress=null`.

No se incorporan reviews, ratings, garantías ni productos estructurados no aprobados.

## 4. Sitemap / robots

El sitemap ya responde a release state:
- tone pages sólo si `tonePagesIndexable=true`;
- Proyectos sólo si `projectsPublic=true`;
- Garantías sólo cuando Warranty gate e indexability gate estén liberados;
- guía Jalisco sólo cuando su legal-content gate permita indexación;
- proyectos individuales sólo si son publicables.

Robots:
- staging/desarrollo: `Disallow: /`;
- producción: permite crawling general y declara sitemap canónico;
- no se bloquean por robots páginas `noindex` que necesiten ser rastreadas para leer la directiva.

## 5. Redirect implementation

Hallazgo corregido:

`permanent: true` en Next.js genera 308. El registry de HIGHTECH exige 301 para los redirects de migración aprobados.

La implementación ahora utiliza `statusCode: 301` explícito.

Se crea `content/redirect-fixtures.json` con:
- source;
- status esperado;
- destination;
- final status;
- canonical final.

Los redirects pendientes de GSC/ruta permanecen inactivos.

## 6. Smoke-test infrastructure

Se crea `content/smoke-tests.json` y `scripts/smoke-test.mjs`.

Comprueba en runtime:
- rutas core 200;
- canonical de producción;
- robots;
- sitemap;
- 404 real;
- redirects aprobados y status code.

Variables:

```bash
SMOKE_BASE_URL=https://<deployment>
SMOKE_DEPLOYMENT_ENV=staging|production
```

El runtime smoke no se marca PASS hasta ejecutarlo sobre un deployment real.

## 7. Analytics / third parties

Se crea `content/third-party-registry.json`.

GA4, Meta Pixel y Google Ads permanecen:
`enabled=false / PENDING_PRIVACY`.

`track()` sólo puede activar adapters cuando simultáneamente:
- deployment = production;
- `NEXT_PUBLIC_ANALYTICS_ENABLED=true`;
- `analyticsPrivacyApproved=true`.

Los componentes siguen sin llamar proveedores directamente.

## 8. DNS / email

Se crea `content/dns-email-state.json` y checklist de cutover.

Estado actual:
`UNVERIFIED_PRE_CUTOVER`.

No se inventan registros. Antes del cambio real se debe capturar y verificar:
- apex/web;
- www;
- MX;
- SPF;
- DKIM;
- DMARC;
- verificaciones Google/Meta;
- TLS;
- rollback al host anterior.

## 9. Security headers

Base activa:
- `X-Content-Type-Options`;
- `Referrer-Policy`;
- `X-Frame-Options`;
- `Permissions-Policy`.

HSTS se añade sólo en modo producción.

CSP permanece pendiente de browser/integration QA; no se añade a ciegas.

## 10. Release manifest

`scripts/generate-release-manifest.mjs` genera un snapshot legible por máquina con:
- versión de verdad;
- host canónico;
- blockers;
- número de redirects activos;
- terceros activos;
- estado DNS/email;
- readiness de infraestructura.

El manifest actual debe decir `productionReady=false` hasta cerrar P0.

## 11. Gates nuevos

```text
validate:seo
validate:smoke-manifest
release:manifest
smoke:runtime
```

El build futuro ejecuta content + redirects + links + SEO + smoke manifest antes de `next build`.

## 12. Estado

```yaml
production_plumbing_static: PASS
staging_release_gate: PASS
runtime_smoke: PENDING_DEPLOYMENT
browser_qa: PENDING_DEPENDENCIES_AND_DEPLOYMENT
production_release: BLOCKED_EXPECTED
```
