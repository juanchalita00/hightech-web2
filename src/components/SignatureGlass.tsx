"use client";

import { useId, useState } from "react";
import styles from "@/app/home-v09.module.css";

/**
 * Una sola fachada. El oscurecido se pinta solo dentro de `glassPanels`.
 * Para cambiar la foto: sustituye `src` y, si el encuadre no coincide,
 * `width`, `height` y los rectángulos. Esos rectángulos están en píxeles
 * de la imagen (el mismo espacio que width × height).
 *
 * Archivo: WebP RGB, sin rótulos, vista desde la calle, cristales todavía
 * claros. Hoy es 1440×960. El recuadro recorta con object-fit: cover y el
 * SVG usa el mismo recorte (slice). Si la nueva foto trae otro tamaño, el
 * viewBox sigue a width/height; los rectángulos se vuelven a medir en
 * píxeles de esa foto.
 */
const base = {
  src: "/images/comparador/fachada-exterior-base.webp",
  width: 1440,
  height: 960,
  alt: "Casa moderna vista desde la calle. Todos los cristales parten del mismo tono y cambian al elegir un botón.",
};

const glassPanels = [
  { x: 118, y: 218, width: 210, height: 530 },
  { x: 342, y: 218, width: 226, height: 530 },
  { x: 588, y: 218, width: 230, height: 530 },
  { x: 840, y: 218, width: 248, height: 530 },
  { x: 1112, y: 218, width: 260, height: 530 },
] as const;

const views = [
  {
    id: "clear",
    label: "Sin película",
    shade: 0,
    mirror: false,
    src: "/images/comparador/fachada-exterior-sin-pelicula.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal sin película y aspecto transparente.",
  },
  {
    id: "v75",
    label: "75%",
    shade: 0.16,
    mirror: false,
    src: "/images/comparador/fachada-exterior-75.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 75% de transmisión de luz visible.",
  },
  {
    id: "v50",
    label: "50%",
    shade: 0.34,
    mirror: false,
    src: "/images/comparador/fachada-exterior-50.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 50% de transmisión de luz visible.",
  },
  {
    id: "v35",
    label: "35%",
    shade: 0.5,
    mirror: false,
    src: "/images/comparador/fachada-exterior-35.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 35% de transmisión de luz visible.",
  },
  {
    id: "v15",
    label: "15%",
    shade: 0.68,
    mirror: false,
    src: "/images/comparador/fachada-exterior-15.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 15% de transmisión de luz visible.",
  },
  {
    id: "v5",
    label: "5%",
    shade: 0.84,
    mirror: false,
    src: "/images/comparador/fachada-exterior-5.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 5% de transmisión de luz visible.",
  },
  {
    id: "reflecta",
    label: "Reflecta",
    shade: 0,
    mirror: true,
    src: "/images/comparador/fachada-exterior-reflecta.webp",
    alt: "Fachada moderna vista desde la calle, con película Plata Reflecta de apariencia espejo en el cristal.",
  },
] as const;

export function SignatureGlass() {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState<Record<string, boolean>>({});
  const clipId = useId().replace(/:/g, "");
  const view = views[index];
  const photoReady = ready[view.src] === true;

  return (
    <div className={styles.signatureGlass} aria-label="Fachada vista desde la calle. Cada botón cambia el tono del cristal.">
      <div className={photoReady ? styles.referenceFrameHidden : styles.referenceFrame}>
        <img src={base.src} alt={base.alt} className={styles.referencePhoto} />
        <svg className={styles.glassTint} viewBox={`0 0 ${base.width} ${base.height}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <clipPath id={clipId}>
              {glassPanels.map((panel) => <rect key={`${panel.x}-${panel.y}`} x={panel.x} y={panel.y} width={panel.width} height={panel.height} />)}
            </clipPath>
            <linearGradient id={`${clipId}-silver`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f4f8fb" />
              <stop offset="0.46" stopColor="#c5d4e2" />
              <stop offset="1" stopColor="#e7eef6" />
            </linearGradient>
            <linearGradient id={`${clipId}-sheen`} x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="0.42" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="0.5" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="0.58" stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g clipPath={`url(#${clipId})`}>
            <rect className={styles.tintShade} x="0" y="0" width={base.width} height={base.height} fill="#07101c" style={{ opacity: view.mirror ? 0 : view.shade }} />
            <rect className={styles.tintMirror} x="0" y="0" width={base.width} height={base.height} fill="#d5e1ec" style={{ opacity: view.mirror ? 1 : 0 }} />
            <rect className={styles.tintMirror} x="0" y="0" width={base.width} height={base.height} fill={`url(#${clipId}-silver)`} style={{ opacity: view.mirror ? 1 : 0 }} />
            <rect className={styles.tintMirror} x="0" y="0" width={base.width} height={base.height} fill={`url(#${clipId}-sheen)`} style={{ opacity: view.mirror ? 1 : 0 }} />
          </g>
        </svg>
      </div>

      {views.map((item) => {
        const visible = item.id === view.id && ready[item.src] === true;
        return (
          <img
            key={item.src}
            className={visible ? styles.facadePhotoOn : styles.facadePhoto}
            src={item.src}
            alt={item.alt}
            aria-hidden={item.id === view.id ? undefined : true}
            onLoad={() => setReady((current) => ({ ...current, [item.src]: true }))}
            onError={() => setReady((current) => ({ ...current, [item.src]: false }))}
          />
        );
      })}

      <div className={styles.signatureTopline}>
        <span>Vista desde la calle</span>
        <span className={styles.signatureInstruction}>{view.label}</span>
      </div>

      <div className={styles.toneDock} role="group" aria-label="Elegir el tono del cristal">
        {views.map((item, itemIndex) => (
          <button
            key={item.id}
            type="button"
            className={index === itemIndex ? styles.toneButtonActive : styles.toneButton}
            onClick={() => setIndex(itemIndex)}
            aria-pressed={index === itemIndex}
          >
            <strong>{item.label}</strong>
          </button>
        ))}
      </div>

      <p className={styles.signatureStatus} aria-live="polite">Desde la calle · {view.label}</p>

      <p className={styles.signatureFootnote}>
        Desde la calle, un tono más bajo se ve más oscuro. Reflecta se ve como espejo. Es apariencia, no desempeño.
      </p>
    </div>
  );
}
