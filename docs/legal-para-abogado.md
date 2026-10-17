# Compilación jurídica para el abogado

Documento interno. No es un contrato, no es un aviso publicado y no debe subirse al sitio público tal cual. Reúne el texto jurídico que sí existe en el repositorio, para enviarlo a revisión.

**Fecha de esta compilación:** 15 de octubre de 2026.  
**Marca:** HIGHTECH Polarizados.  
**Corte del texto original:** rama `design/residential-focus-v1`, commit `9959e5b` («Release QA pass 1»), anterior a los cambios del PR de sitio público.

## De dónde sale cada texto

Se revisaron `main` y todas las ramas remotas de diseño, más `origin/claude/runtime-v0.8.2-pnr256`.

- `main` (commit `00a6c33`) solo contiene `README.md`. No hay aviso, términos, garantías ni notas jurídicas.
- Los tres documentos de trabajo (`Legal Publication Readiness v0.1`, `Warranty Matrix v0.1` y `Legalidad Automotriz Jalisco v0.4`) son idénticos en todas las ramas de diseño y en `claude/runtime-v0.8.2-pnr256`. No hay una versión más larga en otra rama.
- Las páginas `/legal/aviso-de-privacidad/`, `/legal/terminos-y-condiciones/` y `/garantias/` tienen el mismo texto visible en esas ramas. En `design/residential-focus-v1` solo se añadió un candado técnico: en el despliegue de Production responden 404 mientras no estén aprobadas. En preview seguían visibles y `noindex`.
- El paquete citado como fuente jurídica, `HIGHTECH_Paquete_Work_v0.5.md`, **no está en ninguna rama**. Lo que sigue es la arquitectura y la matriz que ese paquete dejó en el repo, no el clausulado completo que se escribió en el chat.
- No existe ruta de cookies ni un aviso de cookies redactado.
- La palabra «Profeco» no aparece en el repositorio. Sí aparecen RPCA, NOM y el artículo 83 de la LFPC.
- Los borradores nuevos de este PR (`src/lib/legal-drafts.ts` y `content/legal/abogado-pendiente.md`) se escribieron después y **no recuperan** el chat perdido. Este archivo es el texto anterior.

Los anexos A, B y C copian esos tres documentos sin recortar.

---

## 1. Aviso de privacidad

**Ruta:** `/legal/aviso-de-privacidad/`  
**Canónica prevista:** `https://polarizadoshightech.com/legal/aviso-de-privacidad/`  
**Estado en `content/routes.json`:** `BUILD_READY_CONTENT_BLOCKED`, no indexable.  
**Estado en `content/legal-documents.json`:** documento `PRIVACY-INTEGRAL`, título «Aviso de Privacidad Integral», `status: PRIVACY_BLOCKED`, `version: null`, sin fecha, sin proveedor y sin archivo inmutable.  
**Bandera:** `production.privacyApproved = false`. En Production la ruta responde 404. No está en el menú ni en el footer mientras esa bandera sea falsa.  
**Metadatos:** título «Aviso de Privacidad»; `robots: noindex, follow`.

### Texto público, tal como estaba escrito

No hay articulado. La página solo muestra esto:

- Ceja: Privacidad
- Título: Aviso de Privacidad
- Descripción: «El aviso integral deberá identificar responsable, finalidades, derechos, canal ARCO, terceros y versión.»

### Nota interna visible en la página (no es cláusula)

Componente `GateNotice`, título `PRIVACY_BLOCKED`:

> No activar trackers publicitarios hasta cerrar el aviso, third-party registry y consentimiento aplicable.

Esa nota se oculta cuando `NODE_ENV` es `production`. En preview sí se veía. Es una anotación de desarrollo, no texto para el cliente.

### Qué pedía el documento de trabajo para poder publicarlo

De `HIGHTECH_Web2_Legal_Publication_Readiness_v0.1.md`, sección 5 (texto completo en el anexo A):

La contratación puede requerir datos para cotizar, ejecutar, facturar, atender garantía y defender derechos. Las fotos técnicas se separan del uso publicitario. La contratación no autoriza marketing de imágenes.

Pendientes marcados como PRIV-01 a PRIV-08:

- Responsable: nombre o razón social, RFC cuando corresponda, domicilio y fecha de cambio si entra la sociedad.
- Canal ARCO real y operable.
- Inventario separado: prospecto, cliente, vehículo, inmueble, fiscal, pagos, fotografías, chat, garantía o reclamación, y marketing.
- Finalidades necesarias distintas de las secundarias o de marketing.
- Encargados reales: hosting, CMS, analytics, WhatsApp/Meta, correo, almacenamiento, facturación, evidencia y otras integraciones. No inventar transferencias.
- Conservación por categoría. La v0.5 deja pendiente esa matriz; no usar un plazo universal.
- Autorización aparte para publicar fotografías.

Microcopy previsto junto a un formulario, todavía no publicado como aviso:

> «Usaremos tus datos para atender tu solicitud conforme a nuestro Aviso de Privacidad.»

Pedir información o abrir WhatsApp no exige una casilla de «acepto los términos». El aviso simplificado y el acceso al integral se prevén cuando se capturan datos.

### Registro de terceros (cookies y rastreadores)

Archivo `content/third-party-registry.json`. Estado `PENDING_PRIVACY_APPROVAL`. Los tres proveedores están apagados:

| Id | Nombre | Uso previsto | Estado |
|---|---|---|---|
| ga4 | Google Analytics 4 | Medición de uso y conversión | `PENDING_PRIVACY`, `DISABLED` |
| meta_pixel | Meta Pixel | Atribución publicitaria | `PENDING_PRIVACY`, `DISABLED` |
| google_ads | Google Ads | Atribución de campañas | `PENDING_PRIVACY`, `DISABLED` |

Regla del archivo: ningún proveedor carga salvo que `analyticsPrivacyApproved` sea verdadero y el proveedor esté habilitado de forma expresa. Esa bandera está en falso.

La lista de salida a producción (`content/release-candidate-checklist.json`, grupo `privacy`) exige: aviso aprobado, comportamiento de consentimiento verificado, registro de terceros aprobado y que analytics no lleve datos personales.

---

## 2. Términos y condiciones

**Ruta:** `/legal/terminos-y-condiciones/`  
**Canónica prevista:** `https://polarizadoshightech.com/legal/terminos-y-condiciones/`  
**Estado en rutas:** `BUILD_READY_CONTENT_BLOCKED`, no indexable.  
**Estado en `content/legal-documents.json`:** documento `TERMS-B2C`, título «Términos y Condiciones», `LEGAL_BLOCKED`, versión nula, sin fecha, sin proveedor y sin archivo.  
**Bandera:** `production.termsApproved = false`. En Production responde 404. Fuera de navegación mientras no se apruebe.  
**Metadatos:** título «Términos y Condiciones»; `noindex, follow`.

### Texto público, tal como estaba escrito

No hay clausulado. La página solo muestra esto:

- Ceja: Legal
- Título: Términos y Condiciones
- Descripción: «La versión pública deberá mostrar proveedor, versión, fecha efectiva y documento inmutable aprobado.»

### Nota interna visible en la página

`GateNotice`, título `LEGAL_BLOCKED`:

> El paquete jurídico de trabajo no se publica como contrato B2C hasta liberación final.

Misma regla de visibilidad: se oculta en `NODE_ENV=production` y se veía en preview.

### Lo que la v0.5 ya tenía estructurado, según el repo

El readiness (anexo A, sección 3) dice que el paquete ausente ya contemplaba, sin pegar aquí el clausulado:

