# HIGHTECH Web 2.0 — Pricing Visibility & Quote Policy v0.1

**Fecha:** 27 de septiembre de 2026  
**Objeto:** definir qué precios puede mostrar Web 2.0, qué precios permanecen internos y cómo debe presentarse cualquier importe al consumidor.  
**Estado:** política de arquitectura y CRO. Los importes internos siguen gobernados por la fuente comercial vigente y por las correcciones jurídicas/fiscales posteriores.

---

## 1. Hallazgo crítico previo

La fuente comercial de LuzIA v1.3 todavía registra los importes automotrices como precios base para efectivo/transferencia y añade 16% cuando se paga con tarjeta o se solicita factura.

La revisión jurídica v0.5 corrige expresamente esa lógica:

- el precio total al consumidor debe mostrar impuestos y cargos aplicables incluidos;
- el IVA no depende de solicitar factura;
- no debe existir comisión adicional por pagar con tarjeta;
- la cotización/orden debe mostrar total y desglose.

Por tanto, **los importes internos actuales no se pueden copiar directamente a Web 2.0 como precios públicos B2C hasta que se conviertan en una lista final de precios al consumidor con impuestos correctamente tratados.**

---

## 2. Principio de precios Web 2.0

La web separa cuatro conceptos:

```yaml
internal_rate:
  purpose: operación/cotización
  public: false

public_price:
  purpose: precio mostrado al consumidor
  tax_inclusive: true
  approval_required: true

starting_price:
  purpose: orientación comercial
  tax_inclusive: true
  scope_required: true

custom_quote:
  purpose: proyectos variables
  public_numeric_price: false
```

**Una tarifa interna nunca se convierte automáticamente en precio público.**

---

# 3. RESIDENCIAL

## Decisión
`NO_PUBLIC_M2_PRICE`

### Razón
El precio real puede depender de:
- película;
- medidas;
- cantidad;
- tipo/condición de vidrio;
- interior/exterior;
- altura/acceso;
- retiro;
- compatibilidad;
- ubicación/logística;
- condiciones especiales.

Publicar “$X/m²” como precio principal puede:
- generar cotizaciones engañosas;
- convertir una tarifa interna en promesa;
- hacer parecer commodity una venta consultiva;
- crear conflicto cuando el proyecto requiere acceso, retiro o solución distinta.

### Qué mostrar en vez de precio

> **Cotizamos según tus cristales y el objetivo del proyecto.**  
> Envíanos medidas aproximadas o fotografías y te ayudamos a definir la solución antes de preparar la cotización.

### CTA
`Cotizar mis cristales`

### Microcopy útil
> No necesitas saber qué película elegir. Primero revisamos qué quieres resolver.

---

# 4. COMERCIAL / INSTITUCIONAL

## Decisión
`NO_PUBLIC_UNIT_PRICE`

No mostrar:
- $/m² general;
- descuentos por volumen;
- costos de instaladores;
- costos internos;
- mínimos internos;
- márgenes;
- tarifas institucionales especiales.

### Razón
En B2B cambian:
- metraje;
- accesos;
- horarios;
- logística;
- documentación;
- múltiples ubicaciones;
- requisitos de seguridad;
- levantamiento;
- condiciones fiscales/contractuales.

### CTA
`Revisar mi proyecto`

La web puede ofrecer:
- revisión de planos;
- levantamiento;
- ficha técnica;
- evaluación de muestras;
- cotización formal.

---

# 5. AUTOMOTRIZ

## 5.1 Estado actual

HIGHTECH sí tiene un motor tarifario bastante estandarizado por vehículo/configuración.

La fuente comercial vigente registra internamente:

- Chico
- Estándar
- Grande
- excepciones exactas
- vans/Tesla/configuraciones especiales

Pero esas categorías son **internas**.

## 5.2 Decisión para lanzamiento

`NO_EXPOSE_INTERNAL_CATEGORIES`

No mostrar al cliente:

```text
Chico
Estándar
Grande
Especial
```

como tabla pública de precios.

### Razón
El usuario no debería tener que clasificarse y puede interpretar incorrectamente:
- SUV = Grande;
- coupé = Chico;
- lujo = recargo;
- menos ventanas = menor precio.

El motor vigente expresamente evita varias de esas inferencias.

---

## 5.3 Recomendación Web 2.0

### Lanzamiento
`QUOTE_BY_VEHICLE`

CTA:
**Cotizar mi vehículo**

El handoff a WhatsApp envía:
- marca;
- modelo;
- año cuando sea necesario;
- alcance deseado;
- retiro si aplica;
- parabrisas/techo si pregunta.

El motor comercial devuelve el precio correcto.

### Fase posterior opcional
Podemos construir un cotizador web si:
- consume el mismo motor canónico;
- no duplica precios en código;
- maneja excepciones exactas;
- muestra impuestos incluidos;
- registra fecha/vigencia;
- termina en una cotización confirmable, no en una promesa ambigua.

---

# 6. ¿MOSTRAR “DESDE…” EN AUTOMOTRIZ?

## Decisión actual
`NOT_AT_LAUNCH`

No porque sea mala estrategia, sino porque todavía falta reconciliar la tarifa B2C con impuestos.

Después de tener lista final aprobada puede evaluarse:

> “Polarizado nanocerámico automotriz desde $X MXN, impuestos incluidos.”

