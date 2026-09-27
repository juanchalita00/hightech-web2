# HIGHTECH Web 2.0 — System of Truth v0.17

**Proyecto:** HIGHTECH Polarizados — Web 2.0  
**Fecha de corte:** 27 de septiembre de 2026  
**Responsable empresarial:** Fernando Chalita — Director  
**Estado:** Fuente maestra de trabajo. Sustituye v0.16.  
**Principio:** la web sólo publica información que tenga dominio, fuente, estado, contexto y permiso de publicación definidos.

---

# 0. CAMBIOS v0.2 → v0.3

1. Se localizó la fuente técnica visual del 19-sep-2026.
2. Se liberan VLT/UV/TSER como especificaciones de ficha para la gama mapeada.
3. Se corrige “IRR 95%” por **rechazo infrarrojo 95% a 950 nm**, que es lo que realmente dicen las fichas.
4. UV canónico de la gama activa pasa a **99%**, sustituyendo el 99.9% interno anterior para Web 2.0.
5. La referencia “10 años” de las fichas se conserva como evidencia técnica/comercial, pero continúa `LEGAL_REVIEW` como garantía contractual pública.
6. NANO+ 70 queda como producto técnico no mapeado/inactivo para Web 2.0 hasta decisión expresa.

---

# 1. DOS CAPAS DE VERDAD

## `business_truth`
Conocimiento operativo interno, incluidos antecedentes y pendientes.

## `publication_truth`
Sólo contenido autorizado para producción.

**Codex/CMS público consume `publication_truth`.**

---

# 2. AUTORIDAD POR DOMINIO

| Dominio | Autoridad |
|---|---|
| Catálogo / nombres | Dirección + fuente comercial vigente |
| Especificaciones | Ficha/medición primaria vinculada |
| Garantía | Póliza aprobada + revisión jurídica |
| Legal / privacidad | Texto jurídico aprobado |
| Precios internos | Tarifa/motor vigente |
| Precios públicos | Política de visibilidad aprobada |
| NAP | Registro empresarial reconciliado |
| SEO / rutas | Route Registry aprobado |

---

# 3. FUENTES CANÓNICAS

## `SRC-COM-001`
`02_HIGHTECH_LuzIA_Negocio_Productos_y_Cotizacion_v1_3.pdf`

## `SRC-LEGAL-001`
`HIGHTECH_Paquete_Work_v0.5.md`
- estado: `LEGAL_REVIEW`

## `SRC-WARRANTY-001`
`HIGHTECH_Web2_Warranty_Matrix_v0.1.md`

## `SRC-TECH-SEP19`
Conjunto visual recuperado:
- `1000281456.jpg` — NANO-70
- `1000281458.jpg` — NANO-50
- `1000281460.jpg` — NANO-35
- `1000281462.jpg` — NANO-15
- `1000281464.jpg` — NANO-03

Estado:
`APPROVED_WITH_CONTEXT` como fuente de especificación de ficha.

## `SRC-TECH-UNMAPPED-001`
`1000281454.jpg` — NANO+ 70  
Estado:
`HISTORICAL / UNMAPPED`

---

# 4. IDENTIDAD CORPORATIVA

Marca:
**HIGHTECH Polarizados**

Director:
Fernando Chalita

Proveedor legal de trabajo:
Juan Fernando Espinoza Chalita operando como HIGHTECH Polarizados.

Futura sociedad:
HT PRODUCTS MX, S.A. de C.V. — no activar hasta soporte documental.

## Contacto operativo de trabajo

```yaml
address: "Tomás Mann 5348, Jardines Vallarta, C.P. 45027, Zapopan, Jalisco"
phone: "33 2228 9017"
email: "ventas@polarizadoshightech.com"
website: "polarizadoshightech.com"
hours:
  mon_fri: "09:00-20:00"
  sat: "09:00-15:00"
  sun: "closed"
status: CURRENT_OPERATING_REFERENCE
publication_gate: NAP_RECONCILIATION
```

---


# 4A. NAP / IDENTIDAD PÚBLICA — AUDITORÍA 27-SEP-2026

