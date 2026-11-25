"use client";

import { useId, useState } from "react";
import Link from "next/link";
import styles from "./AutomotiveToneSimulator.module.css";

/**
 * Comparador automotriz por zona. Misma técnica que SignatureGlass en portada:
 * una foto base WebP + polígonos SVG recortados solo sobre el cristal.
 *
 * ── Vista EXTERIOR ───────────────────────────────────────────────────────────
 * Coordenadas en el encuadre 2400×948 (el sedán se rellenó 41 px abajo con
 * fondo de estudio para compartir proporción y evitar CLS al cambiar de auto).
 * Los polígonos laterales están medidos sobre el borde interior de las líneas
 * negras del marco de cada cristal (sin gomas, marcos, pilares, espejo ni spoiler).
 *
 * Límite de la vista de perfil: el parabrisas, su franja y el medallón no se
 * distinguen con limpieza (el parabrisas queda de canto detrás del marco A, la
 * franja es una banda de unos centímetros sobre ese mismo cristal y el medallón
 * queda tapado por el spoiler/cajuela). Siguen siendo zonas elegibles en la UI
 * pero NO tienen polígono en exterior: no se pinta nada sobre la carrocería.
 *
 * ── Vista INTERIOR ───────────────────────────────────────────────────────────
 * Toma desde el asiento del conductor, mirando por el parabrisas y la ventanilla
 * del conductor. CONTRATO DE LA FOTO INTERIOR:
 *   - Tamaño de trabajo: FRAME_INTERIOR (1152×864, 4:3) y `object-fit: contain`.
 *   - Los polígonos de `interiorGlass` están en ESE espacio de píxeles.
 *   - Si se sustituye por una foto real más alta (p. ej. 2304×1728 con la misma
 *     toma), basta con cambiar los archivos y FRAME_INTERIOR; si la proporción o
 *     el encuadre cambian, hay que volver a medir TODOS los polígonos
 *     (borde interior del cristal, sin pilares A, espejo retrovisor, viseras,
 *     tablero ni volante). Sin eso el tinte se saldría del cristal.
 *   - Medidos con máscara por contornos: parabrisas y franja son una partición
 *     (la franja es la banda superior, el parabrisas es el resto; no se solapan).
 *   - En esta toma no se ven las laterales traseras ni el medallón: no tienen
 *     polígono en interior, pero siguen siendo elegibles y conservan su tono.
 *
 * El estado de tonos por zona es el mismo en las dos vistas y al cambiar de auto.
 */

const FRAME = { width: 2400, height: 948 } as const;
const FRAME_INTERIOR = { width: 1152, height: 864 } as const;

type ViewId = "exterior" | "interior";
type ZoneId = "windshield" | "strip" | "front" | "rear" | "tailgate";
type PaintedZone = "windshield" | "strip" | "front" | "rear";

const zones: ReadonlyArray<{
  id: ZoneId;
  label: string;
  /** Vistas en las que la zona tiene polígono y se pinta. */
  views: ReadonlyArray<ViewId>;
}> = [
  { id: "windshield", label: "Parabrisas", views: ["interior"] },
  { id: "strip", label: "Franja del parabrisas", views: ["interior"] },
  { id: "front", label: "Laterales delanteras", views: ["exterior", "interior"] },
  { id: "rear", label: "Laterales traseras", views: ["exterior"] },
  { id: "tailgate", label: "Medallón", views: [] },
];

const ZONE_IDS = zones.map((zone) => zone.id);
const zoneInfo = (id: ZoneId) => zones.find((zone) => zone.id === id) ?? zones[0];
const zoneVisible = (id: ZoneId, view: ViewId) => zoneInfo(id).views.includes(view);

const exteriorZones: ReadonlyArray<PaintedZone> = ["front", "rear"];
const interiorZones: ReadonlyArray<PaintedZone> = ["windshield", "strip", "front"];

