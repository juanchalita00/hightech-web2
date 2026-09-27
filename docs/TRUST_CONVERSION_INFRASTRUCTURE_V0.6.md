# HIGHTECH Web 2.0 — Trust + Conversion Infrastructure v0.6

**Fecha:** 27 de septiembre de 2026  
**Base:** Starter v0.5 + System of Truth v0.17

## Objetivo

Completar la capa de confianza y conversión sin inventar autoridad social ni relajar los gates ya definidos.

## Páginas completadas

### `/nosotros/`

Ahora responde:
- quién es HIGHTECH;
- cómo trabaja;
- quién dirige la empresa;
- cómo se diferencia la evidencia técnica, de proyecto y de permiso.

No utiliza:
- antigüedad no documentada;
- “líder”;
- “el mejor”;
- estructura de personal inventada;
- garantías provisionales.

### `/contacto/`

Incluye:
- WhatsApp;
- teléfono;
- correo;
- preparación de cotización por línea;
- política de instalación automotriz en taller;
- ubicación general Zapopan, Jalisco.

Permanece detrás de `NAP_GATE`:
- dirección exacta;
- mapa;
- direcciones;
- horario público definitivo.

### `/preguntas-frecuentes/`

Se amplió a diez dudas núcleo. Cada respuesta es breve y enlaza a contenido profundo cuando existe.

No se replica el contenido completo de las guías.

### `/proyectos/`

El hub y el template dinámico ya existen.

Actualmente:
- `projectsPublic=false`;
- el hub permanece `noindex`;
- existe un caso comercial candidato interno;
- no se genera URL pública para el candidato.

Un caso sólo puede publicarse si cumple:
- `publicationAllowed=true`;
- `status=PUBLISHED`;
- producto;
- problema/contexto;
- resultado observable;
- permiso.

## Reviews

Se añadió `content/reviews.json` y una capa `getPublicReviews()`.

Con `reviewsPublic=false`, el componente de reviews devuelve `null`.

Activarlo sin al menos una reseña verificable provoca fallo del content gate.

## Conversión

Se preserva WhatsApp como CTA principal con:
- `sourcePage`;
- `lead_ref`;
- contexto de línea/problema/producto cuando corresponde.

Contacto no reinicia la conversación con formularios innecesarios.

## Migración

Se añadió validación ejecutable de redirects:
- fuentes duplicadas;
- destino registrado;
- loop directo;
- cadenas en redirects activos;
- gates dependientes de ruta.

`/gallery/ -> /proyectos/` pasó de `APPROVED` a `PROJECT_ROUTE_GATE` porque `/proyectos/` aún no es pública/indexable.

## Sitemap

`/garantias/` se retiró temporalmente del conjunto `indexable=true` mientras la Warranty Matrix pública siga bloqueada.

Esto evita que un sitemap futuro contradiga la metadata/gate de la página.

## Nuevos validadores

```bash
npm run validate:content
npm run validate:redirects
npm run validate:links
npm run release:check:staging
npm run release:check:production
```

El `build` ejecutará content + redirects + links antes de `next build`.