**Fuente específica:** `HIGHTECH_Web2_NAP_Reconciliation_v0.1.md`

Estado observado:

- Fuente operativa interna: Tomás Mann 5348.
- Sitio público actual: Justo Sierra 3184.
- Perfil público de Google coincidente con fuente interna: Tomás Mann 5348.
- Segundo perfil público con mismo teléfono: Salvador Madariaga 5058.
- Teléfono +52 33 2228 9017 consistente.
- Horarios públicos requieren reconciliación.

Estado global:
`NAP_RECONCILIATION_REQUIRED`

Hasta resolverlo:
- no generar `LocalBusiness` definitivo;
- no marcar dirección como `PUBLICATION_APPROVED`;
- sí mantener Tomás Mann como `CURRENT_OPERATING_REFERENCE`;
- no borrar/fusionar el segundo Perfil de Empresa sin verificar propiedad e historial.


# 5. CATÁLOGO PÚBLICO CANÓNICO

## Nanocerámica
- IR75
- IR50
- IR35
- IR15
- IR5

## Otras líneas
- Plata Reflecta — arquitectura
- Seguridad — arquitectura
- Privacidad

## Estados especiales
- PDLC — candidato a sección pública dedicada
- 3M — alternativa premium bajo consulta
- Highclear — inactivo
- PPF — decisión empresarial pendiente
- domos/exterior/altura — revisión por proyecto

---

# 6. MAPEO TÉCNICO ↔ COMERCIAL

| Ficha | Nombre Web | VLT |
|---|---|---:|
| NANO-70 | IR75 | 75% |
| NANO-50 | IR50 | 48% |
| NANO-35 | IR35 | 35% |
| NANO-15 | IR15 | 15% |
| NANO-03 | IR5 | 3% |

No crear:
- IR20;
- IR3;
- IR70;
- NANO+70 como producto público actual.

---

# 7. ESPECIFICACIONES CANÓNICAS DE GAMA NANOCERÁMICA

| Producto | VLT | UV | Rechazo infrarrojo | TSER | Fuente | Publicación |
|---|---:|---:|---:|---:|---|---|
| IR75 | 75% | 99% | 95% a 950 nm | 59% | SRC-TECH-SEP19 | `APPROVED_WITH_CONTEXT` |
| IR50 | 48% | 99% | 95% a 950 nm | 72% | SRC-TECH-SEP19 | `APPROVED_WITH_CONTEXT` |
| IR35 | 35% | 99% | 95% a 950 nm | 79% | SRC-TECH-SEP19 | `APPROVED_WITH_CONTEXT` |
| IR15 | 15% | 99% | 95% a 950 nm | 87% | SRC-TECH-SEP19 | `APPROVED_WITH_CONTEXT` |
| IR5 | 3% | 99% | 95% a 950 nm | 96% | SRC-TECH-SEP19 | `APPROVED_WITH_CONTEXT` |

## Contexto obligatorio
- TSER es especificación de ficha.
- El desempeño del sistema instalado puede cambiar según el cristal.
- Rechazo infrarrojo es el valor a **950 nm** mostrado por la ficha.
- No convertir 95% a “95% menos calor”.
- No llamarlo IRER.
- No inferir rechazo de toda la banda IR.

---

# 8. OTROS DATOS DE FICHA

Las fichas muestran:
- grosor 2MIL;
- nitidez Ultra HD;
- coeficiente de sombreado;
- datos de adherencia.

Estado:
`TECHNICAL_REVIEW` para publicación, excepto grosor si se confirma que la unidad y producto son consistentes.

No publicar datos de adherencia sin:
- unidad;
- método;
- significado;
- fuente explicativa.

---

# 9. UV — RESOLUCIÓN DE CONFLICTO

Fuentes internas anteriores:
99.9%.

Fichas posteriores del 19-sep:
99%.

**Valor canónico Web 2.0: 99%.**

El 99.9% anterior queda `HISTORICAL_SUPERSEDED` para esta gama, salvo nueva fuente primaria posterior.

---

# 10. RECHAZO INFRARROJO — RESOLUCIÓN DE TERMINOLOGÍA

No almacenar:

```yaml
irr: 95
```

sin contexto.

