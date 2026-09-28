# HIGHTECH — Criterios de experiencia y SEO
Fecha: 2026-09-28
Base revisada: design/residential-focus-v1, 7dbe81b.
Estado: estrategia de trabajo; no certifica posicionamiento ni autoriza producción.

## Dirección confirmada por Fernando
La propuesta visual Residencial fue aprobada en conversación. El objetivo permanente es una web comprensible, cuidada y convincente que comunique la diferencia de HIGHTECH mediante su criterio, proceso y trabajo real. Integrar SEO desde el desarrollo. Priorizar residencial y comercial; mantener automotriz como línea complementaria. Conservar la identidad visual aprobada.

## Principios para cada página
- Resolver una intención principal: contratar un servicio, comparar una solución o entender una duda.
- Explicar primero el beneficio y la decisión práctica; ofrecer después el detalle técnico.
- Usar palabras habituales del cliente y definir VLT, IR y TSER cuando ayuden a decidir.
- Sustentar la confianza con proyectos identificados, fotos auténticas, proceso y condiciones claras. Las imágenes de referencia no son evidencia de instalaciones.
- Hacer evidente el siguiente paso y conservar el contexto al contactar.
- Mantener lectura, navegación y contacto cómodos en móvil.
- Evitar repeticiones, páginas de localidades sin contenido propio, superlativos sin prueba y promesas de posición en Google.

## Arquitectura propuesta sobre las rutas existentes
| Página | Intención | Desarrollo |
| --- | --- | --- |
| Inicio | Entender HIGHTECH y elegir servicio | Beneficio, sectores, herramienta visual y acceso a evidencia |
| Residencial | Resolver calor, luz o privacidad en casa | Aplicaciones, selección, proceso, casos y cotización |
| Comercial | Evaluar un proveedor para un proyecto | Fachadas, operación, alcance, especificación y evidencia |
| Automotriz | Elegir solución para vehículo | Visibilidad, tono, alcance de instalación y contacto |
| Familias de películas | Comparar alternativas | Usos, diferencias, limitaciones y datos verificables |
| Guías | Responder una duda concreta | Respuesta directa, ejemplos, fuentes y enlace al servicio pertinente |
| Proyectos | Evaluar experiencia demostrada | Problema, contexto, solución instalada, fotos y resultado documentado |

Son hipótesis editoriales, no conclusiones de investigación de volumen de búsqueda. Validar prioridades con consultas y rendimiento de Search Console cuando estén disponibles.

## Hallazgos del código
Existe sitemap, canonical por ruta, idioma es-MX, títulos/descripciones en páginas principales y marcado Organization/WebSite. LocalBusiness permanece condicionado a confirmar los datos del negocio; dirección exacta nula y napApproved false. No inventar dirección, cobertura u horarios para completar el marcado.
La Home tiene metadatos genéricos: conviene redactarlos alrededor del servicio y la ubicación confirmada, preservando un encabezado visible natural.
Las guías cubren calor, privacidad nocturna, UV y diferencias técnicas. Mejorar sus conexiones desde páginas de servicio; varias entradas por problema de Home llevan hoy al índice genérico de servicios.
Algunas páginas muestran GateNotice con texto interno (por ejemplo INDEX_IF_COMPLETE). Sustituir la experiencia pública por información útil o mantener fuera de navegación las páginas incompletas; no eliminar controles de calidad ni declarar completas páginas pendientes.
robots.ts bloquea rastreo fuera de producción. Antes del lanzamiento verificar indexación y cabeceras reales en el dominio final; robots.txt por sí solo no debe asumirse garantía de desindexación de una preview.
La revisión de código y compilación no equivale a medir Core Web Vitals ni a QA móvil.

## Orden de trabajo
1. Cerrar experiencia de Residencial en móvil; mantener el diseño aprobado.
2. Revisar contenido público de rutas clave y eliminar mensajes internos de desarrollo sin inventar la información faltante.
3. Afinar títulos, descripciones, encabezados y enlaces según intención; conectar Residencial con guías de calor y privacidad.
4. Incorporar casos reales con contexto y permisos disponibles. Diferenciar ilustración y evidencia.
5. Completar información local confirmada y coherencia con el perfil del negocio.
6. Medir carga y estabilidad visual, accesibilidad y navegación móvil; corregir problemas observados.
7. Antes de lanzamiento: comprobar dominio canónico, redirecciones, sitemap, robots/noindex y páginas listas. No publicar producción sin autorización.
8. Después del lanzamiento: medir consultas, páginas de entrada y contactos útiles; iterar con evidencia.

## Fuentes de criterio
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/appearance/structured-data/local-business
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide

Google recomienda contenido útil orientado a las personas. Los datos estructurados ayudan a interpretar información; no garantizan posicionamiento ni una apariencia específica en resultados.
