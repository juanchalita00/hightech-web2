"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { truth } from "@/lib/truth";
import styles from "@/app/home-v09.module.css";

const toneVisuals: Record<string, { overlay: string; brightness: number; saturation: number; contrast: number }> = {
  // Calibración visual orientativa: cada tono se trata de forma individual.
  // IR75 conserva mucha claridad y añade el ligero matiz frío/azulado del material.
  IR75: { overlay: "rgba(62, 104, 148, 0.10)", brightness: 0.99, saturation: 0.96, contrast: 1.02 },
  IR50: { overlay: "rgba(18, 23, 30, 0.18)", brightness: 0.88, saturation: 0.92, contrast: 1.04 },
  IR35: { overlay: "rgba(12, 16, 22, 0.32)", brightness: 0.75, saturation: 0.86, contrast: 1.06 },
  IR15: { overlay: "rgba(7, 9, 13, 0.58)", brightness: 0.52, saturation: 0.72, contrast: 1.09 },
  IR5: { overlay: "rgba(3, 4, 6, 0.82)", brightness: 0.28, saturation: 0.58, contrast: 1.12 },
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
          background: visual.overlay,
          "--film-brightness": visual.brightness,
          "--film-saturation": visual.saturation,
          "--film-contrast": visual.contrast,
        } as CSSProperties}
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
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSplit(Number(event.currentTarget.value))}
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
