"use client";

import { useId, useState } from "react";
import Link from "next/link";
import styles from "./AutomotiveToneSimulator.module.css";

/**
 * Comparador automotriz por zona. Misma técnica que SignatureGlass en portada:
 * una foto base WebP + polígonos SVG recortados solo sobre el cristal.
 * Coordenadas en el encuadre 2400×948 (el sedán se rellenó 41 px abajo con
 * fondo de estudio para compartir proporción y evitar CLS al cambiar de auto).
 * Si se cambia la foto, hay que volver a medir los polígonos en ese espacio.
 *
 * Los polígonos están medidos sobre el borde interior de las líneas negras del
 * marco de cada cristal (sin gomas, marcos, pilares, espejo ni spoiler).
 *
 * Límite visual de la vista de perfil: el parabrisas y el medallón no se
 * distinguen en estas fotos (el parabrisas queda de canto detrás del marco A y
 * el medallón queda tapado por el spoiler/cajuela). Siguen siendo zonas
 * elegibles en la UI pero no tienen polígono: no se pinta nada sobre la
 * carrocería. Para verlos haría falta un recorte 3/4 o un segundo ángulo.
 */

const FRAME = { width: 2400, height: 948 } as const;

type ZoneId = "windshield" | "front" | "rear" | "tailgate";

const zones: ReadonlyArray<{ id: ZoneId; label: string; visible: boolean }> = [
  { id: "windshield", label: "Parabrisas", visible: false },
  { id: "front", label: "Laterales delanteras", visible: true },
  { id: "rear", label: "Laterales traseras", visible: true },
  { id: "tailgate", label: "Medallón", visible: false },
];

type VisibleZone = "front" | "rear";

const cars = {
  suv: {
    id: "suv",
    label: "SUV",
    src: "/images/comparador-auto/suv-base.webp",
    mobileSrc: "/images/comparador-auto/suv-base-800.webp",
    alt: "SUV plateado de perfil. Visualización (render). Los cristales laterales cambian de tono según lo que elijas.",
    glass: {
      front: [
        "1108,138 1120,138 1150,139 1200,143 1250,150 1300,160 1350,175 1400,198 1450,224 1480,241 1492,252 1486,260 1479,266 1479,285 1476,300 1466,314 1456,327 1400,324 1300,319 1200,313 1150,309 1143,309 1141,290 1140,280 1138,270 1136,260 1133,250 1130,240 1126,230 1123,220 1120,210 1118,200 1116,190 1114,180 1111,166 1109,152",
      ],
      rear: [
        "486,232 492,225 500,222 520,212 540,206 560,198 580,190 600,184 620,178 640,172 646,175 641,190 635,200 629,210 622,220 616,230 609,240 603,250 598,260 592,270 588,277 580,277 560,273 540,268 520,261 500,251 490,246 485,240",
        "680,168 700,159 722,154 731,279 616,279 620,270 627,260 632,250 639,240 645,230 651,220 658,210 665,200 671,190 678,180",
        "741,151 760,148 800,145 900,138 1000,135 1038,135 1039,180 1041,200 1043,220 1045,240 1047,260 1049,285 1049,299 1000,297 900,294 800,289 741,284",
      ],
    },
  },
  sedan: {
    id: "sedan",
    label: "Sedán",
    src: "/images/comparador-auto/sedan-base.webp",
    mobileSrc: "/images/comparador-auto/sedan-base-800.webp",
    alt: "Sedán plateado de perfil. Visualización (render). Los cristales laterales cambian de tono según lo que elijas.",
    glass: {
      front: [
        "1114,158 1140,158 1200,162 1300,176 1400,213 1450,238 1480,255 1486,259 1476,265 1476,322 1400,320 1300,316 1200,311 1148,306 1145,290 1143,280 1141,270 1138,260 1135,250 1133,240 1128,220 1122,200 1117,180",
      ],
      rear: [
        "586,259 589,251 607,241 621,235 639,226 639,288 618,288 605,281 593,270 589,264",
        "644,225 660,217 700,201 737,189 744,292 700,291 660,289 644,288",
        "752,184 760,181 800,172 900,160 1000,155 1045,155 1049,180 1051,200 1055,240 1060,290 1060,299 1000,298 900,297 800,295 757,293",
      ],
    },
  },
} as const;

type CarId = keyof typeof cars;

