"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/app/home-v09.module.css";

/**
 * La referencia exterior muestra IR75 a IR5 en una misma fachada.
 * Cada tono conserva su archivo propio: cuando exista, sustituye a la referencia.
 * La gama nanocerámica activa es 75 / 50 / 35 / 15 / 5.
 */
const reference = {
  src: "/images/comparador/referencia-fachada-exterior-nanoceramica.webp",
  alt: "Casa moderna vista desde el exterior. Los cristales muestran, de más claro a más oscuro, la apariencia de la película nanocerámica IR75, IR50, IR35, IR15 e IR5.",
};
const views = [
  {
    id: "clear",
    label: "Sin película",
    src: "/images/comparador/fachada-exterior-sin-pelicula.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal sin película y aspecto transparente.",
  },
  {
    id: "v75",
    label: "75%",
    src: "/images/comparador/fachada-exterior-75.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 75% de transmisión de luz visible.",
  },
  {
    id: "v50",
    label: "50%",
    src: "/images/comparador/fachada-exterior-50.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 50% de transmisión de luz visible.",
  },
  {
    id: "v35",
    label: "35%",
    src: "/images/comparador/fachada-exterior-35.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 35% de transmisión de luz visible.",
  },
  {
    id: "v15",
    label: "15%",
    src: "/images/comparador/fachada-exterior-15.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 15% de transmisión de luz visible.",
  },
  {
    id: "v5",
    label: "5%",
    src: "/images/comparador/fachada-exterior-5.webp",
    alt: "Fachada moderna vista desde la calle, con el cristal al 5% de transmisión de luz visible.",
  },
  {
    id: "reflecta",
    label: "Reflecta",
    src: "/images/comparador/fachada-exterior-reflecta.webp",
    alt: "Fachada moderna vista desde la calle, con película Plata Reflecta de apariencia espejo en el cristal.",
  },
] as const;

export function SignatureGlass() {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState<Record<string, boolean>>({});
  const view = views[index];
  const photoReady = ready[view.src] === true;

  return (
    <div className={styles.signatureGlass} aria-label="Fachada vista desde la calle. La referencia muestra IR75 a IR5; cada botón prepara la foto de ese tono.">
      <div className={photoReady ? styles.referenceFrameHidden : styles.referenceFrame}>
        <Image
          src={reference.src}
          alt={reference.alt}
          fill
          priority
          sizes="(max-width: 980px) calc(100vw - 2rem), 42rem"
          className={styles.referencePhoto}
        />
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
        {photoReady ? `Foto de este tono · ${view.label}` : `Referencia exterior · ${view.label}`}
      </p>

      <p className={styles.signatureFootnote}>
        La foto muestra, desde la calle, cómo se ve la nanocerámica de IR75 a IR5. Cada botón tiene su propio archivo para esa fachada. Es apariencia, no desempeño ni una regla oficial. Plata Reflecta es la película espejo para arquitectura.
      </p>
    </div>
  );
}