- identidad del proveedor;
- folio;
- objeto y documentos contractuales;
- cotización con vigencia;
- aceptación electrónica atribuible;
- medidas y especificaciones;
- precio total;
- cambios;
- condición previa del vidrio;
- compatibilidad;
- exterior y CPE;
- PDLC;
- cancelación y revocación;
- garantía;
- reclamaciones y remedios;
- datos y fotografías;
- terminación;
- controversias;
- recepción automotriz.

### Bloqueos anotados antes de publicar (TNC-01 a TNC-05)

- Identidad incompleta: RFC, domicilio fiscal, domicilio formal de atención y reclamaciones, proveedor final por fecha de corte, y RPCA solo si procede y se obtiene.
- RPCA / NOM: la v0.5 no declara cerrado si cada modelo debe registrarse ni acredita un registro obtenido.
- Cancelación: la política comercial propuesta debe aprobarse y revisarse para cada modalidad.
- Garantías: los términos no pueden remitir a una matriz todavía incompleta.
- Transición societaria: no sustituir al proveedor actual por HT PRODUCTS MX, S.A. de C.V. sin fecha de corte e instrumentos reales.

### Aceptación de la cotización (anotación de arquitectura, no cláusula vigente)

El system of truth v0.19 y el readiness dicen, como regla de trabajo:

- Abrir WhatsApp o pedir información no es aceptación de los términos.
- La cotización no debe decir solo «aplican los términos publicados en nuestra página».
- Debe identificar la versión exacta, por ejemplo `Términos y Condiciones v2026.10.01`, y conservar copia inmutable de esa versión. La fecha `2026.10.01` es un ejemplo del modelo, no una versión aprobada. En datos, `version` sigue en null.
- La aceptación se ata a la cotización exacta, el precio total, la versión de términos, la versión de garantía y los anexos aplicables.
- No bastan, por sí solos: visto, silencio, un emoji, un pulgar ambiguo o un comprobante aislado.
- La web puede cambiar. El contrato aceptado no.

Esa relación (aceptar la cotización implica aceptar los términos, incluidas las obligaciones de pago) está prevista como arquitectura. No hay redacción contractual aprobada en el repo.

### Decisiones que el propio audit deja al abogado

De `HIGHTECH_Web2_Launch_Readiness_Audit_v0.1.md`, sección 10, textuales en cuanto a la lista:

- NOM / RPCA;
- modelo contractual final;
- revocación y cancelación legal;
- artículo 83 de la LFPC aplicado;
- garantía y remedios;
- aviso de privacidad;
- conservación y transferencias;
- NOM-151 para evidencia;
- transición de persona física a sociedad;
- dictamen final de liberación.

El readiness añade: clasificación NOM / RPCA, texto final de los modelos, tratamiento de la revocación, «artículo 83 aplicado a paño/pieza/sistema», y regularización histórica.

No hay en el repo un número de registro RPCA, un modelo registrado ni un texto que diga que el contrato ya está o no está inscrito.

---

## 3. Garantías

**Ruta:** `/garantias/`  
**Canónica prevista:** `https://polarizadoshightech.com/garantias/`  
**Estado en rutas:** `BUILD_READY_CONTENT_BLOCKED`, no indexable. `routes.warrantyPageIndexable = false`.  
**Bandera:** `production.warrantiesApproved = false`.  
**Datos:** `content/warranties.json` es un arreglo vacío. El validador impide cargar garantías públicas mientras la bandera sea falsa.  
**Metadatos:** título «Garantías»; indexación apagada.

### Texto público, tal como estaba escrito

- Ceja: Garantías
- Título: «La garantía depende del producto, aplicación y versión.»
- Descripción: «Esta página sólo publicará pólizas aprobadas y trazables. Una referencia técnica de plazo no se convierte automáticamente en garantía contractual.»

### Nota interna visible en la página

`GateNotice`, título `WARRANTY_BLOCKED`:

> No hay pólizas marcadas APPROVED_FOR_PRODUCTION todavía.

En las fichas de tono (`/peliculas/nanoceramica/[tone]/`) el componente `WarrantySummaryGate` muestra, si no hay póliza aprobada:

> La arquitectura de garantía para {producto} existe, pero la póliza contractual pública sigue bloqueada. No renderizar plazo universal en producción.

Esa frase también es nota de desarrollo (el `GateNotice` no se pinta en `NODE_ENV=production`).

### Texto público en otras páginas, sobre garantía

`/preguntas-frecuentes/`, pregunta «¿Qué garantía tiene la película?»:

> La cobertura depende del producto, la aplicación y la versión de la póliza correspondiente. No tratamos un plazo histórico o de ficha como garantía universal.

El enlace a `/garantias/` solo se renderiza si `warrantiesApproved` es verdadero. Hoy no se muestra.

`/peliculas/plata-reflecta/`:

> Los valores técnicos, la compatibilidad de uso y la garantía deben corresponder al producto específico que se vaya a instalar; no los generalizamos para toda la familia reflectiva.

Frases bloqueadas en `content/claims.json`, entre otras: «garantía de por vida», «100% legal», «no te pueden multar».

### Regla de la fuente maestra (v0.19, sección 12)

Las fichas técnicas de los cinco productos muestran «10 años», pero no el alcance contractual. Estado: `technical_sheet_reference: "10 años"` y `contractual_public_status: LEGAL_REVIEW`.

No renderizar «10 años de garantía» como garantía contractual universal hasta liberar la póliza por producto, aplicación, sector, material, instalación, obligado, exclusiones, remedios y versión.

Conflicto C-05: «Referencia técnica confirmada; alcance contractual aún en LEGAL_REVIEW.»

### Matriz interna (anexo B) — plazos que el repo sí documenta y que no están publicados

La matriz dice de forma expresa que no convierte referencias históricas, propuestas o precedentes individuales en garantía pública. Resumen fiel de la tabla; el texto completo está en el anexo B.

| Línea | Plazo que aparece en la fuente | Cómo lo clasifica el repo |
|---|---|---|
| Nanocerámica automotriz en taller | 10 años de película, según conocimiento comercial documentado | Documentada en el plazo de película; cobertura integral no cerrada. Falta saber si incluye instalación, retiro y reinstalación. |
| Nanocerámica arquitectónica interior | Referencia histórica de 10 años | Histórica / candidata. No prometer 10 años en público hasta póliza. |
| Seguridad incolora / 4 mil interior | Referencia comercial de 5 años | Histórica / candidata. Sin SKU, espesor ni cobertura cerrados. |
| Seguridad 7 mil interior | Sin plazo final. Si se ofrece, respetar el mínimo legal aplicable | Pendiente / candidata. |
| Plata Reflecta interior | Referencias históricas de 3 a 5 años, sin plazo único | No publicar «3–5 años» como una sola garantía. |
| Película exterior genérica | Por SKU autorizado para exterior | No usar un «hasta 1 año» genérico. |
| Domo: reflecta + protección exterior | Antecedente de 1 año en la protección exterior y vida útil aproximada de 5 años | Separar garantía de vida útil. Definir qué capa cubre cada plazo. |
| Proyecto residencial Ricardo García Jasso (Reflecta + seguridad exterior en domo) | Póliza individual: 1 año de material y 5 años de instalación | Precedente individual. No generalizar. |
| Highclear / Ultraclear (póliza J.W. Marriott) | 1 año de fabricante en película exterior; el mismo documento refiere 5 años de fábrica para Highclear interior | Precedente individual. No extrapolar. Confirmar si HIGHTECH adopta la garantía o solo la transmite. |
| CPE / doble capa | Propuesta v0.5: 90 días por defectos del componente | Candidata, no liberada. La propia v0.5 bloquea venderla sin compatibilidad escrita y validación. |
| PDLC | Plazos por película, controlador, fuente y accesorios, sin completar | Pendiente. |
| 3M Crystalline, laterales y medallón | Referencia previa de 15 años | Verificar oferta y póliza vigentes. |
| 3M Crystalline, parabrisas o panorámico | Referencia previa de 7 años | Igual. |
| Retiro, mantenimiento o reparación | Plazo propio del servicio | No confundir con la garantía del producto ya instalado. |

