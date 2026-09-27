# HIGHTECH Web 2.0 — Legal Publication Readiness Matrix v0.1

**Fecha:** 27 de septiembre de 2026  
**Fuente jurídica de trabajo:** `HIGHTECH_Paquete_Work_v0.5.md`  
**Estado:** arquitectura de publicación y cierre. No sustituye la liberación final del abogado.

---

# 1. Resultado ejecutivo

Web 2.0 puede construir desde ahora la **arquitectura jurídica**, pero todavía no debe tratar los textos jurídicos de la v0.5 como documentos B2C definitivos.

La separación correcta es:

```text
WEB PÚBLICA
├── términos vigentes
├── aviso de privacidad vigente
├── garantías vigentes
└── información de contacto/reclamaciones

CONTRATACIÓN
├── cotización/orden exacta
├── T&C versión exacta
├── garantía versión exacta
├── anexo técnico aplicable
├── condiciones particulares aplicables
└── aceptación atribuible

ARCHIVO
└── copia inmutable de todo lo anterior por folio
```

---

# 2. Semáforo de publicación

| Pieza | Arquitectura web | Texto definitivo | Estado |
|---|---|---|---|
| `/legal/terminos-y-condiciones/` | Lista para construir | Pendiente liberación jurídica | `BUILD_READY / LEGAL_BLOCKED` |
| `/legal/aviso-de-privacidad/` | Lista para construir | Pendiente datos/privacidad | `BUILD_READY / PRIVACY_BLOCKED` |
| `/garantias/` | Lista para construir | Parcial; garantía por SKU pendiente | `BUILD_READY / WARRANTY_BLOCKED` |
| Cotización/orden | Estructura definida | Plantilla final pendiente | `WORKFLOW_READY / LEGAL_BLOCKED` |
| Anexo técnico | Estructura definida | Requiere producto/aplicación | `PARTIAL` |
| Condiciones particulares | Estructura definida | Por escenario | `PARTIAL` |
| Orden de cambio | Estructura definida | Revisión final pendiente | `PARTIAL` |
| Comprobante final | Estructura definida | Revisión final pendiente | `PARTIAL` |
| Reclamaciones | Flujo definido | Responsables/SLA pendientes | `PARTIAL` |

---

# 3. TÉRMINOS Y CONDICIONES

## Lo que ya está suficientemente estructurado

La v0.5 ya contempla:

- identidad del proveedor;
- folio;
- objeto y documentos contractuales;
- cotización con vigencia;
- aceptación electrónica atribuible;
- medidas/especificaciones;
- precio total;
- cambios;
- condición previa del vidrio;
- compatibilidad;
- exterior/CPE;
- PDLC;
- cancelación/revocación;
- garantía;
- reclamaciones/remedios;
- datos/fotografías;
- terminación;
- controversias;
- recepción automotriz.

## Lo que BLOQUEA publicación final

### TNC-01 — Identidad incompleta
Faltan o deben confirmarse:
- RFC;
- domicilio fiscal;
- domicilio formal de atención/reclamaciones;
- proveedor final por fecha de corte;
- posible RPCA sólo si procede y se obtiene.

### TNC-02 — RPCA / NOM
La v0.5 no declara cerrado si cada modelo debe registrarse ni acredita registro obtenido.

### TNC-03 — Cancelación
La política comercial propuesta debe ser aprobada y revisada jurídicamente para cada modalidad.

### TNC-04 — Garantías
Los T&C no pueden referirse a una matriz de garantías todavía incompleta.

### TNC-05 — Transición societaria
No se puede sustituir al proveedor actual por HT PRODUCTS MX, S.A. de C.V. sin fecha de corte e instrumentos reales.

---

# 4. GARANTÍAS

## Arquitectura pública correcta

`/garantias/` será un **hub de consulta**, no una frase genérica.

Cada garantía publicable tendrá:

```yaml
warranty_id:
version:
effective_from:
provider:
product_id:
sku:
application:
interior_exterior:
material_term:
installation_term:
start_event:
covered_defects:
causal_exclusions:
remedies:
removal:
reinstallation:
transport:
access_equipment:
claim_channel:
care_instructions:
legal_source:
technical_source:
publication_status:
```

## Cobertura base candidata respaldada por v0.5

La fuente candidata contempla defectos según producto como:
- desprendimiento;
- delaminación;
- pérdida anormal de adhesión;
- burbuja persistente que no sea secado normal;
- cambio anormal de color;
- defecto de corte/instalación.

