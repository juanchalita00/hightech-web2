# HIGHTECH Web 2.0 — Performance, Accessibility & Release Gates v0.1

**Fecha:** 27 de septiembre de 2026  
**Fuente maestra:** `HIGHTECH_Web2_System_of_Truth_v0.13.md`  
**Stack previsto:** Next.js App Router + TypeScript + Tailwind + Sanity + Vercel  
**Estado:** especificación técnica previa a construcción.

---

# 1. PRINCIPIO

La estética premium no justifica una web lenta, frágil o inaccesible.

Web 2.0 debe conservar:

```text
claridad visual
+ fotografía de calidad
+ interacción útil
+ velocidad
+ estabilidad
+ accesibilidad
+ resiliencia
```

Las animaciones, videos, fuentes, widgets y trackers son opcionales.

El contenido, navegación, contacto y conversión son esenciales.

---

# 2. OBJETIVOS DE CAMPO — CORE WEB VITALS

Objetivo oficial de experiencia real al percentil 75, separado por móvil y escritorio:

```yaml
LCP: <= 2.5s
INP: <= 200ms
CLS: <= 0.10
```

Estos tres umbrales son **gates de campo**.

No considerar que la web “pasa” si Lighthouse luce bien pero los usuarios reales fallan.

---

# 3. MÉTRICAS DE LABORATORIO

Usar para prevenir regresiones:

```yaml
lighthouse_performance_target: >= 90
lighthouse_accessibility_target: >= 95
TBT_target: <= 200ms
CLS_lab_target: <= 0.05
```

Son objetivos internos, no equivalentes a cumplimiento de campo ni certificación de accesibilidad.

Una excepción requiere:
- causa;
- impacto;
- responsable;
- fecha de corrección o aceptación explícita.

---

# 4. PERFORMANCE BUDGET — MOBILE FIRST

Presupuestos internos, no estándares universales.

## Página inicial / páginas de conversión

```yaml
initial_js_gzip_target: <= 160KB
initial_css_gzip_target: <= 60KB
initial_font_transfer_target: <= 120KB
hero_image_mobile_target: <= 250KB
hero_image_desktop_target: <= 450KB
initial_page_transfer_mobile_target: <= 1.0MB
third_party_on_critical_path: 0
```

## Regla
Estos son **budgets**, no autorizaciones para llenar hasta el límite.

Si una página puede funcionar con menos, debe usar menos.

---

# 5. JAVASCRIPT BUDGET

## Default
Server Components primero.

Añadir `"use client"` sólo cuando exista interacción real que lo requiera.

## Permitido
- comparador de películas;
- menú móvil;
- acordeones;
- filtros de proyectos;
- tracking consentido;
- pequeños microinteractions.

## Evitar
- convertir toda la página en Client Component;
- librerías grandes para una sola animación;
- carruseles pesados;
- scroll hijacking;
- efectos que recalculen layout continuamente;
- sliders de hero automáticos;
- dependencias duplicadas.

## Gate
Bundle Analyzer antes de lanzamiento y ante aumentos relevantes.

---

# 6. IMÁGENES

HIGHTECH depende visualmente de:
- arquitectura;
- cristales;
- vehículos;
- proyectos reales.

Eso no autoriza subir el JPEG de 8–12 MB directo al navegador.

## Pipeline

```text
original master
→ crop/art direction
→ responsive derivatives
→ AVIF/WebP when appropriate
→ correct dimensions
→ CDN/cache
```

## Reglas
- `next/image` o pipeline equivalente.
- `width/height` o aspect ratio reservado.
- `sizes` correcto.
- lazy-load debajo del fold.
- prioridad únicamente para el LCP real.
- no preload masivo.
- thumbnails no descargan imagen full-size.
- CMS valida dimensiones/peso antes de publicar.

## Alt
Descripción funcional/contextual, no keyword stuffing.

Decorativas:
`alt=""`

---

# 7. HERO

El Hero debe seguir siendo útil si:
- la imagen tarda;
- JS falla;
- motion está deshabilitado;
- video no carga.

## Preferencia
Imagen estática premium > video automático.

Video sólo si:
- aporta información real;
- no bloquea LCP;
- tiene poster;
- carga diferido;
- no depende de audio;
- respeta reduced motion;
- puede omitirse en móvil si conviene.

No usar video de fondo de 10–30 MB para “verse premium”.

---

# 8. FUENTES

## Objetivo
Una familia principal, con número limitado de pesos.

