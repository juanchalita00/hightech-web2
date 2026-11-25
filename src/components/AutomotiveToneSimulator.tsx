"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { track } from "@/lib/analytics";
import { generateLeadRef } from "@/lib/lead-ref";
import { whatsappUrl } from "@/lib/whatsapp";
import { FRAME, FRAME_INTERIOR, exteriorGlass, interiorGlass } from "./automotiveToneGlass";
import styles from "./AutomotiveToneSimulator.module.css";

/**
 * Comparador automotriz por zona. Misma técnica que SignatureGlass en portada:
 * una foto base WebP + polígonos SVG recortados solo sobre el cristal.
 * Los polígonos (y su contrato de medición) viven en `automotiveToneGlass.ts`.
 *
 * ── Zonas (3, cualquiera con cualquier tono; nada se bloquea) ────────────────
 *   1. Laterales traseros y medallón  → una sola zona, mismo tono.
 *      Exterior: se pintan los cristales laterales traseros. El medallón no se pinta
 *      de perfil (queda tapado por spoiler/cajuela) pero sigue siendo parte de la zona.
 *      Interior: no se ve en esta toma («no se ve en esta vista»).
 *   2. Laterales delanteros           → exterior e interior (ventanilla del conductor).
 *   3. Parabrisas                     → solo interior (de perfil queda de canto).
 * No existe zona de «franja»: High Tech no instala solo la franja.
 *
 * ── Tinte exterior ───────────────────────────────────────────────────────────
 * Opacidad del sombreado = 1 − VLT real / 75 (la foto base se toma como IR75).
 * IR50 = 48% VLT, IR5 = 3% VLT, «Sin película» = 0.
 *
 * ── Tinte interior (calibrado con Fer, v6) ───────────────────────────────────
 * Desde adentro la película se ve MUCHO más clara que desde afuera, así que el
 * interior NO usa la tabla exterior. Mapeo de apariencia:
 *   IR5  ≈ IR35 exterior  → 1 − 35/75 = 0.533
 *   IR15 ≈ IR50 exterior  → 1 − 48/75 = 0.360 (no existe IR20 en la gama)
 *   IR35 ≈ IR75 exterior  → casi claro, un matiz muy ligero: 0.14
 *   IR50 → leve velo: 0.08;  IR75 → aún más sutil: 0.04;  Sin película → 0
 * Orden estrictamente creciente de claro a oscuro.
 */

type ViewId = "exterior" | "interior";
type ZoneId = "rear" | "front" | "windshield";

const zones: ReadonlyArray<{
  id: ZoneId;
  /** Nombre completo (lectores de pantalla, estado, mensaje). */
  label: string;
  /** Nombre compacto del chip. */
  short: string;
  /** Vistas en las que la zona tiene polígono y se pinta. */
  views: ReadonlyArray<ViewId>;
}> = [
  { id: "rear", label: "Laterales traseros y medallón", short: "Traseros y medallón", views: ["exterior"] },
  { id: "front", label: "Laterales delanteros", short: "Delanteros", views: ["exterior", "interior"] },
  { id: "windshield", label: "Parabrisas", short: "Parabrisas", views: ["interior"] },
];