La v0.5 propone, como base no adoptada, cubrir según el producto: desprendimiento, delaminación, pérdida anormal de adhesión, burbuja persistente que no sea secado normal, cambio anormal de color, y defecto de corte o instalación. La causa se revisa. Las exclusiones deben tener relación causal con el daño y no cancelar toda la cobertura de forma automática.

La propuesta de 1 año por defecto de instalación es propuesta empresarial de la v0.5, no política adoptada para todas las líneas (W-OPEN-06 y decisión FD-02).

Remedios abiertos (FD-03): quién absorbe retiro, reinstalación, traslados y andamios o acceso cuando la reclamación resulte cubierta.

La página pública, cuando exista, debe localizar la garantía por producto y aplicación, separar material de mano de obra, no confundir vida útil con garantía, y no extender un plazo de interior a exterior, de arquitectura a automotriz, ni de HIGHTECH a otra marca.

---

## 4. Guía de polarizado automotriz en Jalisco

**Ruta:** `/guias/polarizado-automotriz-jalisco/`  
**Canónica:** `https://polarizadoshightech.com/guias/polarizado-automotriz-jalisco/`  
**Estado:** `LEGAL_CONTENT_REVIEW`. `jaliscoGuideIndexable = false`, así que va `noindex` y fuera del sitemap.  
Esta sí tiene texto público redactado. No es un contrato.

### Texto público completo de la página (rama `design/residential-focus-v1`)

Título: «Polarizado automotriz en Jalisco: qué dice la norma publicada».

Descripción: «Qué establece la normativa publicada de Jalisco sobre el polarizado del parabrisas y la visibilidad hacia el interior en los demás cristales, y por qué el VLT de una película se explica por separado.»

Cuerpo:

¿Qué dice la norma de Jalisco sobre el polarizado de un auto?

La normativa publicada no establece una tabla general de porcentajes como 75 / 35 / 20. Sí contiene reglas específicas sobre el parabrisas y sobre la visibilidad hacia el interior en los demás cristales.

Parabrisas y demás cristales no tienen exactamente la misma regla.

- Parabrisas: «La normativa publicada contiene una prohibición expresa al polarizado del parabrisas. No establece un porcentaje VLT a partir del cual esa prohibición desaparezca.»
- Laterales y medallón: «La normativa exige que los cristales permitan visibilidad hacia el interior y sanciona los elementos que la impidan totalmente. En las fuentes oficiales revisadas no aparece una tabla estatal de porcentajes VLT por cada zona.»

Dónde aparecen estas reglas:

- Reglamento, artículo 59: «Establece que parabrisas, medallones y vidrios deben permitir visibilidad hacia el interior del vehículo y señala que “bajo ninguna circunstancia el parabrisas estará polarizado”.»
- Ley, artículo 360, fracción IX: «Sanciona los cristales polarizados u otros elementos que impidan totalmente la visibilidad hacia el interior, así como el polarizado de cualquier intensidad en el parabrisas.»

Que una película se vea casi transparente no crea por sí solo una excepción en la norma.

«IR75 es el nombre comercial de una película cuya ficha reporta 75% de VLT. Ese dato describe cuánta luz visible transmite la película, pero la normativa estatal revisada no establece un umbral de 75% VLT que autorice automáticamente su uso en el parabrisas.»

«Por eso HIGHTECH no presenta IR75 como “legal en parabrisas” únicamente por ser una película clara.»

«75% VLT en la película no significa que el vidrio terminado quede exactamente en 75%. El cristal original ya transmite una determinada cantidad de luz. Cuando se instala una película encima, el resultado corresponde al conjunto vidrio + película, no únicamente al número impreso en la ficha de la película.»

Permisos: «El Reglamento contempla permisos provisionales para circular con vidrios polarizados. El artículo 66 del Reglamento incluye entre los casos que la Secretaría puede autorizar provisionalmente la circulación con vidrios polarizados hasta por un año.»

Recuadro «Lo que esta disposición no dice»: «Esa disposición no publica porcentajes VLT ni significa que cualquier película o cualquier zona del vehículo quede automáticamente autorizada. Si una persona necesita acogerse a un permiso, los requisitos, alcance y vigencia aplicables deben confirmarse directamente con la autoridad competente antes de depender de él.»

Fuentes: «La Biblioteca Virtual del Congreso del Estado de Jalisco registra la Ley de Movilidad, Seguridad Vial y Transporte con última modificación al 15 de agosto de 2026 y su Reglamento con actualización al 20 de enero de 2024.» Enlace: https://congresoweb.congresojal.gob.mx/BibliotecaVirtual/busquedasleyes/ListadoNvo.cfm

Cierre: «Podemos orientarte sobre claridad, visibilidad y desempeño de cada película sin presentar un tono como garantía de legalidad o ausencia de sanción.»

Idea clave del margen: «La norma no publica una tabla 75 / 35 / 20.»

### Módulo en `/automotriz/` (`JaliscoReference`)

- «Antes de elegir tono, separa la norma de los porcentajes comerciales.»
- «La normativa publicada no establece una tabla general 75 / 35 / 20.»
- Parabrisas: «La norma contiene una prohibición expresa al polarizado.»
- Laterales y medallón: «Deben permitir visibilidad hacia el interior.»
- Porcentajes VLT: «La norma revisada no publica una tabla estatal por zona.»

Pregunta en la misma página: «¿Puedo usar IR75 en el parabrisas sólo porque es una película clara?»

> No la presentamos como automáticamente autorizada por su VLT. IR75 reporta 75% de transmisión de luz visible, pero la normativa estatal revisada no establece un umbral de VLT que convierta una película clara en una excepción expresa para el parabrisas. Separamos la recomendación técnica del criterio normativo.

Pregunta en `/preguntas-frecuentes/`: «¿Qué dice la norma de Jalisco sobre los tonos permitidos?»

> La normativa publicada no establece una tabla general de porcentajes VLT por zona del vehículo. Sí contiene una prohibición expresa al polarizado del parabrisas y exige visibilidad hacia el interior en los demás cristales.

Fichas de tono, cautela (no es asesoría):

- IR75: «Si la aplicación es automotriz, la claridad de la película no sustituye la revisión de la normativa aplicable a cada cristal.»
- IR35: «En automotriz, la elección del tono también debe considerar visibilidad nocturna y la normativa aplicable a cada cristal.»

### Documento interno v0.4 (anexo C) — no es el texto de la página

La página pública de la guía **no** reproduce la referencia oral de Tránsito. El documento interno sí, y el JSON operativo también.

`content/publication-truth.json`, bloque `jaliscoAutomotive`:

```json
{
  "operationalReference": {
    "windshield": "70–75%",
    "frontSide": "35%",
    "rearSideAndBack": "20%",
    "status": "ACTIVE_OPERATIONAL_REFERENCE",
    "sourceType": "AUTHORITY_ORAL_GUIDANCE"
  },
  "windshieldLegalConclusion": "UNRESOLVED"
}
```