Almacenar:

```yaml
infrared_rejection:
  value: 95
  unit: "%"
  wavelength_nm: 950
  source_label: "Rechazo infrarrojo (950NM)"
  source: SRC-TECH-SEP19
```

Copy público recomendado:

**“95% de rechazo infrarrojo medido a 950 nm, según ficha técnica.”**

---

# 11. TSER

Valores canónicos:
- IR75: 59%
- IR50: 72%
- IR35: 79%
- IR15: 87%
- IR5: 96%

Copy:
- no usar TSER como promesa de temperatura;
- no afirmar que esos porcentajes representan reducción exacta del calor interior;
- cuando sea útil, explicar que TSER es rechazo de energía solar total de la configuración de prueba/ficha.

Pendiente opcional para mayor robustez:
conseguir método de ensayo y vidrio de referencia del proveedor.

---

# 12. GARANTÍA

Las fichas técnicas de los cinco productos muestran:
**10 años**.

Pero no especifican el alcance contractual completo.

Estado:

```yaml
technical_sheet_reference: "10 años"
contractual_public_status: LEGAL_REVIEW
```

No renderizar “10 años de garantía” como garantía contractual universal hasta liberar la póliza por:
- producto;
- aplicación;
- sector;
- material;
- instalación;
- obligado;
- exclusiones;
- remedios;
- versión.

---

# 13. PRIVACIDAD

- depende de iluminación;
- puede invertirse de noche;
- no “espejo unidireccional permanente”;
- no privacidad absoluta 24/7.

---

# 14. SEGURIDAD

Sólo arquitectura.

Permitido con contexto:
- ayuda a mantener fragmentos unidos;
- puede contribuir al retardo de acceso en un sistema correctamente especificado.

Prohibido sin prueba:
- irrompible;
- antibalas;
- blindaje;
- impide robo.

---

# 15. PLATA REFLECTA

Estado:
`ACTIVE_ARCHITECTURAL / APPROVED_WITH_CONTEXT`

No generalizar:
- exterior;
- garantía;
- privacidad nocturna;
- desempeño exacto.

---

# 16. LEGALIDAD AUTOMOTRIZ — JALISCO

**Fuente específica:** `HIGHTECH_Web2_Legalidad_Automotriz_Jalisco_v0.4.md`

Estado:
`OFFICIAL_SOURCES_REVIEWED / PUBLIC_COMMUNICATION_POLICY_APPROVED_WITH_CAVEAT`

## Parabrisas

Las fuentes oficiales revisadas establecen:
- infracción por polarizado de cualquier intensidad en parabrisas;
- Reglamento: bajo ninguna circunstancia el parabrisas estará polarizado.

Por tanto:

```yaml
windshield:
  numeric_vlt_legal_threshold: null
  term_polarizado_technical_definition_found: false
  clear_solar_control_film_legal_interpretation: UNRESOLVED
  claim_IR75_is_legal: PROHIBITED
  claim_IR75_is_illegal: PROHIBITED
  legal_status_claim: UNRESOLVED
  operational_offer_policy: ACTIVE_WITH_CONTEXT
```

No publicar:
- “75% es el límite legal del parabrisas”;
- “IR75 es legal para parabrisas”;
- “IR75 es ilegal para parabrisas” como conclusión propia;
- “100% legal”;
- “sin riesgo de multa”.

La fuente normativa sí contiene una prohibición expresa de “polarizado” en parabrisas, pero las disposiciones localizadas no definen técnicamente si una película casi transparente de control solar queda necesariamente incluida en ese término. Éste es el punto interpretativo pendiente.


## Orientación directa de Tránsito — evidencia operativa

Fernando Chalita reporta consulta directa con Tránsito de Jalisco, donde se indicó como referencia práctica:

- 70–75% parabrisas
- 35% piloto/copiloto
- 20% laterales traseros y medallón

Estado:
`AUTHORITY_ORAL_GUIDANCE / ACTIVE_OPERATIONAL_REFERENCE`

No equivale a texto legal publicado, pero HIGHTECH la adopta como referencia máxima práctica de operación porque fue comunicada directamente por personal de Tránsito de Jalisco.

