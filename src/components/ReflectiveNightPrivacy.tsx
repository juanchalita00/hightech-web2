"use client";

import { useState } from "react";

type Scenario = {
  key: "better" | "middle" | "lower";
  tab: string;
  title: string;
  text: string;
  sceneLabel: string;
  light: string;
  distance: string;
  visibility: string;
};

const scenarios: Scenario[] = [
  {
    key: "better",
    tab: "Mejor privacidad",
    title: "Mejor privacidad",
    text: "La luz interior es moderada, está alejada del cristal y no apunta directamente hacia la ventana. En este escenario, la privacidad nocturna puede conservarse mejor.",
    sceneLabel: "De noche, con una lámpara moderada lejos de la ventana: desde afuera el cristal se ve oscuro y reflejante, y casi no se distingue a la persona dentro.",
    light: "Moderada",
    distance: "Alejada",
    visibility: "Poco",
  },
  {
    key: "middle",
    tab: "Intermedia",
    title: "Privacidad intermedia",
    text: "Hay iluminación interior normal y parte de esa luz llega al cristal. La privacidad puede mantenerse parcialmente, pero dependerá del contraste con el exterior.",
    sceneLabel: "De noche, con iluminación normal algo más cerca de la ventana: parte de la luz llega al cristal y desde afuera se alcanza a percibir parcialmente a la persona dentro.",
    light: "Normal",
    distance: "Media",
    visibility: "Parcial",
  },
  {
    key: "lower",
    tab: "Menor privacidad",
    title: "Menor privacidad",
    text: "El interior está muy iluminado o hay una fuente de luz intensa cerca del cristal mientras afuera está oscuro. En este caso, la visibilidad hacia adentro puede aumentar.",
    sceneLabel: "De noche, con una lámpara intensa junto a la ventana y el exterior oscuro: la luz atraviesa el cristal y desde afuera se distingue con claridad a la persona dentro.",
    light: "Intensa",
    distance: "Cerca",
    visibility: "Mayor",
  },
];