El documento v0.4 (anexo C) atribuye la consulta a Fernando Chalita, director, con personal de Tránsito de Jalisco, y fija como referencia práctica máxima 70–75% en parabrisas, 35% en piloto y copiloto, y 20% en laterales traseros y medallón. La clasifica como orientación oral, no como tabla de la ley. Prohíbe decir «la Ley dice 75 / 35 / 20», «es 100% legal», «no te pueden multar», «Tránsito garantiza que no habrá sanción», «75% es el límite que aparece en el artículo X» y «todos los agentes aplican exactamente el mismo criterio».

El system of truth v0.19, conflicto C-10, deja IR75 en parabrisas como `LEGAL_INTERPRETATION_UNRESOLVED`: la norma prohíbe «polarizado» en el parabrisas, pero no se localizó una definición técnica que diga si una película clara de control solar es jurídicamente polarizado. Prohíbe declarar tanto que IR75 es legal como que es ilegal.

### Instrucción posterior del dueño (octubre de 2026)

No está en estas ramas. Conviene que el abogado la vea junto al texto anterior, porque no dice lo mismo.

El dueño pidió conservar los porcentajes con este encuadre: no hay una regulación oficial actualizada; como referencia de uso común se manejan 35% en laterales y medallón y 75% en parabrisas; la ley técnicamente no dice nada del parabrisas; no es asesoría oficial ni legal; el cliente decide y asume la responsabilidad. No debe decirse que un tono es legal o permitido.

Eso choca con la guía pública original (Reglamento art. 59 y Ley art. 360 fracción IX, prohibición expresa en parabrisas) y con la referencia interna 70–75 / 35 / 20 atribuida a Tránsito. Hay que conciliarlo antes de indexar la guía.

---

## 5. Cookies

No hay página, ruta ni redacción de aviso de cookies.

Las únicas menciones:

1. `docs/source/HIGHTECH_Web2_Performance_Accessibility_Release_Gates_v0.1.md`, reglas del botón flotante de WhatsApp: no cubrir contenido crítico, no cubrir el aviso de cookies, no cubrir botones de formulario. El aviso al que se refiere no está escrito.
2. `docs/source/HIGHTECH_Web2_Event_Attribution_System_v0.1.md`: contemplar un «modo sin cookies/consentimiento» y no disparar eventos innecesarios en páginas legales.

Analytics y píxeles están apagados, como se indicó en el aviso de privacidad.

---

## 6. Identidad que el paquete jurídico todavía pide confirmar

Estas notas están en el audit de lanzamiento (P0-NAP y decisiones FD-01). No son el domicilio que el sitio público debe mostrar. El sitio público de este PR usa solo «Zapopan, Jalisco» y no publica calle.

El audit, como blocker interno, deja abiertos:

- si Tomás Mann 5348 es la dirección pública de lanzamiento;
- qué representa Salvador Madariaga 5058;
- un perfil o sitio previo que el system of truth describe mostrando Justo Sierra 3184;
- horario y consistencia entre sitio, perfil de Google, WhatsApp y Meta.

El system of truth v0.19 identifica como responsable empresarial a Fernando Chalita, director. Ese nombre no debe publicarse en el sitio; aquí se conserva porque así está la fuente y el abogado puede necesitarlo para el responsable del aviso.

La transición a HT PRODUCTS MX, S.A. de C.V. está anotada como no hecha: faltan fecha de corte e instrumentos.

---

## 7. Preguntas abiertas para el abogado

Lista sacada de los bloqueos del repo y de lo que el dueño necesita poder usar después. El repositorio no las responde.

1. **Contrato de adhesión y Profeco.** ¿Estos términos son contrato de adhesión sujeto a la LFPC? El repo pide definir RPCA/NOM y aplicar el artículo 83 de la LFPC «a paño/pieza/sistema», y no acredita registro. ¿Hay que registrar el modelo en el Registro Público de Contratos de Adhesión, y cada variante (automotriz, arquitectura, exterior, PDLC) es un modelo distinto?
2. **Aceptación de la cotización.** Redactar que solicitar o aceptar la cotización implica aceptar los términos vigentes identificados por versión, incluidas las obligaciones de pago. Decir qué acto sí cuenta como aceptación (mensaje de WhatsApp, pago, firma) y cuáles no (visto, silencio, emoji, comprobante aislado). La versión aceptada debe archivarse; una URL a «los términos actuales» no sustituye esa copia.
3. **Pagos.** El repo no fija anticipos, cancelaciones ni reprogramación. En la base de conocimiento comercial, paquete [L-04], no en estos textos jurídicos, la operación descrita es: efectivo, transferencia y tarjeta; con tarjeta se agrega IVA de 16% y no se presenta como comisión; no sumar el IVA dos veces si además piden factura; factura solo si la piden, con constancia fiscal, correo y uso de CFDI. Anticipos y cancelaciones siguen sin definirse. Confirmar si eso entra al contrato y qué pasa si las medidas o el importe cambian al revisar en sitio.
4. **Cancelación y revocación** por automotriz, arquitectura y PDLC, antes de dar el texto por cerrado. Incluye trabajos ya iniciados.
5. **Garantía de 10 años de nanocerámica.** ¿Cubre solo la película o también instalación, retiro y reinstalación? ¿Aplica igual en taller automotriz y en arquitectura interior? Hoy es referencia de ficha en `LEGAL_REVIEW`, no póliza publicada.
6. **Excepciones, en especial exterior.** No hay regla universal para película exterior. Hay precedentes de 1 año que el repo prohíbe generalizar (domo con reflecta y protección exterior; póliza individual de un proyecto residencial; Highclear en un proyecto de hotel). Definir qué queda fuera: exterior, domos, inclinación, sellado, desgaste normal, y la diferencia entre vida útil estimada y garantía.
7. **Resto de plazos no cerrados:** seguridad 4 mil (referencia de 5 años), seguridad 7 mil (sin plazo; si se ofrece, mínimo legal), Reflecta (no publicar 3 a 5 años como una sola garantía), CPE (propuesta de 90 días, no liberada), PDLC por componente, 3M Crystalline (15 y 7 años, solo como referencia previa).
8. **Remedios.** Quién paga retiro, reinstalación, traslado y acceso o andamios cuando el defecto sí está cubierto. La propuesta de 1 año de instalación no está adoptada.
9. **Aviso de privacidad.** Responsable (persona física o HT PRODUCTS MX, con fecha), RFC, domicilio, tipo de aviso, datos del formulario (nombre, WhatsApp, ciudad, servicio, metros o vehículo, mensaje; sin correo), finalidades, transferencias reales (WhatsApp/Meta y, si se enciende, un webhook), ARCO, conservación por categoría y autorización aparte para fotos de obra.
10. **Cookies y rastreadores.** No hay aviso. GA4, Meta Pixel y Google Ads están definidos y apagados. Decir si hace falta aviso de cookies o consentimiento antes de encenderlos.
11. **NOM-151.** El repo la deja como decisión de especialista para la evidencia y el archivo del expediente. No hay implementación.
12. **Polarizado automotriz.** Conciliar tres capas: (a) la guía original, que cita Reglamento art. 59 y Ley art. 360 fracción IX y una prohibición expresa en el parabrisas, más el permiso provisional del art. 66; (b) la referencia interna 70–75 / 35 / 20, oral, atribuida a personal de Tránsito, que no es tabla legal; (c) la instrucción posterior del dueño: uso común 35% en laterales y medallón y 75% en parabrisas, la ley técnicamente no dice nada del parabrisas, el cliente decide y asume la responsabilidad, y ningún tono se llama legal o permitido. IR75 en parabrisas sigue `UNRESOLVED`: no afirmar ni legalidad ni ilegalidad.
13. **Permisos provisionales.** Qué puede decir el sitio sobre el artículo 66 sin presentar un permiso como autorización automática.
14. **Proveedor y sociedad.** Quién es el proveedor hoy, si y cuándo entra HT PRODUCTS MX, S.A. de C.V., y qué domicilio fiscal y de reclamaciones se imprimen.
15. **Fotografías.** La foto técnica de la obra no autoriza portafolio, web ni redes. Hace falta el texto de esa autorización separada.