```yaml
measurement_basis: UNKNOWN
written_support: false
customer_guarantee_of_legality: false
```

La referencia puede usarse internamente y comunicarse al cliente **sólo con atribución y caveat**. No redactar “la ley dice 75/35/20”.


## Principio editorial de legalidad automotriz

La Web 2.0 debe mostrar las dos capas:

**Normativa publicada** → qué establece el texto oficial vigente.

**Referencia práctica de Tránsito** → 70–75 / 35 / 20, atribuida a consultas directas de HIGHTECH con personal de Tránsito.

No ocultar la segunda por exceso de cautela ni convertirla en ley por exceso de simplificación.


## Laterales / medallón

La regla estatal localizada es cualitativa:
no impedir totalmente la visibilidad hacia el interior.

No se localizaron en el articulado revisado umbrales legales 35% / 20%.

```yaml
side_rear:
  statutory_numeric_threshold: null
  rule: "no impedir totalmente visibilidad hacia el interior"
```

## Referencia 75 / 35 / 20

Se reclasifica como:
`HISTORICAL_PRACTICAL_REFERENCE / NOT_STATUTORY_VERIFIED`

No publicar como tabla legal.

## Permisos

El Reglamento contempla permiso provisional para circular con vidrios polarizados hasta por un año.

Estado:
`EXISTENCE_CONFIRMED / ELIGIBILITY_NOT_MAPPED`

No automatizar recomendación de permiso.

---

# 17. PRECIOS PÚBLICOS

**Fuente específica:** `HIGHTECH_Web2_Pricing_Visibility_Policy_v0.1.md`

Decisión de lanzamiento:

```yaml
residential:
  mode: CUSTOM_QUOTE
  public_unit_price: false

commercial:
  mode: CUSTOM_QUOTE
  public_unit_price: false

automotive:
  mode: QUOTE_BY_VEHICLE
  expose_internal_categories: false
  public_starting_price: false

pdlc:
  mode: TECHNICAL_VISIT_REQUIRED
  public_unit_price: false

specials:
  mode: CUSTOM_QUOTE
```

## Regla fiscal/publicitaria

Cualquier precio B2C que se publique en el futuro debe:
- mostrar el total en MXN con impuestos aplicables incluidos;
- no aumentar por solicitar factura;
- no aplicar comisión adicional por tarjeta;
- definir claramente el alcance.

La tarifa interna de LuzIA no se exporta directamente a Web 2.0.

---


# 17A. LEGACY CLAIM FIREWALL — WEB 1.0

**Fuente específica:** `HIGHTECH_Web2_Web1_Claims_Migration_Registry_v0.1.md`

La Web 1.0 NO es autoridad técnica, jurídica, tarifaria, de garantía ni NAP.

Puede usarse para:
- inventario de URLs;
- señales SEO históricas;
- temas/intenciones;
- identificación de activos visuales;
- rastreo de compromisos pasados.

No puede usarse para:
- copiar claims;
- recuperar garantías;
- reactivar servicios;
- recuperar nomenclaturas;
- definir cobertura territorial;
- definir antigüedad/experiencia;
- definir datos corporativos.

## Legacy Claim Blocklist

Quedan expresamente bloqueados salvo nueva evidencia/aprobación:

- “el mejor”
- “líder de la industria”
- “más confiable / respetado”
- “hasta 80% del calor” genérico
- “95% menos calor”
- “30% de ahorro”
- “se amortiza rápidamente”
- “cubrimos toda la República”
- “funciona en todo tipo de vidrio”
- analogías de ventana simple→doble→triple
- antirrobo / impedir robos
- escudo / bombas / resistencia extrema
- privacidad absoluta
- garantía de por vida o “3 años hasta toda la vida”
- reposición gratis universal
- “equipo interno” cuando no refleje operación
- “15 años de experiencia” sin evidencia aprobada

## Regla de implementación

Codex no debe importar contenido HTML/textual de Web 1.0 como seed de copy.

Todo contenido Web 2.0 se genera desde:
`publication_truth + page brief + evidence registry`.



# 17B. LEGAL PUBLICATION ARCHITECTURE

