# HIGHTECH Web 2.0 — Application Pages v0.3

## Objetivo

Construir Residencial, Comercial y Automotriz con un solo design system sin convertirlas en páginas clonadas.

## Lenguaje compartido

- blanco + azul profundo HIGHTECH;
- bordes suaves y cristal/transparencia;
- CTAs redondeados;
- jerarquía editorial;
- datos técnicos desde `publication_truth`;
- mobile-first;
- claims con contexto.

## Diferenciación

### Residencial

**Idea:** el espacio primero.  
**Visual:** ventana, luz, arquitectura.  
**Decisión:** orientación + vidrio + luz + privacidad.  
**Conversión:** fotos/medidas → recomendación → cotización.

### Comercial

**Idea:** el cristal forma parte de la operación del edificio.  
**Visual:** fachada modular.  
**Decisión:** desempeño + compatibilidad + operación + acceso.  
**Conversión:** alcance/proyecto → especificación → coordinación → cotización.

### Automotriz

**Idea:** elegir cuánto quieres ver, no sólo cuánto oscurecer.  
**Visual:** silueta de vehículo y cristales.  
**Decisión:** VLT + privacidad + uso nocturno + control solar.  
**Conversión:** vehículo → tono → retiro si aplica → instalación en taller.

## Legalidad Jalisco

El componente `JaliscoReference` consume los valores desde `publication_truth`:

- parabrisas: 70–75%;
- piloto/copiloto: 35%;
- parte trasera: 20%.

Estado:
`ACTIVE_OPERATIONAL_REFERENCE`.

Siempre debe incluir:
- atribución a consultas directas con personal de Tránsito de Jalisco;
- diferenciación frente a la normativa publicada;
- ausencia de garantía de que todos los agentes apliquen el mismo criterio.

No renderizar:
- “la Ley establece 75/35/20”;
- “IR75 es 100% legal”;
- “no te pueden multar”.

## Technical truth

Automotriz y Residencial reutilizan la gama nano de `content/publication-truth.json`.

No duplicar manualmente VLT/UV/IR/TSER dentro de componentes nuevos.

## Próximo incremento

La siguiente capa recomendada es:

```text
/peliculas/
/peliculas/nanoceramica/
/peliculas/plata-reflecta/
/peliculas/seguridad/
/peliculas/privacidad/
```

con un Product/Technology System reutilizable.
