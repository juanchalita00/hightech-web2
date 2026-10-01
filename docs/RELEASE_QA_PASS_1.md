# Release QA — Pass 1 (redirects, performance, accesibilidad, mobile)

Fecha: 2026-10-01 · Rama: `design/residential-focus-v1` · Base auditada: `4aeaa0c` + correcciones de este pass.

## Entorno de medición

- El Preview de Vercel del commit base existe (`hightech-web2-staging-qhxcfhp7r-hightech4.vercel.app`, deployment `Preview` en estado `success`), pero el proxy de salida del entorno de QA devolvió 403 de política para `*.vercel.app`.
- Se auditó el mismo código con `next build` + `next start` locales:
  - Preview: `VERCEL_ENV=preview`.
  - Production simulado: `VERCEL_ENV=production`, sólo local y sin deployment.
- Herramientas: Lighthouse 12 (throttling simulado, preset mobile por defecto y `--preset=desktop`), axe-core 4 (WCAG 2.0/2.1 A/AA + best-practice) y Playwright/Chromium (teclado, táctil, viewports).

## Redirects — `redirectsVerified = false`

Lo que se verificó en local:

- Los 5 redirects `APPROVED` de `content/redirect-fixtures.json` responden `301` y llegan a un destino `200` con canonical correcto.
- La query string se conserva.
- No hay loops.
- Las rutas sin reemplazo o con estado `PENDING_GSC` / `PROJECT_ROUTE_GATE` (`/gallery/`, `/destello/`, etc.) responden 404 real.
- Las rutas canónicas sin barra final redirigen con `308` a la versión con barra (`trailingSlash: true`).

Lo que queda pendiente:

- La regla de `MIGRATION_REDIRECT_REGISTRY_V0.6.md` exige ejecutar los fixtures contra el **deployment candidato**, y no fue accesible desde el entorno de QA.
- `www → canonical` y `http → https` dependen del dominio en Vercel, así que sólo se pueden verificar en el cutover.
- Hallazgo menor: una URL antigua sin barra final hace la cadena `308 → 301 → 200`, porque Next aplica primero la barra final. Hay que confirmar con datos de GSC si las URLs antiguas se indexaron sin barra. Si fuera así, conviene declarar esos redirects en la plataforma (Vercel) para evitar el salto extra.

## Performance — `performanceQaPassed = true`

Criterio usado: los `labTargets` y `transferBudgetsKb` de `content/performance-budget.json` en las rutas del presupuesto más `/servicios/`, en mobile y desktop:

- Lighthouse Performance ≥ 90.
- TBT ≤ 200 ms.
- CLS ≤ 0,05.
- Transferencia inicial mobile ≤ 1024 KB.
- Hero mobile ≤ 250 KB.
- 0 terceros en la ruta crítica.

| Ruta | Mobile antes → después | Desktop | LCP mobile (lab) | TBT | CLS | KB mobile |
|---|---|---|---|---|---|---|
| `/` | 89 (78 en la 1.ª corrida) → **97** | 100 | 3,69 s → **2,64 s** | 62 ms | 0 | 534 → **297** |
| `/servicios/` | 98 → 98 | 100 | 2,37 s | 49 ms | 0 | 250 |
| `/residencial/` | 98 → 98 | 100 | 2,38 s | 44 ms | 0 | 268 |
| `/comercial/` | 98 → 98 | 100 | 2,39 s | 48 ms | 0 | 276 |
| `/automotriz/` | 98 → 98 | 100 | 2,41 s | 59 ms | 0 | 283 |
| `/contacto/` | 98 → 96 | 100 | 2,40 s | 147 ms | 0 | 245 |
| `/peliculas/nanoceramica/` | 98 → 97 | 100 | 2,42 s | 82 ms | 0 | 254 |

Corrección aplicada: el fondo de `SignatureGlass` se descargaba como `background-image` CSS a tamaño original (262 KB, por encima de `heroMobileMax`). Ahora usa `next/image` con `sizes`, y en mobile pesa 24,8 KB. El encuadre, los filtros y el degradado se conservan.