**Fuente específica:** `HIGHTECH_Web2_Legal_Publication_Readiness_v0.1.md`

Estado general:

```yaml
terms:
  architecture: BUILD_READY
  content: LEGAL_BLOCKED

privacy:
  architecture: BUILD_READY
  content: PRIVACY_BLOCKED

warranties:
  architecture: BUILD_READY
  content: WARRANTY_BLOCKED

contract_workflow:
  architecture: WORKFLOW_READY
  final_templates: LEGAL_BLOCKED
```

## Versionado obligatorio

Los documentos jurídicos públicos deben tener:
- identificador;
- versión;
- fecha efectiva;
- proveedor;
- aprobación;
- archivo inmutable.

La cotización/orden debe referenciar la **versión exacta** entregada al cliente. Una URL dinámica a los “términos actuales” no sustituye la conservación de la versión aceptada.

## Web ≠ aceptación

Abrir WhatsApp o pedir información no constituye aceptación de T&C.

La aceptación se vincula a:
- cotización exacta;
- precio total;
- T&C versión;
- garantía versión;
- anexos aplicables.

## Privacy by design

La contratación no autoriza el uso publicitario de fotos técnicas.

El uso de imágenes para proyectos, web, redes o anuncios requiere tratamiento/autorización separado cuando corresponda.


# 18. ARQUITECTURA WEB

```text
/
├ servicios/
├ residencial/
├ comercial/
├ automotriz/
├ contacto/
├ garantias/
├ peliculas/
│ ├ nanoceramica/
│ │ ├ ir75/
│ │ ├ ir50/
│ │ ├ ir35/
│ │ ├ ir15/
│ │ └ ir5/
│ ├ plata-reflecta/
│ ├ seguridad/
│ └ privacidad/
├ proyectos/
├ guias/
├ nosotros/
├ preguntas-frecuentes/
└ legal/
```

---


# 18A. PAGE BRIEF SYSTEM

**Fuente específica:** `HIGHTECH_Web2_Page_Brief_System_v0.1.md`

Cada URL de producción debe contar con un brief aprobado antes de generar copy final o código de página.

Campos mínimos:
- intención;
- usuario;
- problema;
- respuesta en primeros 5 segundos;
- evidencia;
- claims;
- dependencias;
- CTA;
- contexto WhatsApp;
- analytics;
- indexabilidad;
- canonical;
- gate de publicación.

## Tone Page Gate

Las rutas IR75 / IR50 / IR35 / IR15 / IR5 quedan en estado:

`INDEX_IF_COMPLETE`

No se indexarán cinco páginas delgadas por el simple hecho de existir cinco tonos. Si una ficha no puede aportar decisión, comparación, evidencia y contexto propios, se consolidará en el hub de nanocerámica o permanecerá noindex.

## Guía de legalidad Jalisco

Se incorpora como candidata de alta prioridad:

`/guias/polarizado-automotriz-jalisco/`

Su función será separar:
- normativa publicada;
- referencia práctica recibida directamente de Tránsito;
- explicación de VLT;
- límites de la orientación.

Estado:
`LEGAL_CONTENT_REVIEW`.


# 19. CRO

Entrada:
**problema → explicación → solución → evidencia → garantía/riesgo → CTA**

No:
producto técnico como única entrada.

---


# 19A. EVENT & ATTRIBUTION SYSTEM

**Fuente específica:** `HIGHTECH_Web2_Event_Attribution_System_v0.1.md`

## Funnel canónico

```text
visit
→ intent
→ whatsapp_started/contact
→ qualified_lead
→ quote_sent
→ sale_won
→ revenue
```

## North star

`qualified_leads_from_web`

Los clics en WhatsApp no se tratarán como ventas ni como leads calificados automáticamente.

## `lead_ref`

Cada handoff web→WhatsApp puede generar un identificador no personal:

`HT-W2-XXXXXX`

Su función es unir:
- campaña;
- página;
- intención;
- conversación;
- cotización;
- venta.

No contiene PII.

## Atribución

Guardar:
- first touch;
- conversion touch;
- self-reported source cuando exista.

No imponer una única atribución simplista.

