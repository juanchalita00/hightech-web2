"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { track } from "@/lib/analytics";
import { generateLeadRef } from "@/lib/lead-ref";
import { FILM_VLT, filmLook } from "@/lib/automotive-tone-look";
import { whatsappUrl } from "@/lib/whatsapp";
import {
  FRAME,
  FRAME_FRENTE,
  FRAME_INTERIOR,
  FRAME_TRASERA,
  exteriorGlass,
  frenteGlass,
  interiorGlass,
  traseraGlass,
} from "./automotiveToneGlass";
import styles from "./AutomotiveToneSimulator.module.css";

/**
 * Comparador automotriz por zona. Misma técnica que SignatureGlass en portada:
 * una foto base WebP + polígonos SVG recortados solo sobre el cristal.
 * Los polígonos (y su contrato de medición) viven en `automotiveToneGlass.ts`.
 *
 * ── Vistas ───────────────────────────────────────────────────────────────────
 *   Exterior = carrusel de tomas (deslizar, puntitos o flechas): 3/4 de frente, 3/4 de atrás
 *   y perfil. Interior = asiento del conductor. Cada toma × auto es UNA escena.
 *
 * ── Zonas (3, cualquiera con cualquier tono; nada se bloquea) ────────────────
 *   1. Laterales traseros y medallón  → una sola zona, mismo tono.
 *      3/4 de atrás: medallón + laterales traseros. 3/4 de frente y perfil: laterales
 *      traseros (el medallón no se ve). Interior: no se ve.
 *   2. Laterales delanteros           → en todas las tomas.
 *   3. Parabrisas                     → 3/4 de frente e Interior (de perfil y desde atrás no se ve).
 * Una zona «se ve» en una escena si esa escena tiene polígonos para ella.
 *
 * ── Vidrio de fábrica (v7) ───────────────────────────────────────────────────
 * «Sin película» ya no es un hueco transparente: se ve un velo neutro de fábrica
 * (~75–80% de luz, sin matiz de color) en todas las zonas y en ambos autos.
 * La foto base ya representa ese vidrio claro (la fórmula exterior toma la foto
 * como 75%), así que solo se le da un velo visible mínimo. Cada película usa su
 * VLT tal cual, con el velo de fábrica como piso (nunca más clara que «sin película»).
 * Es una aproximación visual: el vidrio de fábrica varía por vehículo.
 *
 * ── Tinte exterior / frente ──────────────────────────────────────────────────
 * Opacidad del sombreado = 1 − VLT / 75 (la foto base se toma como 75%), tope 0.975.
 *
 * ── Tinte interior (recalibrado v7, progresión pareja) ───────────────────────
 * Desde adentro la película se ve MUCHO más clara que desde afuera. Curva de apariencia
 * (VLT → opacidad), con interpolación lineal para VLT combinados:
 *   IR75 0.11 · IR50 0.18 · IR35 0.26 · IR15 0.40 · IR5 0.53 · vidrio de fábrica claro 0.05
 *
 * ── IR75 ─────────────────────────────────────────────────────────────────────
 * Lleva un matiz azul/cian frío y sutil (capa de color encima del sombreado), en las 3 vistas.
 */

/** Toma (foto) que se ve. Las tres primeras forman el carrusel de «Exterior». */
type ViewId = "frente" | "trasera" | "perfil" | "interior";
type ModeId = "exterior" | "interior";

const EXTERIOR_SHOTS: ReadonlyArray<{ id: ViewId; label: string }> = [
  { id: "frente", label: "3/4 de frente" },
  { id: "trasera", label: "3/4 de atrás" },
  { id: "perfil", label: "Perfil" },
];
const modeOf = (view: ViewId): ModeId => (view === "interior" ? "interior" : "exterior");
type ZoneId = "rear" | "front" | "windshield";

const zones: ReadonlyArray<{
  id: ZoneId;
  /** Nombre completo (lectores de pantalla, estado, mensaje). */
  label: string;
  /** Nombre compacto del chip. */
  short: string;
}> = [
  { id: "rear", label: "Laterales traseros y medallón", short: "Traseros y medallón" },
  { id: "front", label: "Laterales delanteros", short: "Delanteros" },
  { id: "windshield", label: "Parabrisas", short: "Parabrisas" },
];

const zoneInfo = (id: ZoneId) => zones.find((zone) => zone.id === id) ?? zones[0];
const lower = (text: string) => text.charAt(0).toLowerCase() + text.slice(1);

