# HIGHTECH Web 2.0 — Launch Readiness Audit v0.1

**Fecha:** 27 de septiembre de 2026  
**Fuente maestra auditada:** `HIGHTECH_Web2_System_of_Truth_v0.15.md`  
**Objeto:** determinar si Web 2.0 está lista para entrar a construcción y qué impide todavía un lanzamiento público.

---

# 1. VEREDICTO OPERATIVO

```yaml
start_design_system: GO
start_codebase: GO
start_cms_schema: GO
start_staging: GO
start_page_build: GO_WITH_GATES

public_production_launch: NO_GO_YET
```

## Interpretación

HIGHTECH ya tiene suficiente definición para comenzar **arquitectura, componentes, CMS, staging y construcción de páginas**.

Esperar a que absolutamente todo esté cerrado antes de escribir código ya no reduce riesgo: empieza a retrasar trabajo que puede avanzar de forma segura detrás de gates.

Pero **no está autorizada todavía la publicación B2C definitiva** porque permanecen bloqueos jurídicos, NAP, garantías, privacidad y pruebas de release.

---

# 2. CUATRO ESTADOS DEL AUDIT

## `CLOSED`
La decisión ya existe y puede gobernar implementación.

## `PARALLEL`
No impide construir; debe cerrarse antes de liberar la función/página afectada.

## `PRODUCTION_BLOCKER`
No impide staging, pero sí impide lanzamiento público total o de una función concreta.

## `FERNANDO_DECISION`
Requiere decisión empresarial expresa; Codex/CMS no debe inventarla.

---

# 3. RESUMEN EJECUTIVO

| Dominio | Estado | ¿Bloquea código? | ¿Bloquea producción? |
|---|---|---:|---:|
| Posicionamiento / estrategia | `CLOSED` | No | No |
| Catálogo nano | `CLOSED` | No | No |
| VLT / UV / IR@950 / TSER | `CLOSED_WITH_CONTEXT` | No | No |
| Claims firewall | `CLOSED` | No | No |
| Arquitectura web | `CLOSED_ENOUGH_TO_BUILD` | No | No |
| Page briefs | `CLOSED_ENOUGH_TO_BUILD` | No | No |
| Pricing visibility | `CLOSED_FOR_LAUNCH` | No | No |
| Legalidad auto 75/35/20 | `CLOSED_WITH_CAVEAT` | No | No |
| IR75 parabrisas: conclusión jurídica | `UNRESOLVED` | No | Sólo claim legal específico |
| NAP | `PRODUCTION_BLOCKER` | No | Sí |
| T&C | `PRODUCTION_BLOCKER` | No | Sí |
| Privacidad | `PRODUCTION_BLOCKER` | No | Sí |
| Garantías | `PRODUCTION_BLOCKER` | No | Sí para claims/página de garantía |
| RPCA/NOM | `LEGAL_BLOCKER` | No | Sí según dictamen final |
| Evidence/Projects | `PARALLEL_ROUTE_BLOCKER` | No | Sólo rutas/componentes de evidencia |
| Reviews | `PARALLEL_ROUTE_BLOCKER` | No | Sólo módulo de reviews |
| Reflecta/Security source depth | `PARALLEL_ROUTE_BLOCKER` | No | Claims fuertes de esas líneas |
| Analytics attribution design | `CLOSED_DESIGN / IMPLEMENTATION_PENDING` | No | Sí para medición completa, no para HTML |
| Consent / third parties | `PRODUCTION_BLOCKER_IF_TRACKERS` | No | Sí si se activan trackers |
| Redirects / canonical / sitemap | `IMPLEMENTATION_PENDING` | No | Sí |
| Performance / accessibility | `SPEC_CLOSED / QA_PENDING` | No | Sí |
| DNS / email migration | `PRE_LAUNCH_BLOCKER` | No | Sí |
| Rollback / monitoring / backups | `PRE_LAUNCH_BLOCKER` | No | Sí |

