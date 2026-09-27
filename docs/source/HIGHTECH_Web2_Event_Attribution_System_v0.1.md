# HIGHTECH Web 2.0 — Event & Attribution System v0.1

**Fecha:** 27 de septiembre de 2026  
**Fuente maestra:** `HIGHTECH_Web2_System_of_Truth_v0.12.md`  
**Objeto:** medir desde adquisición hasta venta sin confundir clics con resultados de negocio.  
**Estado:** especificación previa a implementación.

---

# 1. OBJETIVO

La analítica de Web 2.0 debe responder preguntas de negocio:

- ¿Qué canales traen prospectos útiles?
- ¿Qué problemas generan conversaciones?
- ¿Qué páginas ayudan a cotizar?
- ¿Qué películas generan interés real?
- ¿Qué campañas generan cotizaciones?
- ¿Qué cotizaciones terminan en venta?
- ¿Cuánto ingreso produce cada fuente/campaña/línea?
- ¿Dónde se pierde el usuario antes de avanzar?

La métrica principal **no será tráfico ni clics en WhatsApp**.

---

# 2. FUNNEL CANÓNICO

```text
VISITA
  ↓
INTENCIÓN
  ↓
WHATSAPP / CONTACTO INICIADO
  ↓
LEAD CALIFICADO
  ↓
COTIZACIÓN ENVIADA
  ↓
VENTA GANADA
  ↓
INGRESO
```

Estados de negocio:

```yaml
session:
intent_signal:
contact_started:
qualified_lead:
quote_sent:
sale_won:
sale_lost:
revenue:
```

---

# 3. NORTH STAR

## Métrica primaria

`qualified_leads_from_web`

Definición:
conversaciones originadas o asistidas por Web 2.0 que contienen suficiente información/intención para que HIGHTECH pueda continuar diagnóstico o cotización.

No contar como lead calificado:
- spam;
- proveedor;
- búsqueda de empleo;
- mensaje sin relación con servicios;
- contacto accidental;
- conversación duplicada del mismo caso.

## Métricas de resultado

- `quotes_from_web`
- `sales_from_web`
- `revenue_from_web`

---

# 4. MÉTRICAS SECUNDARIAS

```text
WhatsApp Start Rate
= whatsapp_started / eligible_sessions

Qualified Lead Rate
= qualified_lead / whatsapp_started

Quote Rate
= quote_sent / qualified_lead

Close Rate
= sale_won / quote_sent

Revenue per Qualified Lead
= revenue / qualified_lead

Revenue per Web Session
= revenue_from_web / sessions
```

No interpretar una mejora aislada en `whatsapp_started` como mejora comercial si cae la calidad del lead.

---

# 5. EVENT TAXONOMY

## Navegación / intención

### `solution_selected`
Cuando el visitante elige:
- calor;
- UV;
- deslumbramiento;
- privacidad;
- seguridad;
- automotriz.

Propiedades:
```yaml
problem:
business_line:
source_page:
```

### `film_compared`
Cuando usa el comparador o cambia activamente entre películas/tonos.

```yaml
film_a:
film_b:
comparison_context:
source_page:
```

### `technical_spec_opened`
Cuando abre ficha/especificaciones relevantes.

```yaml
product:
spec_group:
source_page:
```

### `project_viewed`
Cuando abre un caso/proyecto sustancial.

```yaml
project_id:
business_line:
problem:
```

### `warranty_viewed`
Cuando consulta una garantía concreta.

```yaml
warranty_id:
product:
application:
```

### `legal_reference_opened`
Para el módulo de legalidad automotriz.

```yaml
jurisdiction: Jalisco
topic:
```

### `faq_opened`
Sólo si ayuda a medir preguntas relevantes; no medir cada acordeón por vanidad.

```yaml
faq_id:
source_page:
```

---

# 6. CONTACT EVENTS

### `whatsapp_started`

Se dispara cuando el usuario inicia el handoff real a WhatsApp.

Propiedades:

