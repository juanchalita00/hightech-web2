# HIGHTECH Web 2.0 — Starter v0.8.2

Base técnica de la nueva web de HIGHTECH Polarizados.

## Estado

v0.8.2 es el **External Staging Handoff** sobre v0.8.1. No cambia el System of Truth: continúa v0.19.

Añade CI de runtime, workflow de smoke contra staging real y configuración mínima de Vercel.

El proyecto ya tiene:
- páginas core/producto/guías/trust;
- gates de contenido/legal/evidencia;
- canonicals/schema/sitemap/robots;
- redirects y fixtures;
- smoke tests y HTTP contract;
- performance budgets;
- runtime QA state;
- release manifest/preflight;
- diagnóstico de entorno;
- typecheck estructural offline;
- self-test end-to-end del harness de QA;
- bootstrap de runtime para el primer entorno con npm funcional.

## Validar sin dependencias Next instaladas

```bash
npm run runtime:probe
npm run validate:internal-types
npm run runtime:harness:selftest
npm run validate:all-static
```

## Ejecutar runtime real en un host con acceso npm

```bash
npm run runtime:probe
npm run runtime:bootstrap -- --install
```

El bootstrap no concede aprobación de producción; sólo genera evidencia de instalación/build/typecheck/start/smoke/HTTP contract.

## Limitación confirmada de este entorno

`registry.npmjs.org` devuelve `EAI_AGAIN`, por lo que no es posible instalar Next/React aquí. No se marca `next build` ni typecheck real como aprobado.

Consulta:
- `BUILD_STATUS.md`
- `docs/RUNTIME_EXECUTION_HANDOFF.md`
- `docs/RUNTIME_QA_RELEASE_CANDIDATE_V0.8.md`
- `docs/source/HIGHTECH_Web2_System_of_Truth_v0.19.md`


## Staging externo

Consulta:
- `docs/EXTERNAL_STAGING_HANDOFF.md`
- `docs/FIRST_STAGING_CHECKLIST.md`
- `.github/workflows/runtime-ci.yml`
- `.github/workflows/staging-runtime-smoke.yml`
