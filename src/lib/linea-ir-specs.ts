/**
 * Tabla de la Línea IR en /peliculas/nanoceramica.
 * Fuente de los números: fichas descargables (ficha-linea-ir-casa.pdf y
 * ficha-linea-ir-auto.pdf), que citan SRC-TECH-SEP19, cruzadas con
 * docs/source/HIGHTECH_Web2_System_of_Truth_v0.19.md §6–§7 y fichas_v3.
 *
 * publication-truth.json, la ficha, SoT §6–§7 y fichas_v3 coinciden en
 * VLT 48% para IR50 (el 50 es el nombre del tono, como el 5 que en ficha es 3%).
 *
 * Coeficiente de sombreado: Fer lo dio por publicado el 23 nov 2026 (22:23).
 * Ya no queda «en revisión». Los valores salen de las fichas (SRC-TECH-SEP19)
 * y quedaron también en publication-truth.json (shadingCoefficient).
 * El rechazo UV publicado es 99% en los cinco tonos, no 99.9%.
 *
 * Garantía: «10 años en todos los tonos» es la del material, según la ficha.
 * No se muestra una línea «Fuente:» en la vista.
 */

export type LineaIrSpec = {
  id: "IR75" | "IR50" | "IR35" | "IR15" | "IR5";
  vlt: string;
  tser: string;
  infrared: string;
  uv: string;
  shading: string;
};

export const lineaIrWarranty = "10 años en todos los tonos";

export const lineaIrSpecs: LineaIrSpec[] = [
  { id: "IR75", vlt: "75%", tser: "59%", infrared: "95%", uv: "99%", shading: "0.48" },
  { id: "IR50", vlt: "48%", tser: "72%", infrared: "95%", uv: "99%", shading: "0.32" },
  { id: "IR35", vlt: "35%", tser: "79%", infrared: "95%", uv: "99%", shading: "0.25" },
  { id: "IR15", vlt: "15%", tser: "87%", infrared: "95%", uv: "99%", shading: "0.15" },
  { id: "IR5", vlt: "3%", tser: "96%", infrared: "95%", uv: "99%", shading: "0.09" },
];