---

# 4. CERRADO — YA NO DEBE REABRIRSE SIN NUEVA EVIDENCIA

## 4.1 Marca y enfoque
- Marca: HIGHTECH Polarizados.
- ZENIT no se usa.
- Residencial/comercial son prioridad.
- Automotriz es línea complementaria.
- La web diagnostica antes de vender producto.

## 4.2 Catálogo nano
Activos:
- IR75
- IR50
- IR35
- IR15
- IR5

No reactivar:
- IR20
- IR3
- IR70
- NANO+70

salvo nueva decisión/fuente.

## 4.3 Métricas técnicas nano

| Producto | VLT | UV | Rechazo IR | TSER |
|---|---:|---:|---|---:|
| IR75 | 75% | 99% | 95% a 950 nm | 59% |
| IR50 | 48% | 99% | 95% a 950 nm | 72% |
| IR35 | 35% | 99% | 95% a 950 nm | 79% |
| IR15 | 15% | 99% | 95% a 950 nm | 87% |
| IR5 | 3% | 99% | 95% a 950 nm | 96% |

Contexto obligatorio:
- 95% a 950 nm no significa 95% menos calor;
- TSER no es promesa de grados de temperatura;
- el sistema vidrio+película puede comportarse distinto a la hoja de referencia.

## 4.4 UV
99% es canónico para la gama activa.

99.9% queda superseded.

## 4.5 Pricing visibility de lanzamiento
- Residencial: cotización personalizada.
- Comercial: cotización por proyecto.
- Automotriz: cotización por vehículo.
- PDLC: sin precio público.
- Reflecta/Seguridad/Especiales: cotización.

No publicar la tarifa interna.

## 4.6 Claims heredados
Web 1.0 no gobierna:
- técnica;
- garantía;
- precios;
- NAP;
- catálogo;
- legal.

## 4.7 75/35/20 en Jalisco
Se considera:

`AUTHORITY_ORAL_GUIDANCE / ACTIVE_OPERATIONAL_REFERENCE`

Puede explicarse públicamente con atribución y caveat.

No decir:
- que la Ley contiene esa tabla;
- que es 100% legal;
- que elimina riesgo de sanción.

---

# 5. CONTRADICCIÓN CORREGIDA — LEGALIDAD AUTOMOTRIZ

## Problema encontrado

La v0.15 contiene simultáneamente:
- `ACTIVE_OPERATIONAL_REFERENCE`;
- `PROVISIONAL_OPERATIONAL_GUIDANCE`;
- `BUSINESS_POLICY_PENDING`.

La fuente específica más reciente, `Legalidad Automotriz Jalisco v0.4`, ya adopta la referencia 75/35/20 como guía operativa activa y permite su publicación con atribución.

## Resolución para v0.16

```yaml
jalisco_75_35_20:
  operational_status: ACTIVE_OPERATIONAL_REFERENCE
  public_communication: APPROVED_WITH_ATTRIBUTION
  statutory_table: false
  no_penalty_guarantee: false

windshield_ir75:
  legal_status_claim: UNRESOLVED
  offer_as_clear_solar_control_option: true
  communication_must_include_context: true
```

Por tanto, **no queda pendiente una decisión empresarial general sobre si comunicar 75/35/20**.

Sí queda pendiente cualquier conclusión categórica:
- “IR75 es legal”;
- “IR75 es ilegal”;
- “no te pueden multar”.

---

# 6. NO SON BLOCKERS DE CONSTRUCCIÓN

## 6.1 Método exacto de ensayo TSER
Deseable para robustez técnica.

Estado:
`NON_BLOCKING_RESEARCH`

La web puede usar TSER como **valor de ficha**, con contexto.

## 6.2 Vidrio de referencia de la ficha
Mismo tratamiento.

`NON_BLOCKING_RESEARCH`

## 6.3 Precio automotriz “desde”
No es pendiente de lanzamiento.

