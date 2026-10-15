# Pendiente de revisión jurídica

El texto anterior a este PR, recuperado del repositorio para enviarlo al abogado, está en `docs/legal-para-abogado.md`. Este archivo solo lista lo que aún hay que redactar.

Estos puntos no están publicados como contrato ni como póliza. El sitio mantiene aviso de privacidad, términos y garantías fuera del menú, del sitemap y del índice, y responden 404 en Production hasta que `termsApproved`, `privacyApproved` y `warrantiesApproved` pasen a verdadero en `content/release-state.json`.

La cotización ya deja preparada la relación: aceptar la cotización equivaldrá a aceptar los términos, incluidas las obligaciones de pago. El enlace público (`/legal/terminos-y-condiciones/#aceptacion-de-cotizacion`) solo aparece cuando los términos estén aprobados.

## El abogado debe entregar

### Aviso de privacidad
- Responsable del tratamiento: razón social o persona física, RFC y domicilio fiscal. Hoy el sitio solo usa la marca y «Zapopan, Jalisco».
- Fundamento aplicable y si el aviso es integral, simplificado o ambos.
- Datos que el formulario recaba: nombre, teléfono de WhatsApp, ciudad, tipo de servicio, metros aproximados o modelo del vehículo, y mensaje. No se pide correo.
- Finalidades, transferencias (WhatsApp/Meta y, si se activa, el webhook n8n) y si hace falta consentimiento distinto del envío.
- Derechos ARCO, plazo de respuesta y canal formal.
- Conservación, medidas de seguridad y fecha de versión.

### Términos y condiciones
- Identificación del proveedor y si el documento es contrato de adhesión sujeto a Profeco.
- Redacción vigente de la aceptación: solicitar o aceptar la cotización implica aceptar los términos, incluidas las obligaciones de pago.
- Anticipos, cancelaciones, reprogramación y trabajos ya iniciados. Hoy no están definidos.
- Efectivo, transferencia y tarjeta. Con tarjeta se agrega IVA de 16% y no se presenta como comisión. Factura solo si la piden, con constancia fiscal, correo y uso de CFDI. Confirmar si eso queda en el contrato.
- Qué pasa si las medidas o el importe cambian al validar en sitio.
- Instalación automotriz en taller. El domicilio automotriz está en contradicción entre fuentes y no debe prometerse.
- Responsabilidad del cliente al elegir el tono del vehículo: la referencia de uso común (35% laterales y medallón, 75% parabrisas) no es asesoría legal.
- Limitación de responsabilidad, casos de fuerza mayor y jurisdicción.
- Cómo se actualizan los términos y qué versión acepta cada cotización.

### Garantías
- Póliza por línea, no un plazo universal. Falta precisar material, instalación, exclusiones y reclamación.
- Nanocerámica automotriz instalada en taller: referencia comercial de 10 años. Confirmar si cubre material e instalación.
- Nanocerámica en arquitectura: la misma referencia de 10 años no está cerrada para interior arquitectónico.
- Seguridad incolora: referencia de 5 años, sin producto, espesor ni condiciones cerradas. El nombre comercial «Ultra Safe 4 mm» no confirma 4 mm físicos.
- Plata Reflecta: el plazo exacto está entre 3 y 5 años.
- Domo con reflecta y protección exterior: referencia de 1 año en la capa exterior y vida útil aproximada de 5 años. Definir qué cubre cada capa.
- 3M Crystalline: referencias de 15 años en laterales y medallón y 7 en parabrisas, sin póliza vigente cargada.
- No inventar cobertura de rotura ni de rayones.
- Reclamación: validar al cliente, pedir fotos y datos, y que lo revise una persona. No atribuir la causa ni prometer reposición en el sitio.

### Coherencia con la referencia automotriz
- El texto público dice que no hay regulación oficial actualizada, que el uso común es 35% en laterales y medallón y 75% en parabrisas, y que en el parabrisas la ley técnicamente no establece nada.
- Una guía anterior citaba el Reglamento de Movilidad de Jalisco, artículo 59, y la Ley, artículo 360, fracción IX. Ese texto ya no está en las páginas públicas. Hay que conciliarlo antes de indexar `/guias/polarizado-automotriz-jalisco/`.
- No publicar un tono como legal ni como permitido.
