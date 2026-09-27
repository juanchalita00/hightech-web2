# HIGHTECH Web 2.0 — Page Brief System v0.1

**Fecha:** 27 de septiembre de 2026  
**Fuente maestra:** `HIGHTECH_Web2_System_of_Truth_v0.11.md`  
**Estado:** especificación de contenido, SEO, CRO y datos previa a diseño/código final.  
**Principio:** cada URL debe tener una función propia. Si dos páginas responden esencialmente la misma pregunta, se consolidan antes de producir contenido.

---

# 1. OBJETIVO DEL PAGE BRIEF SYSTEM

Evitar que Web 2.0 se convierta en:
- una colección de páginas redactadas de forma independiente;
- cinco páginas de producto casi idénticas;
- contenido SEO creado sólo por keywords;
- claims copiados del sitio viejo;
- CTAs genéricos que reinician la conversación en WhatsApp;
- páginas legales desconectadas de la contratación;
- proyectos que no demuestran nada.

Cada página indexable debe justificar su existencia mediante:
1. intención propia;
2. respuesta propia;
3. evidencia propia o relevante;
4. camino de conversión propio;
5. datos controlados por el System of Truth.

---

# 2. CAMPOS OBLIGATORIOS DE TODO BRIEF

```yaml
brief_id:
url:
page_type:
status:
indexability:
canonical:
primary_intent:
keyword_family:
target_user:
problem:
answer_first_5_seconds:
hero_direction:
core_questions:
proof_required:
data_dependencies:
claims_allowed:
claims_required_context:
claims_prohibited:
section_sequence:
internal_links_in:
internal_links_out:
primary_cta:
secondary_cta:
whatsapp_context:
analytics_events:
schema_candidate:
legal_dependencies:
publication_gate:
```

---

# 3. PAGE QUALITY GATE

Una página indexable sólo se libera cuando:

- responde una intención distinta;
- tiene contenido útil que no se consigue simplemente cambiando el nombre del producto;
- incluye evidencia o una explicación sustantiva;
- no duplica otra URL;
- sus claims están autorizados;
- tiene enlaces internos de entrada y salida;
- tiene CTA congruente con la intención;
- pasa revisión móvil/performance/accesibilidad.

**No existe mínimo de palabras. Existe mínimo de utilidad.**

---

# 4. TEMPLATE A — CONVERSION PAGE

Aplica a:
- Home
- Residencial
- Comercial
- Automotriz

Secuencia base:

```text
1. Relevancia inmediata
2. Problema / resultado
3. Opciones de solución
4. Cómo elegir
5. Evidencia
6. Especificaciones relevantes
7. Riesgo / limitaciones / garantía
8. Proceso
9. FAQ contextual
10. CTA
```

---

# 5. TEMPLATE B — PRODUCT / TECHNOLOGY PAGE

Aplica a:
- Nanocerámica
- IR75 / IR50 / IR35 / IR15 / IR5
- Plata Reflecta
- Seguridad
- Privacidad

Secuencia:

```text
1. Qué es
2. Para quién / para qué
3. Qué cambia visualmente
4. Datos técnicos disponibles
5. Aplicaciones
6. Límites
7. Comparación relevante
8. Evidencia/proyecto
9. Garantía aplicable
10. CTA
```

---

# 6. TEMPLATE C — GUIDE

Secuencia:

```text
1. Respuesta corta
2. Explicación
3. Variables que cambian la respuesta
4. Opciones
5. Errores comunes
6. Cómo decide HIGHTECH
7. Producto/servicio relacionado
8. Evidencia
9. CTA
```

Una guía no debe ser un comercial de 1,500 palabras disfrazado.

---

# 7. TEMPLATE D — PROJECT

Secuencia:

```text
1. Contexto
2. Problema
3. Condiciones del cristal/espacio
4. Solución elegida
5. Por qué
6. Proceso
7. Resultado demostrable
8. Limitaciones
9. Galería autorizada
10. Soluciones relacionadas
11. CTA
```

No inventar:
- grados;
- ahorro;
- ROI;
- satisfacción;
- resultados no medidos.

---