Pendiente fuera de laboratorio:

- Los Core Web Vitals de campo (LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1) se confirman con datos reales tras el lanzamiento (`monitoringEnabled`).
- El LCP de laboratorio de la Home (2,64 s con red 4G lenta simulada) queda ligeramente por encima de 2,5 s; se debe a estilo/layout de una página más larga y no se persiguió a costa de rediseño.

## Accesibilidad — `accessibilityQaPassed = true`

axe-core sobre 21 rutas a 320, 375 y 1366 px:

- Rutas: las 14 prioritarias, las 6 guías y una ficha de tono.
- **0 violaciones**; Lighthouse Accessibility da **100** en las 14 mediciones del presupuesto.

Correcciones aplicadas:

- **Contraste:** 40 declaraciones `color` de texto secundario no alcanzaban 4,5:1. Se oscurecieron al mínimo necesario (≥ 4,6:1 sobre el fondo más desfavorable) conservando el matiz. Los textos sobre fondo oscuro del footer y Automotriz se aclararon.
- **Región desplazable no enfocable:** la franja de objetivos de Residencial hacía scroll horizontal oculto en mobile; ahora se reparte en varias líneas.
- **Landmark `<main>` anidado** en las guías: se cambió a `<div>`, porque el layout ya aporta `<main id="contenido">`.
- **Slider de `SignatureGlass` sin foco visible:** el tirador muestra ahora un anillo de foco cuando se enfoca con teclado (`:focus-visible`).
- **Objetivos táctiles < 24 px** (WCAG 2.5.8): `text-link`, enlaces del footer y dos enlaces de la Home tienen ahora `min-height: 24px`.

Revisión manual con teclado:

- El skip link es visible al enfocarse y lleva a `#contenido`.
- El orden de foco es lógico y el foco es visible (3 px) en enlaces y botones.
- El slider se maneja con flechas.
- Los cinco tonos se activan con Enter y actualizan `aria-pressed`.
- La FAQ abre y cierra con Enter/Espacio.
- El menú móvil abre con Enter y permite tabular sus enlaces.
- Con `prefers-reduced-motion` no hay animaciones activas.

Excepciones menores conocidas:

- El menú móvil (`<details>` nativo) no se cierra con Escape.
- No se hizo prueba con lector de pantalla real (VoiceOver/NVDA).

## Mobile — `mobileQaPassed = false`

Verificado en Chromium con emulación táctil:

- Tamaños: 320, 375, 430, 768, 1024, 1366 y horizontal 740×360.
- Rutas: las 14 rutas prioritarias.
- Resultado: sin scroll horizontal, sin elementos fuera del viewport y sin textos recortados.
- Interacción probada: menú, navegación, slider y selección de tono por toque.

Corrección aplicada: en horizontal (740×360) el menú abierto no cabía en el viewport. El panel tiene ahora altura máxima y scroll interno, y el último enlace queda accesible.

Pendiente: `content/device-matrix.json` exige dispositivos reales, como mínimo iPhone/Safari y Android/Chrome (`safe_area`, comportamiento de `<details>`, `dvh`). La emulación en Chromium no cubre WebKit/iOS. El flag queda en `false` hasta esa verificación.

## Hard gates (sin cambios)

| Ruta | Production simulado | Preview |
|---|---|---|
| `/garantias/` | 404 | 200 `noindex` |
| `/legal/terminos-y-condiciones/` | 404 | 200 `noindex` |
| `/legal/aviso-de-privacidad/` | 404 | 200 `noindex` |
| `/proyectos/` | 404 | 200 `noindex` |
| `/proyectos/[slug]/` | 404 | — |

## Otros hallazgos conocidos

- `/favicon.ico` responde 404 y genera un error de consola (Best Practices 96). El repositorio no tiene un isotipo cuadrado aprobado; se requiere el asset de marca.