const zoneInfo = (id: ZoneId) => zones.find((zone) => zone.id === id) ?? zones[0];
const zoneVisible = (id: ZoneId, view: ViewId) => zoneInfo(id).views.includes(view);
const lower = (text: string) => text.charAt(0).toLowerCase() + text.slice(1);

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
      "Vista desde el asiento del conductor de un SUV, mirando la calle por el parabrisas y la ventanilla. Visualización (render). El parabrisas y la ventanilla cambian de tono según lo que elijas.",
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
        sceneKeyOf("exterior", carId),
        {
          view: "exterior",
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

const tones = [
  { id: "none", label: "Sin película", sub: "sin tono", vlt: null, description: "sin película" },
  { id: "IR75", label: "IR75", sub: "75% luz", vlt: 75, description: "muy claro" },
  { id: "IR50", label: "IR50", sub: "48% luz", vlt: 48, description: "claro" },
  { id: "IR35", label: "IR35", sub: "35% luz", vlt: 35, description: "intermedio" },
  { id: "IR15", label: "IR15", sub: "15% luz", vlt: 15, description: "oscuro" },
  { id: "IR5", label: "IR5", sub: "3% luz", vlt: 3, description: "muy oscuro" },
] as const;

type ToneId = (typeof tones)[number]["id"];
type Selection = Record<ZoneId, ToneId>;

const toneById = (id: ToneId) => tones.find((item) => item.id === id) ?? tones[0];

/** Exterior: 1 − VLT/75 (IR50 = 0.36, IR35 = 0.533, IR15 = 0.8, IR5 = 0.96). IR75 y «sin película» = 0. */
const EXTERIOR_SHADE: Record<ToneId, number> = {
  none: 0,
  IR75: 0,
  IR50: 1 - 48 / 75,
  IR35: 1 - 35 / 75,
  IR15: 1 - 15 / 75,
  IR5: 1 - 3 / 75,
};

/** Interior: apariencia recalibrada (ver el encabezado). IR5 se ve como un IR35 de afuera, IR15 como un IR50, etc. */
const INTERIOR_SHADE: Record<ToneId, number> = {
  none: 0,
  IR75: 0.04,
  IR50: 0.08,
  IR35: 0.14,
  IR15: 1 - 48 / 75,
  IR5: 1 - 35 / 75,
};

const shadeFor = (view: ViewId, id: ToneId) => (view === "interior" ? INTERIOR_SHADE[id] : EXTERIOR_SHADE[id]);

/** Punto de partida: SUV, vista exterior, las 3 zonas en IR35, «Traseros y medallón» marcada. */
const START: Selection = { rear: "IR35", front: "IR35", windshield: "IR35" };
const START_MESSAGE = "Punto de partida: SUV, vista exterior, todas las zonas en IR35. Marca una o varias y elige el tono.";

const allZones = (toneId: ToneId): Selection => ({ rear: toneId, front: toneId, windshield: toneId });

function describeTone(id: ToneId) {
  const tone = toneById(id);
  return tone.vlt === null ? "sin película" : `${tone.label}, ${tone.vlt}% de luz visible, ${tone.description}`;
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

function configMessage(carLabel: string, selection: Selection) {
  const tone = (id: ToneId) => (id === "none" ? "sin película" : toneById(id).label);
  return [
    "Hola, estaba configurando mi vehículo en la web y me gustó esta configuración:",
    [
      carLabel,
      `Parabrisas: ${tone(selection.windshield)}`,
      `Delanteros: ${tone(selection.front)}`,
      `Traseros y medallón: ${tone(selection.rear)}`,
    ].join(" · "),
  ].join(" ");
}


type SceneState = { view: ViewId; carId: CarId };

export function AutomotiveToneSimulator() {
  // `scene` es lo que se ve (botones, foto y polígonos salen de aquí). `requested` es lo que pidió la
  // persona: solo pasa a `scene` cuando la foto nueva ya está cargada y decodificada. Mientras tanto
  // sigue a la vista la escena anterior completa (foto + tinte), nunca polígonos sin foto.
  const [scene, setScene] = useState<SceneState>({ view: "exterior", carId: "suv" });
  const [requested, setRequested] = useState<SceneState>({ view: "exterior", carId: "suv" });
  const [ready, setReady] = useState<Partial<Record<SceneKey, boolean>>>({});
  const [near, setNear] = useState(false);
  const [selection, setSelection] = useState<Selection>(START);
  const [marked, setMarked] = useState<ZoneId[]>(["rear"]);
  const [lastTone, setLastTone] = useState<ToneId>("IR35");
  const [message, setMessage] = useState(START_MESSAGE);
  const uid = useId().replace(/:/g, "");
  const rootRef = useRef<HTMLDivElement | null>(null);
  const imgRefs = useRef<Partial<Record<SceneKey, HTMLImageElement | null>>>({});

  const { view, carId } = scene;
  const sceneKey = sceneKeyOf(view, carId);
  const current = scenes[sceneKey];
  const requestedKey = sceneKeyOf(requested.view, requested.carId);
  const loading = requestedKey !== sceneKey;
  const car = cars[carId];
  const primary = marked[marked.length - 1] ?? "rear";
  const markedTone = (id: ToneId) => marked.length > 0 && marked.every((zone) => selection[zone] === id);
  const markedLabels = listLabels(marked);
  const whatsappHref = useMemo(() => whatsappUrl(configMessage(car.label, selection)), [car.label, selection]);

  function markReady(key: SceneKey) {
    const done = () => setReady((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
    const img = imgRefs.current[key];
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

  // Precarga de las 4 fotos (pesan poco) al acercarse al simulador, y control del flotante de WhatsApp en móvil.
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
    const hidden = ids.filter((id) => !zoneVisible(id, view));
    const notes: string[] = [];
    if (hidden.length > 0) {
      const plural = hidden.length > 1;
      notes.push(
        hidden.length === ids.length
          ? "No se ve en esta vista, pero se conserva."
          : `${capital(listLabels(hidden))}: no se ${plural ? "ven" : "ve"} en esta vista, pero se ${plural ? "conservan" : "conserva"}.`,
      );
    }
    if (view === "exterior" && ids.includes("rear")) notes.push("El medallón no se ve de perfil; va incluido en la zona.");
    return notes.length ? ` ${notes.join(" ")}` : "";
  }

  function goTo(next: SceneState) {
    setNear(true);
    setRequested(next);
    if (next.view !== view) {
      setMessage(
        next.view === "interior"
          ? "Vista interior: se ven el parabrisas y la ventanilla del conductor. Desde adentro la película se ve más clara que desde afuera."
          : "Vista exterior: se ven los laterales. Los tonos elegidos se conservan.",
      );
    }
  }

  function chooseTone(toneId: ToneId) {
    if (marked.length === 0) return;
    setSelection((prev) => {
      const next = { ...prev };
      for (const zone of marked) next[zone] = toneId;
      return next;
    });
    if (toneId !== "none") setLastTone(toneId);
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
    setMarked([zone]);
    setMessage(`${zoneInfo(zone).label} marcada, ahora en ${describeTone(selection[zone])}.${visibilityNote([zone])}`);
  }

  function sameEverywhere() {
    const toneId = selection[primary];
    setSelection(allZones(toneId));
    if (toneId !== "none") setLastTone(toneId);
    setMessage(toneId === "none" ? "Todas las zonas sin película." : `Todas las zonas en ${describeTone(toneId)}.`);
  }

  function onlyRear() {
    const toneId = selection[primary] === "none" ? lastTone : selection[primary];
    setSelection({ ...allZones("none"), rear: toneId });
    setLastTone(toneId);
    setMessage(
      `Solo atrás: laterales traseros y medallón en ${describeTone(toneId)}. Delanteros y parabrisas sin película.`,
    );
  }

  function clearAll() {
    setSelection(allZones("none"));
    setMessage("Todas las zonas sin película.");
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

  const ids = (view === "exterior" ? ["front", "rear"] : ["windshield", "front"]) as ZoneId[];
  const frameSize = current.frame;
  const tintReady = Boolean(ready[sceneKey]);
  const polygons = (zone: ZoneId): readonly string[] => current.glass[zone];

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
            {(["exterior", "interior"] as ViewId[]).map((id) => (
              <button
                key={id}
                type="button"
                className={view === id ? styles.segmentActive : requested.view === id ? styles.segmentPending : styles.segmentButton}
                onClick={() => goTo({ view: id, carId: requested.carId })}
                aria-pressed={view === id}
              >
                {id === "exterior" ? "Exterior" : "Interior"}
              </button>
            ))}
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

        <div className={view === "interior" ? styles.frameInterior : styles.frame} data-loading={loading ? "" : undefined}>
          <div className={styles.stage}>
            {sceneKeys.map((key) => {
              const item = scenes[key];
              const visible = key === sceneKey;
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
                  <linearGradient id={`${uid}-glass`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#ffffff" stopOpacity="0.22" />
                    <stop offset="0.2" stopColor="#ffffff" stopOpacity="0.05" />
                    <stop offset="0.7" stopColor="#ffffff" stopOpacity="0" />
                    <stop offset="1" stopColor="#d7e4ee" stopOpacity="0.12" />
                  </linearGradient>
                </defs>
                {/* Cada zona se dibuja como polígonos en un grupo con una sola opacidad (no se acumula).
                    En interior un trazo fino cubre el hilo claro que deja el antialias junto a espejo y viseras. */}
                {ids.map((zone) => {
                  const shade = shadeFor(view, selection[zone]);
                  const edge = view === "interior" ? 4 : 0;
                  const stroke = edge ? { stroke: "#07090c", strokeWidth: edge, strokeLinejoin: "round" as const } : {};
                  return (
                    <g key={zone}>
                      <g className={styles.tintShade} style={{ opacity: shade }}>
                        {polygons(zone).map((points) => (
                          <polygon key={points} points={points} fill="#07090c" {...stroke} />
                        ))}
                      </g>
                      <g className={styles.tintShade} style={{ opacity: shade === 0 ? 0 : 0.45 }}>
                        {polygons(zone).map((points) => (
                          <polygon key={points} points={points} fill={`url(#${uid}-glass)`} />
                        ))}
                      </g>
                    </g>
                  );
                })}
                {/* Zonas táctiles: tocar el cristal marca la zona. El teclado y los lectores usan los chips de abajo. */}
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
            ) : null}
          </div>
          <p className={styles.visualLabel}>Visualización</p>
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

      <div className={styles.controls}>

        <div className={styles.step} role="group" aria-labelledby={`${uid}-zones`}>
          <p className={styles.stepLabel} id={`${uid}-zones`}>
            Zonas <span>(una o varias, o toca el cristal)</span>
          </p>
          <div className={styles.zoneDock}>
            {zones.map((zone) => {
              const tone = toneById(selection[zone.id]);
              const on = marked.includes(zone.id);
              const seen = zoneVisible(zone.id, view);
              const toneText = tone.vlt === null ? "Sin película" : tone.label;
              return (
                <button
                  key={zone.id}
                  type="button"
                  className={on ? styles.zoneChipActive : styles.zoneChip}
                  data-unseen={seen ? undefined : ""}
                  onClick={() => toggleZone(zone.id)}
                  aria-pressed={on}
                  aria-label={`${zone.label}: ${toneText}${seen ? "" : ", no se ve en esta vista"}`}
                >
                  <ZoneGlyph zone={zone.id} on={on} />
                  <strong>{zone.short}</strong>
                  <span>{toneText}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.step} role="group" aria-labelledby={`${uid}-tones`}>
          <p className={styles.stepLabel} id={`${uid}-tones`}>
            Tono para: <span className={styles.stepZone}>{markedLabels}</span>
          </p>
          <div className={styles.toneDock}>
            {tones.map((item) => (
              <button
                key={item.id}
                type="button"
                className={markedTone(item.id) ? styles.toneButtonActive : styles.toneButton}
                onClick={() => chooseTone(item.id)}
                aria-pressed={markedTone(item.id)}
                aria-label={item.id === "none" ? "Sin película" : `${item.label}, ${item.sub}`}
              >
                <strong>{item.id === "none" ? "Sin" : item.label}</strong>
                <span>{item.id === "none" ? "película" : item.sub}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className={styles.status} role="status" aria-live="polite">
        {message}
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