# 8. HOME `/`

```yaml
brief_id: PAGE-HOME-001
page_type: conversion
status: LAUNCH_CORE
indexability: index,follow
canonical: /
primary_intent: conocer HIGHTECH y encontrar la solución correcta
keyword_family:
  - polarizados Guadalajara
  - películas para cristales Guadalajara
  - control solar cristales Guadalajara
target_user: residencial, comercial y automotriz
```

## Answer first 5 seconds
HIGHTECH resuelve calor, UV, deslumbramiento, privacidad y necesidades de seguridad en cristales mediante soluciones seleccionadas según el caso.

## Hero direction
**Confort y protección sin renunciar a la luz.**

Submensaje:
soluciones profesionales para cristales residenciales, comerciales y automotrices.

## Secciones
1. Hero + CTA.
2. “¿Qué quieres resolver?”: calor / UV / deslumbramiento / privacidad / seguridad.
3. Residencial / Comercial / Automotriz.
4. Cómo recomendamos una película.
5. Tecnología HIGHTECH nanocerámica.
6. Evidencia: proyectos/reviews verificables.
7. Garantía/proceso.
8. FAQ breve.
9. CTA final.

## Prueba requerida
- proyectos reales;
- reviews verificables;
- especificaciones exactas cuando se muestren;
- ubicación/contacto sólo tras NAP gate.

## Claims prohibidos
- mejor opción;
- líder;
- 95% menos calor;
- ahorro fijo;
- cobertura nacional automática;
- garantía universal 10 años.

## CTA
**Cuéntanos qué quieres resolver**

## WhatsApp context
```yaml
page: home
problem: selected_problem
business_line: selected_or_unknown
```

## Analytics
- `solution_selected`
- `project_viewed`
- `whatsapp_started`
- `phone_clicked`

## Schema
- Organization
- WebSite
- LocalBusiness sólo tras NAP approval

---

# 9. SERVICIOS `/servicios/`

```yaml
brief_id: PAGE-SERVICES-001
page_type: solution_hub
status: LAUNCH_CORE
indexability: index,follow
primary_intent: elegir solución según problema
```

## Answer first 5 seconds
No necesitas conocer el nombre de una película; empieza por el problema.

## Bloques
- Reducir ganancia solar/calor.
- Proteger frente a UV.
- Reducir deslumbramiento.
- Ganar privacidad.
- Reforzar el comportamiento del cristal al romperse.
- Solución automotriz.

## Función SEO
No competir con `/residencial/`, `/comercial/` o `/peliculas/`.
Es un **hub por necesidad**.

## CTA
**Encontrar mi solución**

## Internal links
Guías por problema + líneas de aplicación.

---

# 10. RESIDENCIAL `/residencial/`

```yaml
brief_id: PAGE-RES-001
page_type: conversion
status: LAUNCH_CORE
indexability: index,follow
primary_intent: evaluar película para casa/departamento
keyword_family:
  - polarizado residencial Guadalajara
  - película control solar casa
  - película para ventanas casa calor
```

## Answer first 5 seconds
Reducir ganancia solar, UV y deslumbramiento sin elegir una película a ciegas.

## Secuencia
1. Problemas residenciales reales.
2. Qué cambia según orientación/luz/privacidad.
3. Nanocerámica.
4. Reflectiva cuando corresponde.
5. Privacidad.
6. Seguridad.
7. Compatibilidad del cristal / estrés térmico.
8. Proyecto real.
9. Cómo cotizamos.
10. Garantía.
11. CTA.

## Claims contextuales
- privacidad depende de iluminación;
- resultado térmico depende del vidrio/sistema;
- no todos los cristales aceptan cualquier configuración.

## CTA
**Cotizar mis cristales**

## WhatsApp
```yaml
business_line: residential
needs:
  - heat
  - uv
  - glare
  - privacy
  - security
input_requested:
  - approximate_measurements
  - photos
  - location_general
```

---

# 11. COMERCIAL `/comercial/`

```yaml
brief_id: PAGE-COM-001
page_type: conversion_b2b
status: LAUNCH_CORE
indexability: index,follow
primary_intent: evaluar proyecto comercial/institucional
keyword_family:
  - polarizado oficinas Guadalajara
  - película control solar oficinas
  - película para cristales comerciales
```

