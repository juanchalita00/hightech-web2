"use client";

import { useState } from "react";
import styles from "@/app/home-v09.module.css";

/**
 * Vistas desde el interior. Las fotos se agregan en estas rutas;
 * hasta entonces se muestra el marco con el nombre del archivo.
 * La gama nanocerámica activa sigue siendo 75 / 50 / 35 / 15 / 5.
 */
const views = [
  { id: "clear", label: "Sin película", src: "/images/comparador/ventana-interior-sin-pelicula.webp", film: "transparent" },
  { id: "v70", label: "70%", src: "/images/comparador/ventana-interior-70.webp", film: "rgba(64, 104, 148, 0.16)" },
  { id: "v50", label: "50%", src: "/images/comparador/ventana-interior-50.webp", film: "rgba(18, 28, 42, 0.28)" },
  { id: "v35", label: "35%", src: "/images/comparador/ventana-interior-35.webp", film: "rgba(10, 14, 22, 0.46)" },
  { id: "v15", label: "15%", src: "/images/comparador/ventana-interior-15.webp", film: "rgba(4, 6, 10, 0.68)" },
  { id: "reflecta", label: "Reflecta", src: "/images/comparador/ventana-interior-reflecta.webp", film: "rgba(176, 190, 204, 0.42)" },
] as const;

export function SignatureGlass() {
  const [index, setIndex] = useState(0);
  const [loadedSrc, setLoadedSrc] = useState("");
  const view = views[index];
  const photoReady = loadedSrc === view.src;

  return (
    <div className={styles.signatureGlass} aria-label="Comparador visual de una ventana vista desde el interior">
      <div className={styles.windowScene} aria-hidden="true">
        <div className={styles.windowSky} />
        <div className={styles.windowMullionV} />
        <div className={styles.windowMullionH} />
        <div className={styles.windowSill} />
      </div>

      <img
        key={view.src}
        className={photoReady ? styles.windowPhoto : styles.windowPhotoPending}
        src={view.src}
        alt=""
        onLoad={() => setLoadedSrc(view.src)}
        onError={() => setLoadedSrc("")}
      />

      {photoReady ? null : <div className={styles.windowFilm} style={{ background: view.film }} aria-hidden="true" />}

      <div className={styles.signatureTopline}>
        <span>Vista desde el interior</span>
        <span className={styles.signatureInstruction}>{view.label}</span>
      </div>

      <input
        className={styles.revealRange}
        type="range"
        min={0}
        max={views.length - 1}
        step={1}
        value={index}
        onChange={(event: { currentTarget: { value: string } }) => setIndex(Number(event.currentTarget.value))}
        aria-valuetext={view.label}
        aria-label="Cambiar la vista de la ventana"
      />

      <div className={styles.toneDock} role="group" aria-label="Elegir vista">
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

      <div className={styles.signatureSpecs}>
        <div className={styles.signatureSpecIntro}>
          <span>{photoReady ? "Foto de referencia" : "Foto pendiente"}</span>
          <strong>{view.label}</strong>
        </div>
        <p className={styles.windowPath}>{view.src}</p>
      </div>

      <p className={styles.signatureFootnote}>
        Referencia visual de apariencia, no de desempeño ni de una regla oficial. La gama nanocerámica activa es 75, 50, 35, 15 y 5. Plata Reflecta es la película espejo para arquitectura.
      </p>
    </div>
  );
}
