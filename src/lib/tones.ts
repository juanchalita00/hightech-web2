/** Nombres comerciales de los tonos. El VLT de ficha solo se muestra en la columna técnica de Residencial. */
export function toneName(id: string): string {
  return id.replace(/^IR/i, "");
}

/** Tono 80: se muestra en la gama; sin datos de ficha publicados en el repo, por eso "—". */
export const tone80 = {
  name: "80",
  vlt: "—",
  description: "El más claro de la gama.",
} as const;

/** Colores de muestra de cada tono, del más claro al más oscuro. */
export const toneSamples: Record<string, string> = {
  IR80: "linear-gradient(90deg, #dfe8ee 0%, #c9d8e1 100%)",
  IR75: "linear-gradient(90deg, #c7d6df 0%, #a8becb 100%)",
  IR50: "linear-gradient(90deg, #8f969b 0%, #70777c 100%)",
  IR35: "linear-gradient(90deg, #60666a 0%, #484e52 100%)",
  IR15: "linear-gradient(90deg, #292e31 0%, #191d20 100%)",
  IR5: "linear-gradient(90deg, #0b0d0f 0%, #020304 100%)",
};