## Answer first 5 seconds
HIGHTECH evalúa control solar, privacidad, deslumbramiento y seguridad según el edificio y el uso del espacio.

## Diferenciación vs residencial
Debe hablar de:
- superficies;
- fachadas;
- operación;
- horarios;
- acceso;
- continuidad del negocio;
- especificación;
- documentación;
- múltiples áreas.

No convertir B2B en “residencial pero más grande”.

## CTA
**Revisar mi proyecto**

## Secondary CTA
**Consultar ficha técnica**

## Prueba
Proyectos comerciales reales, no logos sin permiso.

---

# 12. AUTOMOTRIZ `/automotriz/`

```yaml
brief_id: PAGE-AUTO-001
page_type: conversion
status: LAUNCH_CORE
indexability: index,follow
primary_intent: cotizar nanocerámica para vehículo y elegir tono
keyword_family:
  - polarizado automotriz Guadalajara
  - polarizado nanocerámico Guadalajara
  - película nanocerámica auto
```

## Answer first 5 seconds
Nanocerámica HIGHTECH para controlar radiación solar, UV, entrada de luz y deslumbramiento; instalación únicamente en taller.

## Secciones
1. Beneficio/uso.
2. Qué significan VLT / UV / rechazo IR / TSER.
3. Comparador 75/50/35/15/5.
4. Visualidad de cada tono.
5. Legalidad Jalisco: norma + referencia práctica de Tránsito.
6. Proceso en taller.
7. Garantía.
8. Retiro de película previa.
9. FAQ.
10. CTA.

## Legalidad
Mostrar ambas capas:
- normativa publicada;
- orientación directa 70–75 / 35 / 20.

No:
- “100% legal”;
- “no te multan”.

## CTA
**Cotizar mi vehículo**

## WhatsApp
```yaml
business_line: automotive
requested_fields:
  - make
  - model
  - year_if_needed
  - scope
  - existing_film
```

## Analytics
- `film_compared`
- `technical_spec_opened`
- `legal_reference_opened`
- `warranty_viewed`
- `whatsapp_started`

---

# 13. CONTACTO `/contacto/`

```yaml
brief_id: PAGE-CONTACT-001
page_type: local_trust
status: LAUNCH_CORE
indexability: index,follow
primary_intent: contactar, ubicar o verificar HIGHTECH
```

## Debe incluir
- NAP canónico una vez aprobado;
- horario;
- teléfono;
- WhatsApp;
- correo;
- mapa/direcciones;
- qué información ayuda para cotizar;
- instalación automotriz sólo en taller.

## No duplicar
No convertirla en otra home.

## CTA
**Abrir WhatsApp**

## Gate
NAP reconciliation completo.

---

# 14. GARANTÍAS `/garantias/`

```yaml
brief_id: PAGE-WARRANTY-001
page_type: trust_legal
status: BUILD_READY_CONTENT_BLOCKED
indexability: index,follow
primary_intent: consultar cobertura y respaldo
keyword_family:
  - garantía polarizado HIGHTECH
  - garantía película nanocerámica
```

## Answer first 5 seconds
La garantía depende del producto, aplicación y versión; aquí puedes consultar la que corresponde.

## UX
Selector:
1. línea;
2. producto;
3. aplicación;
4. versión vigente.

## Mostrar
- plazo material;
- plazo instalación;
- inicio;
- cobertura;
- exclusiones causales;
- remedio;
- canal;
- versión.

## No mostrar
Una garantía genérica “10 años HIGHTECH”.

## CTA
**Consultar una garantía**

## Gate
Sólo garantías `APPROVED_FOR_PRODUCTION`.

---

# 15. PELÍCULAS `/peliculas/`

```yaml
brief_id: PAGE-FILMS-001
page_type: technology_hub
status: LAUNCH_CORE
indexability: index,follow
primary_intent: comparar tecnologías
```

## Answer first 5 seconds
No todas las películas resuelven el mismo problema.

