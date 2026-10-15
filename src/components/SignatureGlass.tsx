"use client";

import { useState } from "react";
import styles from "@/app/home-v09.module.css";

/**
 * Misma fachada vista desde la calle. Cada tono tiene su propio archivo
 * (el cristal cambia; el edificio no). Hasta que exista la foto, el velo
 * CSS cubre solo el vidrio. La gama nanocerámica activa es 75 / 50 / 35 / 15 / 5.
 * commercial-facade.webp no entra aquí: sigue en la galería.
 */
const views = [
  {
    id: "clear",
    label: "Sin película",
    src: "/images/comparador/fachada-exterior-sin-pelicula.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal sin película y aspecto transparente.",
    film: "linear-gradient(160deg, rgba(255,255,255,.22), rgba(186,214,228,.08) 46%, rgba(255,255,255,.05))",
  },
  {
    id: "v75",
    label: "75%",
    src: "/images/comparador/fachada-exterior-75.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 75% de transmisión de luz visible.",
    film: "linear-gradient(160deg, rgba(92,132,168,.20), rgba(70,108,146,.10))",
  },
  {
    id: "v50",
    label: "50%",
    src: "/images/comparador/fachada-exterior-50.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 50% de transmisión de luz visible.",
    film: "linear-gradient(160deg, rgba(28,42,62,.38), rgba(16,24,36,.28))",
  },
  {
    id: "v35",
    label: "35%",
    src: "/images/comparador/fachada-exterior-35.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 35% de transmisión de luz visible.",
    film: "linear-gradient(160deg, rgba(12,18,28,.55), rgba(8,12,18,.46))",
  },
  {
    id: "v15",
    label: "15%",
    src: "/images/comparador/fachada-exterior-15.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 15% de transmisión de luz visible.",
    film: "linear-gradient(160deg, rgba(6,8,12,.74), rgba(3,4,8,.66))",
  },
  {
    id: "v5",
    label: "5%",
    src: "/images/comparador/fachada-exterior-5.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 5% de transmisión de luz visible.",
    film: "linear-gradient(160deg, rgba(2,3,6,.88), rgba(1,2,4,.80))",
  },
  {
    id: "reflecta",
    label: "Reflecta",
    src: "/images/comparador/fachada-exterior-reflecta.webp",
    alt: "Fachada moderna vista desde la calle, con película Plata Reflecta de apariencia espejo en el cristal.",
    film: "linear-gradient(118deg, rgba(236,242,246,.78), rgba(168,186,198,.55) 42%, rgba(92,112,128,.62))",
  },
] as const;

export function SignatureGlass() {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState<Record<string, boolean>>({});
  const view = views[index];
  const photoReady = ready[view.src] === true;

  return (
    <div className={styles.signatureGlass} aria-label="Fachada vista desde la calle. Elige un tono para ver cómo cambia el cristal.">
      <div className={photoReady ? styles.facadeStageHidden : styles.facadeStage} aria-hidden="true">
        <div className={styles.facadeSky} />
        <div className={styles.facadeGround} />
        <div className={styles.facadeBuilding}>
          <div className={styles.facadeGlass}>
            <div className={styles.facadeGlassTint} style={{ background: view.film }} />
            <span className={styles.facadeMullionV} />
            <span className={styles.facadeMullionH} />
          </div>
          <div className={styles.facadeDoor} />
        </div>
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

      <p className={styles.signatureStatus} aria-live="polite">
        {photoReady ? "Foto de la fachada" : "Fachada de muestra"} · {view.label}
      </p>

      <p className={styles.signatureFootnote}>
        Misma fachada: al elegir un tono cambia el cristal, no el edificio. Es apariencia, no desempeño ni una regla oficial. La gama nanocerámica activa es 75, 50, 35, 15 y 5. Plata Reflecta es la película espejo para arquitectura.
      </p>
    </div>
  );
}