const cars = {
  suv: {
    id: "suv",
    label: "SUV",
    src: "/images/comparador-auto/suv-base.webp",
    mobileSrc: "/images/comparador-auto/suv-base-800.webp",
    interiorSrc: "/images/comparador-auto/interior-suv.webp",
    interiorMobileSrc: "/images/comparador-auto/interior-suv-800.webp",
    alt: "SUV plateado de perfil. Visualización (render). Los cristales laterales cambian de tono según lo que elijas.",
    interiorAlt:
      "Vista desde el asiento del conductor de un SUV, mirando la calle por el parabrisas y la ventanilla. Visualización (render). El parabrisas, su franja y la ventanilla cambian de tono según lo que elijas.",
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
    interiorSrc: "/images/comparador-auto/interior-sedan.webp",
    interiorMobileSrc: "/images/comparador-auto/interior-sedan-800.webp",
    alt: "Sedán plateado de perfil. Visualización (render). Los cristales laterales cambian de tono según lo que elijas.",
    interiorAlt:
      "Vista desde el asiento del conductor de un sedán, mirando la calle por el parabrisas y la ventanilla. Visualización (render). El parabrisas, su franja y la ventanilla cambian de tono según lo que elijas.",
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
 * Polígonos de la vista interior, en el espacio FRAME_INTERIOR (1152×864).
 * Parabrisas y franja son una partición exacta del cristal (sin solape ni hueco),
 * con el espejo retrovisor, los pilares A, las viseras, el tablero y el volante fuera.
 */
const interiorGlass = {
  suv: {
    windshield: [
      "1151.8,583 1151.8,209.2 1036,213 1036,230 1035,231.5 1035,234 1031.5,240 1028,243.5 1026.8,243.8 1025,245.5 1021,247.5 1017.5,248 1015.5,249 1012.5,249 1010.5,250 1006.5,250 1004.5,251 993.5,251 991.5,252 981.5,252 979.5,253 968.5,253 966.5,254 954.5,254 952.5,255 939.5,255 937.5,256 923.5,256 921.5,257 907.5,257 905.5,258 899,258 899,262 897.5,265 896,266.5 892.5,268 872.2,268 870.8,267.5 868.8,265 868.8,262.5 867.8,261 867.8,259 844.5,259 842.5,260 767.2,260 765.2,259 758.2,259 749.8,255.5 745.2,251 742.8,245 742.8,235.8 743.8,234.2 742.8,229 595,243.8 401.5,258.2 318.8,261.2 324.2,273.2 341,301.5 363.5,346 385.2,385.2 404,427 426,470.8 454,529.5 461.8,551 480.5,548 519.5,540 561.5,537 600.5,540 639.5,549.8 670,563 684.5,566 793.8,567.8 903,571 1002.5,575",
    ],
    strip: [
      "855.8,169 848.5,169 846.5,170 831.5,170 829.5,171 813.5,171 811.5,172 798.5,172 796.5,173 783.5,173 781.5,174 767.5,174 765.5,175 750.2,175 748.8,174.5 748,173.2 701,179 601.2,188 499,193 421.2,201 352,205.8 333.8,208.8 306.8,216.8 305,222 311,245 318.5,261 401.5,258 601.2,243 742.8,228.8 742.8,217.8 743.8,216.2 743.8,212.8 744.8,211.2 744.8,206.8 745.8,205.2 745.8,203.8 748.2,198.8 755.8,191.2 759.8,189.2 767.2,186.8 770.2,186.8 772.2,185.8 776.2,185.8 778.2,184.8 782.2,184.8 784.2,183.8 789.2,183.8 791.2,182.8 796.2,182.8 798.2,181.8 804.2,181.8 806.2,180.8 813.2,180.8 815.2,179.8 822.2,179.8 824.2,178.8 831.2,178.8 833.2,177.8 841.2,177.8 843.2,176.8 852.2,176.8 854.2,175.8 855.8,175.8",
      "1151.8,209 1151.8,154 1095.8,156.2 1025.8,158.2 1025,159.5 1023.5,160 1008.5,160 1006.5,161 993.5,161 991.5,162 973.5,162 971.5,163 956.5,163 954.5,164 936.5,164 934.5,165 919.5,165 917.5,166 904.5,166 902,167 902,171.2 903,172.8 916.2,172.8 918.2,171.8 940.2,171.8 942.2,170.8 1001.5,170.8 1003.5,171.8 1010.5,171.8 1012.5,172.8 1015.5,172.8 1020,174.2 1021.8,176 1023,176.2 1029.5,182.8 1031,186 1032,186.2 1033,187.8 1033,192.2 1034,193.8 1034,196.2 1035,197.8 1035,203.2 1036,204.8 1036,212.8",
    ],
    front: [
      "0,147.2 0,674 101.2,660.8 200.8,650 265,640.2 261,607.2 239.8,612 217.8,619 200.2,628 179.2,634 133.8,626.2 100.8,619.2 66.8,608 49.5,597 35.2,580.8 32,562.8 44,539.5 66.2,515.2 99.5,507 129.2,503 168,503 200,507 247.5,532 255.2,537 267.5,541.8 275.2,527 276.8,520.2 289.2,479.2 292.8,465.8 279.5,441 261,410.5 239,370.2 212.5,334 180.2,297.8 138.5,256 68.8,196.8",
    ],
  },
  sedan: {
    windshield: [
      "173.8,172.2 183,200 201,237.5 221,282 269,378.8 284,412.8 300.5,437 320.5,434 359.5,426 400.5,425 440.8,434.2 471.2,454.5 490.5,469 626.2,469 664,470 823.8,471 971,476 1049.8,485 1059,479.5 1079.5,459 1099,429.8 1119,385 1128.5,360.8 1150.8,320.8 1151.8,320.2 1151.8,172.2 783.8,172.2 784,178.2 785,179.8 785,197 778,204.5 774,206.5 768.5,207 766.5,208 759.5,208 757.5,209 748.5,209 746.5,210 735.5,210 733.5,211 718.5,211 716.5,212 695.5,212 693.5,213 688,213 687.5,216 685,218.5 679.5,219 677.5,220 662.2,220 658.8,218.5 657.2,217 656.8,214 575.2,214 573.2,213 566.8,212.5 562.8,210.5 558.2,206 555.8,201 555.8,182.8 556.8,181.2 556.8,176.8 557.8,175.2 557.8,172.2",
    ],
    strip: [
      "715,110 715,118.2 716,119.8 716,123.2 717,124.8 717,128.2 718,129.8 718,133.2 719,134.8 719,137.2 720,139.8 728.5,139.8 730.5,140.8 759.5,140.8 761.5,141.8 765.5,141.8 772,144.2 776.5,148.8 780,155.8 780,157.2 782,161.8 782,165.2 783,166.8 783,171.2 783.5,172 1151.8,172 1151.8,125 806.2,125 805,124 804,110",
      "627.8,110 528.8,110 521,127.2 519,128.2 420.8,142 303.8,146 195.5,145 164.5,144 173.8,172 557.8,172 558.8,170.2 558.8,167.8 559.8,166.2 559.8,164.8 562.2,159.8 567.8,154.2 571.8,152.2 576.2,150.8 579.2,150.8 581.2,149.8 585.2,149.8 587.2,148.8 592.2,148.8 594.2,147.8 600.2,147.8 602.2,146.8 608.2,146.8 610.2,145.8 617.2,145.8 619.2,144.8 623.8,144.8 623.8,139.8 624.8,138.2 624.8,130.8 625.8,129.2 625.8,122.8 626.8,121.2 626.8,112.8 627.8,111.2",
    ],
    front: [
      "0,153.8 0,384 50.5,384 76.2,388.8 110.5,406 133.8,426.2 144,446.8 144,481 145,471 146.2,434.8 149,398.8 152,372.8 152,343.2 139.5,321 122.5,294 99,267.5 79.5,241 45,206.5 18.8,177.2",
    ],
  },
} as const;

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

/** Punto de partida: SUV, vista exterior, las 5 zonas en IR35, «Laterales traseras» marcada. */
const START: Selection = { windshield: "IR35", strip: "IR35", front: "IR35", rear: "IR35", tailgate: "IR35" };
const START_MESSAGE =
  "Punto de partida: todas las ventanas en IR35. Marca una o varias ventanas y elige su tono como quieras.";

const allZones = (toneId: ToneId): Selection => ({
  windshield: toneId,
  strip: toneId,
  front: toneId,
  rear: toneId,
  tailgate: toneId,
});

function describeTone(id: ToneId) {
  const tone = toneById(id);
  return tone.vlt === null ? "sin película" : `${tone.label}, ${tone.vlt}% de luz visible, ${tone.description}`;
}

function listLabels(ids: ZoneId[]) {
  const labels = ids.map((id) => zoneInfo(id).label.toLowerCase());
  if (labels.length <= 1) return labels.join("");
  return `${labels.slice(0, -1).join(", ")} y ${labels[labels.length - 1]}`;
}

/**
 * Iconos de zona (originales, SVG inline): auto visto desde arriba, frente hacia arriba.
 * La ventana de la zona va rellena en color de marca cuando está marcada; el resto es línea suave.
 */
const iconWindows: Record<ZoneId, string[]> = {
  strip: ["M12 12 L36 12 L35 16.2 L13 16.2 Z"],
  windshield: ["M13 18 L35 18 L38.5 28.5 L9.5 28.5 Z"],
  front: ["M7.4 30.5 L11.2 30.5 L11.2 40 L7.4 40 Z", "M36.8 30.5 L40.6 30.5 L40.6 40 L36.8 40 Z"],
  rear: ["M7.4 42 L11.2 42 L11.2 51 L7.4 51 Z", "M36.8 42 L40.6 42 L40.6 51 L36.8 51 Z"],
  tailgate: ["M13 52.5 L35 52.5 L33.5 57.5 L14.5 57.5 Z"],
};

function ZoneIcon({ zone, on }: { zone: ZoneId; on: boolean }) {
  return (
    <svg className={styles.zoneIcon} viewBox="0 0 48 64" aria-hidden="true" focusable="false">
      <path
        className={styles.iconBody}
        d="M14 3 H34 C39 3 41.5 7 41.5 12.5 V51.5 C41.5 57 39 61 34 61 H14 C9 61 6.5 57 6.5 51.5 V12.5 C6.5 7 9 3 14 3 Z"
      />
      <path className={styles.iconRoof} d="M12.5 30.5 H35.5 V51 H12.5 Z" />
      {ZONE_IDS.filter((id) => id !== zone).map((id) =>
        iconWindows[id].map((d) => <path key={`${id}-${d}`} className={styles.iconWindow} d={d} />),
      )}
      {iconWindows[zone].map((d) => (
        <path key={`on-${d}`} className={on ? styles.iconWindowOn : styles.iconWindowFocus} d={d} />
      ))}
    </svg>
  );
}

export function AutomotiveToneSimulator() {
  const [view, setView] = useState<ViewId>("exterior");
  const [carId, setCarId] = useState<CarId>("suv");
  const [selection, setSelection] = useState<Selection>(START);
  const [marked, setMarked] = useState<ZoneId[]>(["rear"]);
  const [lastTone, setLastTone] = useState<ToneId>("IR35");
  const [message, setMessage] = useState(START_MESSAGE);
  const uid = useId().replace(/:/g, "");
  const car = cars[carId];
  const paintedZones = view === "exterior" ? exteriorZones : interiorZones;
  const primary = marked[marked.length - 1] ?? "rear";
  const markedTone = (id: ToneId) => marked.length > 0 && marked.every((zone) => selection[zone] === id);
  const markedLabels = listLabels(marked);

  function notVisibleNote(ids: ZoneId[]) {
    const hidden = ids.filter((id) => !zoneVisible(id, view));
    if (hidden.length === 0) return "";
    const plural = hidden.length > 1;
    const who = hidden.length === ids.length ? (plural ? "No se ven" : "No se ve") : `${listLabels(hidden)}: no se ${plural ? "ven" : "ve"}`;
    return ` ${who} en esta vista, pero ${plural ? "quedan elegidas" : "queda elegida"}.`.replace(/^ ([a-záéíóú])/, (_, c) => ` ${c.toUpperCase()}`);
  }

  function changeView(next: ViewId) {
    setView(next);
    setMessage(
      next === "interior"
        ? "Vista interior: se ven el parabrisas, su franja y la ventanilla del conductor. Los tonos elegidos se conservan."
        : "Vista exterior: se ven las laterales. Los tonos elegidos se conservan.",
    );
  }

  function chooseTone(toneId: ToneId) {
    if (marked.length === 0) return;
    setSelection((current) => {
      const next = { ...current };
      for (const zone of marked) next[zone] = toneId;
      return next;
    });
    if (toneId !== "none") setLastTone(toneId);
    setMessage(`${markedLabels}: ${describeTone(toneId)}.${notVisibleNote(marked)}`.replace(/^./, (c) => c.toUpperCase()));
  }

  function toggleZone(zone: ZoneId) {
    const isOn = marked.includes(zone);
    if (isOn && marked.length === 1) {
      setMessage(`${zoneInfo(zone).label} sigue marcada: marca al menos una ventana para cambiar su tono.`);
      return;
    }
    const next = isOn ? marked.filter((id) => id !== zone) : [...marked, zone];
    setMarked(next);
    setMessage(
      isOn
        ? `${zoneInfo(zone).label} desmarcada. Marcadas: ${listLabels(next)}.`
        : `${zoneInfo(zone).label} marcada, ahora en ${describeTone(selection[zone])}. Marcadas: ${listLabels(next)}.${notVisibleNote([zone])}`,
    );
  }

  /** Tocar el cristal marca solo esa ventana (los botones sirven para marcar varias). */
  function pickGlass(zone: ZoneId) {
    setMarked([zone]);
    setMessage(`${zoneInfo(zone).label} marcada, ahora en ${describeTone(selection[zone])}.`);
  }

  function sameEverywhere() {
    const toneId = selection[primary];
    setSelection(allZones(toneId));
    if (toneId !== "none") setLastTone(toneId);
    setMessage(toneId === "none" ? "Todas las ventanas sin película." : `Todas las ventanas en ${describeTone(toneId)}.`);
  }

  function onlyRear() {
    const toneId = selection[primary] === "none" ? lastTone : selection[primary];
    setSelection({ ...allZones("none"), rear: toneId, tailgate: toneId });
    setLastTone(toneId);
    setMessage(
      `Solo atrás: laterales traseras y medallón en ${describeTone(toneId)}. Parabrisas, franja y laterales delanteras sin película.`,
    );
  }

  function clearAll() {
    setSelection(allZones("none"));
    setMessage("Todas las ventanas sin película.");
  }

  const ids = (view === "exterior" ? ["front", "rear"] : ["windshield", "strip", "front"]) as PaintedZone[];
  const polygons = (zone: PaintedZone): readonly string[] =>
    view === "interior"
      ? zone === "rear"
        ? []
        : interiorGlass[carId][zone as "windshield" | "strip" | "front"]
      : zone === "front" || zone === "rear"
        ? car.glass[zone]
        : [];
  const frameSize = view === "interior" ? FRAME_INTERIOR : FRAME;

  return (
    <div className={styles.simulator} aria-label="Simulador de tonos por ventana de un auto. Marcas una o varias ventanas y eliges el tono que quieres en ellas.">
      <div className={styles.pickers}>
        <div className={styles.carDock} role="group" aria-label="Vista">
          {(["exterior", "interior"] as ViewId[]).map((id) => (
            <button
              key={id}
              type="button"
              className={view === id ? styles.carButtonActive : styles.carButton}
              onClick={() => changeView(id)}
              aria-pressed={view === id}
            >
              {id === "exterior" ? "Exterior" : "Interior"}
            </button>
          ))}
        </div>
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
      </div>

      <div className={view === "interior" ? styles.frameInterior : styles.frame}>
        <div className={styles.stage}>
          {(Object.keys(cars) as CarId[]).map((id) => {
            const item = cars[id];
            const visible = id === carId;
            const interior = view === "interior";
            return (
              <img
                key={`${view}-${id}`}
                src={interior ? item.interiorSrc : item.src}
                srcSet={
                  interior
                    ? `${item.interiorMobileSrc} 800w, ${item.interiorSrc} ${FRAME_INTERIOR.width}w`
                    : `${item.mobileSrc} 800w, ${item.src} 2400w`
                }
                sizes={
                  interior
                    ? "(max-width: 720px) calc(100vw - 1rem), min(46rem, calc(100vw - 2rem))"
                    : "(max-width: 720px) calc(100vw - 1rem), min(76rem, calc(100vw - 2rem))"
                }
                width={frameSize.width}
                height={frameSize.height}
                alt={visible ? (interior ? item.interiorAlt : item.alt) : ""}
                className={visible ? styles.photo : styles.photoHidden}
                loading="lazy"
                decoding="async"
                aria-hidden={visible ? undefined : true}
              />
            );
          })}
          <svg
            className={styles.glassTint}
            viewBox={`0 0 ${frameSize.width} ${frameSize.height}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              {ids.map((zone) => (
                <clipPath id={`${uid}-${view}-${zone}`} key={zone}>
                  {polygons(zone).map((points) => (
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
            {ids.map((zone) => {
              const tone = toneById(selection[zone]);
              return (
                <g key={zone} clipPath={`url(#${uid}-${view}-${zone})`}>
                  <rect
                    className={styles.tintShade}
                    x="0"
                    y="0"
                    width={frameSize.width}
                    height={frameSize.height}
                    fill="#07090c"
                    style={{ opacity: tone.shade }}
                  />
                  <rect
                    className={styles.tintShade}
                    x="0"
                    y="0"
                    width={frameSize.width}
                    height={frameSize.height}
                    fill={`url(#${uid}-glass)`}
                    style={{ opacity: tone.shade === 0 ? 0 : 0.45 }}
                  />
                </g>
              );
            })}
            {/* Zonas táctiles: tocar el cristal marca la ventana. El teclado y los lectores usan los botones de abajo. */}
            {ids.map((zone) => (
              <g key={`hit-${zone}`}>
                {polygons(zone).map((points) => (
                  <polygon
                    key={points}
                    points={points}
                    className={marked.includes(zone) ? styles.hitActive : styles.hit}
                    onClick={() => pickGlass(zone)}
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
            1. Marca una o varias ventanas <span>(o toca el cristal)</span>
          </p>
          <div className={styles.zoneDock}>
            {zones.map((zone) => {
              const tone = toneById(selection[zone.id]);
              const on = marked.includes(zone.id);
              const seen = zoneVisible(zone.id, view);
              return (
                <button
                  key={zone.id}
                  type="button"
                  className={on ? styles.zoneButtonActive : styles.zoneButton}
                  onClick={() => toggleZone(zone.id)}
                  aria-pressed={on}
                >
                  <ZoneIcon zone={zone.id} on={on} />
                  <strong>{zone.label}</strong>
                  <span>{tone.vlt === null ? "Sin película" : tone.label}</span>
                  {seen ? null : <em>no se ve en esta vista</em>}
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.step} role="group" aria-labelledby={`${uid}-tones`}>
          <p className={styles.stepLabel} id={`${uid}-tones`}>
            2. Elige el tono para: <span className={styles.stepZone}>{markedLabels}</span>
          </p>
          <div className={styles.toneDock}>
            {tones.map((item) => (
              <button
                key={item.id}
                type="button"
                className={markedTone(item.id) ? styles.toneButtonActive : styles.toneButton}
                onClick={() => chooseTone(item.id)}
                aria-pressed={markedTone(item.id)}
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
        «Todo igual» usa el tono de la última ventana marcada; «Solo atrás» pone el tono en las laterales traseras y el
        medallón. De perfil no se distinguen el parabrisas, su franja ni el medallón, y desde adentro no se ven las
        laterales traseras ni el medallón; igual puedes elegir su tono y se conserva al cambiar de vista.
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