## Categorías
- nanocerámica;
- reflectiva;
- seguridad;
- privacidad.

## Comparar
- claridad;
- privacidad;
- control solar;
- seguridad;
- aplicación;
- disponibilidad de datos;
- limitaciones.

## CTA
**Comparar películas**

---

# 16. NANOCERÁMICA `/peliculas/nanoceramica/`

```yaml
brief_id: PAGE-NANO-001
page_type: product_family
status: LAUNCH_CORE
indexability: index,follow
primary_intent: entender y comparar gama nanocerámica
keyword_family:
  - película nanocerámica
  - polarizado nanocerámico
```

## Answer first 5 seconds
Misma familia tecnológica, diferentes niveles de luz y diferentes valores de TSER según la ficha.

## Elemento central
Comparador 75 / 50 / 35 / 15 / 5.

Tabla:
- VLT;
- UV 99%;
- rechazo IR 95% a 950 nm;
- TSER;
- descripción visual;
- aplicaciones.

## Contexto obligatorio
95% a 950 nm ≠ 95% menos calor.

## CTA
**Elegir tono nanocerámico**

---

# 17. TONE PAGE GATE — IR75 / IR50 / IR35 / IR15 / IR5

Estas páginas **no se indexan sólo porque tenemos cinco tonos**.

Cada una debe tener:
- explicación visual propia;
- decisión de uso propia;
- especificaciones;
- comparación con los dos tonos vecinos;
- aplicaciones;
- limitaciones;
- proyecto/foto real o evidencia visual;
- FAQ específica.

Si no existe contenido suficiente:
`NOINDEX` o consolidar en `/peliculas/nanoceramica/`.

---

# 18. IR75 `/peliculas/nanoceramica/ir75/`

```yaml
brief_id: PAGE-IR75-001
status: INDEX_IF_COMPLETE
primary_intent: máxima claridad con control solar
specs:
  vlt: 75%
  uv: 99%
  infrared_rejection: 95% at 950nm
  tser: 59%
```

## Decisión que ayuda a tomar
“Quiero conservar la mayor claridad posible.”

## Comparar principalmente con
IR50.

## Contextos
- arquitectura clara;
- automotriz;
- parabrisas sujeto a bloque de legalidad Jalisco.

## Prohibido
“IR75 es legal en parabrisas”.

## CTA
**Consultar si IR75 es adecuada**

---

# 19. IR50 `/peliculas/nanoceramica/ir50/`

```yaml
brief_id: PAGE-IR50-001
status: INDEX_IF_COMPLETE
specs:
  vlt: 48%
  uv: 99%
  infrared_rejection: 95% at 950nm
  tser: 72%
```

## Decisión
Claridad alta con mayor control solar total de ficha que IR75.

## Comparar
IR75 vs IR50 vs IR35.

## CTA
**Consultar IR50**

---

# 20. IR35 `/peliculas/nanoceramica/ir35/`

```yaml
brief_id: PAGE-IR35-001
status: INDEX_IF_COMPLETE
specs:
  vlt: 35%
  uv: 99%
  infrared_rejection: 95% at 950nm
  tser: 79%
```

## Decisión
Balance entre entrada de luz, apariencia, deslumbramiento y privacidad.

## Contexto automotriz
Coincide con la referencia práctica comunicada por Tránsito para piloto/copiloto, pero no decir “la Ley establece 35%”.

## CTA
**Consultar IR35**

---

# 21. IR15 `/peliculas/nanoceramica/ir15/`

```yaml
brief_id: PAGE-IR15-001
status: INDEX_IF_COMPLETE
specs:
  vlt: 15%
  uv: 99%
  infrared_rejection: 95% at 950nm
  tser: 87%
```

## Decisión
Privacidad visual más marcada y menor entrada de luz.

## Advertencia
Visibilidad nocturna.

## Legalidad
No equiparar automáticamente nombre IR15 con “20% permitido”; explicar nomenclatura comercial y referencia de Tránsito de forma separada.

## CTA
**Consultar IR15**

---

# 22. IR5 `/peliculas/nanoceramica/ir5/`