---

## Anexo A. Texto íntegro — Legal Publication Readiness v0.1

Archivo original: `docs/source/HIGHTECH_Web2_Legal_Publication_Readiness_v0.1.md`. Idéntico en todas las ramas de diseño revisadas. Fecha interna: 27 de septiembre de 2026.

# HIGHTECH Web 2.0 — Legal Publication Readiness Matrix v0.1

**Fecha:** 27 de septiembre de 2026  
**Fuente jurídica de trabajo:** `HIGHTECH_Paquete_Work_v0.5.md`  
**Estado:** arquitectura de publicación y cierre. No sustituye la liberación final del abogado.

---

# 1. Resultado ejecutivo

Web 2.0 puede construir desde ahora la **arquitectura jurídica**, pero todavía no debe tratar los textos jurídicos de la v0.5 como documentos B2C definitivos.

La separación correcta es:

```text
WEB PÚBLICA
├── términos vigentes
├── aviso de privacidad vigente
├── garantías vigentes
└── información de contacto/reclamaciones

CONTRATACIÓN
├── cotización/orden exacta
├── T&C versión exacta
├── garantía versión exacta
├── anexo técnico aplicable
├── condiciones particulares aplicables
└── aceptación atribuible

ARCHIVO
└── copia inmutable de todo lo anterior por folio
```

---

# 2. Semáforo de publicación

| Pieza | Arquitectura web | Texto definitivo | Estado |
|---|---|---|---|
| `/legal/terminos-y-condiciones/` | Lista para construir | Pendiente liberación jurídica | `BUILD_READY / LEGAL_BLOCKED` |
| `/legal/aviso-de-privacidad/` | Lista para construir | Pendiente datos/privacidad | `BUILD_READY / PRIVACY_BLOCKED` |
| `/garantias/` | Lista para construir | Parcial; garantía por SKU pendiente | `BUILD_READY / WARRANTY_BLOCKED` |
| Cotización/orden | Estructura definida | Plantilla final pendiente | `WORKFLOW_READY / LEGAL_BLOCKED` |
| Anexo técnico | Estructura definida | Requiere producto/aplicación | `PARTIAL` |
| Condiciones particulares | Estructura definida | Por escenario | `PARTIAL` |
| Orden de cambio | Estructura definida | Revisión final pendiente | `PARTIAL` |
| Comprobante final | Estructura definida | Revisión final pendiente | `PARTIAL` |
| Reclamaciones | Flujo definido | Responsables/SLA pendientes | `PARTIAL` |

---

# 3. TÉRMINOS Y CONDICIONES

## Lo que ya está suficientemente estructurado

La v0.5 ya contempla:

- identidad del proveedor;
- folio;
- objeto y documentos contractuales;
- cotización con vigencia;
- aceptación electrónica atribuible;
- medidas/especificaciones;
- precio total;
- cambios;
- condición previa del vidrio;
- compatibilidad;
- exterior/CPE;
- PDLC;
- cancelación/revocación;
- garantía;
- reclamaciones/remedios;
- datos/fotografías;
- terminación;
- controversias;
- recepción automotriz.

## Lo que BLOQUEA publicación final

### TNC-01 — Identidad incompleta
Faltan o deben confirmarse:
- RFC;
- domicilio fiscal;
- domicilio formal de atención/reclamaciones;
- proveedor final por fecha de corte;
- posible RPCA sólo si procede y se obtiene.

### TNC-02 — RPCA / NOM
La v0.5 no declara cerrado si cada modelo debe registrarse ni acredita registro obtenido.

### TNC-03 — Cancelación
La política comercial propuesta debe ser aprobada y revisada jurídicamente para cada modalidad.

### TNC-04 — Garantías
Los T&C no pueden referirse a una matriz de garantías todavía incompleta.

### TNC-05 — Transición societaria
No se puede sustituir al proveedor actual por HT PRODUCTS MX, S.A. de C.V. sin fecha de corte e instrumentos reales.

---

# 4. GARANTÍAS

## Arquitectura pública correcta

`/garantias/` será un **hub de consulta**, no una frase genérica.

Cada garantía publicable tendrá:

```yaml
warranty_id:
version:
effective_from:
provider:
product_id:
sku:
application:
interior_exterior:
material_term:
installation_term:
start_event:
covered_defects:
causal_exclusions:
remedies:
removal:
reinstallation:
transport:
access_equipment:
claim_channel:
care_instructions:
legal_source:
technical_source:
publication_status:
```

## Cobertura base candidata respaldada por v0.5

La fuente candidata contempla defectos según producto como:
- desprendimiento;
- delaminación;
- pérdida anormal de adhesión;
- burbuja persistente que no sea secado normal;
- cambio anormal de color;
- defecto de corte/instalación.

La causa se revisa y las exclusiones deben tener relación causal con el daño.

## Bloqueos actuales

- 10 años nano automotriz: referencia documentada, póliza completa pendiente.
- 10 años nano arquitectónica: referencia histórica/técnica, alcance pendiente.
- 5 años seguridad 4 mil: referencia pendiente de SKU/cobertura.
- Reflecta: plazo por definir.
- Exterior: por SKU/proyecto.
- PDLC: por componente.
- CPE: propuesta, no liberada.
- instalación 1 año: **propuesta empresarial**, no política adoptada automáticamente.

---

# 5. PRIVACIDAD

## Lo que ya está definido conceptualmente

La contratación y operación puede requerir datos para:
- cotizar;
- ejecutar;
- facturar;
- atender garantía;
- defender derechos.

Las fotos técnicas se separan del uso publicitario.

La contratación **no autoriza marketing de imágenes**.

## Lo que falta para publicar aviso integral

### PRIV-01 — Responsable
Confirmar:
- nombre/razón social;
- RFC cuando corresponda;
- domicilio;
- fecha de cambio si entra la sociedad.

### PRIV-02 — Canal ARCO
Definir canal real y operable.

### PRIV-03 — Inventario de datos
Separar:
- prospecto;
- cliente;
- vehículo;
- inmueble;
- fiscal;
- pagos;
- fotografías;
- chat;
- garantía/reclamación;
- marketing.

### PRIV-04 — Finalidades
Separar:
- necesarias;
- secundarias/marketing.

### PRIV-05 — Encargados / plataformas
Inventariar realmente:
- hosting;
- CMS;
- analytics;
- WhatsApp/Meta;
- correo;
- almacenamiento;
- facturación;
- proveedores de evidencia;
- otras integraciones.

### PRIV-06 — Transferencias
No inventarlas. Documentar las que realmente existan.

### PRIV-07 — Conservación
La v0.5 deja pendiente una matriz por categoría; no usar un plazo universal.

### PRIV-08 — Fotografías
Crear autorización separada para publicación/marketing.

---

# 6. EXPERIENCIA DE USUARIO JURÍDICA

La web NO debe obligar al visitante a leer un contrato para entender un producto.

Debe trabajar en tres niveles:

## Nivel 1 — información comercial clara
Producto, beneficios comprobables, límites, aplicación, CTA.

## Nivel 2 — resumen de confianza
Garantía aplicable, proceso, cuidados y restricciones relevantes.

## Nivel 3 — documento completo
T&C, póliza y aviso completos/versionados.

---

# 7. VERSIONADO — REQUISITO CRÍTICO

La URL pública “actual” puede cambiar, pero una contratación pasada no.

Modelo:

