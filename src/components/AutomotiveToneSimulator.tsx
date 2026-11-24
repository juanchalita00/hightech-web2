"use client";

import { useId, useState } from "react";
import Link from "next/link";
import styles from "./AutomotiveToneSimulator.module.css";

/**
 * Comparador automotriz, mismo método que SignatureGlass en portada:
 * una foto base WebP + polígonos SVG recortados solo sobre el cristal.
 * Coordenadas en el encuadre 2400×948. El sedán se rellenó 41 px abajo
 * (fondo de estudio) para compartir proporción y evitar CLS al cambiar de auto.
 * Si se cambia la foto, hay que volver a medir los polígonos en ese espacio.
 */

const FRAME = { width: 2400, height: 948 } as const;

const cars = {
  suv: {
    id: "suv",
    label: "SUV",
    src: "/images/comparador-auto/suv-base.webp",
    mobileSrc: "/images/comparador-auto/suv-base-800.webp",
    alt: "SUV plateado de perfil. Visualización (render). Los cristales cambian de tono al elegir un botón.",
    panels: [
      "482,230 496,210 516,188 540,170 568,158 600,152 628,148 648,147 668,151 666,180 664,210 662,240 658,274 630,275 600,276 560,275 530,270 508,255 490,242",
      "674,152 720,150 780,147 850,145 920,144 980,144 1020,145 1032,146 1034,180 1034,220 1034,268 980,270 850,271 740,273 686,274 678,230 674,180",
      "1110,148 1160,148 1220,149 1280,152 1340,158 1400,168 1440,180 1470,194 1496,210 1516,226 1530,244 1538,258 1534,268 1480,271 1400,271 1300,271 1200,271 1112,271",
      "1522,216 1548,230 1580,248 1612,266 1644,286 1672,306 1690,322 1700,332 1688,338 1668,326 1640,308 1610,290 1578,272 1550,254 1534,240 1526,228",
    ],
  },
  sedan: {
    id: "sedan",
    label: "Sedán",
    src: "/images/comparador-auto/sedan-base.webp",
    mobileSrc: "/images/comparador-auto/sedan-base-800.webp",
    alt: "Sedán plateado de perfil. Visualización (render). Los cristales cambian de tono al elegir un botón.",
    panels: [
      "565,258 580,238 598,218 620,202 644,188 676,176 710,168 736,165 754,164 754,286 720,287 680,287 640,287 610,286 588,278 572,268",
      "758,163 820,156 880,150 940,147 990,146 1030,146 1036,147 1036,180 1036,230 1036,285 980,286 880,287 820,287 758,288",
      "1110,150 1160,151 1220,155 1280,164 1340,176 1400,196 1448,216 1480,234 1506,250 1526,266 1536,278 1530,286 1460,287 1340,287 1220,287 1112,287",
      "1510,228 1540,244 1572,262 1604,280 1636,300 1664,318 1688,332 1704,342 1694,348 1670,338 1640,322 1608,304 1576,286 1546,268 1526,252 1514,238",
    ],
  },
} as const;

type CarId = keyof typeof cars;

/** Opacidad del sombreado = 1 − VLT real / 75 (el base se toma como IR75). IR50 es 48% VLT. */
const tones = [
  { id: "IR75", label: "IR75", vlt: 75, shade: 0, description: "muy claro" },
  { id: "IR50", label: "IR50", vlt: 48, shade: 1 - 48 / 75, description: "claro" },
  { id: "IR35", label: "IR35", vlt: 35, shade: 1 - 35 / 75, description: "intermedio" },
  { id: "IR15", label: "IR15", vlt: 15, shade: 1 - 15 / 75, description: "oscuro" },
  { id: "IR5", label: "IR5", vlt: 3, shade: 1 - 3 / 75, description: "muy oscuro" },
] as const;

type ToneId = (typeof tones)[number]["id"];

/**
 * Nota para los tonos oscuros. IR15: texto literal de la ficha IR15 (nota de uso).
 * IR5: frase publicada en la guía de Jalisco. La regla legal vive en JaliscoLaw,
 * que ya aparece debajo del comparador en /automotriz; no se repite aquí.
 */