/**
 * Opacidad del sombreado = 1 − VLT real / 75 (el base se toma como IR75).
 * IR50 es 48% VLT, IR5 es 3% VLT. «Sin película» = sin sombreado.
 * IR75 y «sin película» se ven casi iguales a propósito: la foto base ya es IR75.
 */
const tones = [
  { id: "none", label: "Sin película", sub: "sin tono", vlt: null, shade: 0, description: "sin película" },
  { id: "IR75", label: "IR75", sub: "75% luz", vlt: 75, shade: 0, description: "muy claro" },
  { id: "IR50", label: "IR50", sub: "48% luz", vlt: 48, shade: 1 - 48 / 75, description: "claro" },
  { id: "IR35", label: "IR35", sub: "35% luz", vlt: 35, shade: 1 - 35 / 75, description: "intermedio" },
  { id: "IR15", label: "IR15", sub: "15% luz", vlt: 15, shade: 1 - 15 / 75, description: "oscuro" },
  { id: "IR5", label: "IR5", sub: "3% luz", vlt: 3, shade: 1 - 3 / 75, description: "muy oscuro" },
] as const;

type ToneId = (typeof tones)[number]["id"];
type Selection = Record<ZoneId, ToneId>;

const toneById = (id: ToneId) => tones.find((item) => item.id === id) ?? tones[0];

const START: Selection = { windshield: "IR35", front: "IR35", rear: "IR35", tailgate: "IR35" };
const START_MESSAGE =
  "Punto de partida: todas las ventanas en IR35. Elige una ventana y cambia su tono como quieras.";

const zoneLabel = (id: ZoneId) => zones.find((zone) => zone.id === id)?.label ?? id;

function describeTone(id: ToneId) {
  const tone = toneById(id);
  return tone.vlt === null ? "sin película" : `${tone.label}, ${tone.vlt}% de luz visible, ${tone.description}`;
}