```yaml
legal_document:
  document_id: TERMS-B2C-ARCH
  version: "2026.10.01"
  effective_from:
  effective_to:
  provider_id:
  status:
  html_current_url:
  immutable_pdf_url:
  checksum:
  approved_by:
  approval_date:
  supersedes:
```

## Regla

La cotización no dirá únicamente:

> “Aplican los términos publicados en nuestra página.”

Debe identificar:

> `Términos y Condiciones v2026.10.01`

y conservar copia o archivo inmutable de esa versión.

---

# 8. FLUJO WEB → WHATSAPP → CONTRATO

## Prospecto
Puede navegar sin aceptar T&C contractuales.

## Captura de datos
Antes o al obtener datos:
- aviso simplificado;
- acceso al integral.

## Cotización final
Se envía:
- Q-[folio/version];
- total;
- T&C versión;
- garantía versión;
- anexos aplicables.

## Aceptación
Debe poder atribuirse a esa oferta exacta.

No usar como aceptación suficiente por sí sola:
- visto;
- silencio;
- emoji;
- pulgar ambiguo;
- comprobante aislado.

La v0.5 expresamente plantea una aceptación contextual y trazable.

## Acuse
Conservar:
- fecha;
- hora;
- zona;
- versión;
- documentos.

---

# 9. ¿QUÉ DEBE ESTAR EN EL FOOTER?

Siempre:

- HIGHTECH Polarizados;
- Contacto;
- Garantías;
- Términos y Condiciones;
- Aviso de Privacidad.

No saturar el footer con lenguaje contractual.

---

# 10. ¿QUÉ DEBE ESTAR JUNTO A LOS CTA?

## WhatsApp comercial
No requiere una casilla “acepto T&C” sólo para preguntar.

### Microcopy de privacidad
Cuando la web envíe datos estructurados o tenga formulario:

> “Usaremos tus datos para atender tu solicitud conforme a nuestro Aviso de Privacidad.”

## Contratación
La aceptación contractual ocurre sobre la cotización/documentos concretos, no simplemente por hacer clic en WhatsApp.

---

# 11. RECLAMACIONES / GARANTÍA

La web debe hacer fácil encontrar cómo reclamar.

No esconderlo exclusivamente dentro de T&C.

Mínimo:

- canal de WhatsApp;
- correo/canal aprobado;
- información que ayuda a identificar el trabajo;
- qué sucede después.

No exigir públicamente documentos no aprobados como condición absoluta de derechos.

---

# 12. FOTOGRAFÍAS Y PROYECTOS

Separar dos permisos:

```text
A) Foto técnica
→ cotización / ejecución / evidencia / garantía

B) Uso comercial
→ web / redes / anuncios / portafolio
```

B no se presume por A.

El Evidence Registry sólo permite publicar activos con autorización correspondiente.

---

# 13. DECISIONES EMPRESARIALES QUE SIGUEN ABIERTAS

Tomadas directamente de la lógica F de la v0.5:

- responsables y canales;
- garantías por SKU;
- quién asume/financia remedio;
- catálogo técnico autorizado;
- cancelación comercial;
- metas de atención;
- cobranza;
- solución de evidencia/conservación;
- uso publicitario de imágenes;
- transición societaria.

Estas decisiones no deben ser “rellenadas” por Codex ni por el CMS.

---

# 14. DECISIONES QUE NECESITAN ABOGADO / ESPECIALISTA

- clasificación NOM / RPCA;
- texto final de modelos;
- tratamiento exacto de revocación;
- artículo 83 aplicado a paño/pieza/sistema;
- garantías y remedios;
- privacidad/conservación/transferencias;
- NOM-151/evidencia;
- transición PF → sociedad;
- regularización histórica;
- dictamen final de liberación.

---

# 15. IMPLEMENTACIÓN CMS

Codex/Sanity debe impedir:

### Publicar un documento jurídico si:
- `status != APPROVED_FOR_PRODUCTION`;
- no tiene versión;
- no tiene fecha efectiva;
- no tiene proveedor;
- no tiene aprobador;
- no tiene archivo inmutable.

### Publicar una garantía si:
- falta producto/SKU;
- falta aplicación;
- falta plazo;
- falta obligado;
- falta versión;
- falta aprobación jurídica.

---

# 16. PÁGINAS QUE SÍ PODEMOS DISEÑAR YA

Aunque el copy jurídico final siga bloqueado, podemos construir en staging:

### `/garantias/`
- selector por línea/producto;
- resumen;
- documento completo;
- canal de reclamación.

### `/legal/terminos-y-condiciones/`
- documento vigente;
- proveedor;
- versión/fecha;
- descarga;
- archivo histórico cuando proceda.

### `/legal/aviso-de-privacidad/`
- aviso;
- responsable;
- ARCO;
- versión/fecha.

Los datos sensibles permanecen en placeholders hasta liberación.

---

# 17. GATE DE PUBLICACIÓN LEGAL

Antes de producción:

- [ ] proveedor legal completo;
- [ ] RFC/domicilios;
- [ ] decisión RPCA/NOM;
- [ ] T&C aprobados;
- [ ] aviso de privacidad aprobado;
- [ ] canal ARCO operativo;
- [ ] Warranty Matrix por líneas lanzadas;
- [ ] garantía(s) aprobadas;
- [ ] política de cancelación aprobada;
- [ ] workflow cotización/aceptación probado;
- [ ] versiones inmutables generadas;
- [ ] integridad/archivo definidos;
- [ ] fotografía/marketing separado;
- [ ] transición societaria resuelta o explícitamente no activada;
- [ ] prueba de punta a punta con un expediente ficticio;
- [ ] dictamen A14 de liberación.

---

# 18. DECISIÓN DE ARQUITECTURA

**No bloquear el diseño/desarrollo de las páginas legales.**

Sí bloquear:
- copy contractual definitivo;
- publicación B2C;
- garantías no liberadas;
- referencias a registros inexistentes.

Esto permite avanzar Web 2.0 sin fingir que ya terminó el trabajo jurídico.

---

# 19. REGLA FINAL

La web sirve para consultar la versión vigente.

El expediente de cada cliente conserva la versión que realmente aceptó.

**La web puede cambiar. El contrato aceptado no.**

---

## Anexo B. Texto íntegro — Warranty Matrix v0.1

Archivo original: `docs/source/HIGHTECH_Web2_Warranty_Matrix_v0.1.md`. Idéntico en todas las ramas de diseño revisadas. Fecha interna: 27 de septiembre de 2026. El propio documento dice que no se publica como póliza general.

# HIGHTECH Web 2.0 — Warranty Matrix v0.1

**Proyecto:** HIGHTECH Polarizados — Web 2.0  
**Fecha:** 27 de septiembre de 2026  
**Estado:** Matriz interna de consolidación. No publicar como póliza general.  
**Fuente jurídica principal:** `HIGHTECH_Paquete_Work_v0.5.md`  
**Fuentes comerciales/históricas complementarias:** documentos internos HIGHTECH, pólizas emitidas y documentación de LuzIA.

---

## 1. Regla de lectura

Esta matriz NO convierte referencias históricas, propuestas empresariales o precedentes individuales en una garantía pública universal.

Cada fila se clasifica como una de estas categorías:

- **DOCUMENTADA:** existe una fuente interna que la trata como garantía documentada para ese alcance.
- **HISTÓRICA / REFERENCIA:** existe un antecedente comercial, pero todavía requiere confirmación de producto, alcance o póliza antes de publicarse.
- **PRECEDENTE INDIVIDUAL:** existe una póliza emitida para un proyecto concreto; no se generaliza automáticamente.
- **CANDIDATA:** propuesta empresarial contenida en el paquete jurídico v0.5; no es todavía política final.
- **PENDIENTE:** no hay sustento suficiente para fijar públicamente un plazo o cobertura universal.