Preferir:
- self-hosted;
- subset latino necesario;
- WOFF2;
- `font-display` apropiado;
- preload sólo del archivo crítico.

No cargar:
- 8 pesos;
- múltiples familias decorativas;
- fuentes de terceros bloqueantes.

El branding no debe depender de que una fuente remota responda.

---

# 9. THIRD-PARTY SCRIPTS

Antes de consentimiento/revisión:

```yaml
marketing_trackers_on_critical_path: 0
```

Todo proveedor pasa por `third_party_registry`.

Categorías:
- analytics;
- ads;
- chat/contact;
- maps;
- video embeds;
- consent;
- monitoring.

## Reglas
- diferir lo no esencial;
- cargar bajo interacción cuando sea posible;
- no insertar scripts desde CMS;
- revisar peso y requests;
- revisar privacidad;
- definir fallback.

---

# 10. MAPAS Y EMBEDS

La página Contacto no debe sacrificar velocidad por un mapa embebido pesado.

Preferencia:
1. dirección/contacto HTML;
2. CTA “Cómo llegar”;
3. mapa interactivo diferido o bajo interacción, si aporta valor.

YouTube/Instagram:
- poster primero;
- embed real bajo interacción cuando sea viable;
- no cargar múltiples iframes al inicio.

---

# 11. CACHING / RENDERING

## Principio
El contenido de marketing debe ser renderizable y servible aun cuando el CMS tenga una incidencia temporal.

Preferir:
- static generation / ISR donde corresponda;
- CDN;
- caché explícita;
- revalidación controlada.

## CMS
Una caída de Sanity no debe retirar la última versión buena ya desplegada.

No diseñar páginas críticas que requieran consulta CMS en vivo en cada request si no es necesario.

---

# 12. CMS FAILURE MODE

Si CMS falla:

```text
sitio publicado sigue disponible
+
último contenido aprobado sigue visible
+
WhatsApp/contacto sigue funcionando
```

No:
```text
CMS offline → home 500
```

Publicación:
- snapshot coherente;
- build/revalidation validada;
- rollback posible.

---

# 13. ACCESIBILIDAD — OBJETIVO

**WCAG 2.2 Level AA**

No reclamar públicamente “cumplimiento WCAG” sólo por usar una herramienta automática.

La liberación requiere:
- pruebas automáticas;
- teclado manual;
- lector de pantalla spot checks;
- revisión móvil;
- revisión de contraste;
- revisión con zoom/reflow.

---

# 14. CONTRASTE

Objetivos mínimos:

```yaml
normal_text: >= 4.5:1
large_text: >= 3:1
ui_components_and_graphics: >= 3:1
```

HIGHTECH no debe sacrificar legibilidad por usar grises demasiado claros sobre blanco.

El azul corporativo deberá probarse en cada combinación real:
- azul/fondo blanco;
- blanco/azul;
- texto sobre fotografía;
- estados hover/focus/disabled.

---

# 15. FOCUS / KEYBOARD

Todo control interactivo debe funcionar con teclado.

Obligatorio:
- focus visible;
- orden lógico;
- navegación de menú;
- cierre de modal con Escape cuando aplique;
- foco administrado en modal;
- no keyboard traps;
- skip link al contenido principal.

Sticky header y sticky WhatsApp no deben ocultar el elemento enfocado.

---

# 16. TARGET SIZE

WCAG 2.2 AA incorpora mínimo de objetivo táctil de 24×24 CSS px con excepciones de espaciado.

Estándar interno HIGHTECH:

```yaml
minimum_required: 24x24 CSS px
preferred_primary_controls: >= 44x44 CSS px
```

Aplicar especialmente a:
- WhatsApp flotante;
- navegación;
- cerrar modal;
- comparador de tonos;
- tabs;
- flechas de galerías;
- filtros.

---

# 17. MOBILE STICKY WHATSAPP

Permitido porque es CTA principal, con reglas:

- no cubrir contenido crítico;
- no cubrir aviso de cookies;
- no cubrir botones de formulario;
- respetar safe areas;
- label accesible;
- foco visible;
- 44×44 px o mayor preferido;
- no animación perpetua;
- no vibración/flash;
- no abrir automáticamente.

---

# 18. REDUCED MOTION

Respetar:

```css
@media (prefers-reduced-motion: reduce)
```

Desactivar/reducir:
- parallax;
- transformaciones grandes;
- motion de scroll;
- loops decorativos;
- transiciones innecesarias.

La información nunca depende de una animación.

---

# 19. ESTRUCTURA SEMÁNTICA

Por página:

