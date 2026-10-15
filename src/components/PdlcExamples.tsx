"use client";

import { useState } from "react";

const scenes = [
  {
    id: "oficina",
    label: "Oficina",
    off: "/images/pdlc/oficina-apagada.webp",
    on: "/images/pdlc/oficina-encendida.webp",
    altOff: "Puerta de oficina con película inteligente apagada: el cristal se ve opaco.",
    altOn: "La misma puerta de oficina con la película encendida: el cristal se ve transparente.",
  },
  {
    id: "bano",
    label: "Baño",
    off: "/images/pdlc/bano-apagada.webp",
    on: "/images/pdlc/bano-encendida.webp",
    altOff: "Referencia de un cancel de baño con la película apagada, de aspecto opaco.",
    altOn: "La misma referencia de baño con la película encendida.",
  },
  {
    id: "sala",
    label: "Sala de juntas",
    off: "/images/pdlc/sala-apagada.webp",
    on: "/images/pdlc/sala-encendida.webp",
    altOff: "Puertas de una sala de juntas con la película apagada.",
    altOn: "Las mismas puertas de sala de juntas con la película encendida.",
  },
  {
    id: "clinica",
    label: "Clínica",
    off: "/images/pdlc/clinica-apagada.webp",
    on: "/images/pdlc/clinica-encendida.webp",
    altOff: "Consultorio con la película apagada: el vidrio se ve opaco.",
    altOn: "El mismo consultorio con la película encendida.",
  },
  {
    id: "residencial",
    label: "Residencial",
    off: "/images/pdlc/estudio-apagada.webp",
    on: "/images/pdlc/estudio-encendida.webp",
    altOff: "Estudio en casa con la película apagada.",
    altOn: "El mismo estudio con la película encendida.",
  },
] as const;

export function PdlcExamples() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [powered, setPowered] = useState(false);
  const scene = scenes[sceneIndex];
  const stateLabel = powered ? "Encendida: transparente." : "Apagada: opaca.";

  return (
    <div className="pdlc-examples">
      <div className="pdlc-switch" role="group" aria-label="Apagada o encendida">
        <button type="button" className={powered ? "" : "pdlc-switch-on"} aria-pressed={!powered} onClick={() => setPowered(false)}>
          Apagada
        </button>
        <button type="button" className={powered ? "pdlc-switch-on" : ""} aria-pressed={powered} onClick={() => setPowered(true)}>
          Encendida
        </button>
      </div>

      <div className="pdlc-examples-label">
        <h2>Ejemplos de aplicación</h2>
      </div>
      <div className="pdlc-apps" role="group" aria-label="Ejemplos de aplicación">
        {scenes.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={index === sceneIndex ? "pdlc-app-on" : ""}
            aria-pressed={index === sceneIndex}
            onClick={() => setSceneIndex(index)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <figure className="pdlc-card">
        <div className="pdlc-frame">
          {scenes.map((item, index) => {
            const active = index === sceneIndex;
            const showOff = active && !powered;
            const showOn = active && powered;
            return (
              <span key={item.id} hidden={!active ? true : undefined}>
                <img
                  src={item.off}
                  width={800}
                  height={800}
                  alt={showOff ? item.altOff : ""}
                  className={showOff ? "pdlc-shot is-on" : "pdlc-shot"}
                  aria-hidden={showOff ? undefined : true}
                />
                <img
                  src={item.on}
                  width={800}
                  height={800}
                  alt={showOn ? item.altOn : ""}
                  className={showOn ? "pdlc-shot is-on" : "pdlc-shot"}
                  aria-hidden={showOn ? undefined : true}
                />
              </span>
            );
          })}
        </div>
        <figcaption>
          <p className="pdlc-status" aria-live="polite">{scene.label}. {stateLabel}</p>
          <p className="pdlc-caption">Fotos de referencia del fabricante. No son proyectos de HIGHTECH.</p>
        </figcaption>
      </figure>
      {scene.id === "bano" ? <p className="pdlc-caption">En baño no la pegamos donde el cristal recibe agua.</p> : null}
    </div>
  );
}