La publicación de cualquier garantía en `/garantias/` requerirá que la fila correspondiente tenga un producto/SKU, aplicación, cobertura y versión aprobados.

---

## 2. Matriz consolidada

| Línea / aplicación | Plazo de material / película | Instalación / remedio | Estado actual | Qué falta antes de publicar |
|---|---|---|---|---|
| **Nanocerámica HIGHTECH automotriz instalada en taller** | **10 años** según conocimiento comercial documentado vigente | Alcance de mano de obra, retiro, reinstalación y exclusiones debe consultarse/definirse en la póliza aplicable. La v0.5 propone 1 año para defecto de instalación y remedio sin costo cuando falle material cubierto. | **DOCUMENTADA en cuanto al plazo de película; cobertura integral aún no cerrada** | Confirmar SKU, obligado, alcance exacto de los 10 años, cobertura de instalación, retiro/reinstalación, exclusiones, cuidados y póliza final. |
| **Nanocerámica HIGHTECH arquitectónica interior** | Referencia histórica de **10 años** | La v0.5 propone 1 año por defecto de instalación y costos del remedio del material cubierto. | **HISTÓRICA / CANDIDATA** | Confirmar producto/SKU, aplicación, vidrio compatible, orientación, cobertura, obligado y póliza antes de prometer 10 años públicamente. |
| **Seguridad incolora / 4 mil interior** | Referencia comercial de **5 años** | La v0.5 propone 1 año de instalación con retiro/reinstalación incluidos para defecto cubierto. | **HISTÓRICA / CANDIDATA** | Confirmar producto exacto, espesor/unidad, cobertura, sistema instalado y póliza. No usar claims de resistencia certificada sin respaldo del sistema. |
| **Seguridad 7 mil interior** | Sin plazo final definido; la v0.5 indica que si se ofrece garantía, debe respetarse el mínimo legal aplicable | Propuesta de 1 año de instalación | **PENDIENTE / CANDIDATA** | Identificar SKU/sistema, ficha, promesas medibles y garantía aprobada. |
| **Plata Reflecta interior** | Referencias históricas de **3 a 5 años**, sin plazo universal | Propuesta v0.5: 1 año de instalación | **HISTÓRICA / PENDIENTE** | Definir plazo por producto y aplicación; validar ficha, metalización, compatibilidad y póliza. No publicar “3–5 años” como si fuera una sola garantía. |
| **Película exterior (genérica)** | Debe definirse por SKU expresamente autorizado para exterior | Propuesta v0.5: 1 año de instalación si es técnicamente viable | **PENDIENTE / CANDIDATA** | Aprobación de uso exterior, sellado, inclinación, exposición y respaldo del producto. No usar un “hasta 1 año” genérico. |
| **Domo — reflecta + protección exterior** | Existe antecedente interno de **1 año para protección exterior** y referencia de **vida útil aproximada 5 años** | No universalmente cerrado | **HISTÓRICA** | Separar garantía de vida útil estimada; definir qué capa, defecto y obligación cubre cada plazo. |
| **Proyecto residencial Ricardo García Jasso — Plata Reflecta + Seguridad exterior en domo** | Póliza individual emitida: **1 año de material** | Póliza individual emitida: **5 años de instalación** | **PRECEDENTE INDIVIDUAL** | No generalizar. Usar sólo como evidencia de una póliza histórica concreta y revisar consistencia con política futura. |
| **Highclear / Ultraclear exterior** | Póliza de proyecto J.W. Marriott indica **1 año de fabricante para película exterior**; el mismo documento refiere **5 años de fábrica para Highclear interior** | No debe extrapolarse automáticamente | **PRECEDENTE INDIVIDUAL / REFERENCIA** | Confirmar fabricante, producto exacto, aplicación, vigencia actual y si HIGHTECH adopta o sólo transmite esa garantía. |
| **CPE / doble capa** | Propuesta inicial v0.5: **90 días por defectos del componente**, sin promesa adicional de vida útil al desgaste normal | Propuesta: 1 año de instalación y costos imputables al conjunto | **CANDIDATA — NO LIBERADA** | Compatibilidad escrita del conjunto y ensayo/validación técnica. La propia v0.5 bloquea su comercialización sin ese respaldo. |
| **PDLC** | Plazos diferenciados por película, controlador, fuente y accesorios aún por completar | Propuesta: 1 año de instalación | **PENDIENTE / CANDIDATA** | Diagrama, pruebas, humedad, fabricante, repuestos, plazos por componente y póliza. |
| **3M Crystalline — laterales/medallón** | Referencia previa: **15 años** | No definida aquí | **HISTÓRICA / REFERENCIA** | Verificar oferta vigente y póliza del producto exacto antes de utilizarla comercialmente. |
| **3M Crystalline — parabrisas/panorámico** | Referencia previa: **7 años** | No definida aquí | **HISTÓRICA / REFERENCIA** | Verificar oferta vigente y póliza del producto exacto antes de utilizarla comercialmente. |
| **Retiro, mantenimiento o reparación contratados** | Plazo propio según servicio y supuesto aplicable | Rehacer sin costo lo imputable dentro del plazo legal o superior aplicable | **PENDIENTE POR SERVICIO** | No confundir garantía de un servicio nuevo con garantía del producto instalado anteriormente. |

---

## 3. Cobertura base candidata de la póliza HIGHTECH

La v0.5 propone como base que, según el producto, puedan quedar cubiertos defectos de material o aplicación que afecten características comprometidas, tales como:

- desprendimiento;
- delaminación;
- pérdida anormal de adhesión;
- burbuja persistente que no sea secado normal;
- cambio anormal de color;
- defecto de corte o instalación.

La causa deberá determinarse mediante revisión sustentada.

Las exclusiones no deben operar como cancelación automática de toda cobertura; deben guardar relación causal con el daño reclamado.

---

## 4. Datos obligatorios del modelo de garantía

Cada garantía aprobada para Web 2.0 deberá registrar, como mínimo:

- `warranty_id`
- `version`
- `status`
- `product_id`
- `sku`
- `application`
- `interior_or_exterior`
- `provider_obligated`
- `manufacturer_if_applicable`
- `material_term`
- `installation_term`
- `start_event`
- `covered_defects`
- `excluded_causes`
- `remedies`
- `removal_covered`
- `reinstallation_covered`
- `transport_covered`
- `access_equipment_covered`
- `maintenance_requirements`
- `curing_notes`
- `claim_channel`
- `technical_source`
- `legal_source`
- `approved_by`
- `effective_from`
- `supersedes`

No debe existir una ficha pública de garantía sin referencia a una versión aprobada.

---

## 5. Reglas para `/garantias/`

La página pública deberá:

1. Permitir localizar la garantía por **producto + aplicación**.
2. Diferenciar claramente **material/película** de **instalación/mano de obra** cuando los plazos sean distintos.
3. Mostrar un resumen legible y enlazar la versión completa aplicable.
4. No convertir referencias históricas en promesas actuales.
5. No confundir **vida útil estimada** con **garantía**.
6. No extender un plazo de interior a exterior, ni de arquitectura a automotriz, ni de HIGHTECH a otra marca.
7. Mantener visible la versión y fecha de vigencia.
8. Permitir que páginas de producto consuman un resumen desde esta misma fuente, sin duplicarlo manualmente.

---

## 6. Inconsistencias / decisiones que siguen abiertas