## Privacidad

Nunca enviar a analytics:
- nombre;
- teléfono;
- correo;
- dirección;
- RFC;
- texto libre;
- placa/VIN;
- fotos;
- datos sensibles.

## Implementación

Eventos centralizados mediante una única capa `track()`. Los componentes no hablan directamente con proveedores de analytics.


# 20. WHATSAPP

Handoff contextual:
- página;
- línea;
- problema;
- producto;
- campaña.

Fallback:
- teléfono;
- correo B2B;
- ubicación cuando NAP quede liberado.

---

# 21. ANALYTICS

Eventos mínimos:
- solution_selected
- film_compared
- project_viewed
- technical_spec_opened
- warranty_viewed
- whatsapp_started
- phone_clicked
- directions_clicked

Trackers pasan por `third_party_registry`.

---

# 22. EVIDENCE REGISTRY

Todo proyecto/review/medición requiere:
- fuente;
- fecha;
- permiso;
- metodología si hay medición;
- limitaciones;
- publication_allowed.

---

# 22A. ASSETS & EVIDENCE MATRIX

**Fuente específica:** `HIGHTECH_Web2_Assets_Evidence_Matrix_v0.1.md`  
**Seed estructurado:** `HIGHTECH_Web2_Evidence_Registry_Seed_v0.1.json`

## Estado actual

```yaml
nanoceramic_technical_evidence: STRONG
brand_assets: PARTIAL_READY
commercial_project_visuals: PROMISING_METADATA_PERMISSION_PENDING
residential_case_studies: GAP
automotive_real_case_studies: GAP
verified_reviews: NOT_MAPPED
reflective_primary_evidence: GAP
security_primary_evidence: GAP
tone_specific_real_visuals: GAP
```

## Regla

Un asset nunca se convierte en evidencia pública sólo por estar disponible.

Para proyecto/testimonio/foto:

```text
authenticity
+ context
+ product mapping
+ permission
+ approved claims
= publication candidate
```

## IA / renders

Los activos generados pueden clasificarse `DECORATIVE_ONLY`.

No deben:
- aparecer como proyecto;
- presentarse como antes/después;
- probar desempeño;
- sugerir una instalación real inexistente.

## Tone pages

El inventario actual refuerza `INDEX_IF_COMPLETE`.

Las fichas técnicas sostienen especificaciones, pero por sí solas no justifican cinco páginas visual/editorialmente distintas.

## Photo permission

`asset_exists != publication_allowed`

Fotos técnicas de cotización/instalación no autorizan marketing de forma automática.

# 23. ROUTE REGISTRY / MIGRACIÓN

Mantener mapa Web 1.0 → Web 2.0.

No enviar scanner/bot junk a Home.

Cerrar redirects dudosos después de Search Console.

---

# 24. PERFORMANCE

Objetivo p75:
- LCP ≤ 2.5 s
- INP ≤ 200 ms
- CLS ≤ 0.1

---


# 24A. PERFORMANCE, ACCESSIBILITY & RELEASE GATES

**Fuente específica:** `HIGHTECH_Web2_Performance_Accessibility_Release_Gates_v0.1.md`

## Core Web Vitals

Objetivo p75 en campo, móvil y escritorio:

```yaml
LCP: <= 2.5s
INP: <= 200ms
CLS: <= 0.10
```

## Accessibility

Objetivo:
`WCAG 2.2 AA`

Incluye:
- contraste;
- teclado;
- foco visible/no oculto;
- targets;
- semántica;
- labels;
- zoom/reflow;
- reduced motion;
- pruebas manuales.

## Performance budgets internos

```yaml
initial_js_gzip: <= 160KB
initial_css_gzip: <= 60KB
font_transfer: <= 120KB
hero_mobile: <= 250KB
hero_desktop: <= 450KB
initial_mobile_transfer: <= 1.0MB
third_party_critical_path: 0
```

Estos budgets son objetivos internos y pueden endurecerse después de medir el build real.

## Resiliencia

- contenido publicado no depende del CMS en vivo;
- WhatsApp tiene fallback;
- staging protegido/noindex;
- último deployment bueno disponible;
- rollback documentado;
- smoke tests post-deploy;
- monitoreo técnico/SEO/negocio.

