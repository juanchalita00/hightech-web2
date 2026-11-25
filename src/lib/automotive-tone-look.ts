/**
 * Apariencia visual de los tonos automotrices (una sola fuente de verdad).
 * La usa el simulador y las muestras de la lista en /automotriz.
 * «Sin película» es un velo neutro, sin matiz de color. Solo IR75 lleva azul.
 */

export const FILM_VLT = {
  none: null,
  IR75: 75,
  IR50: 48,
  IR35: 35,
  IR15: 15,
  IR5: 3,
} as const;

export type FilmToneId = keyof typeof FILM_VLT;
export type ToneSide = "outside" | "interior";
export type FilmLook = { shade: number; tint: string | null; tintOpacity: number };

/** Exterior: 1 − VLT/75 (la foto base se toma como 75%), tope 0.975. */
export const exteriorShade = (vlt: number) => Math.min(0.975, Math.max(0, 1 - vlt / 75));

/** Interior: curva de apariencia (VLT → opacidad), interpolada para VLT combinados. */
const INTERIOR_CURVE: ReadonlyArray<readonly [number, number]> = [
  [100, 0],
  [75, 0.11],
  [48, 0.18],
  [35, 0.26],
  [15, 0.4],
  [3, 0.53],
  [0, 0.6],
];

export function interiorShade(vlt: number) {
  for (let i = 1; i < INTERIOR_CURVE.length; i += 1) {
    const [v0, s0] = INTERIOR_CURVE[i - 1];
    const [v1, s1] = INTERIOR_CURVE[i];
    if (vlt >= v1) return s0 + ((v0 - vlt) / (v0 - v1)) * (s1 - s0);
  }
  return INTERIOR_CURVE[INTERIOR_CURVE.length - 1][1];
}

/** Velo mínimo del vidrio de fábrica: nunca se ve como un hueco transparente. Neutro, sin color. */
export const LIGHT_FACTORY_FLOOR = { outside: 0.1, interior: 0.05 } as const;
/** IR75 queda apenas por encima del vidrio de fábrica (y se distingue por su matiz azul). */
export const IR75_FLOOR = { outside: 0.15, interior: 0.11 } as const;

/** IR75: azul/cian frío, sutil. El resto de películas no lleva matiz. */
export const IR75_TINT = { color: "#4f93c9", outside: 0.13, interior: 0.11 } as const;

export function filmLook(side: ToneSide, toneId: FilmToneId): FilmLook {
  const film = FILM_VLT[toneId];
  const shadeOf = (vlt: number) => (side === "interior" ? interiorShade(vlt) : exteriorShade(vlt));
  const shade = Math.max(
    film === null ? 0 : shadeOf(film),
    toneId === "IR75" ? IR75_FLOOR[side] : LIGHT_FACTORY_FLOOR[side],
  );
  if (toneId === "IR75") return { shade, tint: IR75_TINT.color, tintOpacity: IR75_TINT[side] };
  return { shade, tint: null, tintOpacity: 0 };
}

/** Variables CSS para una muestra estática (vista exterior, misma fórmula que el simulador). */
export function filmSwatchVars(toneId: FilmToneId): { "--film-shade": string; "--film-tint": string; "--film-tint-opacity": string } {
  const look = filmLook("outside", toneId);
  return {
    "--film-shade": String(look.shade),
    "--film-tint": look.tint ?? "transparent",
    "--film-tint-opacity": String(look.tintOpacity),
  };
}