const cars = {
  suv: {
    id: "suv",
    label: "SUV",
    src: "/images/comparador-auto/suv-base.webp",
    mobileSrc: "/images/comparador-auto/suv-base-800.webp",
    interiorSrc: "/images/comparador-auto/interior-suv.webp",
    interiorMobileSrc: "/images/comparador-auto/interior-suv-800.webp",
    frenteSrc: "/images/comparador-auto/suv-frente.webp",
    frenteMobileSrc: "/images/comparador-auto/suv-frente-800.webp",
    traseraSrc: "/images/comparador-auto/suv-trasera.webp",
    traseraMobileSrc: "/images/comparador-auto/suv-trasera-800.webp",
    traseraAlt:
      "SUV plateado visto desde atrás en tres cuartos. Visualización (render). El medallón y los cristales laterales cambian de tono según lo que elijas.",
    frenteAlt:
      "SUV plateado visto de frente en tres cuartos. Visualización (render). El parabrisas y los cristales laterales cambian de tono según lo que elijas.",
    alt: "SUV plateado de perfil. Visualización (render). Los cristales laterales cambian de tono según lo que elijas.",
    interiorAlt:
      "Vista desde el asiento del conductor de un SUV, mirando la calle por el parabrisas y la ventanilla. Visualización (render). El parabrisas y la ventanilla cambian de tono según lo que elijas.",
  },
  sedan: {
    id: "sedan",
    label: "Sedán",
    src: "/images/comparador-auto/sedan-base.webp",
    mobileSrc: "/images/comparador-auto/sedan-base-800.webp",
    interiorSrc: "/images/comparador-auto/interior-sedan.webp",
    interiorMobileSrc: "/images/comparador-auto/interior-sedan-800.webp",
    frenteSrc: "/images/comparador-auto/sedan-frente.webp",
    frenteMobileSrc: "/images/comparador-auto/sedan-frente-800.webp",
    traseraSrc: "/images/comparador-auto/sedan-trasera.webp",
    traseraMobileSrc: "/images/comparador-auto/sedan-trasera-800.webp",
    traseraAlt:
      "Sedán plateado visto desde atrás en tres cuartos. Visualización (render). El medallón y los cristales laterales cambian de tono según lo que elijas.",
    frenteAlt:
      "Sedán plateado visto de frente en tres cuartos. Visualización (render). El parabrisas y los cristales laterales cambian de tono según lo que elijas.",
    alt: "Sedán plateado de perfil. Visualización (render). Los cristales laterales cambian de tono según lo que elijas.",
    interiorAlt:
      "Vista desde el asiento del conductor de un sedán, mirando la calle por el parabrisas y la ventanilla. Visualización (render). El parabrisas y la ventanilla cambian de tono según lo que elijas.",
  },
} as const;

type CarId = keyof typeof cars;

/**
 * UNA sola fuente de verdad para lo que se ve: cada escena (vista × auto) trae su foto,
 * su texto alternativo, su encuadre y sus polígonos. El botón resaltado, la foto y el tinte se
 * leen siempre de la MISMA entrada (`scenes[sceneKey]`), así que es imposible pintar la foto
 * del sedán con el polígono del SUV, ni mostrar el toggle de SUV con el sedán.
 */
type SceneKey = `${ViewId}-${CarId}`;
const sceneKeyOf = (view: ViewId, carId: CarId): SceneKey => `${view}-${carId}`;

const scenes = Object.fromEntries(
  (Object.keys(cars) as CarId[]).flatMap((carId) => {
    const car = cars[carId];
    return [
      [
        sceneKeyOf("perfil", carId),
        {
          view: "perfil",
          carId,
          src: car.src,
          srcSet: `${car.mobileSrc} 800w, ${car.src} 2400w`,
          sizes: "(max-width: 720px) calc(100vw - 1rem), min(76rem, calc(100vw - 2rem))",
          alt: car.alt,
          frame: FRAME,
          glass: { front: exteriorGlass[carId].front, rear: exteriorGlass[carId].rear, windshield: [] },
        },
      ],
      [
        sceneKeyOf("frente", carId),
        {
          view: "frente",
          carId,
          src: car.frenteSrc,
          srcSet: `${car.frenteMobileSrc} 800w, ${car.frenteSrc} ${FRAME_FRENTE.width}w`,
          sizes: "(max-width: 720px) calc(100vw - 1rem), min(52rem, calc(100vw - 2rem))",
          alt: car.frenteAlt,
          frame: FRAME_FRENTE,
          glass: { front: frenteGlass[carId].front, rear: frenteGlass[carId].rear, windshield: frenteGlass[carId].windshield },
        },
      ],
      [
        sceneKeyOf("trasera", carId),
        {
          view: "trasera",
          carId,
          src: car.traseraSrc,
          srcSet: `${car.traseraMobileSrc} 800w, ${car.traseraSrc} ${FRAME_TRASERA.width}w`,
          sizes: "(max-width: 720px) calc(100vw - 1rem), min(52rem, calc(100vw - 2rem))",
          alt: car.traseraAlt,
          frame: FRAME_TRASERA,
          glass: { front: traseraGlass[carId].front, rear: traseraGlass[carId].rear, windshield: [] },
        },
      ],
      [
        sceneKeyOf("interior", carId),
        {
          view: "interior",
          carId,
          src: car.interiorSrc,
          srcSet: `${car.interiorMobileSrc} 800w, ${car.interiorSrc} ${FRAME_INTERIOR.width}w`,
          sizes: "(max-width: 720px) calc(100vw - 1rem), min(46rem, calc(100vw - 2rem))",
          alt: car.interiorAlt,
          frame: FRAME_INTERIOR,
          glass: { front: interiorGlass[carId].front, rear: [], windshield: interiorGlass[carId].windshield },
        },
      ],
    ];
  }),
) as Record<
  SceneKey,
  {
    view: ViewId;
    carId: CarId;
    src: string;
    srcSet: string;
    sizes: string;
    alt: string;
    frame: { readonly width: number; readonly height: number };
    glass: Record<ZoneId, readonly string[]>;
  }
