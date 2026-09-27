# HIGHTECH Web 2.0 — Migration / Redirect Registry v0.6

## Estado actual

El registry contiene 10 decisiones de migración:
- 5 redirects activos (`APPROVED`);
- 1 redirect condicionado a que Proyectos sea público;
- 4 pendientes de cierre GSC/contenido.

## Activos

- `/contact-us/` → `/contacto/`
- `/home-residencial/` → `/residencial/`
- `/comercial-office/` → `/comercial/`
- `/seguridad-proteccion/` → `/peliculas/seguridad/`
- `/privacidad-decorativo/` → `/peliculas/privacidad/`

## Gate de Proyectos

- `/gallery/` → `/proyectos/`
- estado: `PROJECT_ROUTE_GATE`

No se activa hasta que la ruta destino tenga casos suficientes y sea publicable.

## Pendientes

- `/dano-uv-decoloracion/` → `/guias/proteccion-uv-ventanas/`
- `/calor-frio-excesivo/` → `/guias/reducir-calor-ventanas/`
- `/destello/` → guía de deslumbramiento aún no construida
- `/ahorro-energia/` → guía de eficiencia energética aún no construida

Los dos primeros conservan `PENDING_GSC` hasta cerrar la decisión con señales históricas. Los dos últimos además dependen de que exista el destino final.

## Release rule

`redirectsVerified` no cambia a `true` hasta ejecutar contra el deployment candidato:
- status 301 esperado;
- destination 200;
- canonical correcto;
- sin cadena;
- sin loop;
- query handling definido;
- 404 real para rutas sin reemplazo.