export function ReflectiveNightPrivacy() {
  const [active, setActive] = useState(0);
  // El módulo aparece una sola vez por página, así que un prefijo fijo basta para los ids.
  const baseId = "reflecta-night";
  const panelId = `${baseId}-panel`;
  const current = scenarios[active];

  function onKeyDown(event: { key: string; preventDefault(): void; currentTarget: HTMLDivElement }) {
    const last = scenarios.length - 1;
    const next =
      event.key === "ArrowRight" ? (active === last ? 0 : active + 1)
      : event.key === "ArrowLeft" ? (active === 0 ? last : active - 1)
      : event.key === "Home" ? 0
      : event.key === "End" ? last
      : null;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  return (
    <div className="rnp" data-state={current.key}>
      <div className="rnp-tabs" role="tablist" aria-label="Escenarios de iluminación interior" onKeyDown={onKeyDown}>
        {scenarios.map((scenario, index) => (
          <button
            key={scenario.key}
            id={`${baseId}-tab-${index}`}
            type="button"
            role="tab"
            className="rnp-tab"
            aria-selected={index === active}
            aria-controls={panelId}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
          >
            <span className="rnp-tab-index" aria-hidden="true">0{index + 1}</span>
            <span className="rnp-tab-label">{scenario.tab}</span>
          </button>
        ))}
      </div>

      <div className="rnp-panel" id={panelId} role="tabpanel" aria-labelledby={`${baseId}-tab-${active}`}>
        <div className="rnp-scene">
          <span className="rnp-tag rnp-tag-out" aria-hidden="true">Afuera · noche</span>
          <span className="rnp-tag rnp-tag-in" aria-hidden="true">Adentro</span>
          <svg viewBox="0 0 720 400" role="img" aria-label={current.sceneLabel} preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id={`${baseId}-sky`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#0b1330" />
                <stop offset="1" stopColor="#1c2a52" />
              </linearGradient>
              <linearGradient id={`${baseId}-glass`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#e4ebf5" />
                <stop offset=".55" stopColor="#9eacc4" />
                <stop offset="1" stopColor="#5d6c8a" />
              </linearGradient>
              <radialGradient id={`${baseId}-glow`}>
                <stop offset="0" stopColor="#fff4cf" stopOpacity="1" />
                <stop offset=".45" stopColor="#ffe6a6" stopOpacity=".55" />
                <stop offset="1" stopColor="#ffe6a6" stopOpacity="0" />
              </radialGradient>
              <linearGradient id={`${baseId}-spill`} x1="1" y1="0" x2="0" y2="0">
                <stop offset="0" stopColor="#ffe9b0" stopOpacity=".75" />
                <stop offset="1" stopColor="#ffe9b0" stopOpacity="0" />
              </linearGradient>
              <clipPath id={`${baseId}-room`}><rect x="330" y="0" width="390" height="340" /></clipPath>
            </defs>

            {/* Exterior nocturno */}
            <rect x="0" y="0" width="300" height="400" fill={`url(#${baseId}-sky)`} />
            <circle cx="86" cy="104" r="15" fill="#e9eef8" opacity=".9" />
            <circle cx="93" cy="99" r="13" fill="#111b3e" />
            <g fill="#dfe6f5">
              <circle cx="128" cy="46" r="1.6" /><circle cx="210" cy="84" r="1.3" /><circle cx="250" cy="36" r="1.6" />
              <circle cx="36" cy="140" r="1.2" /><circle cx="174" cy="128" r="1.1" />
            </g>
            <rect x="0" y="340" width="300" height="60" fill="#0a1128" />

            {/* Luz que sale por el cristal */}
            <polygon className="rnp-spill" points="306,112 306,300 40,392 40,40" fill={`url(#${baseId}-spill)`} />

            {/* Observador exterior */}
            <g className="rnp-observer" fill="#6f7fa6">
              <circle cx="150" cy="196" r="15" />
              <path d="M126 340 L130 250 Q132 222 150 220 Q168 222 170 250 L174 340 Z" />
            </g>

            {/* Línea de mirada */}
            <line x1="164" y1="198" x2="306" y2="222" className="rnp-sight" />
            <line x1="306" y1="222" x2="186" y2="262" className="rnp-sight rnp-sight-bounce" />

            {/* Interior */}
            <rect x="330" y="0" width="390" height="340" fill="#1f2947" />
            <rect className="rnp-ambient" x="330" y="0" width="390" height="340" fill="#f7ecd0" />
            <g clipPath={`url(#${baseId}-room)`}>
              <g className="rnp-lamp-move">
                <circle className="rnp-glow" cx="668" cy="190" r="190" fill={`url(#${baseId}-glow)`} />
              </g>
            </g>
            <rect x="330" y="340" width="390" height="60" fill="#c6cedd" />
            <rect className="rnp-floor-shade" x="330" y="340" width="390" height="60" fill="#1b2442" />

            {/* Sofá y persona dentro */}
            <g className="rnp-inside">
              <rect x="444" y="270" width="140" height="44" rx="10" fill="#2f3b61" />
              <rect x="444" y="236" width="24" height="78" rx="9" fill="#2f3b61" />
              <rect x="560" y="258" width="24" height="56" rx="9" fill="#2f3b61" />
              <rect x="452" y="314" width="8" height="26" fill="#2f3b61" />
              <rect x="568" y="314" width="8" height="26" fill="#2f3b61" />
              <circle cx="500" cy="232" r="15" fill="#0d1533" />
              <path d="M478 292 Q478 254 500 250 Q522 254 522 292 Z" fill="#0d1533" />
            </g>

            {/* Mirada que alcanza el interior */}
            <line x1="324" y1="225" x2="484" y2="236" className="rnp-sight rnp-sight-in" />

            {/* Luz que llega al cristal según la cercanía de la lámpara */}
            <polygon className="rnp-cone rnp-cone-mid" points="606,168 606,196 330,298 330,112" fill="#fff1c4" />
            <polygon className="rnp-cone rnp-cone-near" points="368,164 368,200 330,298 330,112" fill="#fff1c4" />

            {/* Lámpara */}
            <g className="rnp-lamp-move">
              <polygon className="rnp-cone rnp-cone-down" points="652,176 684,176 720,340 616,340" fill="#fff1c4" />
              <rect x="666" y="186" width="5" height="154" rx="2.5" fill="#8391ae" />
              <rect x="650" y="336" width="36" height="6" rx="3" fill="#8391ae" />
              <path d="M650 188 L656 160 L682 160 L688 188 Z" fill="#eef2f7" />
              <circle className="rnp-bulb" cx="668" cy="186" r="7" fill="#fff6d6" />
            </g>

            {/* Muro y ventana */}
            <rect x="300" y="0" width="30" height="110" fill="#e6eaf1" />
            <rect x="300" y="300" width="30" height="100" fill="#e6eaf1" />
            <rect x="300" y="104" width="30" height="8" fill="#b9c2d3" />
            <rect x="300" y="298" width="30" height="8" fill="#b9c2d3" />
            <rect className="rnp-glass" x="306" y="112" width="18" height="186" fill={`url(#${baseId}-glass)`} />
            <rect className="rnp-glass-warm" x="306" y="112" width="18" height="186" fill="#ffe7a8" />
            <path d="M309 150 L321 128 M309 196 L321 170 M309 250 L321 226" stroke="#fff" strokeWidth="2" strokeLinecap="round" className="rnp-sheen" />
          </svg>
          <div className="rnp-meter" aria-hidden="true">
            <span>Se ve hacia adentro</span>
            <i className="rnp-bars"><b /><b /><b /></i>
            <strong>{current.visibility}</strong>
          </div>
        </div>

        <div className="rnp-copy">
          <h3>{current.title}</h3>
          <p>{current.text}</p>
          <dl className="rnp-facts">
            <div><dt>Luz interior</dt><dd>{current.light}</dd></div>
            <div><dt>Distancia al cristal</dt><dd>{current.distance}</dd></div>
            <div><dt>Se ve desde afuera</dt><dd>{current.visibility}</dd></div>
          </dl>
        </div>
      </div>
    </div>
  );
}