>;
const sceneKeys = Object.keys(scenes) as SceneKey[];
/** Una zona se ve en una escena si tiene polígonos ahí. */
const zoneSeen = (key: SceneKey, zone: ZoneId) => scenes[key].glass[zone].length > 0;

const tones = [
  { id: "none", label: "Sin película", sub: "sin tono", vlt: FILM_VLT.none, description: "sin película" },
  { id: "IR75", label: "IR75", sub: "75% luz", vlt: FILM_VLT.IR75, description: "muy claro" },
  { id: "IR50", label: "IR50", sub: "48% luz", vlt: FILM_VLT.IR50, description: "claro" },
  { id: "IR35", label: "IR35", sub: "35% luz", vlt: FILM_VLT.IR35, description: "intermedio" },
  { id: "IR15", label: "IR15", sub: "15% luz", vlt: FILM_VLT.IR15, description: "oscuro" },
  { id: "IR5", label: "IR5", sub: "3% luz", vlt: FILM_VLT.IR5, description: "muy oscuro" },
] as const;

type ToneId = (typeof tones)[number]["id"];
type Selection = Record<ZoneId, ToneId>;

const toneById = (id: ToneId) => tones.find((item) => item.id === id) ?? tones[0];

/** Apariencia de una zona: misma fórmula que las muestras de /automotriz (`filmLook`). */
function lookFor(view: ViewId, _carId: CarId, _zone: ZoneId, toneId: ToneId) {
  return filmLook(view === "interior" ? "interior" : "outside", toneId);
}

/** Texto del tono por zona: «sin película» dice qué vidrio de fábrica se ve. */
function toneName(_carId: CarId, _zone: ZoneId, toneId: ToneId) {
  if (toneId !== "none") return toneById(toneId).label;
  return "sin película (vidrio de fábrica)";
}

/** Texto corto del chip. */
function chipTone(_carId: CarId, _zone: ZoneId, toneId: ToneId) {
  if (toneId !== "none") return toneById(toneId).label;
  return "De fábrica";
}

/** Punto de partida: SUV, vista exterior, las 3 zonas sin película, «Traseros y medallón» marcada. */
const START: Selection = { rear: "none", front: "none", windshield: "none" };
const START_MESSAGE =
  "Punto de partida: SUV, vista exterior, todas las zonas sin película (vidrio de fábrica). Marca una o varias y elige el tono.";

const allZones = (toneId: ToneId): Selection => ({ rear: toneId, front: toneId, windshield: toneId });

function describeTone(id: ToneId) {
  const tone = toneById(id);
  return tone.vlt === null
    ? "sin película (se ve el vidrio de fábrica)"
    : `${tone.label}, ${tone.vlt}% de luz visible, ${tone.description}`;
}

function listLabels(ids: ZoneId[]) {
  const labels = ids.map((id) => lower(zoneInfo(id).label));
  if (labels.length <= 1) return labels.join("");
  return `${labels.slice(0, -1).join(", ")} y ${labels[labels.length - 1]}`;
}

const capital = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

/**
 * Pictograma de perfil (auto mirando a la derecha): cada zona resalta SU cristal.
 * Atrás = medallón + lateral trasero; puertas delanteras = ventanilla; parabrisas = cristal inclinado.
 */
const panes: Record<ZoneId, string[]> = {
  rear: ["M14.8 13 L19.2 8.1 L21 8.1 L21 13 Z", "M22.4 13 V8.1 H29.4 V13 Z"],
  front: ["M30.8 13 V8.1 H36 V13 Z"],
  windshield: ["M37.4 8.1 H38.8 L45.4 13 H37.4 Z"],
};

function ZoneGlyph({ zone, on }: { zone: ZoneId; on: boolean }) {
  const others = (Object.keys(panes) as ZoneId[]).filter((id) => id !== zone);
  return (
    <svg className={styles.glyph} viewBox="0 0 58 28" aria-hidden="true" focusable="false">
      <path
        className={styles.glyphBody}
        d="M3 21 V18 Q3 15.6 6 15 L14 13.4 L19 7.2 Q20.2 6 22.2 6 H35.6 Q37.6 6 39 7.2 L45.6 13.6 L51.4 15.2 Q55 16.2 55 19 V21 Z"
      />
      {others.map((id) => panes[id].map((d) => <path key={`${id}-${d}`} className={styles.glyphPane} d={d} />))}
      {panes[zone].map((d) => (
        <path key={`on-${d}`} className={on ? styles.glyphPaneOn : styles.glyphPaneFocus} d={d} />
      ))}
      <circle className={styles.glyphWheel} cx="15" cy="21.2" r="3.7" />
      <circle className={styles.glyphWheel} cx="43.4" cy="21.2" r="3.7" />
    </svg>
  );
}

