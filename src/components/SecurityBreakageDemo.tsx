"use client";

import { useState } from "react";

type Stage = {
  key: "intact" | "broken";
  tab: string;
  title: string;
  text: string;
  sceneLabel: string;
};

const stages: Stage[] = [
  {
    key: "intact",
    tab: "Cristal intacto",
    title: "Antes de la rotura",
    text: "La película queda adherida al cristal sin cambiar la función normal de la ventana.",
    sceneLabel: "Ventana con el cristal intacto. En el corte lateral, una película delgada queda adherida al vidrio sin cambiar su apariencia.",
  },
  {
    key: "broken",
    tab: "Después de una rotura",
    title: "Después de la rotura",
    text: "Si el vidrio se rompe, la película puede ayudar a mantener los fragmentos unidos en lugar de dejarlos completamente sueltos.",
    sceneLabel: "La misma ventana con el cristal roto: grietas a partir de un punto de impacto y fragmentos que siguen en su lugar. En el corte lateral, el vidrio está partido pero la película continúa entera y los mantiene unidos.",
  },
];

// El módulo aparece una sola vez por página, así que un prefijo fijo basta para los ids.
const id = "security-breakage";

export function SecurityBreakageDemo() {
  const [active, setActive] = useState(0);
  const current = stages[active];

  function onKeyDown(event: { key: string; preventDefault(): void; currentTarget: HTMLDivElement }) {
    const last = stages.length - 1;
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
    <div className="sbd" data-stage={current.key}>
      <div className="sbd-tabs" role="tablist" aria-label="Estado del cristal" onKeyDown={onKeyDown}>
        {stages.map((stage, index) => (
          <button
            key={stage.key}
            id={`${id}-tab-${index}`}
            type="button"
            role="tab"
            className="sbd-tab"
            aria-selected={index === active}
            aria-controls={`${id}-panel`}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
          >
            <span className="sbd-tab-index" aria-hidden="true">0{index + 1}</span>
            {stage.tab}
          </button>
        ))}
      </div>

      <div className="sbd-panel" id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`}>
        <div className="sbd-scene">
          <svg viewBox="0 0 760 440" role="img" aria-label={current.sceneLabel}>
            <defs>
              <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#a9d0ec" />
                <stop offset="1" stopColor="#e7f2fa" />
              </linearGradient>
              <linearGradient id={`${id}-sheen`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
                <stop offset=".44" stopColor="#ffffff" stopOpacity="0" />
                <stop offset=".5" stopColor="#ffffff" stopOpacity=".55" />
                <stop offset=".58" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <clipPath id={`${id}-glass`}><rect x="86" y="66" width="488" height="308" /></clipPath>
              <clipPath id={`${id}-lens`}><circle cx="676" cy="220" r="62" /></clipPath>
            </defs>

            {/* Interior: muro, piso y ventana */}
            <rect x="0" y="0" width="760" height="440" fill="#eef1f6" />
            <rect x="0" y="404" width="760" height="36" fill="#e1e6ee" />
            <rect x="70" y="50" width="520" height="340" rx="6" fill="#cdd5e2" />
            <rect x="60" y="386" width="540" height="12" rx="3" fill="#bfc8d6" />

            <g clipPath={`url(#${id}-glass)`}>
              {/* Exterior visto a través del vidrio */}
              <rect x="86" y="66" width="488" height="308" fill={`url(#${id}-sky)`} />
              <g fill="#c3cfdf">
                <rect x="110" y="232" width="70" height="142" /><rect x="186" y="262" width="54" height="112" />
                <rect x="430" y="246" width="84" height="128" /><rect x="520" y="276" width="54" height="98" />
              </g>
              <g fill="#8fb39b">
                <circle cx="300" cy="300" r="44" /><circle cx="344" cy="316" r="36" /><circle cx="262" cy="322" r="30" />
              </g>
              <rect x="86" y="344" width="488" height="30" fill="#b5c4b0" />

              {/* Película: capa casi imperceptible sobre todo el vidrio */}
              <rect className="sbd-film" x="86" y="66" width="488" height="308" fill="#3f57a6" />
              <rect className="sbd-sheen" x="86" y="66" width="488" height="308" fill={`url(#${id}-sheen)`} />

              {/* Rotura: fragmentos que siguen en su lugar */}
              <g className="sbd-cracks">
                <g fill="#ffffff">
                <polygon points="340.1,216.3 338.5,228.8 376.5,256.2 405.6,223.0" opacity="0.12" />
                <polygon points="338.5,228.8 326.6,241.8 338.1,279.0 376.5,256.2" opacity="0.06" />
                <polygon points="326.6,241.8 314.5,236.2 307.6,280.5 338.1,279.0" opacity="0.15" />
                <polygon points="314.5,236.2 300.5,229.5 263.7,262.2 307.6,280.5" opacity="0.16" />
                <polygon points="300.5,229.5 291.8,221.3 234.3,237.4 263.7,262.2" opacity="0.14" />
                <polygon points="291.8,221.3 288.4,207.9 250.4,200.0 234.3,237.4" opacity="0.18" />
                <polygon points="288.4,207.9 300.5,193.8 265.4,153.3 250.4,200.0" opacity="0.1" />
                <polygon points="300.5,193.8 312.1,189.7 298.8,134.4 265.4,153.3" opacity="0.15" />
                <polygon points="312.1,189.7 331.0,186.4 349.7,146.7 298.8,134.4" opacity="0.14" />
                <polygon points="331.0,186.4 335.3,200.9 381.2,166.1 349.7,146.7" opacity="0.14" />
                <polygon points="335.3,200.9 340.1,216.3 405.6,223.0 381.2,166.1" opacity="0.12" />
                <polygon points="405.6,223.0 376.5,256.2 420.4,287.9 443.7,227.0" opacity="0.18" />
                <polygon points="376.5,256.2 338.1,279.0 357.6,342.1 420.4,287.9" opacity="0.19" />
                <polygon points="338.1,279.0 307.6,280.5 293.4,371.8 357.6,342.1" opacity="0.12" />
                <polygon points="307.6,280.5 263.7,262.2 208.7,310.9 293.4,371.8" opacity="0.15" />
                <polygon points="263.7,262.2 234.3,237.4 183.2,251.7 208.7,310.9" opacity="0.06" />
                <polygon points="234.3,237.4 250.4,200.0 166.6,182.7 183.2,251.7" opacity="0.16" />
                <polygon points="250.4,200.0 265.4,153.3 221.4,102.6 166.6,182.7" opacity="0.15" />
                <polygon points="265.4,153.3 298.8,134.4 285.4,78.7 221.4,102.6" opacity="0.2" />
                <polygon points="298.8,134.4 349.7,146.7 388.6,63.9 285.4,78.7" opacity="0.17" />
                <polygon points="349.7,146.7 381.2,166.1 446.1,116.9 388.6,63.9" opacity="0.09" />
                <polygon points="381.2,166.1 405.6,223.0 443.7,227.0 446.1,116.9" opacity="0.11" />
                <polygon points="443.7,227.0 420.4,287.9 522.0,361.2 539.3,236.8" opacity="0.15" />
                <polygon points="420.4,287.9 357.6,342.1 391.1,450.2 522.0,361.2" opacity="0.05" />
                <polygon points="357.6,342.1 293.4,371.8 275.1,488.8 391.1,450.2" opacity="0.12" />
                <polygon points="293.4,371.8 208.7,310.9 119.6,390.0 275.1,488.8" opacity="0.08" />
                <polygon points="208.7,310.9 183.2,251.7 100.1,274.9 119.6,390.0" opacity="0.07" />
                <polygon points="183.2,251.7 166.6,182.7 36.6,155.7 100.1,274.9" opacity="0.06" />
                <polygon points="166.6,182.7 221.4,102.6 179.6,54.3 36.6,155.7" opacity="0.17" />
                <polygon points="221.4,102.6 285.4,78.7 262.3,-17.2 179.6,54.3" opacity="0.07" />
                <polygon points="285.4,78.7 388.6,63.9 432.0,-28.2 262.3,-17.2" opacity="0.09" />
                <polygon points="388.6,63.9 446.1,116.9 488.8,84.5 432.0,-28.2" opacity="0.11" />
                <polygon points="446.1,116.9 443.7,227.0 539.3,236.8 488.8,84.5" opacity="0.18" />
                <polygon points="539.3,236.8 522.0,361.2 739.7,518.3 835.3,267.3" opacity="0.06" />
                <polygon points="522.0,361.2 391.1,450.2 471.7,710.8 739.7,518.3" opacity="0.12" />
                <polygon points="391.1,450.2 275.1,488.8 237.8,727.8 471.7,710.8" opacity="0.13" />
                <polygon points="275.1,488.8 119.6,390.0 -71.0,559.0 237.8,727.8" opacity="0.18" />
                <polygon points="119.6,390.0 100.1,274.9 -182.8,353.9 -71.0,559.0" opacity="0.17" />
                <polygon points="100.1,274.9 36.6,155.7 -191.2,108.6 -182.8,353.9" opacity="0.18" />
                <polygon points="36.6,155.7 179.6,54.3 -22.5,-179.0 -191.2,108.6" opacity="0.09" />
                <polygon points="179.6,54.3 262.3,-17.2 196.2,-291.5 -22.5,-179.0" opacity="0.11" />
                <polygon points="262.3,-17.2 432.0,-28.2 539.4,-256.5 196.2,-291.5" opacity="0.1" />
                <polygon points="432.0,-28.2 488.8,84.5 732.4,-100.1 539.4,-256.5" opacity="0.18" />
                <polygon points="488.8,84.5 539.3,236.8 835.3,267.3 732.4,-100.1" opacity="0.19" />
                  <polygon points="340.1,216.3 338.5,228.8 326.6,241.8 314.5,236.2 300.5,229.5 291.8,221.3 288.4,207.9 300.5,193.8 312.1,189.7 331.0,186.4 335.3,200.9" opacity=".32" />
                </g>
                <path d="M340.1,216.3 L405.6,223.0 L443.7,227.0 L539.3,236.8 L835.3,267.3 M338.5,228.8 L376.5,256.2 L420.4,287.9 L522.0,361.2 L739.7,518.3 M326.6,241.8 L338.1,279.0 L357.6,342.1 L391.1,450.2 L471.7,710.8 M314.5,236.2 L307.6,280.5 L293.4,371.8 L275.1,488.8 L237.8,727.8 M300.5,229.5 L263.7,262.2 L208.7,310.9 L119.6,390.0 L-71.0,559.0 M291.8,221.3 L234.3,237.4 L183.2,251.7 L100.1,274.9 L-182.8,353.9 M288.4,207.9 L250.4,200.0 L166.6,182.7 L36.6,155.7 L-191.2,108.6 M300.5,193.8 L265.4,153.3 L221.4,102.6 L179.6,54.3 L-22.5,-179.0 M312.1,189.7 L298.8,134.4 L285.4,78.7 L262.3,-17.2 L196.2,-291.5 M331.0,186.4 L349.7,146.7 L388.6,63.9 L432.0,-28.2 L539.4,-256.5 M335.3,200.9 L381.2,166.1 L446.1,116.9 L488.8,84.5 L732.4,-100.1" fill="none" stroke="#5f6f88" strokeWidth="3" strokeOpacity=".22" strokeLinejoin="round" transform="translate(1 1.5)" />
                <path d="M340.1,216.3 L338.5,228.8 L326.6,241.8 L314.5,236.2 L300.5,229.5 L291.8,221.3 L288.4,207.9 L300.5,193.8 L312.1,189.7 L331.0,186.4 L335.3,200.9 L340.1,216.3 M405.6,223.0 L376.5,256.2 L338.1,279.0 L307.6,280.5 L263.7,262.2 L234.3,237.4 L250.4,200.0 L265.4,153.3 L298.8,134.4 L349.7,146.7 L381.2,166.1 L405.6,223.0 M443.7,227.0 L420.4,287.9 L357.6,342.1 L293.4,371.8 L208.7,310.9 L183.2,251.7 L166.6,182.7 L221.4,102.6 L285.4,78.7 L388.6,63.9 L446.1,116.9 L443.7,227.0 M539.3,236.8 L522.0,361.2 L391.1,450.2 L275.1,488.8 L119.6,390.0 L100.1,274.9 L36.6,155.7 L179.6,54.3 L262.3,-17.2 L432.0,-28.2 L488.8,84.5 L539.3,236.8" fill="none" stroke="#5f6f88" strokeWidth="2.6" strokeOpacity=".2" strokeLinejoin="round" transform="translate(1 1.5)" />
                <path d="M340.1,216.3 L405.6,223.0 L443.7,227.0 L539.3,236.8 L835.3,267.3 M338.5,228.8 L376.5,256.2 L420.4,287.9 L522.0,361.2 L739.7,518.3 M326.6,241.8 L338.1,279.0 L357.6,342.1 L391.1,450.2 L471.7,710.8 M314.5,236.2 L307.6,280.5 L293.4,371.8 L275.1,488.8 L237.8,727.8 M300.5,229.5 L263.7,262.2 L208.7,310.9 L119.6,390.0 L-71.0,559.0 M291.8,221.3 L234.3,237.4 L183.2,251.7 L100.1,274.9 L-182.8,353.9 M288.4,207.9 L250.4,200.0 L166.6,182.7 L36.6,155.7 L-191.2,108.6 M300.5,193.8 L265.4,153.3 L221.4,102.6 L179.6,54.3 L-22.5,-179.0 M312.1,189.7 L298.8,134.4 L285.4,78.7 L262.3,-17.2 L196.2,-291.5 M331.0,186.4 L349.7,146.7 L388.6,63.9 L432.0,-28.2 L539.4,-256.5 M335.3,200.9 L381.2,166.1 L446.1,116.9 L488.8,84.5 L732.4,-100.1" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M340.1,216.3 L338.5,228.8 L326.6,241.8 L314.5,236.2 L300.5,229.5 L291.8,221.3 L288.4,207.9 L300.5,193.8 L312.1,189.7 L331.0,186.4 L335.3,200.9 L340.1,216.3 M405.6,223.0 L376.5,256.2 L338.1,279.0 L307.6,280.5 L263.7,262.2 L234.3,237.4 L250.4,200.0 L265.4,153.3 L298.8,134.4 L349.7,146.7 L381.2,166.1 L405.6,223.0 M443.7,227.0 L420.4,287.9 L357.6,342.1 L293.4,371.8 L208.7,310.9 L183.2,251.7 L166.6,182.7 L221.4,102.6 L285.4,78.7 L388.6,63.9 L446.1,116.9 L443.7,227.0 M539.3,236.8 L522.0,361.2 L391.1,450.2 L275.1,488.8 L119.6,390.0 L100.1,274.9 L36.6,155.7 L179.6,54.3 L262.3,-17.2 L432.0,-28.2 L488.8,84.5 L539.3,236.8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M443.7,227.0 L475.9,287.6 M357.6,342.1 L311.0,410.1 M208.7,310.9 L154.1,294.7 M166.6,182.7 L168.4,108.6 M285.4,78.7 L357.1,22.6 M446.1,116.9 L494.0,185.9" fill="none" stroke="#ffffff" strokeWidth="1.1" strokeLinecap="round" opacity=".85" />
              </g>
            </g>

            {/* Corte lateral: vidrio + película */}
            <line x1="574" y1="220" x2="614" y2="220" stroke="#9aa6ba" strokeWidth="1.5" strokeDasharray="3 4" />
            <circle cx="676" cy="220" r="64" fill="#ffffff" stroke="#cdd5e2" strokeWidth="2" />
            <g clipPath={`url(#${id}-lens)`}>
              <rect x="612" y="156" width="128" height="128" fill="#f6f8fb" />
              <g className="sbd-lens-intact">
                <rect x="652" y="150" width="30" height="140" fill="#cfe3f1" />
              </g>
              <g className="sbd-lens-broken" fill="#cfe3f1">
                <polygon points="652,150 682,150 682,186 676,190 652,183" />
                <polygon points="652,187 675,194 682,191 682,228 670,232 652,226" />
                <polygon points="652,230 668,236 682,232 682,262 652,268" />
                <polygon points="652,272 682,266 682,290 652,290" />
              </g>
              <rect className="sbd-lens-film" x="682" y="150" width="6" height="140" fill="#3f57a6" />
            </g>
          </svg>
          <div className="sbd-legend" aria-hidden="true">
            <span><i className="sbd-swatch-glass" />Vidrio</span>
            <span><i className="sbd-swatch-film" />Película</span>
          </div>
        </div>

        <div className="sbd-copy">
          <h3>{current.title}</h3>
          <p>{current.text}</p>
        </div>
      </div>
      <p className="sbd-note">Representación conceptual. El comportamiento real depende del tipo de vidrio, la película, la instalación y la configuración del sistema.</p>
    </div>
  );
}
