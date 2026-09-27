# CMS contract

Este directorio define **qué deberá modelar Sanity**, pero el starter no conecta aún un CMS remoto.

La razón es deliberada: primero se valida la arquitectura y los gates con `content/*.json`; después el adapter del CMS reemplaza esas fuentes sin cambiar los componentes públicos.

## Regla

El frontend nunca consulta directamente documentos sin filtrar. Consume un adapter de `publication_truth` que excluye `DRAFT`, `BLOCKED`, garantías no aprobadas, NAP no liberado y evidencia sin permiso.

## Primeros tipos

- corporateProfile
- product
- claim
- warranty
- legalDocument
- evidence
- project
- page

Ver `schema-model.json`.