## Build gate

No desplegar producción si existen:
- claims bloqueados;
- garantía no aprobada renderizada;
- canonical crítico incorrecto;
- redirect loop;
- secrets;
- broken critical links;
- staging config;
- fallos de typecheck/tests críticos.


# 25. ACCESIBILIDAD

Objetivo:
WCAG 2.2 AA.

---

# 26. MODELO DE DATO TÉCNICO

```yaml
product_id: IR50
commercial_name: IR50
technical_source_name: NANO-50
specs:
  vlt:
    value: 48
    unit: "%"
    source: SRC-TECH-SEP19
  uv_rejection:
    value: 99
    unit: "%"
    source: SRC-TECH-SEP19
  infrared_rejection:
    value: 95
    unit: "%"
    wavelength_nm: 950
    source: SRC-TECH-SEP19
  tser:
    value: 72
    unit: "%"
    source: SRC-TECH-SEP19
warranty:
  technical_sheet_reference: "10 años"
  public_contractual_status: LEGAL_REVIEW
```

---

# 27. CONFLICT REGISTER v0.3

## C-01 IR20 vs IR15
Resuelto: IR15.

## C-02 UV 99.9 vs 99
Resuelto para Web 2.0: 99%.

## C-03 TSER
Resuelto documentalmente: fuente visual recuperada.

## C-04 “IRR 95%”
Corregido: 95% de rechazo infrarrojo **a 950 nm**.

## C-05 Garantía 10 años
Referencia técnica confirmada; alcance contractual aún en LEGAL_REVIEW.

## C-06 NAP
Tomás Mann = referencia operativa vigente.
El sitio público aún muestra Justo Sierra 3184 y existe un segundo perfil público con Salvador Madariaga 5058.
Estado: `NAP_RECONCILIATION_REQUIRED`.

## C-07 Highclear
Inactivo.

## C-08 NANO+70
Fuente recuperada pero no mapeada a catálogo actual. No publicar.

---


## C-09 Regla 75 / 35 / 20
**Actualizado:** no aparece como tabla numérica en las normas escritas revisadas, pero Dirección reporta que fue comunicada directamente por Tránsito de Jalisco.
Estado: `AUTHORITY_ORAL_GUIDANCE / ACTIVE_OPERATIONAL_REFERENCE`.
Puede comunicarse con atribución y utilizarse como referencia comercial activa; no como “la ley establece” ni como garantía absoluta de ausencia de sanción.

## C-10 IR75 en parabrisas
**Corregido:** la norma prohíbe “polarizado” en parabrisas, pero no se localizó definición técnica que resuelva si una película clara de control solar constituye jurídicamente polarizado.
Estado: `LEGAL_INTERPRETATION_UNRESOLVED`.
No declarar ni legalidad ni ilegalidad específica de IR75 sin criterio suficiente.

# 28. OPEN ITEMS ACTUALIZADOS

### Resueltos
- `TECH-01` fuente del 19-sep localizada
- `TECH-02` UV canónico 99%
- `TECH-03` TSER documentado
- `TECH-04` contexto de rechazo IR identificado: 950 nm

### Producción — bloqueadores
- garantías contractuales y Warranty Matrix publicable;
- T&C finales y versionados;
- aviso de privacidad, ARCO, conservación y terceros;
- NAP y posible perfil público duplicado/legacy;
- release técnico, redirects, DNS/email, QA y rollback.

### Ruta/función — pendientes
- permisos/evidencias de proyectos;
- reviews verificadas;
- evidencia adicional de Reflecta/Seguridad;
- tone pages sólo si pasan `INDEX_IF_COMPLETE`.

### Investigación no bloqueante
- método/estándar de ensayo del TSER;
- cristal de referencia de ficha.

### Backlog post-lanzamiento
- posible precio automotriz “desde” una vez exista lista B2C final;
- optimización continua con Search Console tras sitemap/lanzamiento.

### Legalidad automotriz
La referencia 75/35/20 ya está activa para comunicación atribuida. Sigue sin resolverse una conclusión jurídica categórica sobre IR75 en parabrisas.