### W-OPEN-01 — Nanocerámica 10 años
Está documentado internamente que la nanocerámica automotriz instalada en taller tiene 10 años de garantía de película. Sigue pendiente definir con precisión si esos 10 años comprenden o no instalación, retiro y reinstalación.

### W-OPEN-02 — Nanocerámica arquitectónica
Existe referencia histórica de 10 años, pero la v0.5 exige confirmar producto, aplicación, compatibilidad, cobertura y póliza antes de publicarla.

### W-OPEN-03 — Seguridad 4 mil
Existe referencia comercial de 5 años, pero falta cerrar producto exacto, cobertura y condiciones.

### W-OPEN-04 — Plata Reflecta
Las referencias de 3 a 5 años no constituyen una garantía universal. Debe definirse una vigencia por SKU/aplicación.

### W-OPEN-05 — Exterior
Hay precedentes de 1 año para material exterior en proyectos concretos, pero no existe todavía una regla universal que pueda publicarse para toda película exterior.

### W-OPEN-06 — Instalación
La propuesta de 1 año de instalación contenida en la v0.5 es una **propuesta empresarial**, no una decisión final adoptada para todas las líneas.

### W-OPEN-07 — 3M Crystalline
Los 15 años y 7 años aparecen como referencias previas; necesitan comprobarse contra oferta y póliza vigentes del producto exacto antes de publicarse.

---

## 7. Gate para declarar una garantía “PUBLICABLE”

Una fila sólo podrá pasar a estado `PUBLICABLE` si:

- [ ] producto y SKU están identificados;
- [ ] aplicación está delimitada;
- [ ] plazo de material está respaldado;
- [ ] plazo de instalación está definido;
- [ ] obligado está identificado;
- [ ] cobertura y exclusiones están descritas;
- [ ] retiro/reinstalación/acceso están resueltos;
- [ ] cuidados y curado están documentados;
- [ ] fuente técnica está vinculada;
- [ ] fuente jurídica está vinculada;
- [ ] versión final fue aprobada;
- [ ] no contradice publicidad, cotización ni T&C vigentes.

---

**Regla central:** la web sólo mostrará garantías que hayan pasado de referencia o propuesta a una versión aprobada y trazable. Las pólizas históricas se conservan como evidencia, no como autorización para generalizar.

---

## Anexo C. Texto íntegro — Legalidad Automotriz Jalisco v0.4

Archivo original: `docs/source/HIGHTECH_Web2_Legalidad_Automotriz_Jalisco_v0.4.md`. Idéntico en todas las ramas de diseño revisadas. Fecha interna: 27 de septiembre de 2026. Sustituye, según su encabezado, a una v0.3 que no está en el repositorio.

# HIGHTECH Web 2.0 — Legalidad Automotriz Jalisco v0.4

**Fecha:** 27 de septiembre de 2026  
**Sustituye:** `HIGHTECH_Web2_Legalidad_Automotriz_Jalisco_v0.3.md`

## 1. Criterio definitivo de comunicación

HIGHTECH no escogerá entre dos extremos incorrectos:

- fingir que la Ley contiene una tabla 75 / 35 / 20 que no aparece expresamente en el texto normativo revisado;
- ignorar la orientación práctica que HIGHTECH ha recibido directamente de personal de Tránsito de Jalisco.

La comunicación pública debe presentar ambas capas de forma clara.

---

## 2. Lo que dice la normativa publicada

La normativa estatal revisada contiene restricciones al polarizado que impida la visibilidad hacia el interior y una restricción específica respecto del parabrisas.

La web debe citar la norma vigente cuando trate el tema y evitar reinterpretarla como una tabla numérica que no aparece expresamente en su texto.

---

## 3. Lo que HIGHTECH ha recibido directamente de Tránsito

Fernando Chalita reporta haber consultado directamente con personal de Tránsito de Jalisco.

La referencia práctica comunicada fue:

- **70–75% como máximo de referencia para parabrisas**
- **35% como máximo de referencia para piloto y copiloto**
- **20% como máximo de referencia para laterales traseros y medallón**

Clasificación:

```yaml
source_type: AUTHORITY_ORAL_GUIDANCE
authority: "personal de Tránsito de Jalisco"
reported_by: Fernando Chalita
values:
  windshield: "70–75%"
  front_side_windows: "35%"
  rear_side_and_back_window: "20%"
operational_weight: HIGH
formal_written_weight: LIMITED
publication_allowed: true
required_attribution: true
```

Esta información se considera una **referencia operativa real de HIGHTECH**, no un rumor de mercado.

---

## 4. Cómo debe aparecer en Web 2.0

### Versión recomendada para FAQ / página automotriz

**¿Qué polarizado está permitido en Jalisco?**

La normativa vigente en Jalisco establece restricciones al polarizado y mantiene una disposición específica respecto del parabrisas.

En la práctica, y con base en consultas directas que HIGHTECH ha realizado con personal de Tránsito de Jalisco, nos han indicado como referencia máxima:

- **70–75% en parabrisas**
- **35% en piloto y copiloto**
- **20% en laterales traseros y medallón**

Actualmente esos porcentajes no aparecen desarrollados con la misma claridad en una tabla dentro de la normativa publicada que hemos revisado. Por eso los comunicamos como **referencia práctica proporcionada por Tránsito**, no como una transcripción literal de la Ley.

En HIGHTECH podemos orientarte para elegir una configuración considerando visibilidad, uso nocturno, desempeño de la película y esta referencia práctica. La aplicación final de la normativa corresponde a la autoridad.

---

## 5. Versión breve para fichas o módulos de ayuda

> **Referencia de tonos en Jalisco:** en consultas directas con personal de Tránsito nos han indicado como referencia máxima 70–75% en parabrisas, 35% en piloto/copiloto y 20% en la parte trasera. La normativa publicada no presenta actualmente esa tabla con el mismo nivel de detalle, por lo que la comunicamos como orientación práctica y no como garantía frente a cualquier criterio de autoridad.

---

## 6. Regla comercial HIGHTECH

HIGHTECH puede usar internamente:

```yaml
jalisco_operational_tint_reference:
  windshield: "70–75%"
  front_side_windows: "35%"
  rear_side_windows: "20%"
  rear_window: "20%"
  status: ACTIVE_OPERATIONAL_REFERENCE
  source: DIRECT_TRANSIT_GUIDANCE
```

Esto permite:

- recomendar IR75 como opción clara de referencia para parabrisas;
- recomendar 35 en piloto/copiloto cuando se busca mantenerse dentro de la referencia recibida;
- recomendar 20/IR15 en parte trasera sólo explicando correctamente la diferencia entre nombre comercial y VLT técnico cuando corresponda;
- mantener una conversación comercial útil y alineada con la realidad práctica del mercado.

---

## 7. Lo que NO debe decirse

No publicar:

- “La Ley dice 75 / 35 / 20.”
- “Es 100% legal.”
- “No te pueden multar.”
- “Tránsito garantiza que no habrá sanción.”
- “75% es el límite que aparece en el artículo X.”
- “Todos los agentes aplican exactamente el mismo criterio.”

---

## 8. Principio editorial

La transparencia no consiste en ocultar la práctica real por miedo a explicar una ambigüedad.

Consiste en decir:

1. qué dice la norma publicada;
2. qué orientación práctica recibió HIGHTECH directamente de la autoridad;
3. qué parte es norma escrita y qué parte es criterio práctico;
4. qué puede hacer HIGHTECH para orientar al cliente.

---

## 9. Regla final

**75 / 35 / 20 queda adoptado por HIGHTECH como referencia máxima práctica de operación en Jalisco, atribuida a consultas directas con personal de Tránsito.**

No se presentará como tabla textual de la Ley ni como garantía absoluta de ausencia de sanción.
