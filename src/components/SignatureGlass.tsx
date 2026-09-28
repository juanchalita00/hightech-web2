"use client";

import { useMemo, useState } from "react";
import { truth } from "@/lib/truth";
import styles from "@/app/home-v09.module.css";

const toneVisuals: Record<string, { opacity: number; brightness: number; saturation: number }> = {
  IR75: { opacity: 0.035, brightness: 0.98, saturation: 0.98 },
  IR50: { opacity: 0.12, brightness: 0.90, saturation: 0.94 },
  IR35: { opacity: 0.21, brightness: 0.82, saturation: 0.90 },
  IR15: { opacity: 0.38, brightness: 0.67, saturation: 0.84 },
  IR5: { opacity: 0.56, brightness: 0.50, saturation: 0.78 },
};

export function SignatureGlass() {
  const [toneId, setToneId] = useState("IR75");
  const [split, setSplit] = useState(42);

  const selected = useMemo(
    () => truth.nano.find((film) => film.id === toneId) ?? truth.nano[0],
    [toneId],
  );

  const visual = toneVisuals[selected.id] ?? toneVisuals.IR75;

  return (
    <div className={styles.signatureGlass} aria-label="Visualizador conceptual de la gama nanocerámica HIGHTECH">
      <div className={styles.architecturePhoto} aria-hidden="true" />
      <div className={styles.photoShade} aria-hidden="true" />

      <div
        className={styles.interactiveFilm}
        aria-hidden="true"
        style={{
          width: split + "%",
          "--film-opacity": visual.opacity,
          "--film-brightness": visual.brightness,
          "--film-saturation": visual.saturation,
        } as React.CSSProperties}
      />

      <div className={styles.revealEdge} aria-hidden="true" style={{ left: split + "%" }}>
        <span />
      </div>

      <div className={styles.signatureTopline}>
        <span>Arquitectura · cristal · control solar</span>
        <span className={styles.signatureInstruction}>Desliza para comparar</span>
      </div>

      <input
        className={styles.revealRange}
        type="range"
        min="18"
        max="82"
        value={split}
        onChange={(event) => setSplit(Number(event.target.value))}
        aria-label="Comparar cristal sin película y con película"
      />

      <div className={styles.toneDock} aria-label="Seleccionar tono nanocerámico">
        {truth.nano.map((film) => (
          <button
            key={film.id}
            type="button"
            className={toneId === film.id ? styles.toneButtonActive : styles.toneButton}
            onClick={() => setToneId(film.id)}
            aria-pressed={toneId === film.id}
          >
            <strong>{film.id}</strong>
            <span>{film.vlt}%</span>
          </button>
        ))}
      </div>

      <div className={styles.signatureSpecs} aria-live="polite">
        <div className={styles.signatureSpecIntro}>
          <span>Nanocerámica HIGHTECH</span>
          <strong>{selected.id} · VLT {selected.vlt}%</strong>
        </div>
        <div className={styles.signatureSpec}>
          <strong>{selected.tser}%</strong>
          <span>TSER</span>
        </div>
        <div className={styles.signatureSpec}>
          <strong>{selected.infraredRejection}%</strong>
          <span>IR a {selected.infraredWavelengthNm} nm</span>
        </div>
        <div className={styles.signatureSpec}>
          <strong>{selected.uv}%</strong>
          <span>rechazo UV</span>
        </div>
      </div>

      <p className={styles.signatureFootnote}>
        Visualización orientativa del tono. Los valores mostrados corresponden a especificaciones de ficha; el resultado visible final depende también del cristal y de la iluminación.
      </p>
    </div>
  );
}
