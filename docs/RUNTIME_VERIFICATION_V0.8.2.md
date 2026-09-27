# HIGHTECH Web 2.0 — Verificación runtime v0.8.2

**Fecha:** 27 de septiembre de 2026
**Rama:** `claude/runtime-v0.8.2-pnr256` (PR contra `main`, sin merge)
**Base:** `HIGHTECH_Web2_Starter_v0.8.2.zip`, importado sin cambios en `e2159b6`
**System of Truth:** v0.19 (sin cambios)
**Entorno:** contenedor Linux efímero con acceso a `registry.npmjs.org`. Node 22.22.2, npm 10.9.7 y Chromium 141 headless. **No** es GitHub Actions ni Vercel.

Este informe no aprueba producción. Tampoco cambia ningún flag de `release-state.json`.

---

## 1. Resultado

```yaml
npm_install: PASS            # package-lock.json versionado; npm ci reproduce el árbol
npm_audit: 0 vulnerabilidades
static_validation: PASS      # validate:all-static completo
typecheck_real: PASS         # next typegen && tsc --noEmit, TypeScript 5.9.3
next_build: PASS             # Next 16.3.6 (Turbopack), 34 páginas estáticas, 0 warnings
local_runtime_smoke: PASS    # next start, modo staging
local_http_contract: PASS    # next start, modo staging
independent_runtime_audit: PASS (0 problemas, 8 warnings documentados)
chromium_console_audit: PASS (60 cargas, 0 errores)
vercel_preview: PENDIENTE
device_matrix_lighthouse_axe: PENDIENTE
production_ready: false      # 14 blockers de producción sin cambios
```

El ZIP tal como venía **compilaba, pero no funcionaba correctamente en runtime**. Todas las URLs canónicas redirigían y los redirects de migración terminaban en 404. Detalle en §3.

## 2. Comandos ejecutados

### Baseline, antes de instalar dependencias

| Comando | Exit | Observación |
|---|---:|---|
| `npm run runtime:probe` | 0 | DNS del registry OK en este entorno |
| `npm run validate:internal-types` | **2** | `tsc` global 6.0.2 rechaza `baseUrl` (TS5101). Ver hallazgo H4 |
| `npm run validate:all-static` | **2** | Se aborta en el paso anterior; staging gate, manifest y preflight pasan por separado |
| `npm run runtime:harness:selftest` | 0 | Sólo valida el harness con fixtures |
| `npm run release:check:production` | 1 | `PRODUCTION RELEASE BLOCKED`, esperado |

### Pasada final, desde cero (`node_modules`, `.next` y `next-env.d.ts` borrados)

Código verificado: commit `15103aa` más `content/runtime-qa-state.json` del commit de evidencia.

| Comando | Exit | Esperado |
|---|---:|---:|
| `npm ci --no-audit --no-fund` | 0 | 0 |
| `npm audit` | 0 | 0 |
| `npm run runtime:probe` | 0 | 0 |
| `npm run validate:all-static` | 0 | 0 |
| `npm run release:check:production` | 1 | 1 |
| `npm run runtime:harness:selftest` | 0 | 0 |
| `npm run typecheck` | 0 | 0 |
| `npm run build` | 0 | 0 |
| `npm run smoke:runtime` contra `next start` (staging) | 0 | 0 |
| `npm run qa:http-contract` contra `next start` (staging) | 0 | 0 |
| Verificador independiente (§4.1) | 0 | 0 |
| Chromium headless (§4.2) | 0 | 0 |
| `npm run runtime:bootstrap` | 0 | 0 |

Salida completa: `docs/runtime-evidence/final-run-2026-09-27.txt`.
Evidencia del bootstrap: `docs/runtime-evidence/bootstrap-2026-09-27T20-19-24-992Z.json`.

Las variables de build y start son las de `.github/workflows/runtime-ci.yml`:

- `NEXT_PUBLIC_DEPLOYMENT_ENV=staging`
- `NEXT_PUBLIC_ANALYTICS_ENABLED=false`
- `NEXT_PUBLIC_SITE_URL=https://polarizadoshightech.com`
- `NEXT_PUBLIC_WHATSAPP_NUMBER=523322289017`

### Versiones resueltas (`package-lock.json`, lockfileVersion 3)

next 16.3.6 · react / react-dom 19.3.0 · typescript 5.9.3 · tailwindcss / @tailwindcss/postcss 4.3.3 · @types/node 22.20.4 · @types/react 19.3.0.