```yaml
brief_id: PAGE-IR5-001
status: INDEX_IF_COMPLETE
specs:
  vlt: 3%
  uv: 99%
  infrared_rejection: 95% at 950nm
  tser: 96%
```

## Decisión
Máxima oscuridad de la gama activa.

## Contexto obligatorio
- VLT real de ficha 3%;
- impacto fuerte en visibilidad nocturna;
- privacidad nunca es absoluta.

## CTA
**Consultar IR5**

---

# 23. PLATA REFLECTA `/peliculas/plata-reflecta/`

```yaml
brief_id: PAGE-REFLECT-001
page_type: product_family
status: LAUNCH_WITH_CONTEXT
indexability: index,follow
primary_intent: privacidad diurna + control solar arquitectónico
```

## Answer first 5 seconds
Una solución arquitectónica reflectiva cuando se busca privacidad diurna y se acepta una apariencia más espejada.

## Obligatorio
- privacidad puede invertirse de noche;
- interior/exterior depende del producto/proyecto;
- sin TSER/IRR exactos hasta ficha;
- garantía por proyecto/SKU.

## CTA
**Consultar aplicación**

---

# 24. SEGURIDAD `/peliculas/seguridad/`

```yaml
brief_id: PAGE-SECURITY-001
page_type: solution_product
status: LAUNCH_WITH_CONTEXT
indexability: index,follow
primary_intent: entender qué puede hacer una película de seguridad
```

## Answer first 5 seconds
Ayuda a mantener unidos los fragmentos cuando el cristal se rompe; el desempeño frente a intrusión depende del sistema completo.

## Secciones
- retención de fragmentos;
- película vs sistema de retardo;
- vidrio/marco/fijación;
- qué no hace;
- evaluación por proyecto;
- garantía.

## Prohibido
- antibalas;
- irrompible;
- blindaje;
- impide robo.

## CTA
**Evaluar mis cristales**

---

# 25. PRIVACIDAD `/peliculas/privacidad/`

```yaml
brief_id: PAGE-PRIVACY-001
page_type: solution_hub
status: LAUNCH_WITH_CONTEXT
indexability: index,follow
primary_intent: obtener privacidad en cristales
```

## Función
Distinguir:
- privacidad diurna reflectiva;
- privacidad por oscurecimiento;
- privacidad permanente/translúcida cuando exista solución aprobada.

## Problema clave
**No existe espejo unidireccional permanente.**

## Gate
No mostrar catálogo decorativo de colores/texturas hasta inventario aprobado.

## CTA
**Buscar privacidad**

---

# 26. PROYECTOS `/proyectos/`

```yaml
brief_id: PAGE-PROJECTS-001
page_type: evidence_hub
status: LAUNCH_IF_ASSETS_READY
indexability: index,follow
primary_intent: comprobar experiencia y ver casos similares
```

## Filtros útiles
- residencial;
- comercial;
- automotriz;
- problema;
- película.

No filtrar por cosas sin suficientes casos.

## CTA
**Ver una solución para mi proyecto**

---

# 27. PROYECTO `[proyecto]`

```yaml
brief_id: TEMPLATE-PROJECT-001
page_type: case_study
indexability: INDEX_IF_SUBSTANTIAL_AND_AUTHORIZED
```

## Gate
Debe tener:
- permiso de publicación;
- ubicación no excesivamente precisa si no procede;
- contexto real;
- producto identificado;
- fotografías;
- resultado demostrable;
- suficiente contenido único.

Si sólo es galería de tres imágenes:
`NOINDEX`.

## Schema
WebPage / Breadcrumb.
No inventar Review.

---

# 28. GUÍAS `/guias/`

```yaml
brief_id: PAGE-GUIDES-001
page_type: knowledge_hub
status: LAUNCH
indexability: index,follow
primary_intent: resolver dudas antes de comprar
```

Agrupar por:
- calor/control solar;
- métricas;
- privacidad;
- seguridad;
- compatibilidad;
- automotriz.

---

# 29. GUÍA — REDUCIR CALOR

`/guias/reducir-calor-ventanas/`

## Intent
“Cómo reducir el calor que entra por las ventanas.”