Estado:
`POST_LAUNCH_CRO_CANDIDATE`

El lanzamiento ya está definido sin precio público.

## 6.4 Tone pages
No bloquean la arquitectura.

Construir:
- template;
- data model;
- comparador.

Publicación/indexación individual:
`INDEX_IF_COMPLETE`.

---

# 7. BLOQUEADORES REALES DE PRODUCCIÓN

## P0-LEGAL — Paquete jurídico final

Necesario:
- proveedor completo;
- RFC/domicilios;
- definición RPCA/NOM;
- T&C aprobados;
- cancelación aprobada;
- textos/versionado;
- dictamen final.

### Estado
`PRODUCTION_BLOCKER`

### Puede avanzar ya
- template legal;
- CMS schema;
- historial/versionado;
- página staging.

---

## P0-PRIVACY — Aviso de Privacidad

Falta:
- responsable;
- ARCO;
- inventario de datos;
- finalidades;
- encargados/plataformas;
- transferencias reales;
- conservación;
- autorización separada de fotografías.

### Estado
`PRODUCTION_BLOCKER`

### Regla
No activar GA4/Meta/otros trackers hasta que el third-party/consent gate correspondiente esté resuelto.

---

## P0-WARRANTY — Garantías publicables

El plazo “10 años” aparece documentado para nano, pero todavía no existe una póliza pública completa por producto/aplicación.

Falta resolver:
- SKU;
- obligado;
- material;
- instalación;
- inicio;
- exclusiones;
- remedios;
- retiro;
- reinstalación;
- acceso;
- cuidados;
- versión.

### Estado
`PRODUCTION_BLOCKER_FOR_WARRANTY_CLAIMS`

La web puede construir `/garantias/` en staging.

No puede renderizar una garantía no aprobada como promesa.

---

## P0-NAP — Identidad/local

Falta cerrar:
- Tomás Mann como dirección pública final;
- perfil principal GBP;
- Salvador Madariaga;
- nombre del GBP;
- horario;
- consistencia sitio/GBP/WhatsApp/Meta;
- schema.

### Estado
`PRODUCTION_BLOCKER`

---

## P0-RELEASE — infraestructura de lanzamiento

Todavía no existe porque aún no hemos construido:

- redirect test suite;
- sitemap final;
- robots;
- canonicals reales;
- schema real;
- staging protegido;
- smoke tests;
- performance QA;
- accessibility QA;
- backups/export;
- monitoring;
- rollback probado;
- DNS/email cutover audit.

### Estado
`EXPECTED_IMPLEMENTATION_BLOCKER`

No es falta de investigación; es trabajo de construcción/QA.

---

# 8. BLOCKERS POR RUTA — NO POR SITIO COMPLETO

## `/proyectos/`
Estado:
`CONTENT_BLOCKED`

Puede construirse template/hub.

No indexar casos hasta:
- metadata;
- producto;
- autenticidad;
- permiso.

## `/peliculas/plata-reflecta/`
Estado:
`LAUNCH_WITH_LIMITED_CLAIMS`

Puede explicarse:
- arquitectura;
- apariencia reflectiva;
- privacidad diurna;
- inversión nocturna.

No publicar todavía:
- TSER exacto;
- IR exacto;
- garantía universal;
- exterior universal.

## `/peliculas/seguridad/`
Estado:
`LAUNCH_WITH_LIMITED_CLAIMS`

Puede explicar:
- retención de fragmentos;
- lógica de sistema completo;
- evaluación por proyecto.

No publicar:
- certificaciones;
- resistencia cuantificada;
- anti-intrusión categórica;
- plazo universal.

## Tone pages IR
Estado:
`NOINDEX_UNTIL_COMPLETE`

No bloquean `/peliculas/nanoceramica/`.

## Reviews
Estado:
`HIDE_UNTIL_VERIFIED`

El sitio no necesita reviews para poder construirse o incluso lanzarse.

