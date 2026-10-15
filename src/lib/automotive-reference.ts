/**
 * Citas públicas de polarizado automotriz en Jalisco.
 * El texto legal se copió de los PDF de la biblioteca del Congreso.
 * No afirma que un tono sea legal, permitido o que evite una sanción.
 */

export const reglamentoPdfUrl =
  "https://congresoweb.congresojal.gob.mx/bibliotecavirtual/legislacion/Reglamentos/Documentos_PDF-Reglamentos/Reglamento%20de%20la%20Ley%20de%20Movilidad%2C%20Seguridad%20Vial%20y%20Transporte%20del%20Estado%20de%20Jalisco-230224.pdf";

export const leyPdfUrl =
  "https://congresoweb.congresojal.gob.mx/bibliotecavirtual/legislacion/Leyes/Documentos_PDF-Leyes/Ley%20de%20Movilidad,%20Seguridad%20Vial%20y%20Transporte%20del%20Estado%20de%20Jalisco-140823.pdf";

export const automotiveLaw = {
  practiceTitle: "Lo que más se usa",
  practice:
    "Lo que la mayoría de las personas suele instalar es 35% en los cristales laterales y en el medallón, y 75% en el parabrisas.",
  sideLabel: "Laterales y medallón",
  sideValue: "35%",
  windshieldLabel: "Parabrisas",
  windshieldValue: "75%",
  lawTitle: "¿Y qué dice la ley?",
  lawIntro: "Cita textual del PDF del Congreso. Abre el artículo para leerla. El resto de cada artículo no se incluye.",
  disclaimerTitle: "Solo informativo",
  disclaimer: "Esto es solo informativo. No es asesoría legal. Tú decides el tono.",
} as const;

export const automotiveQuotes = [
  {
    id: "reglamento-59",
    summary: "Artículo 59 del Reglamento",
    hint: "Fracción VIII",
    citation:
      "Reglamento de la Ley de Movilidad, Seguridad Vial y Transporte del Estado de Jalisco, artículo 59, numeral 1, fracción VIII.",
    sourceLabel: "PDF del Reglamento en la biblioteca del Congreso",
    sourceUrl: reglamentoPdfUrl,
    paragraphs: [
      "Artículo 59. 1. Todos los vehículos deberán contar con los elementos propios dispuestos por el fabricante tales como:",
      "VIII. Parabrisas, medallones y vidrios en buen estado que permitan la visibilidad hacia el interior del vehículo; bajo ninguna circunstancia el parabrisas estará polarizado;",
    ],
  },
  {
    id: "reglamento-66",
    summary: "Artículo 66 del Reglamento",
    hint: "Fracción X",
    citation:
      "Reglamento de la Ley de Movilidad, Seguridad Vial y Transporte del Estado de Jalisco, artículo 66, numeral 1, fracción X.",
    sourceLabel: "PDF del Reglamento en la biblioteca del Congreso",
    sourceUrl: reglamentoPdfUrl,
    paragraphs: [
      "Artículo 66. 1. Para los efectos del artículo 130 numeral 1 fracción VI de la Ley, la Secretaría podrá autorizar provisionalmente a través de permisos, la circulación en los casos siguientes:",
      "X. Con vidrios polarizados hasta por un año;",
    ],
  },
  {
    id: "ley-360",
    summary: "Artículo 360 de la Ley",
    hint: "Fracción IX",
    citation:
      "Ley de Movilidad, Seguridad Vial y Transporte del Estado de Jalisco, artículo 360, numeral 1, fracción IX.",
    sourceLabel: "PDF de la Ley en la biblioteca del Congreso",
    sourceUrl: leyPdfUrl,
    paragraphs: [
      "Artículo 360. De una a cinco UMA.",
      "1. Se sancionará de una a cinco veces el valor de la UMA a las personas conductoras o personas propietarias de los vehículos, o en su caso, personas operadoras de vehículos del servicio público de transporte que cometan alguna de las siguientes infracciones:",
      "IX. Usar cristales polarizados u otros elementos que impidan totalmente la visibilidad hacia el interior del vehículo, o polarizado de cualquier intensidad en el parabrisas del vehículo;",
    ],
  },
  {
    id: "ley-385",
    summary: "Artículo 385 de la Ley",
    hint: "Fracciones XXIV y XXV",
    citation:
      "Ley de Movilidad, Seguridad Vial y Transporte del Estado de Jalisco, artículo 385, numeral 1, fracciones XXIV y XXV.",
    sourceLabel: "PDF de la Ley en la biblioteca del Congreso",
    sourceUrl: leyPdfUrl,
    paragraphs: [
      "Artículo 385. Medidas de seguridad.",
      "1. Procederá aplicar como medida de seguridad, además de las sanciones que resulten por las infracciones cometidas, el retiro de la circulación de un vehículo, mismo que será puesto bajo resguardo de los depósitos autorizados, ya sean públicos o concesionados para esos fines, en los siguientes casos:",
      "XXIV. Cuando un vehículo de transporte público en modo de taxi o radiotaxi mantenga habilitado el sistema de bloqueo de seguros o elevadores de vidrios o puertas, o circule con cristales polarizados u otros elementos que impidan totalmente la visibilidad hacia el interior del vehículo. En caso de reincidencia se cancelará la autorización al vehículo para operar en el modo del transporte respectivo; o",
      "XXV. Cuando un vehículo de Servicio de Transporte Privado de Punto a Punto mantenga habilitado el sistema de bloqueo de seguros o elevadores de vidrios o puertas o circulen con cristales polarizados u otros elementos que impidan totalmente la visibilidad hacia el interior del vehículo. En caso de reincidencia se cancelará el registro al vehículo para prestar el servicio de transporte privado.",
    ],
  },
] as const;