## Debe explicar
- ganancia solar;
- VLT no es igual a calor;
- IR a 950 nm;
- TSER;
- vidrio/orientación;
- opciones claras vs oscuras.

## CTA
**Revisar mis cristales**

---

# 30. GUÍA — PROTECCIÓN UV

`/guias/proteccion-uv-ventanas/`

## Intent
Entender qué hace una película frente a UV y decoloración.

## Debe evitar
Decir que UV es la única causa de decoloración.

## CTA
**Consultar una película con protección UV**

---

# 31. GUÍA — IRR VS TSER

`/guias/irr-vs-tser/`

## Intent
Explicar por qué 95% IR no significa 95% menos calor.

## Página de autoridad técnica clave
Debe citar la forma exacta de la ficha:
**95% de rechazo infrarrojo a 950 nm**.

## CTA
**Comparar tonos nanocerámicos**

---

# 32. GUÍA — QUÉ ES VLT

`/guias/que-es-vlt/`

## Intent
Entender qué significan 75, 50, 35, 15 y 5.

## Debe explicar
- nombre comercial vs VLT técnico;
- IR50 = 48% ficha;
- IR5 = 3% ficha;
- sistema vidrio + película;
- visibilidad nocturna.

---

# 33. GUÍA — IR75 VS IR50

`/guias/ir75-vs-ir50/`

## Gate
Indexar sólo si ofrece comparación sustancial y no canibaliza las dos fichas.

## Diferencia útil
- claridad;
- VLT;
- TSER de ficha;
- apariencia;
- aplicación.

## CTA
**Ayúdame a elegir entre IR75 e IR50**

---

# 34. GUÍA — PRIVACIDAD DE NOCHE

`/guias/privacidad-ventanas-noche/`

## Intent
“¿Se ve hacia adentro de noche?”

## Respuesta inicial
Sí puede verse hacia el interior cuando hay más luz dentro que fuera.

## Página estratégica
Excelente para corregir expectativa antes de venta/reclamación.

---

# 35. GUÍA — NANOCERÁMICA VS REFLECTIVA

`/guias/nanoceramica-vs-reflectiva/`

## Intent
Elegir entre claridad y apariencia/privacidad reflectiva.

No declarar ganadora universal.

Comparar:
- aspecto;
- entrada de luz;
- privacidad;
- aplicaciones;
- disponibilidad de datos;
- garantía aplicable.

---

# 36. GUÍA — PELÍCULA DE SEGURIDAD

`/guias/pelicula-seguridad-que-hace/`

## Intent
Qué hace realmente y qué no hace.

Debe ser una pieza de desambiguación:
- retención;
- fijación;
- marco;
- intrusión;
- claims prohibidos.

---

# 37. GUÍA — ESTRÉS TÉRMICO

`/guias/estres-termico-cristal/`

## Intent
Por qué una película debe seleccionarse considerando el vidrio.

## Importante
No debe asustar ni trasladar automáticamente el riesgo al cliente.

Explicar:
- compatibilidad;
- inspección;
- sistema;
- evaluación previa.

## CTA
**Revisar compatibilidad de mi cristal**

---

# 38. GUÍA — CONTROL SOLAR Y ENERGÍA

`/guias/control-solar-eficiencia-energetica/`

## Intent
Entender cómo control solar puede influir en carga de climatización.

## Prohibido
- 30% ahorro;
- “se paga sola”;
- ROI universal.

## Permitido
Explicar mecanismo sin prometer resultado económico fijo.

---

# 39. GUÍA — DESLUMBRAMIENTO

`/guias/deslumbramiento-ventanas/`

## Intent
Reducir molestia visual por exceso de luz.

Relacionar con VLT y tono.

No prometer mejoras médicas/productividad cuantificada.

---

# 40. GUÍA CANDIDATA — POLARIZADO EN JALISCO

`/guias/polarizado-automotriz-jalisco/`

```yaml
status: HIGH_PRIORITY_CANDIDATE
publication_gate: LEGAL_CONTENT_REVIEW
indexability: index,follow if released
```