/** Reflejos que se conservan al oscurecer (brillos del cristal). Afuera: reflejo especular; adentro: cielo. */
const SPEC = {
  outside: { threshold: 0.74, gain: 3.4, keep: 0.75 },
  interior: { threshold: 0.8, gain: 3, keep: 0.25 },
} as const;

function hexRgb(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => c / 255);
}

/** Palabra corta por tono (etiqueta sobre la foto). */
const TONE_WORD: Record<ToneId, string> = {
  none: "",
  IR75: "Muy claro",
  IR50: "Claro",
  IR35: "Medio",
  IR15: "Oscuro",
  IR5: "Muy oscuro",
};

function tagText(_carId: CarId, zone: ZoneId, toneId: ToneId) {
  const name = zoneInfo(zone).short;
  if (toneId === "none")
    return `${name}: sin película · vidrio de fábrica`;
  const tone = toneById(toneId);
  return `${name}: ${tone.label} · ${tone.vlt}% luz · ${TONE_WORD[toneId]}`;
}

/**
 * Resplandor del sol en interior: entra sobre todo por el parabrisas (y algo por la ventanilla).
 * Intensidad ∝ (luz que deja pasar el cristal)³ para que con IR15/IR5 baje claramente.
 */
function glareFor(carId: CarId, selection: Selection) {
  const through = (zone: ZoneId) => 1 - lookFor("interior", carId, zone, selection[zone]).shade;
  return 0.85 * through("windshield") ** 3 + 0.15 * through("front") ** 3;
}

function configMessage(carId: CarId, selection: Selection) {
  return [
    "Hola, estaba configurando mi vehículo en la web y me gustó esta configuración:",
    [
      cars[carId].label,
      `Parabrisas: ${toneName(carId, "windshield", selection.windshield)}`,
      `Delanteros: ${toneName(carId, "front", selection.front)}`,
      `Traseros y medallón: ${toneName(carId, "rear", selection.rear)}`,
    ].join(" · "),
  ].join(" ");
}


type SceneState = { view: ViewId; carId: CarId };
/** Formas mínimas de los eventos que se usan (el chequeo estructural del repo no trae los tipos de React). */
type PointerLike = { type: string; clientX: number; clientY: number; pointerId: number; currentTarget: HTMLDivElement };
type KeyLike = { key: string; shiftKey: boolean; preventDefault(): void };

