export type LegalSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type LegalDraftDocument = {
  id: "terms" | "privacy" | "warranty";
  eyebrow: string;
  title: string;
  summary: string;
  sections: LegalSection[];
};

const terms: LegalDraftDocument = {
  id: "terms",
  eyebrow: "Borrador no vigente",
  title: "Términos y condiciones",
  summary: "Este documento todavía no está vigente. Cuando se publique, aceptar una cotización de HIGHTECH Polarizados incluirá aceptar estos términos, también las obligaciones de pago.",
  sections: [
    {
      id: "identificacion",
      heading: "Quién presta el servicio",
      paragraphs: [
        "La marca es HIGHTECH Polarizados. La base de trabajo está en Zapopan, Jalisco. El teléfono de contacto es 33 2228 9017 y el correo de ventas es ventas@polarizadoshightech.com.",
        "La razón social, el RFC y el domicilio fiscal se incorporarán en la versión vigente.",
      ],
    },
    {
      id: "servicios",
      heading: "Qué cubre una cotización",
      paragraphs: [
        "HIGHTECH vende e instala películas para control solar, protección UV, privacidad y refuerzo de cristales, en proyectos residenciales, comerciales e institucionales, y en vehículos. El auto se instala en taller con cita; a domicilio solo flotillas o autos de agencia.",
        "La cotización describe el alcance: película, zonas o cristales, y las condiciones que se conocen en ese momento. Las medidas y el importe de un proyecto arquitectónico pueden ajustarse al validar en sitio.",
      ],
    },
    {
      id: "aceptacion-de-cotizacion",
      heading: "Aceptar la cotización es aceptar estos términos",
      paragraphs: [
        "Cuando este documento esté vigente, la aceptación de una cotización —por escrito, en WhatsApp o por el medio que indique la propia cotización— será la aceptación de estos términos y condiciones.",
        "Esa aceptación incluye las obligaciones de pago descritas en la cotización y en la sección siguiente. La versión aplicable será la que esté publicada en la fecha de la aceptación.",
      ],
    },
    {
      id: "obligaciones-de-pago",
      heading: "Obligaciones de pago",
      paragraphs: [
        "Las formas de pago de referencia son efectivo, transferencia y tarjeta. Si el pago es con tarjeta, se agrega el IVA de 16%. Ese IVA no se presenta como comisión de la tarjeta. Si además se pide factura, el IVA no se suma una segunda vez por ese motivo.",
        "La factura se emite cuando el cliente la pide y entrega constancia fiscal, correo y uso de CFDI.",
        "Los anticipos, las cancelaciones y las condiciones si un trabajo ya empezó no están definidos. La versión vigente deberá establecerlos, y la cotización deberá repetir los que apliquen a ese trabajo.",
      ],
    },
    {
      id: "instalacion",
      heading: "Instalación",
      paragraphs: [
        "La instalación automotriz es en taller con cita. A domicilio solo flotillas o autos de agencia. El horario de atención —lunes a sábado de 10:00 a 19:00, con cita; domingo cerrado— no es la disponibilidad de instalación; agendamos según la disponibilidad de la semana.",
        "En arquitectura, la visita técnica es excepcional. En película eléctrica (PDLC), la visita es obligatoria si el cliente quiere avanzar, porque requiere integración eléctrica.",
      ],
    },
    {
      id: "tono-automotriz",
      heading: "Elección de tono en el vehículo",
      paragraphs: [
        "En el auto lo más común es 75 al frente y 35 o más claro en los cristales traseros, para mantener la visibilidad hacia el interior. También instalamos parabrisas completo. Te asesoramos para elegir.",
      ],
    },
    {
      id: "garantias",
      heading: "Garantías",
      paragraphs: [
        "La garantía depende del producto, de la aplicación y de la póliza vigente. Un plazo de referencia no es, por sí solo, una garantía publicada.",
        "La versión vigente de estos términos remitirá a la página de garantías cuando esa póliza esté aprobada.",
      ],
    },
    {
      id: "datos",
      heading: "Datos personales",
      paragraphs: [
        "El tratamiento de los datos de una solicitud de cotización se describirá en el aviso de privacidad, cuando ese aviso esté vigente.",
      ],
    },
    {
      id: "cambios",
      heading: "Cambios de este documento",
      paragraphs: [
        "HIGHTECH podrá actualizar estos términos. Una cotización ya aceptada conserva la versión que estaba publicada en el momento de esa aceptación, salvo que el cliente acepte por escrito una versión posterior.",
      ],
    },
  ],
};

