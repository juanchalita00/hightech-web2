# HIGHTECH Web 2.0 — Assets & Evidence Matrix v0.1

**Fecha:** 27 de septiembre de 2026  
**Fuente maestra:** `HIGHTECH_Web2_System_of_Truth_v0.14.md`  
**Objeto:** inventariar activos confirmados, separar diseño de evidencia y definir qué falta para sostener cada página de Web 2.0.

> Esta v0.1 es una **matriz de activos confirmados**, no una afirmación de que toda la fototeca histórica haya sido clasificada. Los archivos sin contexto verificable permanecen fuera del registro público hasta ser etiquetados.

---

# 1. PRINCIPIO CENTRAL

Un activo puede ser visualmente excelente y no probar nada.

Web 2.0 separa:

```text
ASSET
├── valor visual
├── valor probatorio
├── contexto verificable
└── permiso de publicación
```

Sólo cuando las cuatro capas necesarias están resueltas se utiliza como evidencia pública.

---

# 2. ESTADOS

```yaml
READY_TECHNICAL_EVIDENCE:
  meaning: "fuente primaria o suficientemente directa para una especificación concreta"

READY_BRAND_ASSET:
  meaning: "activo de marca utilizable, sujeto a optimización/formato"

VISUAL_ONLY:
  meaning: "sirve para ilustrar, no demuestra un resultado"

PROJECT_CANDIDATE:
  meaning: "parece ser evidencia real de trabajo, pero falta contexto o permiso"

INTERNAL_EVIDENCE:
  meaning: "útil para auditoría/operación, no para publicación"

PERMISSION_REQUIRED:
  meaning: "el contenido puede ser útil, pero el derecho/autorización de publicación no está documentado"

METADATA_REQUIRED:
  meaning: "falta identificar producto, objetivo, fecha, condiciones o resultado"

BLOCKED:
  meaning: "no debe publicarse todavía"

HISTORICAL_ONLY:
  meaning: "se conserva como antecedente, no como activo vigente"

DECORATIVE_ONLY:
  meaning: "puede apoyar dirección visual; nunca debe presentarse como proyecto real"

SUPERSEDED:
  meaning: "sustituido por fuente posterior"
```

---

# 3. JERARQUÍA PROBATORIA

## Nivel A — Primario técnico / normativo
Ejemplos:
- ficha técnica de producto;
- medición con método documentado;
- norma oficial;
- póliza aprobada.

Puede sostener:
- especificaciones concretas;
- límites;
- cobertura aplicable.

## Nivel B — Evidencia first-party de proyecto
Ejemplos:
- fotografías originales HIGHTECH;
- antes/después auténtico;
- orden/cotización vinculada;
- producto exacto;
- condiciones;
- autorización.

Puede sostener:
- que HIGHTECH ejecutó un caso;
- apariencia del resultado;
- solución seleccionada.

No convierte una experiencia individual en promesa universal.

## Nivel C — Evidencia operativa
Ejemplos:
- chats;
- cotizaciones;
- órdenes;
- logs;
- Search Console;
- analytics.

Sirve para:
- auditoría;
- proceso;
- decisiones de producto/UX.

Normalmente no se publica al cliente.

## Nivel D — Ilustración / diseño
Ejemplos:
- render IA;
- mockup;
- composición publicitaria;
- mascot/arte.

Sirve para:
- dirección creativa;
- ambientación.

No sirve como evidencia de instalación o desempeño.

---

# 4. REGISTRO DE ACTIVOS CONFIRMADOS

