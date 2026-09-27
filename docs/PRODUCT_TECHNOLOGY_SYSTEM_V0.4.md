# HIGHTECH Web 2.0 — Product / Technology System v0.4

## Alcance

Esta iteración convierte la biblioteca de películas en un sistema reutilizable y verificable, apoyado en `publication-truth.json`.

## Rutas construidas

- `/peliculas/`
- `/peliculas/nanoceramica/`
- `/peliculas/nanoceramica/[tone]/`
- `/peliculas/plata-reflecta/`
- `/peliculas/seguridad/`
- `/peliculas/privacidad/`

## Componentes nuevos

- `ProductHero`
- `TechnologyMatrix`
- `MetricExplainer`
- `NanoComparison`
- `LimitationNotice`
- `WarrantySummaryGate`
- `ProductCTA`
- `PrivacyLightDemo`
- `SecuritySystemDiagram`

## Reglas preservadas

1. Los datos nano salen de `publication-truth.json`.
2. `95% a 950 nm` no se presenta como `95% menos calor`.
3. TSER no se convierte en promesa de grados de temperatura.
4. IR50 e IR5 muestran sus VLT reales de ficha: 48% y 3%.
5. Plata Reflecta no publica datos exactos ni garantía universal sin SKU/fuente.
6. Seguridad separa retención de fragmentos de claims de intrusión.
7. Privacidad explica inversión por iluminación y evita “espejo unidireccional permanente”.
8. Las páginas IR permanecen `noindex` mientras `tonePagesIndexable=false`.
9. Las garantías continúan bloqueadas mediante `WarrantySummaryGate`.

## Estado de indexación de tonos

Las cinco rutas existen y son navegables en staging, pero siguen bajo `INDEX_IF_COMPLETE`. El template ya aporta contenido diferencial por tono, pero la evidencia visual real sigue siendo el gate pendiente antes de activar indexación.