La causa se revisa y las exclusiones deben tener relación causal con el daño.

## Bloqueos actuales

- 10 años nano automotriz: referencia documentada, póliza completa pendiente.
- 10 años nano arquitectónica: referencia histórica/técnica, alcance pendiente.
- 5 años seguridad 4 mil: referencia pendiente de SKU/cobertura.
- Reflecta: plazo por definir.
- Exterior: por SKU/proyecto.
- PDLC: por componente.
- CPE: propuesta, no liberada.
- instalación 1 año: **propuesta empresarial**, no política adoptada automáticamente.

---

# 5. PRIVACIDAD

## Lo que ya está definido conceptualmente

La contratación y operación puede requerir datos para:
- cotizar;
- ejecutar;
- facturar;
- atender garantía;
- defender derechos.

Las fotos técnicas se separan del uso publicitario.

La contratación **no autoriza marketing de imágenes**.

## Lo que falta para publicar aviso integral

### PRIV-01 — Responsable
Confirmar:
- nombre/razón social;
- RFC cuando corresponda;
- domicilio;
- fecha de cambio si entra la sociedad.

### PRIV-02 — Canal ARCO
Definir canal real y operable.

### PRIV-03 — Inventario de datos
Separar:
- prospecto;
- cliente;
- vehículo;
- inmueble;
- fiscal;
- pagos;
- fotografías;
- chat;
- garantía/reclamación;
- marketing.

### PRIV-04 — Finalidades
Separar:
- necesarias;
- secundarias/marketing.

### PRIV-05 — Encargados / plataformas
Inventariar realmente:
- hosting;
- CMS;
- analytics;
- WhatsApp/Meta;
- correo;
- almacenamiento;
- facturación;
- proveedores de evidencia;
- otras integraciones.

### PRIV-06 — Transferencias
No inventarlas. Documentar las que realmente existan.

### PRIV-07 — Conservación
La v0.5 deja pendiente una matriz por categoría; no usar un plazo universal.

### PRIV-08 — Fotografías
Crear autorización separada para publicación/marketing.

---

# 6. EXPERIENCIA DE USUARIO JURÍDICA

La web NO debe obligar al visitante a leer un contrato para entender un producto.

Debe trabajar en tres niveles:

## Nivel 1 — información comercial clara
Producto, beneficios comprobables, límites, aplicación, CTA.

## Nivel 2 — resumen de confianza
Garantía aplicable, proceso, cuidados y restricciones relevantes.

## Nivel 3 — documento completo
T&C, póliza y aviso completos/versionados.

---

# 7. VERSIONADO — REQUISITO CRÍTICO

La URL pública “actual” puede cambiar, pero una contratación pasada no.

Modelo:

```yaml
legal_document:
  document_id: TERMS-B2C-ARCH
  version: "2026.10.01"
  effective_from:
  effective_to:
  provider_id:
  status:
  html_current_url:
  immutable_pdf_url:
  checksum:
  approved_by:
  approval_date:
  supersedes:
```

## Regla

La cotización no dirá únicamente:

> “Aplican los términos publicados en nuestra página.”

Debe identificar:

> `Términos y Condiciones v2026.10.01`

y conservar copia o archivo inmutable de esa versión.

---

# 8. FLUJO WEB → WHATSAPP → CONTRATO

## Prospecto
Puede navegar sin aceptar T&C contractuales.

## Captura de datos
Antes o al obtener datos:
- aviso simplificado;
- acceso al integral.

## Cotización final
Se envía:
- Q-[folio/version];
- total;
- T&C versión;
- garantía versión;
- anexos aplicables.

## Aceptación
Debe poder atribuirse a esa oferta exacta.

No usar como aceptación suficiente por sí sola:
- visto;
- silencio;
- emoji;
- pulgar ambiguo;
- comprobante aislado.

La v0.5 expresamente plantea una aceptación contextual y trazable.

## Acuse
Conservar:
- fecha;
- hora;
- zona;
- versión;
- documentos.

---

# 9. ¿QUÉ DEBE ESTAR EN EL FOOTER?

Siempre:

- HIGHTECH Polarizados;
- Contacto;
- Garantías;
- Términos y Condiciones;
- Aviso de Privacidad.

No saturar el footer con lenguaje contractual.

---

# 10. ¿QUÉ DEBE ESTAR JUNTO A LOS CTA?

## WhatsApp comercial
No requiere una casilla “acepto T&C” sólo para preguntar.