---

# 9. DECISIONES DE FERNANDO

Estas sí son empresariales y deben cerrarse explícitamente.

## FD-01 — NAP final
Confirmar que Tomás Mann 5348 es la dirección pública de lanzamiento.

También determinar qué representa Salvador Madariaga 5058.

## FD-02 — Garantía de instalación
La propuesta jurídica usa 1 año en varias líneas.

Decidir si HIGHTECH quiere adoptar ese plazo, modificarlo o manejarlo distinto por producto.

Después: abogado revisa redacción/compatibilidad.

## FD-03 — Remedios de garantía
Definir comercialmente quién absorbe:
- retiro;
- reinstalación;
- traslados;
- andamios/acceso;
cuando la reclamación resulte cubierta.

## FD-04 — Cancelación
Cerrar política comercial deseada por:
- automotriz;
- arquitectura;
- PDLC;
antes de validación jurídica final.

## FD-05 — Líneas de lanzamiento
Decidir si lanzamiento inicial incluye:
- PDLC;
- 3M bajo consulta;
o si se mantienen fuera del sitemap principal hasta fase 2.

PPF permanece fuera hasta decisión expresa.

## FD-06 — Evidencia pública
Elegir/autorizar primer lote de proyectos y mecanismo de consentimiento comercial.

## FD-07 — Ownership operativo
Asignar quién mantiene:
- analytics;
- estados de lead;
- CMS;
- garantías/claims;
- NAP;
- revisión de contenido.

Una persona puede cubrir varios roles al inicio.

---

# 10. DECISIONES DE ABOGADO / ESPECIALISTA

No convertir en decisión de Codex ni de diseño:

- NOM / RPCA;
- modelo contractual final;
- revocación/cancelación legal;
- artículo 83 LFPC aplicado;
- garantía/remedios;
- aviso de privacidad;
- conservación/transferencias;
- NOM-151/evidencia;
- transición PF → sociedad;
- dictamen final de liberación.

---

# 11. SEARCH CONSOLE — RECLASIFICACIÓN

La propiedad está configurada/identificada, pero el sistema todavía estaba procesando información y no existía sitemap de Web 2.0.

Por tanto:

```yaml
gsc_access: READY
gsc_historical_data: PARTIAL
new_sitemap: IMPLEMENTATION_PENDING
post_launch_validation: REQUIRED
```

Esto **no bloquea código**.

Sí forma parte del release checklist.

---

# 12. EVIDENCE — RECLASIFICACIÓN

No tener todavía 8–12 casos no debe impedir empezar.

## Core launch puede avanzar con:
- producto bien sustentado;
- copy honesto;
- contacto;
- proceso;
- técnica.

## Para lanzar `/proyectos/` como sección fuerte:
se requieren casos documentados.

### Decisión
`PROJECTS_ROUTE_CAN_LAG_CORE_SITE`

Mejor lanzar seis páginas sólidas que doce “casos” sin contexto.

---

# 13. ANALYTICS — ESTADO

Diseño de medición:
`READY`

Implementación:
`NOT_STARTED`

Antes de producción:
- event dictionary final;
- UTMs;
- `lead_ref`;
- handoff WA;
- first/conversion touch;
- no PII;
- third-party registry;
- consent;
- estados QUALIFIED/QUOTE_SENT/WON;
- dashboard mínimo.

## MVP permitido

El sitio puede construirse con una capa `track()` abstracta aunque los proveedores estén deshabilitados hasta aprobación de privacidad.

---

# 14. PERFORMANCE / ACCESSIBILITY — ESTADO

Especificación:
`READY`

Implementación:
`NOT_STARTED`

QA de producción:
`REQUIRED`

La existencia de budgets antes del código es ventaja, no blocker.

---

# 15. READINESS POR FASE

## Fase A — Architecture / Code Foundation
**GO**