- un `<main>`;
- headings jerárquicos;
- landmarks útiles;
- navegación etiquetada;
- botones para acciones;
- enlaces para navegación;
- tablas técnicas con headers reales;
- listas cuando semánticamente corresponda.

No usar `<div onClick>` como botón.

---

# 20. TABLAS TÉCNICAS

Comparadores VLT/UV/IR/TSER deben:

- ser legibles con lector de pantalla;
- mantener headers;
- no depender sólo de color;
- reflow móvil;
- evitar scroll horizontal cuando exista una representación mejor;
- si hay scroll, indicarlo y hacerlo accesible.

No convertir tablas importantes en imágenes.

---

# 21. COLOR NO ES INFORMACIÓN

Ejemplo incorrecto:
- verde = recomendado;
- rojo = no recomendado;
sin texto.

Correcto:
- icono + palabra + color.

Aplica a:
- comparador;
- garantías;
- compatibilidad;
- estados de producto;
- formularios.

---

# 22. FORMULARIOS / COTIZADORES

Si se incorporan:

- label visible;
- autocomplete apropiado;
- instrucciones antes del error;
- errores textuales;
- resumen de errores cuando sea complejo;
- preservar datos tras error;
- no depender de placeholder;
- no bloquear pegado;
- no pedir datos innecesarios.

WhatsApp sigue siendo primario; formulario no justifica mala UX.

---

# 23. RE-FLOW / ZOOM

Probar al menos:
- 320 CSS px de ancho;
- zoom 200%;
- texto ampliado;
- orientación portrait/landscape.

No debe:
- perderse contenido;
- superponerse texto;
- esconder CTA;
- exigir scroll horizontal salvo contenido intrínsecamente bidimensional.

---

# 24. NAVIGATION

Desktop y móvil deben compartir arquitectura conceptual.

Móvil:
- no mega-menu absurdo;
- rutas principales fáciles;
- no más profundidad de la necesaria;
- menú usable con una mano.

Breadcrumbs:
- producto;
- guía;
- proyecto;
cuando ayuden orientación.

---

# 25. ERROR STATES

Diseñar:

- 404 real;
- 500;
- CMS unavailable;
- CTA WhatsApp fallido;
- mapa/tercero bloqueado;
- imagen faltante;
- proyecto retirado;
- documento legal no disponible;
- cotizador temporalmente deshabilitado.

## 404
No redirigir automáticamente a Home.

Debe ofrecer:
- búsqueda/navegación;
- categorías principales;
- contacto.

---

# 26. WHATSAPP FAILURE MODE

Si apertura profunda de WhatsApp falla:

Fallback visible:
- número;
- botón copiar número;
- enlace alternativo;
- teléfono;
- correo cuando aplique.

El CTA no debe quedar como icono muerto.

---

# 27. SECURITY BASELINE

Antes de producción:

- dependencias actualizadas;
- secret scanning;
- secrets fuera del repo;
- headers de seguridad;
- CSP compatible con scripts aprobados;
- HTTPS;
- HSTS cuando esté correctamente configurado;
- protección contra embedding indebido;
- content-type protections;
- referrer policy;
- permissions policy según funciones;
- rate limiting donde exista endpoint;
- validación server-side;
- sanitización de contenido enriquecido;
- allowlist de dominios de imagen.

No añadir headers “por checklist” sin probar integraciones.

---

# 28. WORDPRESS DURANTE LA TRANSICIÓN

Hasta apagar Web 1.0:

- WordPress/core/plugins actualizados;
- credenciales fuertes;
- 2FA donde sea posible;
- WAF/rate limiting;
- backups;
- revisar administradores;
- minimizar superficie innecesaria.

El volumen de probes observado no demuestra una intrusión, pero sí justifica reducir exposición.

---

# 29. STAGING

Staging debe estar:

```yaml
authenticated: true
indexable: false
analytics_production: false
real_customer_data: false
```

Capas:
- protección de deployment;
- `noindex`;
- robots como defensa adicional, no única.

No compartir un staging público indexable “sólo unos días”.

---

# 30. DOMAINS / DNS / EMAIL

Antes de migrar:

Inventariar:
- `polarizadoshightech.com`;
- `www`;
- `htpolarizados.com`;
- subdominios;
- MX;
- SPF;
- DKIM;
- DMARC;
- verificaciones Google/Meta;
- redirects existentes.

## Regla crítica
Migrar web **no debe romper correo**.

No cambiar nameservers/DNS sin exportar y revisar previamente todos los registros.

---

# 31. CANONICAL HOST