```yaml
source_page:
page_type:
business_line:
problem:
product:
tone:
cta_position:
campaign_id:
lead_ref:
```

### `phone_clicked`

```yaml
source_page:
cta_position:
```

### `directions_clicked`

```yaml
source_page:
```

### `commercial_file_requested`

Para B2B cuando exista solicitud real de:
- ficha técnica;
- documento comercial;
- proyecto.

No usar para una descarga automática sin intención.

---

# 7. BUSINESS EVENTS

Estos eventos no deben depender sólo del navegador.

### `qualified_lead`

Fuente:
WhatsApp/LuzIA/equipo/CRM.

Campos:

```yaml
lead_ref:
business_line:
problem:
qualification_status:
qualification_date:
```

### `quote_sent`

```yaml
lead_ref:
quote_id:
business_line:
quoted_amount:
currency: MXN
quote_date:
```

### `sale_won`

```yaml
lead_ref:
quote_id:
sale_id:
business_line:
revenue:
currency: MXN
sale_date:
```

### `sale_lost`

```yaml
lead_ref:
quote_id:
loss_reason_category:
```

No enviar comentarios libres del cliente a analytics.

---

# 8. `lead_ref` — PUENTE WEB ↔ WHATSAPP

El problema principal del funnel actual es que al abrir WhatsApp normalmente se pierde la unión entre:

```text
campaña → página → conversación → cotización → venta
```

Web 2.0 debe crear un identificador no personal:

```text
HT-W2-XXXXXX
```

Ejemplo:
`HT-W2-7K4P2Q`

## Propósito
Unir:
- sesión/campaña;
- CTA;
- conversación;
- cotización;
- venta.

## NO contiene
- nombre;
- teléfono;
- correo;
- dirección;
- placa;
- VIN;
- mensaje del cliente.

---

# 9. PREFILLED WHATSAPP

La página genera un mensaje contextual.

Ejemplo residencial:

```text
Hola, estoy revisando soluciones residenciales de HIGHTECH.
Quiero reducir calor sin oscurecer demasiado mis ventanas.

Referencia web: HT-W2-7K4P2Q
```

Ejemplo IR50:

```text
Hola, vi la película IR50 en la web de HIGHTECH y quiero revisar si es adecuada para mi proyecto.

Referencia web: HT-W2-7K4P2Q
```

Ejemplo automotriz:

```text
Hola, quiero cotizar película nanocerámica HIGHTECH para mi vehículo.

Referencia web: HT-W2-7K4P2Q
```

La referencia va al final y no obliga al cliente a entenderla.

---

# 10. CONTEXTO INTERNO ASOCIADO AL `lead_ref`

El registro interno puede contener:

```yaml
lead_ref:
created_at:
landing_page:
source_page:
business_line:
problem:
product:
tone:
cta_position:

first_touch:
  source:
  medium:
  campaign:
  content:
  term:
  referrer:

conversion_touch:
  source:
  medium:
  campaign:
  content:
  term:
  referrer:

click_ids:
  google:
  meta:

consent_state:
```

No almacenar aquí PII si no es necesaria para la atribución.

---

# 11. FIRST TOUCH + CONVERSION TOUCH

No obligar el sistema a elegir una sola narrativa.

## `first_touch`
Cómo llegó originalmente el usuario al ecosistema durante la ventana definida.

Útil para:
- descubrimiento;
- SEO;
- campañas que generan demanda.

## `conversion_touch`
Fuente/campaña de la sesión donde comenzó el contacto.

Útil para:
- optimización de campañas;
- CRO;
- páginas de cierre.

## Regla
Los reportes de negocio muestran ambos.

No declarar que una campaña “generó” toda la venta cuando sólo fue el último clic si hubo otro origen relevante.

---

# 12. UTM GOVERNANCE

Formato:

```text
utm_source
utm_medium
utm_campaign
utm_content
utm_term
```

## Convención sugerida

### Meta
```text
utm_source=meta
utm_medium=paid_social
utm_campaign=<campaign_slug>
utm_content=<creative_slug>
```