export function AutomotiveToneSimulator() {
  // `scene` es lo que se ve (botones, foto y polígonos salen de aquí). `requested` es lo que pidió la
  // persona: solo pasa a `scene` cuando la foto nueva ya está cargada y decodificada. Mientras tanto
  // sigue a la vista la escena anterior completa (foto + tinte), nunca polígonos sin foto.
  const [scene, setScene] = useState<SceneState>({ view: "frente", carId: "suv" });
  const [requested, setRequested] = useState<SceneState>({ view: "frente", carId: "suv" });
  // Última toma exterior vista: al volver de Interior se regresa a ella.
  const [lastShot, setLastShot] = useState<ViewId>("frente");
  // Foto lista (cargada y decodificada) → URL exacta que usa el <img> (el SVG reutiliza el mismo archivo).
  const [ready, setReady] = useState<Partial<Record<SceneKey, string>>>({});
  const [comparing, setComparing] = useState(false);
  const [split, setSplit] = useState(0.5);
  const [near, setNear] = useState(false);
  const [selection, setSelection] = useState<Selection>(START);
  const [marked, setMarked] = useState<ZoneId[]>(["rear"]);
  const [message, setMessage] = useState(START_MESSAGE);
  const uid = useId().replace(/:/g, "");
  const rootRef = useRef<HTMLDivElement | null>(null);
  const imgRefs = useRef<Partial<Record<SceneKey, HTMLImageElement | null>>>({});
  const swipe = useRef<{ x: number; y: number; moved: boolean } | null>(null);

  const { view, carId } = scene;
  const sceneKey = sceneKeyOf(view, carId);
  const current = scenes[sceneKey];
  const requestedKey = sceneKeyOf(requested.view, requested.carId);
  const loading = requestedKey !== sceneKey;
  const primary = marked[marked.length - 1] ?? "rear";
  const markedTone = (id: ToneId) => marked.length > 0 && marked.every((zone) => selection[zone] === id);
  const markedLabels = listLabels(marked);
  const whatsappHref = useMemo(() => whatsappUrl(configMessage(carId, selection)), [carId, selection]);

  function markReady(key: SceneKey) {
    const img = imgRefs.current[key];
    const done = () =>
      setReady((prev) => (prev[key] ? prev : { ...prev, [key]: img?.currentSrc || scenes[key].src }));
    if (img && typeof img.decode === "function") img.decode().then(done, done);
    else done();
  }

  // Fotos que ya llegaron antes de hidratar (caché / SSR): no esperan al evento load.
  useEffect(() => {
    for (const key of sceneKeys) {
      const img = imgRefs.current[key];
      if (img?.complete && img.naturalWidth > 0) markReady(key);
    }
  }, []);

  // Cambio de escena: solo cuando la foto pedida está lista (instantáneo si ya se precargó).
  useEffect(() => {
    if (requestedKey !== sceneKey && ready[requestedKey]) setScene(requested);
  }, [requested, requestedKey, sceneKey, ready]);

  // Precarga de las 8 fotos (~20 KB c/u en móvil) al acercarse al simulador, y control del flotante de WhatsApp en móvil.
  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    const nearObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) setNear(true);
      },
      { rootMargin: "900px 0px" },
    );
    const inViewObserver = new IntersectionObserver(
      (entries) => {
        const html = document.documentElement;
        if (entries.some((entry) => entry.isIntersecting)) html.setAttribute("data-simulator-in-view", "");
        else html.removeAttribute("data-simulator-in-view");
      },
      { threshold: 0 },
    );
    nearObserver.observe(root);
    inViewObserver.observe(root);
    return () => {
      nearObserver.disconnect();
      inViewObserver.disconnect();
      document.documentElement.removeAttribute("data-simulator-in-view");
    };
  }, []);

  /** Aviso corto cuando una zona elegida no se ve en la vista actual (se conserva y se anuncia). */
  function visibilityNote(ids: ZoneId[]) {
    const hidden = ids.filter((id) => !zoneSeen(sceneKey, id));
    const notes: string[] = [];
    if (hidden.length > 0) {
      const plural = hidden.length > 1;
      notes.push(
        hidden.length === ids.length
          ? "No se ve en esta vista, pero se conserva."
          : `${capital(listLabels(hidden))}: no se ${plural ? "ven" : "ve"} en esta vista, pero se ${plural ? "conservan" : "conserva"}.`,
      );
    }
    if ((view === "frente" || view === "perfil") && ids.includes("rear"))
      notes.push("El medallón no se ve en esta toma; va incluido en la zona.");
    return notes.length ? ` ${notes.join(" ")}` : "";
  }

  function goTo(next: SceneState) {
    setNear(true);
    setRequested(next);
    if (next.view !== "interior") setLastShot(next.view);
    if (next.view !== requested.view) {
      setMessage(
        next.view === "interior"
          ? "Vista interior: se ven el parabrisas y la ventanilla del conductor. Desde adentro la película se ve más clara que desde afuera."
          : next.view === "frente"
            ? "3/4 de frente: se ven el parabrisas y los laterales. Los tonos elegidos se conservan."
            : next.view === "trasera"
              ? "3/4 de atrás: se ven el medallón y los laterales. Los tonos elegidos se conservan."
              : "Perfil: se ven los laterales. Los tonos elegidos se conservan.",
      );
    }
  }

  /** Carrusel exterior: paso −1 / +1 entre tomas (con vuelta). */
  function stepShot(delta: number) {
    const i = EXTERIOR_SHOTS.findIndex((shot) => shot.id === requested.view);
    const next = EXTERIOR_SHOTS[(Math.max(i, 0) + delta + EXTERIOR_SHOTS.length) % EXTERIOR_SHOTS.length];
    goTo({ view: next.id, carId: requested.carId });
  }

  function onSwipeStart(event: PointerLike) {
    if (modeOf(requested.view) !== "exterior") return;
    swipe.current = { x: event.clientX, y: event.clientY, moved: false };
  }

  function onSwipeEnd(event: PointerLike) {
    const start = swipe.current;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      start.moved = true;
      stepShot(dx < 0 ? 1 : -1);
    } else {
      swipe.current = null;
    }
  }

  function chooseTone(toneId: ToneId) {
    if (marked.length === 0) return;
    setSelection((prev) => {
      const next = { ...prev };
      for (const zone of marked) next[zone] = toneId;
      return next;
    });
    setMessage(capital(`${markedLabels}: ${describeTone(toneId)}.`) + visibilityNote(marked));
  }

  function toggleZone(zone: ZoneId) {
    const isOn = marked.includes(zone);
    if (isOn && marked.length === 1) {
      setMessage(`${zoneInfo(zone).label} sigue marcada: deja al menos una zona marcada para cambiar su tono.`);
      return;
    }
    const next = isOn ? marked.filter((id) => id !== zone) : [...marked, zone];
    setMarked(next);
    setMessage(
      isOn
        ? `${zoneInfo(zone).label} desmarcada. Marcadas: ${listLabels(next)}.`
        : `${zoneInfo(zone).label} marcada, ahora en ${describeTone(selection[zone])}.${visibilityNote([zone])}`,
    );
  }

  /** Tocar el cristal marca solo esa zona (los chips sirven para marcar varias). */
  function pickGlass(zone: ZoneId) {
    // Un deslizamiento del carrusel no cuenta como toque en el cristal.
    if (swipe.current?.moved) {
      swipe.current = null;
      return;
    }
    swipe.current = null;
    setMarked([zone]);
    setMessage(`${zoneInfo(zone).label} marcada, ahora en ${describeTone(selection[zone])}.${visibilityNote([zone])}`);
  }

  function startWhatsApp() {
    // Referencia interna para cruzar el clic con la conversación; no se agrega al mensaje de WhatsApp.
    track("whatsapp_started", {
      source_page: "/automotriz/",
      business_line: "automotive",
      cta_position: "SIMULATOR_CONFIG",
      lead_ref: generateLeadRef(),
    });
  }

  const ids = (["rear", "front", "windshield"] as ZoneId[]).filter((zone) => zoneSeen(sceneKey, zone));
  const frameSize = current.frame;
  const photoSrc = ready[sceneKey];
  const tintReady = Boolean(photoSrc);
  const polygons = (zone: ZoneId): readonly string[] => current.glass[zone];
  const side = view === "interior" ? "interior" : "outside";
  // Etiqueta: la zona marcada que se ve en esta toma (si la última tocada no se ve aquí, la primera visible).
  const tagZone = ids.includes(primary) ? primary : (marked.find((zone) => ids.includes(zone)) ?? ids[0] ?? primary);
  const sliderIndex = Math.max(
    0,
    tones.findIndex((tone) => tone.id === selection[primary]),
  );
  const sliderTone = tones[sliderIndex];
  const mixed = marked.some((zone) => selection[zone] !== selection[primary]);
  const glareFilm = glareFor(carId, selection);
  const glareFactory = glareFor(carId, allZones("none"));
  const pct = Math.round(split * 100);

  /** Capa de cristal de una zona: la foto misma, filtrada (tinte + reflejos), recortada al polígono. */
  function glassLayer(zone: ZoneId, toneId: ToneId, tag: string) {
    const look = lookFor(view, carId, zone, toneId);
    const edge = view === "interior" ? 4 : 0;
    const id = `${uid}-${tag}-${zone}`;
    const keep = (1 - look.shade) * (1 - look.tintOpacity);
    const [tr, tg, tb] = look.tint ? hexRgb(look.tint).map((c) => c * look.tintOpacity * (1 - look.shade)) : [0, 0, 0];
    const spec = SPEC[side];
    const lum = [0.2126, 0.7152, 0.0722].map((w) => w * spec.gain);
    const lumRow = `${lum[0]} ${lum[1]} ${lum[2]} 0 ${-spec.threshold * spec.gain}`;
    return (
      <g key={id} data-zone={zone} data-shade={look.shade.toFixed(3)}>
        <filter id={`${id}-f`} x="0" y="0" width="1" height="1" colorInterpolationFilters="sRGB">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values={`${keep} 0 0 0 ${tr} 0 ${keep} 0 0 ${tg} 0 0 ${keep} 0 ${tb} 0 0 0 1 0`}
            result="tinted"
          />
          <feColorMatrix in="SourceGraphic" type="matrix" values={`${lumRow} ${lumRow} ${lumRow} 0 0 0 0 1`} result="spec" />
          <feComposite in="tinted" in2="spec" operator="arithmetic" k1="0" k2="1" k3={look.shade * spec.keep} k4="0" />
        </filter>
        <mask id={`${id}-m`} maskUnits="userSpaceOnUse" x="0" y="0" width={frameSize.width} height={frameSize.height}>
          {polygons(zone).map((points) => (
            <polygon
              key={points}
              points={points}
              fill="#fff"
              stroke={edge ? "#fff" : undefined}
              strokeWidth={edge || undefined}
              strokeLinejoin="round"
            />
          ))}
        </mask>
        <image
          href={photoSrc}
          x="0"
          y="0"
          width={frameSize.width}
          height={frameSize.height}
          preserveAspectRatio="none"
          filter={`url(#${id}-f)`}
          mask={`url(#${id}-m)`}
        />
      </g>
    );
  }

  function onCompareKey(event: KeyLike) {
    const step = event.shiftKey ? 0.2 : 0.05;
    if (event.key === "ArrowLeft" || event.key === "ArrowDown") setSplit((s) => Math.max(0, s - step));
    else if (event.key === "ArrowRight" || event.key === "ArrowUp") setSplit((s) => Math.min(1, s + step));
    else if (event.key === "Home") setSplit(0);
    else if (event.key === "End") setSplit(1);
    else if (event.key === "Escape") setComparing(false);
    else return;
    event.preventDefault();
  }

  function dragSplit(event: PointerLike) {
    if (event.type === "pointerdown") event.currentTarget.setPointerCapture(event.pointerId);
    else if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    const box = event.currentTarget.getBoundingClientRect();
    setSplit(Math.min(1, Math.max(0, (event.clientX - box.left) / box.width)));
  }

  return (
    <div
      ref={rootRef}
      className={styles.simulator}
      aria-label="Simulador de tonos por zona de un auto. Marcas una o varias zonas y eliges el tono que quieres en ellas."
      aria-busy={loading}
    >
      <div className={styles.sticky}>
        <div className={styles.pickers}>
          <div className={styles.segment} role="group" aria-label="Vista">
            {(["exterior", "interior"] as ModeId[]).map((id) => {
              const on = modeOf(view) === id;
              const pending = !on && modeOf(requested.view) === id;
              return (
                <button
                  key={id}
                  type="button"
                  className={on ? styles.segmentActive : pending ? styles.segmentPending : styles.segmentButton}
                  onClick={() => goTo({ view: id === "interior" ? "interior" : lastShot, carId: requested.carId })}
                  aria-pressed={on}
                >
                  {id === "exterior" ? "Exterior" : "Interior"}
                </button>
              );
            })}
          </div>
          <div className={styles.segment} role="group" aria-label="Tipo de auto">
            {(Object.keys(cars) as CarId[]).map((id) => (
              <button
                key={id}
                type="button"
                className={carId === id ? styles.segmentActive : requested.carId === id ? styles.segmentPending : styles.segmentButton}
                onClick={() => goTo({ view: requested.view, carId: id })}
                aria-pressed={carId === id}
              >
                {cars[id].label}
              </button>
            ))}
          </div>
        </div>

        <div
          className={view === "interior" ? styles.frameInterior : view === "perfil" ? styles.frame : styles.frameFrente}
          data-loading={loading ? "" : undefined}
          onPointerDown={comparing ? undefined : onSwipeStart}
          onPointerUp={comparing ? undefined : onSwipeEnd}
          onPointerCancel={() => (swipe.current = null)}
        >
          <div className={styles.stage}>
            {sceneKeys.map((key) => {
              const item = scenes[key];
              const visible = key === sceneKey;
              // Solo la foto visible (y la pedida) existen al cargar la página; las demás se montan y
              // precargan al acercarse al simulador, para no competir con la carga inicial.
              if (!near && !visible && key !== requestedKey) return null;
              return (
                <img
                  key={key}
                  ref={(node: HTMLImageElement | null) => {
                    imgRefs.current[key] = node;
                  }}
                  src={item.src}
                  srcSet={item.srcSet}
                  sizes={item.sizes}
                  width={item.frame.width}
                  height={item.frame.height}
                  alt={visible ? item.alt : ""}
                  className={visible ? styles.photo : styles.photoHidden}
                  loading={near || key === requestedKey ? "eager" : "lazy"}
                  decoding="async"
                  aria-hidden={visible ? undefined : true}
                  onLoad={() => markReady(key)}
                  onError={() => markReady(key)}
                />
              );
            })}
            {tintReady ? (
              <svg
                key={sceneKey}
                className={styles.glassTint}
                viewBox={`0 0 ${frameSize.width} ${frameSize.height}`}
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <defs>
                  <clipPath id={`${uid}-left`}>
                    <rect x="0" y="0" width={frameSize.width * (comparing ? split : 1)} height={frameSize.height} />
                  </clipPath>
                  <clipPath id={`${uid}-right`}>
                    <rect
                      x={frameSize.width * split}
                      y="0"
                      width={frameSize.width * (1 - split)}
                      height={frameSize.height}
                    />
                  </clipPath>
                </defs>
                {/* Cada zona = la foto filtrada (sombreado + color + reflejos que se conservan), recortada a su cristal. */}
                <g clipPath={`url(#${uid}-left)`}>{ids.map((zone) => glassLayer(zone, selection[zone], "film"))}</g>
                {comparing ? (
                  <g clipPath={`url(#${uid}-right)`}>{ids.map((zone) => glassLayer(zone, "none", "factory"))}</g>
                ) : null}
                {/* Zonas táctiles: tocar el cristal marca la zona. El teclado y los lectores usan los chips de abajo. */}
                {comparing
                  ? null
                  : ids.map((zone) => (
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
            ) : null}
            {view === "interior" && tintReady ? (
              <>
                <div
                  className={styles.glare}
                  data-car={carId}
                  style={{ opacity: glareFilm, clipPath: comparing ? `inset(0 ${100 - pct}% 0 0)` : undefined }}
                  aria-hidden="true"
                />
                {comparing ? (
                  <div
                    className={styles.glare}
                    data-car={carId}
                    style={{ opacity: glareFactory, clipPath: `inset(0 0 0 ${pct}%)` }}
                    aria-hidden="true"
                  />
                ) : null}
              </>
            ) : null}
          </div>
          <p className={styles.visualLabel}>Visualización</p>
          <button
            type="button"
            className={comparing ? styles.compareToggleOn : styles.compareToggle}
            data-side={view === "trasera" ? "left" : undefined}
            onClick={() => {
              setComparing((on) => !on);
              setSplit(0.5);
            }}
            aria-pressed={comparing}
          >
            {comparing ? "Salir de comparar" : "Antes / después"}
          </button>
          <p className={styles.toneTag} aria-hidden="true">
            {comparing
              ? `Con película · ${selection[tagZone] === "none" ? "sin película" : toneById(selection[tagZone]).label}`
              : tagText(carId, tagZone, selection[tagZone])}
          </p>
          {comparing ? (
            <>
              <p className={styles.toneTagRight} aria-hidden="true">
                Sin película · fábrica
              </p>
              <div
                className={styles.compareLayer}
                onPointerDown={dragSplit}
                onPointerMove={dragSplit}
                aria-hidden="true"
              />
              <div
                className={styles.compareHandle}
                style={{ left: `${split * 100}%` }}
                role="slider"
                tabIndex={0}
                aria-label="Divisor antes y después"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={pct}
                aria-valuetext={`${pct}% con película a la izquierda; a la derecha, sin película (vidrio de fábrica)`}
                onKeyDown={onCompareKey}
              >
                <span aria-hidden="true">‹ ›</span>
              </div>
            </>
          ) : modeOf(view) === "exterior" ? (
            <>
              <button
                type="button"
                className={`${styles.shotArrow} ${styles.shotPrev}`}
                onClick={() => stepShot(-1)}
                aria-label="Toma anterior"
              >
                <span aria-hidden="true">‹</span>
              </button>
              <button
                type="button"
                className={`${styles.shotArrow} ${styles.shotNext}`}
                onClick={() => stepShot(1)}
                aria-label="Toma siguiente"
              >
                <span aria-hidden="true">›</span>
              </button>
            </>
          ) : null}
        </div>

        {modeOf(view) === "exterior" ? (
          <div className={styles.shotDots} role="group" aria-label="Tomas del exterior (también puedes deslizar la foto)">
            {EXTERIOR_SHOTS.map((shot) => {
              const on = view === shot.id;
              const pending = !on && requested.view === shot.id;
              return (
                <button
                  key={shot.id}
                  type="button"
                  className={on ? styles.shotDotActive : pending ? styles.shotDotPending : styles.shotDot}
                  onClick={() => goTo({ view: shot.id, carId: requested.carId })}
                  aria-pressed={on}
                  aria-label={shot.label}
                >
                  <span aria-hidden="true" />
                  <em>{shot.label}</em>
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className={styles.controls}>
        <div className={styles.step} role="group" aria-labelledby={`${uid}-zones`}>
          <p className={styles.stepLabel} id={`${uid}-zones`}>
            Zonas <span>(una o varias, o toca el cristal)</span>
          </p>
          <div className={styles.zoneDock}>
            {zones.map((zone) => {
              const on = marked.includes(zone.id);
              const seen = zoneSeen(sceneKey, zone.id);
              const toneText = chipTone(carId, zone.id, selection[zone.id]);
              return (
                <button
                  key={zone.id}
                  type="button"
                  className={on ? styles.zoneChipActive : styles.zoneChip}
                  data-unseen={seen ? undefined : ""}
                  onClick={() => toggleZone(zone.id)}
                  aria-pressed={on}
                  aria-label={`${zone.short} ${toneText}${seen ? "" : " (no se ve en esta vista)"}`}
                  title={`${zone.label}: ${toneName(carId, zone.id, selection[zone.id])}`}
                >
                  <ZoneGlyph zone={zone.id} on={on} />
                  <strong>{zone.short}</strong>
                  <span>{toneText}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.step}>
          <p className={styles.stepLabel} id={`${uid}-tones`}>
            Tono para: <span className={styles.stepZone}>{markedLabels}</span>
          </p>
          <div className={styles.toneSlider}>
            <input
              type="range"
              className={styles.range}
              min={0}
              max={tones.length - 1}
              step={1}
              value={sliderIndex}
              onChange={(event: { currentTarget: HTMLInputElement }) => chooseTone(tones[Number(event.currentTarget.value)].id)}
              aria-labelledby={`${uid}-tones`}
              aria-valuetext={
                (sliderTone.vlt === null ? "Sin película, vidrio de fábrica" : `${sliderTone.label}, ${sliderTone.vlt}% de luz`) +
                (mixed ? " (las zonas marcadas tenían tonos distintos)" : "")
              }
            />
            <div className={styles.ticks} aria-hidden="true">
              {tones.map((tone, index) => (
                <button
                  key={tone.id}
                  type="button"
                  tabIndex={-1}
                  className={index === sliderIndex ? styles.tickActive : styles.tick}
                  onClick={() => chooseTone(tone.id)}
                >
                  <strong>{tone.vlt === null ? "Fábrica" : tone.label}</strong>
                  <span>{tone.vlt === null ? "sin película" : tone.sub}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      <p className={styles.status} role="status" aria-live="polite">
        {message}
      </p>

      <p className={styles.factoryNote}>
        «Sin película» muestra un vidrio de fábrica aproximado (tinte ligero): varía por vehículo; High Tech no lo
        vende ni lo garantiza.
      </p>

      <p className={styles.lawNote}>
        Visualización aproximada. Tú decides el tono y las ventanas; en Jalisco hay reglas sobre qué tan oscuro puede
        ser el cristal.{" "}
        <Link href="/guias/polarizado-automotriz-jalisco/">Ver la guía de Jalisco</Link>.
      </p>

      <div className={styles.cta}>
        <a className={`button button-primary ${styles.ctaButton}`} href={whatsappHref} onClick={startWhatsApp}>
          <Icon name="message" size={20} />
          Me gusta esta configuración
        </a>
        <p className={styles.ctaHint}>Se abre WhatsApp con tu selección para que la revisemos contigo.</p>
      </div>
    </div>
  );
}