Se puede iniciar:
- repo;
- Next.js;
- TypeScript;
- Tailwind;
- design tokens;
- layout;
- route skeleton;
- CMS schemas;
- truth adapters;
- claim gates;
- legal gates;
- analytics abstraction;
- image pipeline;
- staging.

## Fase B — Core Pages
**GO WITH CONTENT GATES**

Construir:
- Home;
- Residencial;
- Comercial;
- Automotriz;
- Servicios;
- Películas;
- Nanocerámica;
- Contacto shell;
- Nosotros;
- FAQ shell;
- Legal shells.

## Fase C — Evidence / Special Pages
**PARALLEL**

- Projects;
- tone pages;
- Reflecta;
- Seguridad;
- Privacidad;
- guides.

Liberar según evidencia.

## Fase D — Production Candidate
**NO-GO hasta P0 cerrados**

Necesita:
- legal;
- privacy;
- warranties;
- NAP;
- technical QA;
- redirect/migration;
- DNS/email;
- analytics/privacy configuration;
- release tests.

---

# 16. ORDEN DE TRABAJO DESDE AHORA

```text
TRACK 1 — BUILD
repo → design system → CMS → routes → core pages

TRACK 2 — LEGAL
T&C → privacy → warranties → approval/versioning

TRACK 3 — BUSINESS
NAP → warranty decisions → cancellation → launch-line scope

TRACK 4 — EVIDENCE
projects → permissions → reviews → product visuals

TRACK 5 — MIGRATION
redirect registry → DNS/MX → sitemap → GSC → cutover

TRACK 6 — QA
performance → accessibility → mobile → analytics → security → rollback
```

Los tracks avanzan en paralelo.

No volver a hacerlos lineales.

---

# 17. PRE-CODE GATE — RESULTADO

| Gate | Resultado |
|---|---|
| fuente maestra vigente | PASS |
| catálogo | PASS |
| especificaciones nano | PASS |
| claim boundaries | PASS |
| pricing visibility | PASS |
| page architecture | PASS |
| page briefs core | PASS |
| CTA strategy | PASS |
| analytics architecture | PASS |
| performance requirements | PASS |
| accessibility requirements | PASS |
| evidence rules | PASS |
| legal architecture | PASS |
| final legal text | NOT REQUIRED TO START CODE |
| final NAP | NOT REQUIRED TO START CODE |
| final warranties | NOT REQUIRED TO START CODE |

**PRE-CODE GATE: PASS**

---

# 18. PRODUCTION GATE — RESULTADO ACTUAL

```yaml
production_gate: FAIL_EXPECTED
reason: "critical pre-launch work intentionally remains open"
```

Fallos actuales:
- legal final;
- privacy;
- warranty publication;
- NAP;
- release implementation;
- migration implementation;
- QA.

Esto es normal antes de empezar el build.

---

# 19. DEFINITION OF DONE — WEB 2.0

Web 2.0 no queda “terminada” cuando se ve bien en Vercel.

Se considera lista cuando:

```text
truth passes
+
legal passes
+
NAP passes
+
content gates pass
+
redirects pass
+
mobile passes
+
performance passes
+
accessibility passes
+
analytics/privacy passes
+
rollback passes
+
production smoke passes
```

---

# 20. DECISIÓN FINAL DEL AUDIT

**Ya no recomiendo seguir aplazando el código para crear más documentos de planeación general.**

La investigación previa ya alcanzó el punto donde comenzar el build reduce incertidumbre, porque permitirá validar:
- arquitectura real;
- CMS;
- componentes;
- tamaños;
- rutas;
- mobile;
- performance;
- handoff a WhatsApp;
- migration tests.

Las decisiones abiertas deben correr **en paralelo**, no delante de todo el desarrollo.

## Estado formal

`APPROVED_TO_BEGIN_IMPLEMENTATION`

No equivale a:

`APPROVED_FOR_PUBLIC_PRODUCTION`

Son dos gates distintos.