Definir una sola vez:

```yaml
scheme: https
host: polarizadoshightech.com
www: 301_to_canonical
http: 301_to_https
```

Política trailing slash debe ser consistente con framework y redirect registry.

No crear cadenas:
`http → www → non-www → /`.

Objetivo:
un salto cuando sea técnicamente posible.

---

# 32. REDIRECT TEST SUITE

Archivo de redirects versionado en repo.

Test automático:

```yaml
legacy_url:
expected_status:
expected_destination:
final_status:
canonical:
```

Comprobar:
- 301 previsto;
- destino 200;
- sin cadena;
- sin loop;
- no soft 404;
- query strings apropiadas;
- URLs basura no van a Home.

---

# 33. SITEMAP / ROBOTS

Production:
- sitemap sólo URLs canónicas indexables;
- legal/noindex fuera si corresponde;
- LP noindex fuera del sitemap;
- staging bloqueado;
- robots no contradice canonical/indexability.

Validar antes y después de deploy.

---

# 34. STRUCTURED DATA QA

Schema se genera desde System of Truth.

Antes de liberar:
- JSON válido;
- URLs canónicas;
- NAP idéntico;
- no reviews inventadas;
- no rating histórico;
- no garantía falsa;
- no precios internos;
- no producto inactivo.

Schema nunca puede contener una verdad distinta al HTML.

---

# 35. BUILD GATES

CI debe fallar si ocurre cualquiera de estos casos críticos:

```text
typecheck falla
lint crítico falla
tests fallan
broken internal link
redirect loop
public page usa BLOCKED claim
public warranty no APPROVED
canonical ausente/duplicado
staging config en production
secret detectado
```

Warnings:
- asset grande;
- bundle crece;
- page budget excedido;
- alt faltante;
- schema inválido.

Los warnings repetidos deben convertirse en gates cuando el sistema madure.

---

# 36. ACCESSIBILITY CI

Automatizar:
- axe u otra herramienta equivalente;
- HTML/ARIA checks;
- contraste donde pueda detectarse;
- landmarks;
- labels.

Pero **automatización no sustituye prueba manual**.

Manual antes de launch:
- teclado;
- lector de pantalla;
- zoom;
- reduced motion;
- móvil táctil;
- errores/formularios;
- comparador.

---

# 37. PERFORMANCE CI

Para templates críticos:

- Home;
- Residencial;
- Comercial;
- Automotriz;
- Nanocerámica;
- proyecto;
- guía;
- contacto.

Ejecutar Lighthouse CI o equivalente con budgets.

No bloquear por fluctuaciones mínimas de score; bloquear por:
- regresiones reproducibles;
- presupuesto excedido;
- errores críticos;
- recursos inesperados.

---

# 38. REAL DEVICE QA

Mínimo:

```text
Android Chrome — gama media
iPhone Safari
Windows Chrome/Edge
macOS Safari
```

Pruebas reales:
- menú;
- comparador;
- WhatsApp;
- teléfono;
- mapas;
- consent;
- imágenes;
- legal;
- formularios si existen.

Emulación no sustituye móvil real.

---

# 39. PRE-LAUNCH SNAPSHOT

Antes del corte:

Guardar:
- crawl Web 1.0;
- titles/metas;
- canonicals;
- status codes;
- sitemap;
- redirects;
- páginas indexadas conocidas;
- GSC export;
- top URLs;
- analytics baseline;
- DNS;
- screenshots de páginas clave.

Sirve para detectar regresiones y recuperar información sin reactivar copy viejo.

---

# 40. DEPLOY STRATEGY

## Recomendado
1. build production candidate;
2. preview protegido;
3. smoke test;
4. aprobación;
5. deploy;
6. smoke production;
7. activar/verificar monitorización;
8. GSC/sitemap;
9. observar errores/404/CWV.

No cambiar simultáneamente:
- web;
- dominio;
- correo;
- tracking;
- CRM;
- identidad legal;
si puede evitarse.

Reducir variables por corte.

---

# 41. ROLLBACK

Debe existir un **último deployment bueno conocido**.

Trigger de rollback inmediato:
- home 5xx;
- páginas principales caídas;
- WhatsApp/contacto roto;
- canonical/robots accidentalmente bloqueando sitio;
- pérdida masiva de redirects;
- contenido jurídico equivocado;
- fuga de secreto;
- fallo grave de checkout/cotización si se añade.

Después:
- restaurar primero;
- investigar después.

No “arreglar en vivo” durante una caída si rollback es más seguro.