| Asset ID | Archivo / conjunto | Tipo | Valor probatorio | Permiso público | Estado | Uso recomendado |
|---|---|---|---|---|---|---|
| BRAND-001 | `hightech-curvas-02 (1).png` | Logo raster | Marca | Propio, por confirmar master | `READY_BRAND_ASSET` | Header/footer/social; optimizar y generar variantes |
| BRAND-002 | `hightech-L2-02.png` | Variante logo fondo oscuro | Marca | Propio | `READY_BRAND_ASSET` | Fondos oscuros; revisar archivo final |
| TECH-NANO-75 | `1000281456.jpg` — NANO-70 | Ficha técnica | A | Reproducción pública de la hoja: no confirmada | `READY_TECHNICAL_EVIDENCE` | IR75: VLT/UV/IR@950nm/TSER |
| TECH-NANO-50 | `1000281458.jpg` — NANO-50 | Ficha técnica | A | Igual | `READY_TECHNICAL_EVIDENCE` | IR50 |
| TECH-NANO-35 | `1000281460.jpg` — NANO-35 | Ficha técnica | A | Igual | `READY_TECHNICAL_EVIDENCE` | IR35 |
| TECH-NANO-15 | `1000281462.jpg` — NANO-15 | Ficha técnica | A | Igual | `READY_TECHNICAL_EVIDENCE` | IR15 |
| TECH-NANO-03 | `1000281464.jpg` — NANO-03 | Ficha técnica | A | Igual | `READY_TECHNICAL_EVIDENCE` | IR5 |
| TECH-NANOP70 | `1000281454.jpg` — NANO+70 | Ficha técnica | A pero no mapeada | Igual | `HISTORICAL_ONLY` | No renderizar en catálogo activo |
| PROJ-COM-001 | `1000015932.jpg` | Foto real de cristalería comercial | B potencial | Desconocido | `PROJECT_CANDIDATE` | Caso comercial, interior / comparación visual |
| PROJ-COM-002 | `1000015933.jpg` | Foto real de cristalería comercial | B potencial | Desconocido | `PROJECT_CANDIDATE` | Caso comercial, interior / claridad |
| PROJ-COM-003 | `1000015934.jpg` | Foto real de fachada acristalada | B potencial | Desconocido | `PROJECT_CANDIDATE` | Caso comercial, exterior |
| PROJ-COM-004 | `1000015935.jpg` | Foto real de fachada acristalada | B potencial | Desconocido | `PROJECT_CANDIDATE` | Caso comercial, exterior |
| DESIGN-HOME-001 | mockup homepage generado | Mockup | D | N/A | `DECORATIVE_ONLY` | Dirección UI; no tratar como fotografía de proyecto |
| DESIGN-AUTO-001 | `Privacidad y confort automotriz premium.png` | Arte/promocional | D | N/A | `DECORATIVE_ONLY` | Referencia visual de catálogo; no caso real |
| DESIGN-ARCH-001 | `Sala minimalista frente al lago al atardecer.png` | Imagen generada | D | N/A | `DECORATIVE_ONLY` | Hero ilustrativo si se decide; nunca “proyecto HIGHTECH” |
| INT-GSC-001 | screenshots Search Console 27-sep | Evidencia digital interna | C | No aplica | `INTERNAL_EVIDENCE` | SEO / auditoría |
| INT-LOG-001 | logs `.gz` del dominio | Evidencia digital interna | C | No aplica | `INTERNAL_EVIDENCE` | Tráfico, seguridad, migración |
| INT-WEBALIZER-001 | screenshots Webalizer | Evidencia digital interna | C | No aplica | `INTERNAL_EVIDENCE` | Baseline histórico; no usar como prueba comercial |
| INT-WA-001 | screenshots de chats comerciales | Evidencia operativa | C | Contienen datos de clientes | `INTERNAL_EVIDENCE` | Entrenamiento/proceso; jamás publicar sin redacción/autorización |
| INT-QUOTE-001 | capturas/documentos de cotización | Evidencia operativa | C | Pueden contener datos financieros/personales | `INTERNAL_EVIDENCE` | QA del flujo; nunca usar crudos en web |
| INT-ORDER-001 | dashboard/orden de instalación | Evidencia operativa | C | Puede contener PII | `INTERNAL_EVIDENCE` | Diseño de operación; no testimonial |
| MASTER-001 | documentos maestros/comerciales | Fuente interna | C | Interno | `INTERNAL_EVIDENCE` | Reglas; no “prueba” pública |

---

# 5. OBSERVACIONES SOBRE LAS FICHAS NANO

Las cinco fichas activas son actualmente el bloque probatorio más sólido de producto.

Mapeo:

| Web | Hoja | VLT | UV | Rechazo IR | TSER |
|---|---|---:|---:|---|---:|
| IR75 | NANO-70 | 75% | 99% | 95% a 950 nm | 59% |
| IR50 | NANO-50 | 48% | 99% | 95% a 950 nm | 72% |
| IR35 | NANO-35 | 35% | 99% | 95% a 950 nm | 79% |
| IR15 | NANO-15 | 15% | 99% | 95% a 950 nm | 87% |
| IR5 | NANO-03 | 3% | 99% | 95% a 950 nm | 96% |