Los 100 paquetes se resuelven contra `registry.npmjs.org`.

## 3. Errores encontrados y correcciones

Todos son bugs de implementación o de herramientas. Ninguno requirió cambiar el System of Truth, claims, políticas, datos legales ni gates.

| # | Hallazgo (verificado en runtime) | Causa | Corrección | Commit |
|---|---|---|---|---|
| H1 | Las 29 rutas registradas no raíz respondían **308** hacia la versión sin barra. Por eso cada canonical y las 19 URLs no raíz del sitemap apuntaban a una URL que redirige. Los 5 redirects APPROVED respondían **308 → `/contact-us` → 404**, en vez de **301** al destino, y el smoke test fallaba. | `next.config.ts` no definía `trailingSlash`. El SoT §28C exige `content_trailing_slash: true` y `publication-truth.site.trailingSlash` es `ALWAYS_FOR_CONTENT_ROUTES`. | `trailingSlash: true` | `fbbedcd` |
| H2 | `<title>` con la marca repetida en 21 archivos de página, p. ej. «Contacto \| HIGHTECH Polarizados \| HIGHTECH Polarizados». | El `title.template` del layout se suma a títulos que ya traen sufijo de marca. | `title: { absolute: "<texto ya escrito>" }`. El `<title>` final es exactamente el texto existente y no cambia copy. | `80bb2b0` |
| H3 | El canonical de `/` se renderizaba `https://polarizadoshightech.com` (sin barra), no como el valor esperado por el manifest. | Mismo origen que H1. | Resuelto por H1 | `fbbedcd` |
| H4 | `validate:internal-types` fallaba con TypeScript ≥ 6, que es el flujo documentado «validar sin dependencias». | `baseUrl` está deprecado en TS 6 (TS5101). | `paths` absoluto, con la misma resolución. Verificado con TS 5.9.3, 6.0.2 y 7.0.2, más un control negativo. | `57de629` |
| H5 | El smoke test daba falsa confianza. Contra el build sin corregir **no reportaba ningún fallo de página**: seguía los 308 y validaba el canonical con `html.includes`, que en `/` coincidía con el `@id` del JSON-LD. Además ignoraba `expectedFinalStatus` y `expectedCanonical` de los fixtures, que el SoT §28C exige. | Harness | Sólo lo endurece: páginas con `redirect: 'manual'`, canonical exacto y único, y verificación del destino de cada redirect. El fixture del self-test sirve también los destinos. Pasa contra el build corregido y falla contra el original. | `15103aa` |
| H6 | `.env.staging.example` quedaba ignorado por git. | `.gitignore` sólo re-incluía `.env.example`. | `!.env.staging.example` | `b7b5d33` |
| H7 | Cada `typecheck` o `build` ensuciaba el árbol: `tsconfig.tsbuildinfo`, `next-env.d.ts` y `tsconfig.json`. | Eran archivos generados versionados. Next 16 impone `jsx: react-jsx` y regenera `next-env.d.ts`. | Dejan de versionarse `tsbuildinfo` y `next-env.d.ts`, como indica la documentación de Next 16. Se versiona el `tsconfig.json` que escribe Next. `typecheck` pasa a `next typegen && tsc --noEmit`. | `b7b5d33`, `af46457` |
| H8 | No existía lockfile. | Primer install con red. | `package-lock.json` versionado. `npm ci` verificado desde cero. | `af46457` |

Nota sobre H7: en Next 16.3.6 el validador generado tipa las props de página como `& any`, así que `next typegen` **no** añade cobertura de tipos en páginas. Se usa porque garantiza que `next-env.d.ts` y los tipos de rutas existan antes de `tsc` en un checkout limpio. Runtime CI ejecuta `typecheck` antes de `build`.

## 4. Verificación independiente

Para no depender sólo de los scripts del proyecto se usaron dos herramientas ad hoc, fuera del repositorio y sin añadir dependencias. Sus salidas están en `final-run-2026-09-27.txt`.

### 4.1 Verificador HTTP (30 rutas de `content/routes.json`)

Comprueba cada punto sin seguir redirects:

- 200 directo en cada ruta registrada;
- exactamente un canonical, igual a `https://polarizadoshightech.com<ruta>`;
- `noindex` en exactamente las rutas no indexables: tonos IR, proyectos, garantías, guía Jalisco y legales;
- JSON-LD limitado a `Organization` y `WebSite`, sin `LocalBusiness`;
- ningún token de GA4, Meta o Ads;
- `<title>` sin la marca repetida;
- sitemap igual a las rutas permitidas por los gates, 20 URLs, todas con 200;
- robots de staging `Disallow: /`;
- 5 redirects APPROVED con **301** a un destino que responde 200;
- 5 redirects no aprobados inactivos: `PROJECT_ROUTE_GATE` y `PENDING_GSC` responden 404;
- 404 con `noindex`, y 404 también para `/peliculas/nanoceramica/ir20/`, `/proyectos/<candidato>/` y `/gallery/`;
- headers de seguridad y ausencia de `x-powered-by`.

**Resultado final:** 0 problemas y 8 warnings (§5, W1). Contra el build sin corregir: 75 problemas.

### 4.2 Chromium headless (Playwright global del entorno)

- 30 rutas × escritorio 1366 px y móvil 360 px: 0 errores o warnings de consola, 0 errores de página o hidratación, 0 requests fallidos, 0 requests a terceros y 0 overflow horizontal a 360 px.
- Lo mismo contra `next dev` (warnings de React en desarrollo): 0 problemas.
- La navegación cliente con `next/link` conserva la barra final y actualiza title y canonical.
- CTA de WhatsApp: el `href` inicial no lleva `lead_ref`. Al hacer click se añade `Referencia web: HT-W2-XXXXXX` hacia `wa.me/523322289017`, y el evento local `whatsapp_started` sólo contiene `source_page`, `cta_position` y `lead_ref`. No hay PII ni tráfico a proveedores.

Esto **no** equivale a la matriz de dispositivos (`device-matrix.json`): no se probó Safari, iPhone, Android real, Edge, teclado ni zoom.

### 4.3 Gates dependientes del entorno (build local en modo `production`, sin desplegar)

- `robots.txt` pasa a `Allow: /` con `Host` y `Sitemap`.
- HSTS presente en las respuestas 200.
- smoke y HTTP contract en modo producción: PASS.
- Con `NEXT_PUBLIC_ANALYTICS_ENABLED=true` forzado, el JS y el HTML construidos no contienen ningún token de tracker. `analyticsPrivacyApproved=false` y no existen adaptadores de proveedor.

### 4.4 Auditoría de claims sobre el HTML renderizado

- **IR:** 79 menciones de «95%». 76 tienen «950 nm» a menos de 120 caracteres. Las otras 3 continúan de inmediato con «medido a 950 nm» o con la negación explícita de extrapolar a toda la banda.
- No aparece «95% menos calor», espectro completo, curva espectral ni multi-onda como afirmación. Todas las coincidencias son negaciones educativas, como «no significa 95% menos calor» o «No contamos hoy con una curva espectral completa».
- Sin «10 años» ni garantía de por vida.
- Sin dirección exacta ni horarios de NAP.
- Sin reseñas ni estrellas.
- Sin IR20, IR3, IR70 ni NANO+70.
- Sin UV 99.9%.
- IR75 en parabrisas no se declara legal ni ilegal. 70–75 / 35 / 20 se atribuye a Tránsito, «no como transcripción literal de la Ley».

No se modificó copy.

## 5. Warnings restantes (no corregidos, con motivo)

