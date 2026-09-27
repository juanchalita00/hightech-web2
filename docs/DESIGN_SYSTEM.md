# HIGHTECH Web 2.0 — Design System v0.1

**Incremento:** Starter v0.2  
**Estado:** foundation implementada en código; browser/performance QA pendiente de runtime Next.

## Dirección visual

HIGHTECH debe sentirse:
- técnico;
- premium;
- arquitectónico;
- claro;
- contemporáneo;
- confiable;
- sin estética genérica de taller de polarizado.

La UI utiliza blanco y azul profundo como base. Los colores cálidos/rojos/amarillos del logo se reservan para microacentos de espectro, no para llenar la interfaz.

## Principios

1. Problema antes que producto.
2. Datos técnicos con contexto.
3. Mucho aire visual y jerarquía fuerte.
4. Cristal/transparencia como lenguaje gráfico, no “vidrio oscuro” por defecto.
5. Motion opcional; la información funciona sin animación.
6. CTA claro a WhatsApp sin popups agresivos.
7. Evidencia real sólo cuando esté autorizada.
8. Renders/IA nunca se disfrazan de proyecto real.

## Tokens principales

```text
ink            #101528
ink-soft       #555F75
surface        #FFFFFF
surface-alt    #F5F7FB
surface-blue   #EEF3FF
brand          #27346F
brand-deep     #111A3B
brand-night    #090F25
accent         #4267FF
accent-soft    #DBE5FF
line           #DFE4EE
```

Container máximo: `76rem`.

Radios:
- small: `.75rem`
- medium: `1.125rem`
- large: `1.625rem`
- xlarge: `2.25rem`

## Tipografía

La implementación actual usa system UI/Inter fallback para no bloquear performance.

- H1: clamp 3.2rem → 6.55rem desktop.
- H2: clamp 2.2rem → 4rem.
- Letter-spacing negativo moderado en display headings.
- Texto de cuerpo con line-height amplio.

No introducir una fuente externa hasta medir costo/beneficio y contar con licenciamiento adecuado.

## Componentes añadidos

- `BrandLogo`
- `Icon`
- `SiteHeader` responsive
- `HomeHero`
- `ProblemGrid`
- `JourneyCards`
- `NanoSpectrum`
- `ProcessSteps`
- `SiteFooter` renovado

## Home

Secuencia implementada:

```text
Hero
→ trust strip
→ problemas
→ residencial/comercial/automotriz
→ nanocerámica + tonos
→ metodología HIGHTECH
→ bloque técnico/contextual
→ CTA final
```

No se incluyen todavía:
- reviews;
- logos de clientes;
- casos de éxito;
- garantías contractuales;
- precios;
porque sus gates no están liberados.

## Responsive

Breakpoints principales:
- 1020px
- 760px
- 460px

Móvil:
- navegación con `<details>` sin dependencia de JS;
- CTA hero full-width;
- cards a una columna;
- trust strip horizontal desplazable;
- targets primarios de al menos 44px;
- layout de hero sin transform 3D;
- reduced motion respetado.

## Performance intent

El hero de “cristal” se construye con CSS y no descarga una fotografía hero adicional.

El único asset gráfico crítico del header es el logo optimizado/tight:
`/public/brand/hightech-logo-tight.png`

No se agregaron:
- librerías de iconos;
- librerías de motion;
- carruseles;
- videos;
- trackers;
- fuentes remotas.

## Evidencia y claims

Home consume los datos nano desde `content/publication-truth.json` mediante `truth`.

No hardcodear versiones alternativas de:
- VLT;
- UV;
- IR;
- TSER;
fuera de la fuente canónica cuando el componente pueda consumir datos estructurados.

## QA pendiente

Cuando haya runtime Next:
- `next build`;
- screenshot desktop/mobile real;
- Chrome/Safari device QA;
- Lighthouse;
- axe;
- contrast check final;
- bundle analyzer;
- CWV field/RUM después del lanzamiento.