const privacy: LegalDraftDocument = {
  id: "privacy",
  eyebrow: "Borrador no vigente",
  title: "Aviso de privacidad",
  summary: "Este aviso todavía no está vigente. Describe el tratamiento previsto para las solicitudes de cotización que llegan por el sitio y por WhatsApp.",
  sections: [
    {
      id: "responsable",
      heading: "Responsable",
      paragraphs: [
        "La marca responsable de la atención es HIGHTECH Polarizados, con base en Zapopan, Jalisco. El correo de contacto es ventas@polarizadoshightech.com y el teléfono es 33 2228 9017.",
        "La razón social, el RFC y el domicilio fiscal del responsable se incorporarán en la versión vigente.",
      ],
    },
    {
      id: "datos",
      heading: "Datos que se recaban",
      paragraphs: [
        "El formulario de cotización pide nombre, ciudad, empresa si quieren indicarla, cómo prefieren que los contacten (WhatsApp o correo), el dato de ese medio, tipo de servicio (residencial, comercial o automotriz), metros cuadrados aproximados o modelo del vehículo, y un mensaje.",
        "Si más adelante el cliente pide factura, se solicitan constancia fiscal, correo y uso de CFDI. Esos datos no forman parte del formulario público.",
      ],
    },
    {
      id: "finalidades",
      heading: "Para qué se usan",
      paragraphs: [
        "Los datos se usan para responder la solicitud, preparar una cotización, agendar y dar seguimiento al servicio que el cliente pidió.",
        "No se usan para publicar el nombre del cliente ni las fotos de su proyecto sin una autorización distinta.",
      ],
    },
    {
      id: "terceros",
      heading: "WhatsApp y otros encargados",
      paragraphs: [
        "Si no hay un destino configurado, enviar la solicitud abre WhatsApp o el correo de ventas, según el medio elegido. Si hay un destino configurado, la solicitud se envía ahí. La versión vigente deberá identificar esa transferencia y cualquier otra.",
        "Si más adelante se configura un webhook para recibir la misma solicitud, el aviso deberá nombrar a ese encargado antes de activarse.",
      ],
    },
    {
      id: "derechos",
      heading: "Derechos y contacto",
      paragraphs: [
        "La versión vigente deberá explicar cómo solicitar acceso, rectificación, cancelación u oposición, en qué plazo y por qué canal. Mientras este borrador no esté publicado, la vía de contacto sigue siendo el teléfono y el correo de ventas.",
      ],
    },
  ],
};

const warranty: LegalDraftDocument = {
  id: "warranty",
  eyebrow: "Borrador no vigente",
  title: "Garantías",
  summary: "Esta página no publica una póliza. Reúne las referencias que la revisión jurídica tiene que convertir, o no, en garantía escrita.",
  sections: [
    {
      id: "principio",
      heading: "Una referencia no es la póliza",
      paragraphs: [
        "La garantía depende del producto, de dónde se instaló y de la versión escrita que corresponda a ese trabajo. Un plazo mencionado en una ficha o en una conversación no se convierte solo en cobertura.",
        "Cuando la póliza esté aprobada, la cotización podrá enlazar esta página. Aceptar la cotización incluirá las condiciones de garantía que esa versión publique.",
      ],
    },
    {
      id: "nanoceramica-taller",
      heading: "Nanocerámica automotriz en taller",
      paragraphs: [
        "La referencia comercial vigente para nanocerámica instalada en taller es de 10 años. Falta precisar si cubre material, instalación o ambos, y cuáles son las exclusiones.",
        "La misma referencia de 10 años aplica al auto instalado en taller y a flotillas o autos de agencia instalados a domicilio.",
      ],
    },
    {
      id: "nanoceramica-arquitectura",
      heading: "Nanocerámica en arquitectura",
      paragraphs: [
        "Existe una referencia de 10 años para nanocerámica interior. No está cerrado si ese plazo es el mismo en arquitectura y en automotriz, ni qué cubre.",
      ],
    },
    {
      id: "otras-lineas",
      heading: "Otras líneas, todavía abiertas",
      paragraphs: [
        "Seguridad incolora interior: referencia de 5 años, sin producto, espesor ni condiciones cerradas. El nombre comercial Ultra Safe 4 mm no confirma un espesor físico de 4 mm. No hay película de seguridad automotriz.",
        "Plata Reflecta: la referencia está entre 3 y 5 años. Falta el plazo exacto.",
        "Domo con reflecta y protección exterior: referencia de 1 año para la capa exterior y una vida útil aproximada de 5 años. Hay que separar qué cubre cada capa. La vida útil no es la garantía.",
        "Otras líneas automotrices distintas de la nanocerámica se confirman en la cotización de ese trabajo.",
      ],
    },
    {
      id: "exclusiones",
      heading: "Lo que esta página no promete",
      paragraphs: [
        "No se publica cobertura de rotura del cristal ni de rayones. No se promete reposición antes de revisar el caso.",
        "Una reclamación se atiende identificando al cliente, pidiendo fotos y datos, y pasando la revisión a una persona. El sitio no atribuye la causa.",
      ],
    },
    {
      id: "cuidados",
      heading: "Cuidados que sí están definidos en automotriz",
      paragraphs: [
        "No bajar los cristales durante 48 horas. Las burbujas de agua o un aspecto opaco al inicio pueden ser normales. El secado tarda de 15 a 30 días. La limpieza es con paño suave y sin amoníaco.",
      ],
    },
  ],
};

export const legalDrafts = { terms, privacy, warranty } as const;