---

# 28A. LAUNCH READINESS AUDIT

**Fuente específica:** `HIGHTECH_Web2_Launch_Readiness_Audit_v0.1.md`

## Gate actual

```yaml
pre_code_gate: PASS
implementation: APPROVED_TO_BEGIN
public_production: NOT_APPROVED_YET
```

## Implicación

Ya puede comenzar:
- repositorio;
- stack;
- design system;
- CMS schemas;
- route skeletons;
- componentes;
- staging;
- páginas core.

Las decisiones abiertas se cierran en paralelo.

## P0 antes de producción

```text
LEGAL
+ PRIVACY
+ WARRANTY
+ NAP
+ MIGRATION
+ RELEASE QA
= production candidate
```

## Route-specific gates

No bloquean todo el sitio:
- proyectos;
- reviews;
- páginas individuales IR;
- claims fuertes de Reflecta/Seguridad.

Pueden permanecer ocultos/noindex hasta reunir evidencia.

## Legalidad Jalisco

La referencia 75/35/20 queda:
`ACTIVE_OPERATIONAL_REFERENCE / PUBLIC_WITH_ATTRIBUTION`

La conclusión jurídica específica sobre IR75 en parabrisas queda:
`UNRESOLVED`

No confundir ambos estados.

# 28B. TRUST + CONVERSION INFRASTRUCTURE

**Implementación:** `HIGHTECH_Web2_Starter_v0.6`

## Nosotros

La página de confianza puede publicar:
- HIGHTECH Polarizados;
- Fernando Chalita como Director;
- metodología de diagnóstico → recomendación → cotización → instalación;
- prioridad residencial/comercial;
- automotriz como línea atendida en taller;
- especificaciones técnicas ya liberadas con contexto.

No publicar sin nueva evidencia:
- antigüedad/“15+ años”;
- liderazgo de mercado;
- superioridad absoluta;
- “equipo interno” como descripción de estructura si no corresponde a la operación real.

## Contacto

```yaml
phone: PUBLICATION_APPROVED
email_sales: PUBLICATION_APPROVED
location_label: "Zapopan, Jalisco"
exact_address: NAP_GATE
map_and_directions: NAP_GATE
public_hours: NAP_GATE_UNTIL_RECONCILED
```

La instalación automotriz conserva:
`WORKSHOP_ONLY`.

Para iniciar cotización pueden solicitarse, según línea:
- arquitectura: fotos, medidas aproximadas y objetivo;
- automotriz: marca, modelo, año y alcance de cristales.

## FAQ

Las respuestas deben ser breves y enlazar a la página profunda cuando exista.
No duplicar guías completas ni introducir garantías, precios o interpretaciones legales nuevas.

## Proyectos

```yaml
projects_public: false
publication_gate:
  - authentic_assets
  - product_mapping
  - real_context
  - demonstrable_result
  - privacy_review
  - marketing_permission
```

Un candidato interno no genera automáticamente una URL pública.

## Reviews

```yaml
reviews_public: false
verified_source_feed: NOT_MAPPED
```

No publicar estrellas, conteos ni citas hasta contar con fuente verificable y autorización/política de uso aplicable.

## Migración / redirects

Los redirects se gestionan mediante un registry versionado.
Un redirect sólo pasa a activo cuando:
- su fuente es única;
- el destino existe y es apropiado;
- no crea cadena/loop;
- la ruta destino puede recibir tráfico;
- su dependencia SEO/GSC, cuando exista, está resuelta.

`/gallery/ → /proyectos/` permanece detrás del gate de Proyectos mientras esa ruta no sea pública/indexable.

## Indexabilidad

`/garantias/` no debe entrar al sitemap mientras la Warranty Matrix pública siga bloqueada.

# 29. REGLA FINAL

No basta con que una cifra aparezca en una imagen.

Web 2.0 debe saber:
- qué producto representa;
- si el nombre técnico y comercial son distintos;
- qué mide realmente;
- bajo qué condición;
- qué no significa;
- si es dato técnico o compromiso contractual.

**La precisión forma parte del posicionamiento premium de HIGHTECH.**