### Google Ads
```text
utm_source=google
utm_medium=cpc
utm_campaign=<campaign_slug>
```

### Google Business Profile
```text
utm_source=google
utm_medium=organic_local
utm_campaign=gbp
```

### Instagram orgánico
```text
utm_source=instagram
utm_medium=organic_social
utm_campaign=profile
```

### WhatsApp links propios
No usar UTMs si el destino no es web.

---

# 13. REGLAS PARA CAMPAIGN SLUGS

Formato:

```text
linea_objetivo_geo_fecha
```

Ejemplo:

```text
residencial_calor_gdl_2026q4
auto_nano_gdl_2026q4
comercial_oficinas_gdl_2026q4
```

No usar:
- espacios;
- acentos;
- nombres personales;
- IDs de cliente;
- mensajes largos.

---

# 14. DIRECT / DARK TRAFFIC

Si no hay UTM ni referrer atribuible:

```yaml
source: direct
medium: none
```

No inventar que fue:
- SEO;
- Instagram;
- recomendación.

Si en WhatsApp el cliente menciona “los vi en Instagram”, eso puede registrarse como `self_reported_source`, separado de la atribución técnica.

---

# 15. SELF-REPORTED ATTRIBUTION

Campo opcional durante calificación:

```yaml
self_reported_source:
  - google
  - google_maps
  - instagram
  - facebook
  - recommendation
  - returning_customer
  - other
  - unknown
```

Sirve para comparar:
- lo que rastrea la web;
- lo que recuerda el cliente.

No reemplaza UTMs/click IDs.

---

# 16. PRIVACIDAD — PROHIBIDO EN ANALYTICS

No enviar a GA4/Meta/analytics:

- nombre;
- número de teléfono;
- correo;
- domicilio;
- texto libre de WhatsApp;
- RFC;
- datos fiscales;
- placa;
- VIN;
- fotografías;
- coordenadas precisas;
- contenido de reclamaciones;
- información sensible.

## URL hygiene

No colocar PII en:
- query strings;
- UTMs;
- paths;
- event names;
- page titles dinámicos.

---

# 17. CONSENT / THIRD-PARTY GATE

La implementación de:
- GA4;
- Meta Pixel;
- Google Ads;
- otras etiquetas

debe pasar por:

`third_party_registry`

y por la política de privacidad/consentimiento aprobada.

No implementar “porque todos los sitios lo hacen”.

---

# 18. CLIENT-SIDE VS BUSINESS-SIDE

## Navegador
Mide:
- vistas;
- interacción;
- CTA;
- origen.

## Sistema comercial
Mide:
- lead calificado;
- cotización;
- venta;
- importe.

**El navegador no debe declarar una venta sólo porque alguien abrió WhatsApp.**

---

# 19. FALLBACK SIN CRM

Web 2.0 debe poder lanzar aunque aún no exista un CRM formal.

## Fase 1

Crear una tabla mínima:

```yaml
lead_ref:
date:
status:
business_line:
quote_id:
quote_amount:
sale_amount:
source:
campaign:
notes_category:
```

Puede vivir temporalmente en una base/hoja controlada conectada mediante automatización.

No usar texto libre con datos personales si no es necesario.

## Fase 2
Migrar al CRM conservando `lead_ref` como llave externa.

---

# 20. ESTADOS DEL LEAD

Usar pocos estados inequívocos:

```text
NEW
QUALIFIED
QUOTE_SENT
WON
LOST
DUPLICATE
INVALID
```

No crear 30 estados desde el inicio.

## `LOST` reason categories

```text
PRICE
NO_RESPONSE
POSTPONED
COMPETITOR
OUT_OF_SCOPE
TECHNICALLY_NOT_VIABLE
LOCATION_LOGISTICS
UNKNOWN
```

No inferir motivo si el cliente no lo expresó.

---

# 21. BUSINESS LINE

Valores canónicos:

```text
RESIDENTIAL
COMMERCIAL
AUTOMOTIVE
INSTITUTIONAL
PDLC
OTHER_APPROVED
```

