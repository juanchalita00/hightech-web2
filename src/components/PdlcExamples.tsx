"use client";

import { useState } from "react";

const scenes = [
  {
    id: "oficina",
    label: "Oficina",
    on: "/images/pdlc/oficina-encendida.webp",
    off: "/images/pdlc/oficina-apagada.webp",
    mask: "/images/pdlc/mask-oficina.webp",
    altOff: "Puerta de oficina con película inteligente apagada: el cristal se ve opaco.",
    altOn: "La misma puerta de oficina con la película encendida: el cristal se ve transparente.",
  },
  {
    id: "bano",
    label: "Baño",
    on: "/images/pdlc/bano-encendida.webp",
    mask: "/images/pdlc/mask-bano.webp",
    altOff: "Referencia de un cancel de baño con la película apagada, de aspecto opaco.",
    altOn: "La misma referencia de baño con la película encendida.",
  },
  {
    id: "sala",
    label: "Sala de juntas",
    on: "/images/pdlc/sala-encendida.webp",
    mask: "/images/pdlc/mask-sala.webp",
    altOff: "Puertas de una sala de juntas con la película apagada.",
    altOn: "Las mismas puertas de sala de juntas con la película encendida.",
  },
  {
    id: "clinica",
    label: "Clínica",
    on: "/images/pdlc/clinica-encendida.webp",
    mask: "/images/pdlc/mask-clinica.webp",
    altOff: "Consultorio con la película apagada: el vidrio se ve opaco.",
    altOn: "El mismo consultorio con la película encendida.",
  },
  {
    id: "residencial",
    label: "Residencial",
    on: "/images/pdlc/estudio-encendida.webp",
    mask: "/images/pdlc/mask-estudio.webp",
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
            const usesPhotoOff = "off" in item;
            const photo = usesPhotoOff && showOff ? item.off : item.on;
            const mask = "mask" in item ? `url("${item.mask}")` : undefined;
            return (
              <span key={item.id} hidden={!active ? true : undefined}>
                <img
                  src={photo}
                  width={800}
                  height={800}
                  alt={active ? (powered ? item.altOn : item.altOff) : ""}
                  className="pdlc-shot"
                  aria-hidden={active ? undefined : true}
                />
                {mask && !usesPhotoOff ? (
                  <span
                    className={showOff ? "pdlc-frost is-on" : "pdlc-frost"}
                    style={{ ["--pdlc-mask" as string]: mask }}
                    aria-hidden="true"
                  >
                    <span
                      className="pdlc-veil"
                      style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
                    />
                  </span>
                ) : null}
                {mask ? (
                  <span
                    className={active && powered ? "pdlc-haze is-on" : "pdlc-haze"}
                    style={{ ["--pdlc-mask" as string]: mask }}
                    aria-hidden="true"
                  />
                ) : null}
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