---

# 42. SMOKE TEST — PRODUCCIÓN

Tras deploy comprobar:

```text
/
residencial
comercial
automotriz
servicios
peliculas
nanoceramica
garantias
contacto
robots.txt
sitemap.xml
legacy redirects principales
404
```

En cada crítica:
- 200;
- title;
- canonical;
- H1;
- CTA;
- assets;
- analytics;
- no console fatal;
- mobile sanity.

---

# 43. MONITORING

## Técnico
- uptime;
- 5xx;
- JS errors;
- broken routes;
- performance/RUM;
- deployment health.

## SEO
- GSC coverage;
- sitemap;
- indexing;
- 404;
- redirects;
- organic landing pages.

## Negocio
- WhatsApp starts;
- qualified leads;
- quote/sales sync.

La web puede estar “arriba” y aun así estar comercialmente rota.

---

# 44. ALERTAS

Alerta inmediata:
- uptime crítico;
- 5xx spike;
- WhatsApp CTA failure;
- robots noindex global;
- sitemap failure;
- cert/domain issue.

Alerta diaria:
- 404 relevantes;
- analytics suddenly zero;
- lead_ref failure;
- CMS publish failure.

Revisión semanal durante primer mes:
- GSC;
- CWV;
- redirects;
- leads;
- bugs.

---

# 45. POST-LAUNCH WINDOWS

## Primeras 2 horas
Smoke + logs + contacto.

## 24 horas
- errores;
- analytics;
- WhatsApp;
- sitemap;
- GSC submission.

## 7 días
- crawling/indexation;
- 404;
- redirects;
- top landing behavior;
- mobile RUM inicial.

## 30 días
- CWV de campo inicial cuando haya volumen;
- SEO;
- conversion;
- content gaps.

## 90 días
- revisión estratégica;
- pages/queries;
- qualified lead rate;
- revenue attribution;
- prioridades de contenido.

---

# 46. BACKUP / EXPORT

Antes de launch:
- repo;
- CMS dataset/export;
- redirects;
- media manifest;
- legal versions;
- System of Truth;
- DNS export;
- Web 1.0 archive.

Repetir CMS export con periodicidad definida después.

No asumir que “está en SaaS” equivale a estrategia de backup.

---

# 47. CONTENT STALENESS

Cada entidad crítica debe incluir:

```yaml
last_verified_at:
review_due:
owner:
```

Especialmente:
- legalidad;
- horarios;
- precios;
- especificaciones;
- garantías;
- NAP;
- productos activos.

Contenido vencido:
- genera warning;
- puede bloquear publicación si es crítico.

---

# 48. EMERGENCY KILL SWITCH

Debe ser posible despublicar rápidamente:

- un claim;
- un producto;
- una garantía;
- un proyecto/foto;
- una landing.

Sin borrar su histórico ni romper URLs innecesariamente.

Para producto discontinuado:
- no eliminar automáticamente;
- evaluar mantener información histórica, reemplazo o 301 según intención/backlinks.

---

# 49. RELEASE CHECKLIST FINAL

## Truth
- [ ] System of Truth vigente
- [ ] claims aprobados
- [ ] garantías liberadas
- [ ] NAP aprobado
- [ ] legal vigente

## SEO
- [ ] canonicals
- [ ] redirects
- [ ] sitemap
- [ ] robots
- [ ] metadata
- [ ] structured data
- [ ] GSC

## CRO
- [ ] CTAs
- [ ] WhatsApp context
- [ ] fallback
- [ ] lead_ref

## Performance
- [ ] budgets
- [ ] LCP asset
- [ ] JS
- [ ] fonts
- [ ] images
- [ ] third parties

## Accessibility
- [ ] automated
- [ ] keyboard
- [ ] contrast
- [ ] zoom/reflow
- [ ] screen reader spot check
- [ ] reduced motion
- [ ] touch targets

## Operations
- [ ] staging protected
- [ ] production smoke
- [ ] monitoring
- [ ] rollback
- [ ] backups
- [ ] owners
- [ ] incident contacts

**Si un gate crítico falla, no se lanza por calendario.**

---

# 50. REGLA FINAL

La versión “premium” de HIGHTECH no es la que tiene más efectos.

Es la que:

- carga rápido;
- se entiende rápido;
- no se mueve mientras lees;
- responde rápido al tocarla;
- funciona para más personas;
- sigue vendiendo cuando un tercero falla;
- puede revertirse si algo sale mal;
- y nunca sacrifica verdad o funcionalidad por decoración.