| # | Warning | Motivo / decisión requerida |
|---|---|---|
| W1 | Las respuestas 301/308 de `next start` no llevan los headers de seguridad; en modo producción tampoco HSTS. Las respuestas finales 200/404 sí los llevan. | Comportamiento de Next con redirects sin cuerpo; impacto práctico nulo. El HTTP contract no lo exige. Re-verificar en Vercel. |
| W2 | `npm run lint` está roto: Next 16 eliminó `next lint`. | No lo usan CI, bootstrap ni build. Arreglarlo requiere añadir ESLint 9 + `eslint-config-next`, o eliminar el script. **Decisión del equipo.** |
| W3 | JS inicial: **179.5 KB gzip-9** (155.3 KB Brotli) contra el presupuesto `initialJsGzipMax` de **160 KB**. CSS 15.8 KB contra 60 KB. | El código propio en cliente es de 2.8 KB; el resto es React 19 + runtime de Next 16. No se cambió el presupuesto. **Decisión de performance** (el SoT §24A contempla ajustar budgets tras medir el build real). |
| W4 | `npm ci` instala además las variantes musl de binarios nativos (+5 opcionales). Tras `npm install`, `npm ls` marca 2 paquetes wasm de `sharp` como *extraneous*. | Comportamiento de npm; inocuo. `npm ls` no muestra errores. |
| W5 | `next dev`, ejecutado por un agente de IA (detecta `CLAUDECODE`/`AI_AGENT`), crea `AGENTS.md` y `CLAUDE.md`, y su texto pide commitearlos. | Se eliminaron, no se commitean. Para un desarrollador humano no se generan. **Decisión del equipo** si quiere versionarlos o ignorarlos. |
| W6 | `engines.node` es `>=22`: Vercel puede elegir un major de Node más nuevo que el de CI (22). | Opcional: fijar Node 22.x en Vercel o `engines` para paridad. |
| W7 | `docs/file-manifest.txt` está desactualizado (147 entradas; incluye `next-env.d.ts` y `tsconfig.tsbuildinfo`). | Ningún script lo usa; se conserva como histórico. |
| W8 | La plantilla de proyecto usa `internalTitle` como título público. | Hoy está cerrada por `projectsPublic=false`. `projects.json` ya lista `public_title` como blocker. |
| W9 | Las frases bloqueadas aparecen literalmente en contextos negados, p. ej. «No significa “irrompible”». | Coherente con el SoT. Un escáner ingenuo de frases las marcaría. |

## 6. Blockers y pendientes

**Producción (sin cambios, 14):**

- `napApproved`, `termsApproved`, `privacyApproved`, `warrantiesApproved`
- `rpcaNomResolved`, `redirectsVerified`, `dnsEmailVerified`, `analyticsPrivacyApproved`
- `performanceQaPassed`, `accessibilityQaPassed`, `mobileQaPassed`
- `rollbackTested`, `monitoringEnabled`, `smokeTestPassed`

**`content/runtime-qa-state.json`:** sólo pasan a `passed: true`, con evidencia, `npmDependenciesInstalled`, `typecheckPassed` y `nextBuildPassed`.

Siguen en `false`:

- `runtimeSmokePassed` y `httpContractPassed`: el proceso (`RUNTIME_QA_RELEASE_CANDIDATE_V0.8.md`, pasos 5–7) los exige contra el deployment de staging.
- Navegadores y dispositivos reales, Lighthouse, axe, rollback y monitoring.

`runtimeEnvironment` sigue en `PENDING_DEPLOYMENT`.

## 7. Límites respetados

- Sin cambios en el System of Truth, en `content/` (salvo la evidencia de §6), en claims, en copy comercial, en precios ni en gates.
- Ningún gate eliminado ni relajado. El smoke test sólo se endureció.
- Sin trackers activados, sin garantías publicadas, sin NAP ni `LocalBusiness`, sin cambios de `noindex` a `index`.
- Sin testimonios, proyectos ni evidencia inventados.
- Sin dependencias nuevas: las herramientas de verificación ad hoc viven fuera del repo.
- Sin despliegue, sin tocar `polarizadoshightech.com` ni DNS.

## 8. Preparación para Vercel Preview (no producción)

Condiciones antes del primer deployment:

1. **Variables en Preview y también en Production:**
   - `NEXT_PUBLIC_DEPLOYMENT_ENV=staging`
   - `NEXT_PUBLIC_ANALYTICS_ENABLED=false`
   - `NEXT_PUBLIC_SITE_URL=https://polarizadoshightech.com`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER=523322289017`

   Si `main` es la rama de producción de Vercel, un merge crea un deployment «production» en `*.vercel.app`. Con `staging` sigue en `Disallow: /`, sin HSTS y sin analytics. Si la variable falta, el código ya cae en comportamiento no productivo.
2. No conectar el dominio `polarizadoshightech.com`.
3. `vercel.json` usará `npm ci`, porque ya existe el lockfile.
4. Deployment Protection de Vercel: los previews protegidos responderán 401 al workflow `Staging Runtime Smoke`. Los scripts no envían `x-vercel-protection-bypass`. Hay que desactivar la protección para ese preview o añadir soporte de bypass.
5. Tras desplegar: ejecutar `Staging Runtime Smoke` con la URL del preview. Si pasa, registrar esa URL como evidencia de `runtimeSmokePassed` y `httpContractPassed`.