### Microcopy de privacidad
Cuando la web envíe datos estructurados o tenga formulario:

> “Usaremos tus datos para atender tu solicitud conforme a nuestro Aviso de Privacidad.”

## Contratación
La aceptación contractual ocurre sobre la cotización/documentos concretos, no simplemente por hacer clic en WhatsApp.

---

# 11. RECLAMACIONES / GARANTÍA

La web debe hacer fácil encontrar cómo reclamar.

No esconderlo exclusivamente dentro de T&C.

Mínimo:

- canal de WhatsApp;
- correo/canal aprobado;
- información que ayuda a identificar el trabajo;
- qué sucede después.

No exigir públicamente documentos no aprobados como condición absoluta de derechos.

---

# 12. FOTOGRAFÍAS Y PROYECTOS

Separar dos permisos:

```text
A) Foto técnica
→ cotización / ejecución / evidencia / garantía

B) Uso comercial
→ web / redes / anuncios / portafolio
```

B no se presume por A.

El Evidence Registry sólo permite publicar activos con autorización correspondiente.

---

# 13. DECISIONES EMPRESARIALES QUE SIGUEN ABIERTAS

Tomadas directamente de la lógica F de la v0.5:

- responsables y canales;
- garantías por SKU;
- quién asume/financia remedio;
- catálogo técnico autorizado;
- cancelación comercial;
- metas de atención;
- cobranza;
- solución de evidencia/conservación;
- uso publicitario de imágenes;
- transición societaria.

Estas decisiones no deben ser “rellenadas” por Codex ni por el CMS.

---

# 14. DECISIONES QUE NECESITAN ABOGADO / ESPECIALISTA

- clasificación NOM / RPCA;
- texto final de modelos;
- tratamiento exacto de revocación;
- artículo 83 aplicado a paño/pieza/sistema;
- garantías y remedios;
- privacidad/conservación/transferencias;
- NOM-151/evidencia;
- transición PF → sociedad;
- regularización histórica;
- dictamen final de liberación.

---

# 15. IMPLEMENTACIÓN CMS

Codex/Sanity debe impedir:

### Publicar un documento jurídico si:
- `status != APPROVED_FOR_PRODUCTION`;
- no tiene versión;
- no tiene fecha efectiva;
- no tiene proveedor;
- no tiene aprobador;
- no tiene archivo inmutable.

### Publicar una garantía si:
- falta producto/SKU;
- falta aplicación;
- falta plazo;
- falta obligado;
- falta versión;
- falta aprobación jurídica.

---

# 16. PÁGINAS QUE SÍ PODEMOS DISEÑAR YA

Aunque el copy jurídico final siga bloqueado, podemos construir en staging:

### `/garantias/`
- selector por línea/producto;
- resumen;
- documento completo;
- canal de reclamación.

### `/legal/terminos-y-condiciones/`
- documento vigente;
- proveedor;
- versión/fecha;
- descarga;
- archivo histórico cuando proceda.

### `/legal/aviso-de-privacidad/`
- aviso;
- responsable;
- ARCO;
- versión/fecha.

Los datos sensibles permanecen en placeholders hasta liberación.

---

# 17. GATE DE PUBLICACIÓN LEGAL

Antes de producción:

- [ ] proveedor legal completo;
- [ ] RFC/domicilios;
- [ ] decisión RPCA/NOM;
- [ ] T&C aprobados;
- [ ] aviso de privacidad aprobado;
- [ ] canal ARCO operativo;
- [ ] Warranty Matrix por líneas lanzadas;
- [ ] garantía(s) aprobadas;
- [ ] política de cancelación aprobada;
- [ ] workflow cotización/aceptación probado;
- [ ] versiones inmutables generadas;
- [ ] integridad/archivo definidos;
- [ ] fotografía/marketing separado;
- [ ] transición societaria resuelta o explícitamente no activada;
- [ ] prueba de punta a punta con un expediente ficticio;
- [ ] dictamen A14 de liberación.

---

# 18. DECISIÓN DE ARQUITECTURA

**No bloquear el diseño/desarrollo de las páginas legales.**

Sí bloquear:
- copy contractual definitivo;
- publicación B2C;
- garantías no liberadas;
- referencias a registros inexistentes.

Esto permite avanzar Web 2.0 sin fingir que ya terminó el trabajo jurídico.

---

# 19. REGLA FINAL

La web sirve para consultar la versión vigente.

El expediente de cada cliente conserva la versión que realmente aceptó.

**La web puede cambiar. El contrato aceptado no.**