No mezclar líneas en nombres distintos según cada plataforma.

---

# 22. PROBLEM TAXONOMY

Valores canónicos:

```text
HEAT
UV
GLARE
PRIVACY
SAFETY
APPEARANCE
UNKNOWN
```

Puede haber más de uno, pero definir:
- `primary_problem`
- `secondary_problems`

para evitar dimensiones caóticas.

---

# 23. CTA POSITION

Valores controlados:

```text
HERO
MID_PAGE
COMPARATOR
PRODUCT_CARD
PROJECT
FAQ
STICKY_MOBILE
FOOTER
FINAL_CTA
```

Esto permite saber si el botón flotante ayuda o simplemente roba atribución a otros CTAs.

---

# 24. EVENT DEDUPLICATION

Un clic repetido no debe inflar intención artificialmente.

## Reglas
- `whatsapp_started`: cada apertura real puede registrarse, pero análisis principal usa usuarios/sesiones y `lead_ref`.
- `qualified_lead`: una vez por caso.
- `quote_sent`: una vez por versión de cotización; distinguir revisión.
- `sale_won`: una vez por operación.
- actualizaciones de importe no crean ventas nuevas.

---

# 25. QUOTE VERSIONING

```yaml
quote_id: Q-2026-00123
quote_version: 2
lead_ref: HT-W2-7K4P2Q
status: SENT
amount:
```

Una nueva versión no debe contar como un nuevo lead.

---

# 26. REVENUE

Para analítica comercial:

```yaml
sale_revenue:
  definition: "importe final aprobado de la operación"
  currency: MXN
```

Definir con contador/operación si el dashboard principal utiliza:
- total con impuestos;
- subtotal;
- ingreso reconocido.

No mezclar ambos dentro del mismo KPI.

---

# 27. DASHBOARD EJECUTIVO MÍNIMO

## Adquisición
- sesiones por source/medium;
- landing pages;
- campañas.

## Intención
- problemas seleccionados;
- películas comparadas;
- páginas con mayor avance.

## Conversión
- WhatsApp starts;
- leads calificados;
- cotizaciones;
- ventas.

## Negocio
- importe cotizado;
- ventas;
- ingresos;
- close rate;
- ingreso por lead calificado.

## Por línea
- residencial;
- comercial;
- automotriz.

No construir 40 dashboards antes de tener datos suficientes.

---

# 28. SEO DASHBOARD

Para Organic Search:

```text
organic sessions
↓
qualified organic leads
↓
organic quotes
↓
organic sales
↓
organic revenue
```

Search Console aporta:
- query;
- page;
- clicks;
- impressions;
- CTR;
- position.

Analytics/negocio aporta:
- conversación;
- cotización;
- venta.

No usar ranking promedio como north star.

---

# 29. LOCAL / GOOGLE BUSINESS PROFILE

Links de GBP deben ir etiquetados cuando sea técnicamente apropiado:

```text
utm_source=google
utm_medium=organic_local
utm_campaign=gbp
```

Separar:
- Google Search orgánico;
- Google Maps/GBP;
- Google Ads.

---

# 30. META ADS

Meta no debe medirse únicamente por:

```text
link clicks
landing page views
WhatsApp opens
```

Objetivo futuro:
retroalimentar eventos de mayor calidad cuando la infraestructura y privacidad lo permitan:

```text
qualified_lead
quote_sent
sale_won
```

Cualquier envío a Meta debe:
- pasar revisión de privacidad;
- utilizar identificadores permitidos y tratamiento aprobado;
- deduplicarse;
- no incluir texto de conversaciones.

---

# 31. GOOGLE ADS

Misma lógica.

No optimizar únicamente hacia clic en WhatsApp si es posible llegar posteriormente a:
- lead calificado;
- cotización;
- venta.

La implementación de conversiones offline/servidor queda como fase posterior, no requisito para lanzar la web.

---

# 32. EVENT QUALITY TESTS

Antes del lanzamiento comprobar:

- un clic = un evento;
- no duplicación por GTM + código;
- CTA correcto;
- source_page correcto;
- product/tone correctos;
- UTMs persisten;
- first touch no se sobrescribe indebidamente;
- conversion touch sí refleja sesión de contacto;
- `lead_ref` llega a WhatsApp;
- móvil Android/iOS;
- desktop WhatsApp Web;
- bloqueo/cancelación de navegación;
- modo sin cookies/consentimiento;
- páginas legales sin eventos innecesarios.

---

# 33. TEST CASE — META → IR50 → WHATSAPP → VENTA

```text
Ad Meta
utm_source=meta
utm_medium=paid_social
utm_campaign=auto_nano_gdl_2026q4

↓
Landing /automotriz/

↓
Comparador
film_compared IR75 vs IR50

↓
IR50
technical_spec_opened

↓
CTA
whatsapp_started
lead_ref=HT-W2-7K4P2Q

↓
WhatsApp
NEW

↓
LuzIA/equipo
QUALIFIED

↓
Cotización Q-123
QUOTE_SENT

↓
Cliente acepta
WON

↓
Dashboard
Meta campaign → qualified lead → quote → sale → revenue
```

---

# 34. TEST CASE — GOOGLE ORGANIC → GUÍA → RESIDENCIAL

```text
Google Organic
↓
/guias/reducir-calor-ventanas/
↓
/residencial/
↓
CTA
↓
WhatsApp
↓
Qualified
```

First touch:
`google / organic`

Conversion touch:
`google / organic`

La guía recibe mérito asistido porque forma parte del path.

---

# 35. TEST CASE — DIRECT RETURN

```text
Día 1:
Meta Ad → visita → no contacto

Día 4:
escribe polarizadoshightech.com directamente → WhatsApp → venta
```

Registrar:

```yaml
first_touch: meta / paid_social
conversion_touch: direct / none
```

No borrar la contribución inicial de Meta.

---

# 36. DATA RETENTION

No definir todavía un plazo universal.

El almacenamiento de atribución y operaciones debe alinearse con:
- privacidad;
- obligaciones comerciales/fiscales;
- garantía;
- política de conservación final.

Los datos de analítica que no necesitan identificar un expediente deben minimizarse/agregarse cuando sea posible.

---

# 37. OWNERSHIP

Debe existir un responsable de:

```yaml
analytics_owner:
campaign_naming_owner:
business_status_owner:
quote_sync_owner:
privacy_owner:
```

No permitir que cada agencia/campaña cree taxonomías distintas.

---

# 38. DEVELOPMENT CONTRACT

Codex debe implementar eventos desde una capa central.

Ejemplo conceptual:

```ts
track("whatsapp_started", {
  source_page,
  business_line,
  problem,
  product,
  tone,
  cta_position,
  lead_ref
})
```

No llamar directamente a GA/Meta desde veinte componentes distintos.

La capa central decide qué proveedores reciben cada evento según:
- consentimiento;
- entorno;
- configuración.

---

# 39. ENVIRONMENTS

```yaml
development:
  analytics: disabled_or_debug

staging:
  analytics: isolated
  search_indexing: blocked

production:
  analytics: approved_providers_only
```

Staging nunca debe contaminar datos de producción.

---

# 40. RELEASE GATE

Antes de producción:

- [ ] event dictionary final;
- [ ] UTM conventions final;
- [ ] lead_ref probado;
- [ ] WhatsApp context probado;
- [ ] first/conversion touch probado;
- [ ] no PII en events/URLs;
- [ ] third-party registry aprobado;
- [ ] consent/privacy implementados;
- [ ] dashboards mínimos configurados;
- [ ] negocio puede marcar QUALIFIED / QUOTE_SENT / WON;
- [ ] prueba completa campaña→venta;
- [ ] staging excluido;
- [ ] documentación de ownership.

---

# 41. REGLA FINAL

**Un clic en WhatsApp es una intención.  
Una conversación útil es un lead.  
Una cotización es una oportunidad.  
Una venta es el resultado.**

Web 2.0 debe poder distinguir las cuatro.