const darkToneNote: Record<"IR15" | "IR5", string> = {
  IR15:
    "El IR15 se ve oscuro. Aquí va en los cristales de atrás del auto. En el parabrisas lo más común es el IR75. Si quieres privacidad, en High Tech recomendamos máximo IR35, para que te sientas cómodo y conserves la visibilidad. Es lo que suele hacerse.",
  IR5:
    "El IR5 se ve muy oscuro. Lo más común en el auto son los tonos 75, 50 y 35. El 15 y el 5 son más oscuros y se usan sobre todo en casa y negocio; si te interesan para el auto, lo platicamos.",
};

export function AutomotiveToneSimulator() {
  const [carId, setCarId] = useState<CarId>("suv");
  const [toneId, setToneId] = useState<ToneId>("IR35");
  const clipId = useId().replace(/:/g, "");
  const car = cars[carId];
  const tone = tones.find((item) => item.id === toneId) ?? tones[2];
  const note = tone.id === "IR15" || tone.id === "IR5" ? darkToneNote[tone.id] : null;
  const status = `${car.label}, tono ${tone.label}, ${tone.vlt}% de luz visible, ${tone.description}.`;

  return (
    <div className={styles.simulator} aria-label="Comparador de tonos en un auto. Cada botón oscurece solo el cristal.">
      <div className={styles.carDock} role="group" aria-label="Tipo de auto">
        {(Object.keys(cars) as CarId[]).map((id) => (
          <button
            key={id}
            type="button"
            className={carId === id ? styles.carButtonActive : styles.carButton}
            onClick={() => setCarId(id)}
            aria-pressed={carId === id}
          >
            {cars[id].label}
          </button>
        ))}
      </div>

      <div className={styles.frame}>
        <div className={styles.stage}>
          {(Object.keys(cars) as CarId[]).map((id) => {
            const item = cars[id];
            const visible = id === carId;
            return (
              <img
                key={id}
                src={item.src}
                srcSet={`${item.mobileSrc} 800w, ${item.src} 2400w`}
                sizes="(max-width: 720px) 108vw, min(76rem, calc(100vw - 2rem))"
                width={FRAME.width}
                height={FRAME.height}
                alt={visible ? item.alt : ""}
                className={visible ? styles.photo : styles.photoHidden}
                loading="lazy"
                decoding="async"
                aria-hidden={visible ? undefined : true}
              />
            );
          })}
          <svg
            className={styles.glassTint}
            viewBox={`0 0 ${FRAME.width} ${FRAME.height}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <clipPath id={clipId}>
                {car.panels.map((points) => (
                  <polygon key={points} points={points} />
                ))}
              </clipPath>
              <linearGradient id={`${clipId}-glass`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.22" />
                <stop offset="0.2" stopColor="#ffffff" stopOpacity="0.05" />
                <stop offset="0.7" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="1" stopColor="#d7e4ee" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            <g clipPath={`url(#${clipId})`}>
              <rect
                className={styles.tintShade}
                x="0"
                y="0"
                width={FRAME.width}
                height={FRAME.height}
                fill="#07090c"
                style={{ opacity: tone.shade }}
              />
              <rect
                className={styles.tintShade}
                x="0"
                y="0"
                width={FRAME.width}
                height={FRAME.height}
                fill={`url(#${clipId}-glass)`}
                style={{ opacity: tone.shade === 0 ? 0 : 0.45 }}
              />
            </g>
          </svg>
        </div>
        <p className={styles.visualLabel}>Visualización</p>
      </div>

      <div className={styles.toneDock} role="group" aria-label="Elegir el tono del cristal">
        {tones.map((item) => (
          <button
            key={item.id}
            type="button"
            className={toneId === item.id ? styles.toneButtonActive : styles.toneButton}
            onClick={() => setToneId(item.id)}
            aria-pressed={toneId === item.id}
          >
            <strong>{item.label}</strong>
            <span>{item.vlt}% luz</span>
          </button>
        ))}
      </div>

      <p className={styles.status} aria-live="polite">
        {status}
      </p>

      <p className={styles.footnote}>
        Aproximación de cómo se ve el tono en el cristal. Es un render de visualización, no la foto de un auto instalado.
      </p>

      {note ? (
        <aside className={styles.lawNote} aria-live="polite">
          <p>{note}</p>
          <p>
            <Link href="/guias/polarizado-automotriz-jalisco/">Ver la guía de Jalisco</Link>.
          </p>
        </aside>
      ) : null}
    </div>
  );
}
