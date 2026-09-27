# HIGHTECH Web 2.0 — Guides + SEO Authority v0.5

**Fecha:** 27 de septiembre de 2026  
**Base:** Starter v0.4 + System of Truth v0.16  
**Objetivo:** convertir conocimiento técnico verificable en páginas educativas útiles, sin ampliar el alcance de las fuentes.

## Guías construidas

- `/guias/reducir-calor-ventanas/`
- `/guias/proteccion-uv-ventanas/`
- `/guias/irr-vs-tser/`
- `/guias/que-es-vlt/`
- `/guias/privacidad-ventanas-noche/`
- `/guias/estres-termico-cristal/`
- `/guias/polarizado-automotriz-jalisco/`

El hub `/guias/` ya organiza estas piezas por problema y métrica.

## Decisión IR — 27 sep 2026

No se crea una guía sobre desempeño en diferentes longitudes de onda.

La evidencia técnica actual sólo permite cuantificar:

> **95% de rechazo infrarrojo medido a 950 nm, según ficha técnica.**

Se registra en `publication-truth.json`:

```json
{
  "currentEvidenceScope": "POINT_MEASUREMENT_ONLY",
  "supportedWavelengthNm": 950,
  "spectralCurveAvailable": false,
  "multiWavelengthClaimsAllowed": false,
  "ownMeasurementProgram": "FUTURE_DOCUMENTED_PROTOCOL"
}
```

El content gate falla si esta política se amplía accidentalmente sin actualizar la fuente maestra.

## Medición propia futura

Cuando HIGHTECH adquiera equipo propio, los resultados no sustituirán ni se mezclarán silenciosamente con la ficha del proveedor.

Cada medición deberá registrar, según capacidad real del instrumento:

- equipo y modelo;
- magnitud medida;
- longitud de onda o rango real;
- vidrio;
- película;
- fecha;
- condiciones;
- procedimiento;
- limitaciones;
- repetibilidad cuando corresponda.

Sólo después podrá evaluarse si existe fundamento para contenido sobre distintas longitudes de onda.

## IR vs TSER

La guía deja explícito:

- IR 95% = medición a 950 nm en la ficha disponible;
- TSER = métrica distinta;
- TSER de la gama mapeada: 59 / 72 / 79 / 87 / 96%;
- una cifra no sustituye la otra;
- ninguna se convierte automáticamente en grados de temperatura interior.

## VLT

La guía explica:

- VLT = transmisión de luz visible;
- nombres comerciales y datos de ficha se muestran por separado;
- IR50 = 48% VLT;
- IR5 = 3% VLT;
- el VLT de película no se presenta como medición final del sistema vidrio + película;
- visibilidad nocturna importa en tonos oscuros.

## UV

Se mantiene 99% como valor canónico de las cinco fichas nano activas.

La guía evita afirmar que UV es la única causa de decoloración.

## Calor

La guía no convierte:

- oscuridad en desempeño térmico;
- 95% IR a 950 nm en 95% menos calor;
- TSER en una promesa universal de temperatura.

Incorpora vidrio, orientación y uso del espacio como contexto.

## Privacidad

La guía de noche explica el principio de contraste de iluminación y evita prometer privacidad absoluta o espejo unidireccional permanente.

## Estrés térmico

La guía presenta la compatibilidad como evaluación del sistema:

`vidrio + película + exposición + condición`

No utiliza el riesgo como exención automática de responsabilidad ni como argumento de miedo.

## Jalisco

La guía mantiene `noindex` y `LEGAL_CONTENT_REVIEW`.

Se verificó nuevamente el 27-sep-2026 que la Biblioteca Virtual del Congreso lista:

- Ley de Movilidad, Seguridad Vial y Transporte del Estado de Jalisco — modificación registrada 15/08/2026;
- Reglamento de la Ley de Movilidad, Seguridad Vial y Transporte — 20/01/2024.

El contenido mantiene dos capas:

1. normativa publicada;
2. referencia práctica 70–75 / 35 / 20 reportada por HIGHTECH de consultas directas con personal de Tránsito.

La referencia no se presenta como tabla textual de la Ley ni como garantía de ausencia de sanción.

## Indexación

Indexables en v0.5:

- hub de guías;
- reducir calor;
- protección UV;
- IR vs TSER;
- VLT;
- privacidad nocturna;
- estrés térmico.

Noindex:

- legalidad automotriz Jalisco, hasta revisión jurídica final.

## Componentes nuevos

- `GuideHero`
- `GuideCard`
- `GuideCallout`
- `GuideArticle / GuideBody / GuideAside`
- `MetricRelation`

Reutilizan el design system existente y no añaden dependencias de terceros.

## SEO

Las guías no se crean para repetir keywords. Cada una debe responder una intención distinta y enlazar a producto/aplicación sólo después de resolver la duda.

No se ha construido todavía:

- eficiencia energética;
- deslumbramiento;
- nanocerámica vs reflectiva;
- seguridad: qué hace;
- IR75 vs IR50.

Quedan como candidatos posteriores y deben pasar su gate de valor/no-canibalización.