export function AutomotiveToneSimulator() {
  const [carId, setCarId] = useState<CarId>("suv");
  const [selection, setSelection] = useState<Selection>(START);
  const [active, setActive] = useState<ZoneId>("rear");
  const [lastTone, setLastTone] = useState<ToneId>("IR35");
  const [message, setMessage] = useState(START_MESSAGE);
  const uid = useId().replace(/:/g, "");
  const car = cars[carId];
  const activeZone = zones.find((zone) => zone.id === active) ?? zones[1];

  function chooseTone(zone: ZoneId, toneId: ToneId) {
    setSelection((current) => ({ ...current, [zone]: toneId }));
    if (toneId !== "none") setLastTone(toneId);
    const hidden = zones.find((item) => item.id === zone)?.visible ? "" : " No se ve de perfil, pero queda elegido.";
    setMessage(`${zoneLabel(zone)}: ${describeTone(toneId)}.${hidden}`);
  }

  function pickZone(zone: ZoneId) {
    setActive(zone);
    const hidden = zones.find((item) => item.id === zone)?.visible ? "" : " No se ve de perfil, pero puedes elegir su tono.";
    setMessage(`${zoneLabel(zone)} seleccionada, ahora en ${describeTone(selection[zone])}.${hidden}`);
  }

  function sameEverywhere() {
    const toneId = selection[active];
    setSelection({ windshield: toneId, front: toneId, rear: toneId, tailgate: toneId });
    if (toneId !== "none") setLastTone(toneId);
    setMessage(
      toneId === "none"
        ? "Todas las ventanas sin película."
        : `Todas las ventanas en ${describeTone(toneId)}.`,
    );
  }

  function onlyRear() {
    const toneId = selection[active] === "none" ? lastTone : selection[active];
    setSelection({ windshield: "none", front: "none", rear: toneId, tailgate: toneId });
    setLastTone(toneId);
    setMessage(
      `Solo atrás: laterales traseras y medallón en ${describeTone(toneId)}. Parabrisas y laterales delanteras sin película.`,
    );
  }

  function clearAll() {
    setSelection({ windshield: "none", front: "none", rear: "none", tailgate: "none" });
    setMessage("Todas las ventanas sin película.");
  }

  const selectedTone = selection[active];

  return (
    <div className={styles.simulator} aria-label="Simulador de tonos por ventana de un auto. Eliges una ventana y el tono que quieres en ella.">
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
                sizes="(max-width: 720px) calc(100vw - 1rem), min(76rem, calc(100vw - 2rem))"
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
              {(["front", "rear"] as VisibleZone[]).map((zone) => (
                <clipPath id={`${uid}-${zone}`} key={zone}>
                  {car.glass[zone].map((points) => (
                    <polygon key={points} points={points} />
                  ))}
                </clipPath>
              ))}
              <linearGradient id={`${uid}-glass`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.22" />
                <stop offset="0.2" stopColor="#ffffff" stopOpacity="0.05" />
                <stop offset="0.7" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="1" stopColor="#d7e4ee" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            {(["front", "rear"] as VisibleZone[]).map((zone) => {
              const tone = toneById(selection[zone]);
              return (
                <g key={zone} clipPath={`url(#${uid}-${zone})`}>
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
                    fill={`url(#${uid}-glass)`}
                    style={{ opacity: tone.shade === 0 ? 0 : 0.45 }}
                  />
                </g>
              );
            })}
            {/* Zonas táctiles: tocar el cristal elige la zona. El teclado y los lectores usan los botones de abajo. */}
            {(["front", "rear"] as VisibleZone[]).map((zone) => (
              <g key={`hit-${zone}`}>
                {car.glass[zone].map((points) => (
                  <polygon
                    key={points}
                    points={points}
                    className={active === zone ? styles.hitActive : styles.hit}
                    onClick={() => pickZone(zone)}
                  />
                ))}
              </g>
            ))}
          </svg>
        </div>
        <p className={styles.visualLabel}>Visualización</p>
      </div>

      <div className={styles.controls}>
        <div className={styles.step} role="group" aria-labelledby={`${uid}-zones`}>
          <p className={styles.stepLabel} id={`${uid}-zones`}>
            1. Elige la ventana <span>(o toca el cristal)</span>
          </p>
          <div className={styles.zoneDock}>
            {zones.map((zone) => {
              const tone = toneById(selection[zone.id]);
              const on = active === zone.id;
              return (
                <button
                  key={zone.id}
                  type="button"
                  className={on ? styles.zoneButtonActive : styles.zoneButton}
                  onClick={() => pickZone(zone.id)}
                  aria-pressed={on}
                >
                  <strong>{zone.label}</strong>
                  <span>
                    {tone.vlt === null ? "Sin película" : `${tone.label} · ${tone.sub}`}
                    {zone.visible ? "" : " · no se ve de perfil"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.step} role="group" aria-labelledby={`${uid}-tones`}>
          <p className={styles.stepLabel} id={`${uid}-tones`}>
            2. Elige el tono para: <span className={styles.stepZone}>{activeZone.label}</span>
          </p>
          <div className={styles.toneDock}>
            {tones.map((item) => (
              <button
                key={item.id}
                type="button"
                className={selectedTone === item.id ? styles.toneButtonActive : styles.toneButton}
                onClick={() => chooseTone(active, item.id)}
                aria-pressed={selectedTone === item.id}
              >
                <strong>{item.label}</strong>
                <span>{item.sub}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.shortcuts} role="group" aria-label="Atajos">
          <button type="button" className={styles.shortcut} onClick={sameEverywhere}>
            Todo igual
          </button>
          <button type="button" className={styles.shortcut} onClick={onlyRear}>
            Solo atrás
          </button>
          <button type="button" className={styles.shortcut} onClick={clearAll}>
            Quitar todo
          </button>
        </div>
      </div>

      <p className={styles.status} role="status" aria-live="polite">
        {message}
      </p>

      <p className={styles.footnote}>
        Aproximación de cómo se ve el tono en el cristal. Es un render de visualización, no la foto de un auto instalado.
        «Solo atrás» pone el tono en las laterales traseras y el medallón. De perfil no se ven el parabrisas ni el medallón;
        igual puedes elegir su tono.
      </p>

      <aside className={styles.lawNote} aria-label="Sobre las reglas en Jalisco">
        <p>
          Tú decides el tono y en qué ventanas lo quieres. En Jalisco hay reglas sobre qué tan oscuro puede ser el
          cristal; en la guía te las explicamos para que elijas con información.{" "}
          <Link href="/guias/polarizado-automotriz-jalisco/">Ver la guía de polarizado automotriz en Jalisco</Link>.
        </p>
      </aside>
    </div>
  );
}