## Uso público

La web puede usar los **datos aprobados**.

No necesita necesariamente mostrar el escaneo/foto de la ficha.

Antes de reproducir visualmente la ficha completa:
- confirmar derechos/permiso;
- confirmar que no contiene branding/información que no queramos publicar;
- conservar versión.

---

# 6. PROYECTO COMERCIAL CANDIDATO — SERIE 1000015932–5935

La serie muestra un inmueble/fachada comercial con cristales tratados de forma claramente visible.

### Valor actual
`HIGH_VISUAL_VALUE / INCOMPLETE_EVIDENCE`

### Lo que sí puede inferirse visualmente
- existe una instalación real sobre cristalería arquitectónica;
- hay vistas interiores y exteriores;
- la serie puede mostrar cambios de apariencia/transmisión entre paños.

### Lo que NO debe inferirse sólo por la foto
- producto;
- tono;
- TSER;
- temperatura;
- ahorro;
- cliente;
- fecha;
- objetivo;
- garantía;
- satisfacción;
- autorización.

### Para liberar como caso
Completar:

```yaml
project_id:
client_public_name:
client_name_allowed:
project_type:
location_general:
date:
problem:
product:
tone:
application_side:
glass_type_if_known:
before_assets:
after_assets:
observed_result:
measured_result_if_any:
permission_scope:
permission_expiry:
faces_or_plates:
publication_status:
```

---

# 7. ASSETS QUE NO SON EVIDENCIA

## Imágenes generadas / renders
Pueden usarse como:
- hero;
- ambientación;
- ilustración conceptual.

Si son hiperrealistas:
- no presentarlas bajo “proyectos”;
- no etiquetarlas como “instalación realizada”;
- no usarlas como antes/después;
- no derivar claims de desempeño.

## Mockups
Sirven para diseño, no para confianza comercial.

## Arte automotriz
Puede funcionar en catálogo/landing, pero no demuestra que ese vehículo haya sido atendido por HIGHTECH.

---

# 8. ACTIVOS SENSIBLES / INTERNAL ONLY

## Chats
Los chats pueden contener:
- nombres;
- teléfonos;
- colonia;
- fotografías de casas;
- conversaciones.

No publicar screenshots crudos.

## Cotizaciones/órdenes
Pueden contener:
- cliente;
- dirección;
- cuentas;
- RFC;
- montos;
- teléfonos;
- datos fiscales.

No reutilizar como “ejemplo” público sin una versión ficticia/redactada creada específicamente.

## Logs / analytics
No son material de marketing.

---

# 9. REVIEWS

Estado actual del registro:

```yaml
verified_review_feed: NOT_MAPPED
review_source_snapshot: NOT_MAPPED
permission_for_marketing_quotes: NOT_MAPPED
hardcoded_rating_allowed: false
```

## Gate

No hardcodear:
- estrellas;
- número de reseñas;
- frases de clientes;

hasta capturar fuente vigente y política de uso.

La sección puede diseñarse en staging y permanecer oculta si falta evidencia.

---

# 10. VIDEOS

Estado:

`NOT_INVENTORIED`

Antes de usar:
- identificar si es instalación real;
- cliente/lugar;
- placas/rostros;
- música/licencias;
- permiso;
- producto;
- contexto.

No incrustar automáticamente el feed completo de Instagram.

---

# 11. LOGO / BRAND ASSET GAP

Hay variantes raster confirmadas.

Todavía conviene obtener/confirmar:

```text
master vector SVG/PDF/AI
logo horizontal claro
logo horizontal oscuro
isotipo
monocromático
favicon/app icon
safe-area / minimum-size rules
color values
```

No compartir archivos de fuentes tipográficas como parte del handoff.

---

# 12. PAGE COVERAGE MATRIX