## Título conceptual
**Polarizado automotriz en Jalisco: qué dice la norma y qué referencia nos han dado en Tránsito**

## Valor
Puede ser una página muy útil porque distingue:
- texto normativo;
- referencia práctica 70–75 / 35 / 20;
- VLT;
- película vs sistema;
- decisiones de visibilidad.

## No convertir
en “tabla legal oficial”.

---

# 41. NOSOTROS `/nosotros/`

```yaml
brief_id: PAGE-ABOUT-001
page_type: trust
status: LAUNCH
indexability: index,follow
```

## Objetivo
Responder:
- quién es HIGHTECH;
- cómo trabaja;
- por qué existe;
- cómo selecciona soluciones.

## No usar sin evidencia
- 15+ años;
- líder;
- más confiable;
- mejor;
- equipo interno si no describe la estructura real.

## Mejor evidencia
- metodología;
- fotografías reales;
- director identificado;
- instalaciones/proyectos;
- especificaciones verificables.

---

# 42. FAQ `/preguntas-frecuentes/`

```yaml
brief_id: PAGE-FAQ-001
status: LAUNCH_IF_NON_DUPLICATIVE
indexability: index,follow
```

## Preguntas núcleo
- ¿Nanocerámica significa más oscuro?
- ¿Qué es VLT?
- ¿95% IR significa 95% menos calor?
- ¿Se pierde privacidad de noche?
- ¿Instalan autos a domicilio?
- ¿Cómo cotizan una casa/oficina?
- ¿Qué garantía tiene?
- ¿Qué referencia de tonos manejan en Jalisco?
- ¿Hay que retirar película anterior?
- ¿Cuánto tarda una instalación?

## Regla
Respuesta breve + enlace a página profunda.

No copiar íntegramente contenido de guías.

## Schema
No asumir beneficio de `FAQPage`; usar sólo si se decide por razones semánticas y cumple requisitos.

---

# 43. TÉRMINOS `/legal/terminos-y-condiciones/`

```yaml
brief_id: PAGE-TERMS-001
page_type: legal
status: BUILD_READY_CONTENT_BLOCKED
indexability: noindex,follow
```

## Debe mostrar
- proveedor;
- versión;
- fecha efectiva;
- texto aprobado;
- descarga/archivo;
- contacto.

## No publicar
v0.5 jurídica como si fuera final.

---

# 44. PRIVACIDAD `/legal/aviso-de-privacidad/`

```yaml
brief_id: PAGE-PRIVACY-001
page_type: legal_privacy
status: BUILD_READY_CONTENT_BLOCKED
indexability: noindex,follow
```

## Debe mostrar
- responsable;
- finalidades;
- derechos;
- canal ARCO;
- transferencias/encargados según documento final;
- versión.

---

# 45. LANDING PAGES `/lp/[campaña]/`

```yaml
brief_id: TEMPLATE-LP-001
page_type: paid_campaign
status: ON_DEMAND
indexability: noindex,follow
```

## Regla
No crear landing pages clonadas por ciudad/keyword.

Puede cambiar:
- hero;
- evidencia;
- oferta/campaña;
- CTA;
- tracking.

No puede cambiar:
- especificaciones técnicas;
- garantía;
- datos legales;
- NAP;
- claim registry.

---

# 46. INTERLINKING PRINCIPAL

```text
Home
├→ Residencial
├→ Comercial
├→ Automotriz
├→ Servicios
├→ Películas
├→ Proyectos
└→ Garantías

Servicios
├→ Guías por problema
├→ Residencial/Comercial/Auto
└→ Películas relevantes

Aplicación
├→ Producto
├→ Guía
├→ Proyecto
└→ Garantía

Producto
├→ Aplicaciones
├→ Guías técnicas
├→ Proyecto
└→ Garantía

Guía
├→ Producto
├→ Aplicación
└→ CTA

Proyecto
├→ Producto
├→ Aplicación
└→ CTA
```

No crear enlaces internos únicamente por keyword exacta.

---

# 47. CTA SYSTEM

## Home
`Cuéntanos qué quieres resolver`

## Servicios
`Encontrar mi solución`

## Residencial
`Cotizar mis cristales`

