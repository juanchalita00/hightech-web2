"use client";

import { useState } from "react";

const views = [
  {
    id: "off",
    label: "Apagada",
    state: "Opaca",
    src: "/images/pdlc/apagada.webp",
    alt: "Cristal con película inteligente PDLC apagada, de apariencia opaca o esmerilada.",
  },
  {
    id: "on",
    label: "Encendida",
    state: "Transparente",
    src: "/images/pdlc/encendida.webp",
    alt: "Cristal con película inteligente PDLC encendida, de apariencia transparente.",
  },
] as const;

export function PdlcToggle() {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState<Record<string, boolean>>({});
  const view = views[index];
  const photoReady = ready[view.src] === true;

  return (
    <div className="pdlc-stage">
      <div className={view.id === "on" ? "pdlc-glass pdlc-glass-on" : "pdlc-glass pdlc-glass-off"} aria-hidden={photoReady ? true : undefined}>
        <span className="pdlc-room" />
        <span className="pdlc-frost" />
      </div>
      {views.map((item) => {
        const visible = item.id === view.id && ready[item.src] === true;
        return (
          <img
            key={item.src}
            className={visible ? "pdlc-photo pdlc-photo-on" : "pdlc-photo"}
            src={item.src}
            alt={item.alt}
            aria-hidden={item.id === view.id && ready[item.src] === true ? undefined : true}
            onLoad={() => setReady((current) => ({ ...current, [item.src]: true }))}
            onError={() => setReady((current) => ({ ...current, [item.src]: false }))}
          />
        );
      })}
      <div className="pdlc-switch" role="group" aria-label="Ver la película apagada o encendida">
        {views.map((item, itemIndex) => (
          <button
            key={item.id}
            type="button"
            className={index === itemIndex ? "pdlc-switch-on" : ""}
            aria-pressed={index === itemIndex}
            onClick={() => setIndex(itemIndex)}
          >
            <strong>{item.label}</strong>
            <span>{item.state}</span>
          </button>
        ))}
      </div>
      <p className="pdlc-status" aria-live="polite">{view.label}: {view.state.toLowerCase()}.</p>
    </div>
  );
}
