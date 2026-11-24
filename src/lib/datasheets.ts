/**
 * PDFs públicos de la Línea IR.
 * Archivos en public/fichas/, copiados de fichas_v3/descargables (23 nov 2026).
 * Ultra Safe sigue en corrección: securityPdf queda en null, sin enlace.
 */
export const datasheets = {
  casa: {
    href: "/fichas/ficha-linea-ir-casa.pdf",
    label: "Descarga la ficha técnica (PDF)",
  },
  auto: {
    href: "/fichas/ficha-linea-ir-auto.pdf",
    label: "Ficha para auto (PDF)",
  },
  /** Ultra Safe sigue en corrección. No publicar un PDF ni un enlace roto. */
  securityPdf: null as string | null,
} as const;

export const securityDatasheetLabel = "Ficha técnica (PDF)";