Condiciones mínimas:
- precio real disponible para una configuración común;
- alcance exacto visible;
- impuestos incluidos;
- no usar un precio de excepción rara para atraer;
- fecha/vigencia;
- enlace directo a cotización.

---

# 7. PARABRISAS

No publicar por ahora un precio aislado de parabrisas junto con un claim de “legalidad”.

Si se mantiene comercialmente como aplicación:
- se muestra como opción de alta claridad/control solar;
- se aplica la política de legalidad Jalisco v0.4;
- la cotización se entrega por vehículo;
- cualquier precio público futuro debe incluir impuestos y alcance.

---

# 8. PDLC

La fuente comercial vigente registra una referencia preliminar de $7,500/m² y visita técnica obligatoria.

Para Web 2.0:

```yaml
pdlc_public_price:
  status: NOT_AT_LAUNCH
```

Razones:
- producto todavía no tiene paquete público consolidado;
- garantía por componentes está pendiente;
- visita técnica obligatoria;
- alcance eléctrico puede modificar proyecto;
- porcentaje de anticipo final se define por proyecto.

No usar $7,500/m² como headline público hasta que PDLC sea liberado como línea completa.

---

# 9. PLATA REFLECTA / SEGURIDAD / EXTERIOR

Decisión:
`CUSTOM_QUOTE`

No mostrar precio fijo ni rango hasta contar con:
- SKU;
- aplicación;
- garantía;
- compatibilidad;
- tratamiento fiscal;
- alcance.

---

# 10. IMPUESTOS Y FORMA DE PAGO

## Regla de Web 2.0

Si Web 2.0 muestra un precio dirigido al consumidor:

```yaml
currency: MXN
tax_included: true
card_surcharge: false
invoice_surcharge: false
```

Copy recomendado:

> **Precio final en MXN, impuestos incluidos.**

No mostrar:
- “más IVA” como precio principal B2C;
- “+16% con tarjeta”;
- “+16% si requiere factura”.

### Nota
El tratamiento fiscal/contable concreto debe quedar validado antes de crear la tabla final de precios públicos.

---

# 11. PRECIOS EN SEO

No crear páginas artificiales del tipo:
- “polarizado barato Guadalajara”;
- “precio polarizado por metro”;
- “polarizado más barato”.

Sí pueden existir guías útiles como:

**“¿Cuánto cuesta instalar película de control solar?”**

pero deben explicar factores reales, no publicar una tabla interna disfrazada de contenido SEO.

---

# 12. FAQ DE PRECIO

### “¿Cuánto cuesta polarizar mi casa?”

> El precio depende de las medidas, la película adecuada, el tipo de cristal y las condiciones de instalación. Si nos compartes medidas aproximadas o fotos, podemos orientarte y preparar una cotización según tu proyecto.

### “¿Cuánto cuesta mi auto?”

> El precio depende del vehículo y del alcance que quieras instalar. Compártenos marca y modelo y te damos la cotización correspondiente con la película nanocerámica HIGHTECH e instalación en taller.

### “¿Por qué no ponen precio por metro?”

> Porque dos proyectos con el mismo metraje pueden requerir películas, accesos o condiciones de instalación diferentes. Preferimos cotizar el sistema que realmente corresponde a tus cristales.

---

# 13. MODELO DE DATOS

```yaml
pricing_policy:
  residential:
    mode: CUSTOM_QUOTE
    public_unit_price: false

  commercial:
    mode: CUSTOM_QUOTE
    public_unit_price: false

  automotive:
    mode: QUOTE_BY_VEHICLE
    expose_internal_categories: false
    public_starting_price:
      enabled: false
      future_candidate: true

  pdlc:
    mode: TECHNICAL_VISIT_REQUIRED
    public_unit_price: false

public_price_rule:
  tax_inclusive: true
  card_surcharge: false
  invoice_surcharge: false
```

---

# 14. ANALYTICS

Agregar:

- `quote_started`
- `quote_context`
- `price_question_clicked`

No registrar datos personales innecesarios en analytics.

Útil para medir:
- cuántos usuarios buscan precio;
- desde qué página;
- qué línea de negocio;
- qué porcentaje abre WhatsApp después.

---

# 15. GATE PARA MOSTRAR UN PRECIO

Un precio sólo puede hacerse público cuando:

- [ ] existe en la tarifa vigente;
- [ ] está aprobado para exposición pública;
- [ ] incluye impuestos aplicables;
- [ ] no cambia por pedir factura;
- [ ] no tiene recargo por tarjeta;
- [ ] alcance está definido;
- [ ] excepciones están controladas;
- [ ] vigencia está definida;
- [ ] CTA lleva al mismo motor de cotización;
- [ ] legal/fiscal no tiene conflicto.

---

# 16. DECISIÓN FINAL DE LANZAMIENTO

### Residencial
**Sin precio público.**

### Comercial
**Sin precio público.**

### Automotriz
**Cotización por vehículo; no mostrar tabla interna.**

### PDLC
**Sin precio público en lanzamiento.**

### Plata Reflecta / Seguridad / Especiales
**Cotización por proyecto.**

Esto no significa esconder el precio.

Significa que la web debe llevar al usuario al punto más corto donde HIGHTECH pueda darle **un precio correcto**, no un número atractivo pero incompleto.