| Página | Técnica | Foto real | Caso documentado | Reviews | Permiso | Estado evidencia |
|---|---|---|---|---|---|---|
| Home | Fuerte nano | Parcial | Parcial | Falta | Falta revisar | `PARTIAL` |
| Residencial | Fuerte nano | No mapeada suficientemente | Falta | Falta | Falta | `GAP` |
| Comercial | Fuerte nano | Sí, serie candidata | Falta metadata | Falta | Falta | `PROMISING_PARTIAL` |
| Automotriz | Fuerte nano | No confirmada en matriz | Falta | Falta | Falta | `GAP` |
| Nanocerámica | Fuerte | No imprescindible | N/A | N/A | N/A | `READY_TECHNICAL` |
| IR75 | Fuerte | Falta visual real específica | Falta | N/A | Falta | `INDEX_GATE_AT_RISK` |
| IR50 | Fuerte | Falta visual real específica | Falta | N/A | Falta | `INDEX_GATE_AT_RISK` |
| IR35 | Fuerte | Falta visual real específica | Falta | N/A | Falta | `INDEX_GATE_AT_RISK` |
| IR15 | Fuerte | Falta visual real específica | Falta | N/A | Falta | `INDEX_GATE_AT_RISK` |
| IR5 | Fuerte | Falta visual real específica | Falta | N/A | Falta | `INDEX_GATE_AT_RISK` |
| Plata Reflecta | Débil/incompleta | No mapeada | No | N/A | Falta | `BLOCKED_FOR_STRONG_CLAIMS` |
| Seguridad | Parcial/histórica | No mapeada | No | N/A | Falta | `BLOCKED_FOR_STRONG_CLAIMS` |
| Privacidad | Conceptual | No mapeada | No | N/A | Falta | `GAP` |
| Proyectos | N/A | Parcial | No completados | N/A | Falta | `CONTENT_BLOCKED` |
| Nosotros | N/A | Marca sí | N/A | N/A | N/A | `PARTIAL` |
| Garantías | Dependiente de póliza | N/A | N/A | N/A | N/A | `LEGAL_BLOCKED` |

---

# 13. CONSECUENCIA PARA LAS PÁGINAS IR

El Page Brief System dejó:

`INDEX_IF_COMPLETE`

La situación actual confirma que el gate tiene sentido.

## Técnicamente
Las cinco páginas tienen material suficiente para una tabla/especificaciones.

## Editorialmente
Todavía falta, para justificar cinco URLs independientes:
- fotografía/apariencia real;
- comparación visual;
- contexto de uso;
- caso o evidencia diferencial;
- preguntas específicas por tono.

### Regla
Hasta que cada ficha tenga valor propio:

- se diseña el comparador;
- el hub Nanocerámica puede indexar;
- las tone pages pueden existir en staging/noindex;
- no se fuerza su indexación por SEO.

---

# 14. PROJECT CASE STANDARD

Un caso publicable tendrá como mínimo:

```yaml
project_id:
title:
type:
date_approx:
location_precision: city_or_general
problem:
product:
tone:
application:
glass_context:
why_this_solution:
assets:
  - asset_id
before_after_authentic: true_or_false
measured_data:
  exists:
  method:
  conditions:
observed_result:
limitations:
permission:
  technical_photo:
  marketing_publication:
  client_name:
  location:
  faces:
  vehicle_plate:
approved_by:
publication_status:
```

---

# 15. PERMISSION RULE

La posesión de una foto no equivale a autorización de marketing.

`photo_in_library = true`
no implica
`publication_allowed = true`

Una foto puede haber sido obtenida para:
- cotización;
- ejecución;
- garantía;
- evidencia técnica.

Eso no convierte automáticamente su finalidad en publicidad.

---

# 16. EVIDENCE REGISTRY — CMS FIELDS

```yaml
evidence_id:
title:
type:
source:
date:
project_id:
product_ids:
claim_ids:
original_asset:
derivatives:
authenticity:
before_after:
measurement_method:
conditions:
limitations:
contains_person:
contains_plate:
contains_private_address:
client_permission:
permission_scope:
permission_date:
permission_expiry:
publication_allowed:
review_due:
owner:
```

---

# 17. PHOTO DERIVATIVES

Nunca editar el original destructivamente.

```text
ORIGINAL
├── web hero crop
├── card crop
├── mobile crop
├── thumbnail
└── social derivative
```

Guardar:
- original;
- hash/identidad;
- metadata;
- versión editada.

No “mejorar” con IA una foto probatoria de forma que cambie el resultado del cristal.

Ajustes permitidos para evidencia:
- crop;
- exposición moderada;
- balance;
- redacción de PII;
- corrección óptica que no altere desempeño.

---

# 18. BEFORE / AFTER

Para que una comparación sea sólida:

- mismo proyecto;
- identificar cuál es antes/después;
- evitar cambios engañosos de exposición;
- no usar una foto soleada vs otra nublada como “prueba térmica”;
- explicar si cambió la cámara/ángulo;
- no convertir color grading en desempeño.

Para comparación visual de tonos:
idealmente utilizar un setup controlado.

---

# 19. MEDICIONES

Si se incorporan:
- temperatura;
- cámara térmica;
- medidor de transmisión;
- UV/IR;
- lux;

registrar:

```yaml
instrument:
model:
calibration_if_known:
date:
glass:
film:
measurement_position:
solar_conditions:
ambient_conditions:
before_after_timing:
limitations:
```

Una medición de proyecto demuestra ese caso bajo esas condiciones.

No se transforma en “tu casa bajará X grados”.

---

# 20. PLAN DE CAPTURA — PRIORIDAD

## P0 — antes de cerrar diseño de contenido
- confirmar master de logo;
- etiquetar serie comercial 1000015932–5935;
- localizar 2–3 casos residenciales originales;
- localizar 2 casos automotrices reales;
- verificar permisos.

## P1 — antes de lanzar proyectos
- tener 6–8 casos sólidos mínimos;
- balance residencial/comercial/auto;
- mínimo un caso claro de nanocerámica de alta claridad;
- mínimo un caso de privacidad/reflectiva si esa línea lanza;
- caso de seguridad sólo si contexto técnico está suficientemente documentado.

## P2 — crecimiento
Objetivo editorial:
8–12 casos diversos y bien documentados, no 100 fotos sin contexto.

---

# 21. SHOT LIST ESTÁNDAR PARA NUEVOS PROYECTOS

Por cada proyecto:

### Contexto
- fachada/espacio completo;
- cristal antes;
- incidencia de luz.

### Instalación
- preparación;
- aplicación;
- detalle de borde;
- equipo trabajando sin revelar PII innecesaria.

### Resultado
- interior;
- exterior;
- vista a través;
- close-up;
- comparación real si existe.

### Técnica
- producto/rollo/lote cuando convenga internamente;
- tipo de vidrio;
- medición si se realiza.

### Autorización
- permiso registrado.

---

# 22. RED-TEAM DE EVIDENCIA

## Riesgo 1
Usar una imagen generada como si fuera trabajo real.

**Control:** `DECORATIVE_ONLY`.

## Riesgo 2
Publicar proyecto real sin saber qué película se instaló.

**Control:** `METADATA_REQUIRED`.

## Riesgo 3
Publicar foto de vivienda/vehículo sin permiso.

**Control:** `PERMISSION_REQUIRED`.

## Riesgo 4
Usar un antes/después con exposición diferente para exagerar.

**Control:** autenticidad + notas de captura.

## Riesgo 5
Convertir una medición puntual en claim universal.

**Control:** `conditions + limitations`.

## Riesgo 6
Revivir producto histórico porque aparece en una foto vieja.

**Control:** producto ligado al catálogo vigente; histórico no gobierna catálogo.

## Riesgo 7
Usar logos de clientes para generar autoridad sin autorización.

**Control:** permiso de marca separado.

---

# 23. GATES DE PUBLICACIÓN

Un proyecto no se publica si falta cualquiera de:

```text
producto/contexto suficiente
+
assets auténticos
+
permiso aplicable
+
revisión PII
+
claims aprobados
```

Una review no se publica si no puede vincularse a una fuente real verificable.

Una ficha técnica puede sostener datos aun cuando la imagen de la ficha no se publique.

---

# 24. CONCLUSIÓN OPERATIVA

## Lo que ya está fuerte
- gama nano técnica;
- identidad básica de marca;
- arquitectura de evidencia;
- material interno para SEO/operación;
- al menos una serie comercial visual prometedora.

## Lo que hoy bloquea más
- permisos de publicación;
- metadata por proyecto;
- casos residenciales mapeados;
- casos automotrices reales;
- review feed verificado;
- evidencia primaria de Reflecta y Seguridad;
- fotografía diferencial para cinco tone pages.

## Decisión de lanzamiento
Podemos avanzar diseño y desarrollo.

No debemos llenar los huecos con:
- stock disfrazado;
- IA disfrazada;
- testimonios inventados;
- datos de proyectos no identificados.

Cuando falte prueba, el componente debe quedar oculto o usar contenido explicativo, no fabricar evidencia.
