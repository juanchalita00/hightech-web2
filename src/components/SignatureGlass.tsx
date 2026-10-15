"use client";

import { useId, useState } from "react";
import styles from "@/app/home-v09.module.css";

/**
 * Una sola fachada. El oscurecido se pinta solo dentro de `glassPanels`.
 * Las coordenadas están en el encuadre original de 1280×720 (el viewBox)
 * y entran un par de píxeles bajo el marco negro para que el tono cubra
 * el cristal de orilla a orilla.
 * La foto servida es el mismo encuadre a 1600×900, con una versión de 800
 * para pantallas chicas. Si se cambia la foto, hay que volver a medir los
 * seis polígonos en ese espacio: dos ventanales de tres paños, el de la
 * planta baja a la derecha de la puerta de madera y el de arriba.
 *
 * Archivo: WebP RGB, sin rótulos, vista desde la calle, cristales claros.
 * El recuadro usa la misma proporción 16:9, así que no recorta los marcos.
 */
const reflectionSrc = "/images/comparador/reflecta-reflection.webp";

const base = {
  src: "/images/comparador/fachada-exterior-base.webp",
  mobileSrc: "/images/comparador/fachada-exterior-base-800.webp",
  width: 1280,
  height: 720,
  alt: "Casa moderna de dos pisos vista desde la calle. Los cristales parten claros y cambian al elegir un botón.",
};

const glassPanels = [
  { points: "612,166 727,166 727,303 612,303" },
  { points: "726,166 930,166 930,303 726,303" },
  { points: "928,166 1044,166 1044,303 928,303" },
  { points: "612,378 727,378 727,573 612,573" },
  { points: "726,378 930,378 930,573 726,573" },
  { points: "928,378 1044,378 1044,573 928,573" },
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
    shade: 0.12,
    mirror: false,
    src: "/images/comparador/fachada-exterior-75.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 75% de transmisión de luz visible.",
  },
  {
    id: "v50",
    label: "50%",
    shade: 0.3,
    mirror: false,
    src: "/images/comparador/fachada-exterior-50.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 50% de transmisión de luz visible.",
  },
  {
    id: "v35",
    label: "35%",
    shade: 0.48,
    mirror: false,
    src: "/images/comparador/fachada-exterior-35.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 35% de transmisión de luz visible.",
  },
  {
    id: "v15",
    label: "15%",
    shade: 0.7,
    mirror: false,
    src: "/images/comparador/fachada-exterior-15.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 15% de transmisión de luz visible.",
  },
  {
    id: "v5",
    label: "5%",
    shade: 0.92,
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
        <img
          src={base.src}
          srcSet={`${base.mobileSrc} 800w, ${base.src} 1600w`}
          sizes="(max-width: 720px) 92vw, 42rem"
          alt={base.alt}
          className={styles.referencePhoto}
        />
        <svg className={styles.glassTint} viewBox={`0 0 ${base.width} ${base.height}`} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <defs>
            <clipPath id={clipId}>
              {glassPanels.map((panel) => <polygon key={panel.points} points={panel.points} />)}
            </clipPath>
            <filter id={`${clipId}-mirror`} x="-4%" y="-4%" width="108%" height="108%">
              <feGaussianBlur stdDeviation="1.2" />
            </filter>
            <linearGradient id={`${clipId}-sheen`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="0.22" stopColor="#ffffff" stopOpacity="0.03" />
              <stop offset="0.7" stopColor="#9aa6b4" stopOpacity="0" />
              <stop offset="1" stopColor="#5c6a78" stopOpacity="0.16" />
            </linearGradient>
            <linearGradient id={`${clipId}-glass`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.28" />
              <stop offset="0.18" stopColor="#ffffff" stopOpacity="0.06" />
              <stop offset="0.62" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="1" stopColor="#d7e4ee" stopOpacity="0.14" />
            </linearGradient>
          </defs>
          <g clipPath={`url(#${clipId})`}>
            <rect className={styles.tintShade} x="0" y="0" width={base.width} height={base.height} fill="#07101c" style={{ opacity: view.mirror ? 0 : view.shade }} />
            <rect x="0" y="0" width={base.width} height={base.height} fill={`url(#${clipId}-glass)`} style={{ opacity: view.mirror || view.shade === 0 ? 0 : 0.45 }} />
            <g className={styles.tintMirror} style={{ opacity: view.mirror ? 1 : 0 }}>
              <image
                href={reflectionSrc}
                x="0"
                y="0"
                width={base.width}
                height={base.height}
                preserveAspectRatio="none"
                filter={`url(#${clipId}-mirror)`}
              />
              <rect x="0" y="0" width={base.width} height={base.height} fill={`url(#${clipId}-sheen)`} />
            </g>
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