## Comercial
`Revisar mi proyecto`

## Automotriz
`Cotizar mi vehículo`

## Nanocerámica
`Elegir tono nanocerámico`

## Producto individual
`Consultar si [PRODUCTO] es adecuado`

## Seguridad
`Evaluar mis cristales`

## Privacidad
`Buscar privacidad`

## Proyecto
`Quiero una solución similar`

## Garantía
`Consultar una garantía`

Todos pueden abrir WhatsApp, pero preservan contexto diferente.

---

# 48. WHATSAPP CONTEXT MODEL

```yaml
source_page:
page_type:
business_line:
problem:
product:
tone:
project_reference:
legal_topic:
cta_position:
utm_source:
utm_medium:
utm_campaign:
```

No enviar campos vacíos como texto visible.

Ejemplo IR50:

> Hola, vi la película IR50 en la web de HIGHTECH y quiero revisar si es adecuada para mi proyecto.

Ejemplo residencial:

> Hola, estoy revisando soluciones residenciales de HIGHTECH. Quiero reducir calor en mis ventanas sin oscurecer demasiado el espacio.

---

# 49. ANALYTICS POR TIPO DE PÁGINA

### Conversion
- solution_selected
- film_compared
- project_viewed
- whatsapp_started
- phone_clicked

### Product
- technical_spec_opened
- film_compared
- warranty_viewed
- whatsapp_started

### Guide
- technical_spec_opened
- related_product_clicked
- whatsapp_started

### Project
- project_viewed
- related_product_clicked
- whatsapp_started

### Warranty
- warranty_viewed
- warranty_document_opened
- whatsapp_started

### Automotive legality
- legal_reference_opened

---

# 50. GLOBAL CLAIM GATE

Antes de escribir un claim, el sistema pregunta:

```text
¿Existe en Claim Registry?
      ↓ sí
¿Está aprobado?
      ↓ sí
¿Aplica a este producto?
      ↓ sí
¿Aplica a esta aplicación?
      ↓ sí
¿Requiere contexto?
      ↓
Renderizar claim + contexto obligatorio
```

Si cualquier respuesta falla:
**NO PUBLICAR.**

---

# 51. CONTENIDO QUE NO SE GENERA TODAVÍA

No escribir todavía copy final completo para todas las páginas.

Primero faltan:
- activos/proyectos;
- NAP final;
- garantías liberadas;
- legal final;
- decisión visual final;
- Search Console suficiente;
- algunas fichas de reflecta/seguridad.

El brief gobierna el copy posterior.

---

# 52. ORDEN DE PRODUCCIÓN RECOMENDADO

```text
1. Home
2. Residencial
3. Comercial
4. Automotriz
5. Servicios
6. Películas
7. Nanocerámica
8. Comparador de tonos
9. IR75/50/35/15/5 sólo si pasan Page Quality Gate
10. Seguridad
11. Plata Reflecta
12. Privacidad
13. Proyectos + template
14. Guías prioritarias
15. Garantías
16. Contacto
17. Nosotros
18. FAQ
19. Legal
20. LPs
```

---

# 53. GATES ANTES DE CODEX

El Page Brief System se considera listo para desarrollo cuando:

- [ ] cada ruta de lanzamiento tiene brief;
- [ ] intención no se solapa innecesariamente;
- [ ] tone pages pasan `INDEX_IF_COMPLETE`;
- [ ] cada CTA tiene contexto;
- [ ] claims están ligados al System of Truth;
- [ ] evidencia requerida está identificada;
- [ ] legal dependencies están marcadas;
- [ ] indexabilidad/canonical están definidos;
- [ ] esquema candidato está definido;
- [ ] analytics están definidos;
- [ ] rutas antiguas tienen destino;
- [ ] ningún copy heredado gobierna una página nueva.

---

# 54. REGLA FINAL

**Una URL existe para ayudar a una persona a tomar una decisión concreta.**

SEO ayuda a que esa persona llegue.

CRO ayuda a que avance.

La evidencia hace creíble la respuesta.

El System of Truth evita que, para vender, la página diga algo que HIGHTECH no puede sostener.
