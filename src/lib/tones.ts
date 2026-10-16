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
