# HIGHTECH Web 2.0 — Runtime QA + Release Candidate Preparation v0.8

**Fecha:** 27 de septiembre de 2026  
**Base:** Starter v0.7  
**Estado:** harness listo; runtime real pendiente.

## Resultado

Se intentó acceder al registry npm para instalar/verificar Next.js. El entorno agotó tiempo de conexión, por lo que no se declara `next build` ni browser QA como PASS.

## Qué añade v0.8

- `runtime-qa-state.json`: ningún check runtime puede pasar sin evidencia.
- `performance-budget.json`: CWV + presupuestos de transferencia.
- `device-matrix.json`: Android Chrome, iPhone Safari, Windows Chrome/Edge y macOS Safari.
- `release-candidate-checklist.json`: Truth, Build, SEO, Privacy, Quality y Operations.
- `http-contract-tests.json`: headers, canonical y ausencia de trackers inesperados.
- validadores estáticos para runtime-state y performance budget.
- `release:preflight` para mostrar simultáneamente blockers de producción y checks runtime pendientes.

## Regla de evidencia

No basta cambiar un boolean a `true`.

Todo check runtime aprobado debe incluir evidencia: URL/deployment, reporte, fecha, captura o artefacto de prueba según corresponda.

## Orden del QA real

1. instalar dependencias;
2. `npm run validate:all-static`;
3. `npm run typecheck`;
4. `npm run build`;
5. desplegar staging protegido;
6. `npm run smoke:runtime`;
7. `npm run qa:http-contract`;
8. Lighthouse en rutas objetivo;
9. axe + teclado + zoom/reflow;
10. matriz real de dispositivos;
11. corregir bugs;
12. registrar evidencia y sólo entonces marcar checks PASS.

## Release Candidate

No se considera RC mientras exista cualquiera de:
- P0 legal/NAP/warranty/privacy;
- runtime build sin verificar;
- smoke/HTTP contract pendiente;
- performance/accessibility/mobile QA pendiente;
- DNS/email, rollback o monitoring pendiente.
