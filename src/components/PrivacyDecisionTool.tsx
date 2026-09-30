"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/Icon";

type Goal = {
  key: "reflect" | "dark" | "diffuse";
  title: string;
  intent: string;
  strategy: string;
  text: string;
  caveat: string;
  cta: string;
  href: string;
  sceneLabel: string;
};

const goals: Goal[] = [
  {
    key: "reflect",
    title: "Privacidad principalmente de día",
    intent: "Quiero conservar luz y dificultar la vista hacia adentro.",
    strategy: "Reflectividad",
    text: "Cuando el exterior está más iluminado que el interior, una película reflectiva puede dificultar la vista hacia adentro sin tener que bloquear completamente el cristal.",
    caveat: "Por la noche, el resultado cambia con el contraste de iluminación.",
    cta: "Ver Plata Reflecta",
    href: "/peliculas/plata-reflecta/",
    sceneLabel: "Desde afuera, de día, el cristal refleja sobre todo el cielo, los árboles y el edificio de enfrente; detrás apenas se insinúa el interior. Desde adentro, la vista hacia el exterior se conserva con un ligero cambio de tono.",
  },
  {
    key: "dark",
    title: "Más oscuridad y privacidad visual",
    intent: "Quiero reducir la cantidad de luz visible que entra.",
    strategy: "Tono más oscuro",
    text: "Una película con menor transmisión de luz visible puede hacer que el cristal se vea más oscuro y aumentar la sensación de privacidad, aunque también cambia cuánta luz y visibilidad conservas.",
    caveat: "El tono no convierte el cristal en un espejo permanente.",
    cta: "Comparar tonos",
    href: "/peliculas/nanoceramica/",
    sceneLabel: "Desde afuera, el mismo cristal se ve más oscuro pero sigue siendo transparente: el interior se percibe con menos luz. Desde adentro, el exterior conserva formas y definición, pero se ve más oscuro.",
  },
  {
    key: "diffuse",
    title: "Que no se distinga el interior",
    intent: "Necesito privacidad menos dependiente de la iluminación.",
    strategy: "Difuminar la visión",
    text: "Si la prioridad es impedir que se distinga claramente lo que hay detrás del cristal, puede ser necesaria una solución que difumine o limite la visión en lugar de depender únicamente de oscuridad o reflectividad.",
    caveat: "La solución correcta depende de cuánto quieres ocultar y de cuánta luz o visibilidad deseas conservar. Si necesitas bloquear la vista por completo, se evalúa una solución opaca distinta.",
    cta: "Revisar mi caso",
    href: "/contacto/",
    sceneLabel: "Desde afuera, el cristal se ve translúcido y luminoso: la persona cercana al vidrio es sólo una silueta suave y los objetos se vuelven manchas difusas. Desde adentro, entra luz pero el exterior pierde definición.",
  },
];

// El módulo aparece una sola vez por página, así que un prefijo fijo basta para los ids.
const id = "privacy-goal";

// Vista desde afuera: el cristal ocupa x 44–376, y 64–346.
function RoomBack() {
  return <>
    <rect x="44" y="64" width="332" height="282" fill="#f4efe4" />
    <rect x="44" y="292" width="332" height="54" fill="#e2d6bf" />
    <polygon points="210,292 330,292 360,346 170,346" fill="#fbf3dc" opacity=".8" />
    <rect x="72" y="98" width="72" height="50" rx="3" fill="#c7b596" />
    <rect x="79" y="105" width="58" height="36" rx="2" fill="#e9e0cd" />
    <line x1="176" y1="64" x2="176" y2="104" stroke="#8e9ab2" strokeWidth="2" />
    <path d="M160 120 L166 104 L186 104 L192 120 Z" fill="#6f7fa6" />
    <rect x="76" y="244" width="140" height="46" rx="10" fill="#6f7fa6" />
    <rect x="76" y="220" width="22" height="70" rx="8" fill="#6f7fa6" />
    <rect x="84" y="290" width="7" height="18" fill="#56648a" />
    <rect x="202" y="290" width="7" height="18" fill="#56648a" />
    <rect x="326" y="284" width="28" height="32" rx="4" fill="#b98f6b" />
    <ellipse cx="332" cy="262" rx="9" ry="22" fill="#5f7f63" transform="rotate(-18 332 262)" />
    <ellipse cx="348" cy="258" rx="9" ry="24" fill="#6f9072" transform="rotate(16 348 258)" />
    <ellipse cx="340" cy="250" rx="7" ry="26" fill="#56745a" />
  </>;
}

function Person() {
  return <>
    <circle cx="272" cy="166" r="17" fill="#2f3b61" />
    <path d="M252 316 L254 210 Q256 190 272 188 Q288 190 290 210 L292 316 Z" fill="#2f3b61" />
    <rect x="258" y="316" width="11" height="22" rx="3" fill="#2f3b61" />
    <rect x="275" y="316" width="11" height="22" rx="3" fill="#2f3b61" />
  </>;
}

// Lo que el cristal refleja: el cielo, los árboles y el edificio que están detrás del observador.
function Reflection() {
  return <>
    <rect x="44" y="64" width="332" height="282" fill={`url(#${id}-refl-sky)`} />
    <g fill="#dfeaf4" opacity=".4">
      <ellipse cx="190" cy="112" rx="60" ry="11" /><ellipse cx="224" cy="104" rx="30" ry="10" /><ellipse cx="330" cy="130" rx="44" ry="8" />
    </g>
    <rect x="44" y="150" width="96" height="196" fill="#7e8ca3" />
    <g fill="#a3b1c4">
      <rect x="56" y="166" width="16" height="20" /><rect x="84" y="166" width="16" height="20" /><rect x="112" y="166" width="16" height="20" />
      <rect x="56" y="200" width="16" height="20" /><rect x="84" y="200" width="16" height="20" /><rect x="112" y="200" width="16" height="20" />
      <rect x="56" y="234" width="16" height="20" /><rect x="84" y="234" width="16" height="20" /><rect x="112" y="234" width="16" height="20" />
    </g>
    <g fill="#48675a">
      <circle cx="238" cy="214" r="34" /><circle cx="274" cy="198" r="38" /><circle cx="312" cy="220" r="30" />
      <circle cx="352" cy="206" r="32" />
    </g>
    <rect x="270" y="236" width="8" height="40" fill="#4a4540" />
    <rect x="44" y="272" width="332" height="74" fill="#687588" />
    <rect x="44" y="272" width="332" height="3" fill="#8e9aab" />
  </>;
}

// Vista desde adentro: el cristal ocupa x 464–728, y 62–320.
function Outdoors() {
  return <>
    <rect x="464" y="62" width="264" height="258" fill={`url(#${id}-sky)`} />
    <circle cx="690" cy="100" r="14" fill="#fff4cc" />
    <g fill="#ffffff" opacity=".6">
      <ellipse cx="530" cy="120" rx="40" ry="9" /><ellipse cx="552" cy="112" rx="22" ry="9" /><ellipse cx="640" cy="150" rx="30" ry="6" />
    </g>
    <path d="M482 232 L540 190 L598 232 Z" fill="#a9b6cc" />
    <rect x="490" y="232" width="100" height="72" fill="#d3dbe8" />
    <rect x="506" y="248" width="20" height="20" fill="#8fa2bf" />
    <rect x="546" y="248" width="20" height="20" fill="#8fa2bf" />
    <rect x="652" y="220" width="9" height="84" fill="#7c6a58" />
    <circle cx="656" cy="200" r="36" fill="#6f9a7d" />
    <circle cx="684" cy="224" r="26" fill="#5f8a6e" />
    <circle cx="630" cy="222" r="22" fill="#7aa588" />
    <rect x="464" y="296" width="264" height="24" fill="#9fb293" />
  </>;
}

export function PrivacyDecisionTool() {
  const [active, setActive] = useState(0);
  const current = goals[active];

  function onKeyDown(event: { key: string; preventDefault(): void; currentTarget: HTMLDivElement }) {
    const last = goals.length - 1;
    const forward = event.key === "ArrowRight" || event.key === "ArrowDown";
    const back = event.key === "ArrowLeft" || event.key === "ArrowUp";
    const next =
      forward ? (active === last ? 0 : active + 1)
      : back ? (active === 0 ? last : active - 1)
      : event.key === "Home" ? 0
      : event.key === "End" ? last
      : null;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  return (
    <div className="pdt" data-goal={current.key}>
      <p className="pdt-step"><span aria-hidden="true">1</span>Elige lo que quieres lograr</p>
      <div className="pdt-options" role="tablist" aria-label="Qué tipo de privacidad necesitas" onKeyDown={onKeyDown}>
        {goals.map((goal, index) => (
          <button
            key={goal.key}
            id={`${id}-tab-${index}`}
            type="button"
            role="tab"
            className="pdt-option"
            aria-selected={index === active}
            aria-controls={`${id}-panel`}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
          >
            <span className="pdt-check" aria-hidden="true"><Icon name="check" size={13} /></span>
            <span className="pdt-option-text">
              <strong>{goal.title}</strong>
              <span>{goal.intent}</span>
            </span>
          </button>
        ))}
      </div>

      <div className="pdt-panel" id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`}>
        <div className="pdt-scene">
          <span className="pdt-tag pdt-tag-out" aria-hidden="true">Desde afuera</span>
          <span className="pdt-tag pdt-tag-in" aria-hidden="true">Desde adentro</span>
          <svg viewBox="0 0 760 420" role="img" aria-label={current.sceneLabel}>
            <defs>
              <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#9fcbeb" />
                <stop offset="1" stopColor="#e6f2fa" />
              </linearGradient>
              <linearGradient id={`${id}-refl-sky`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#4f7fb0" />
                <stop offset=".55" stopColor="#9dbfdc" />
                <stop offset="1" stopColor="#c9dbea" />
              </linearGradient>
              <linearGradient id={`${id}-sheen`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
                <stop offset=".42" stopColor="#ffffff" stopOpacity="0" />
                <stop offset=".5" stopColor="#ffffff" stopOpacity=".8" />
                <stop offset=".6" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id={`${id}-tint`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#1a2436" />
                <stop offset="1" stopColor="#0b1120" />
              </linearGradient>
              <linearGradient id={`${id}-frost`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#f3f5f8" />
                <stop offset="1" stopColor="#e2e7ee" />
              </linearGradient>
              <clipPath id={`${id}-out-glass`}><rect x="44" y="64" width="332" height="282" /></clipPath>
              <clipPath id={`${id}-in-glass`}><rect x="464" y="62" width="264" height="258" /></clipPath>
              {/* El esmerilado dispersa más lo que está lejos del vidrio que lo que está pegado a él. */}
              <filter id={`${id}-scatter-far`} x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="16" /></filter>
              <filter id={`${id}-scatter-near`} x="-20%" y="-10%" width="140%" height="120%"><feGaussianBlur stdDeviation="7" /></filter>
              <filter id={`${id}-grain`} x="0" y="0" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="4" stitchTiles="stitch" />
                <feColorMatrix type="matrix" values="0 0 0 0 .55  0 0 0 0 .6  0 0 0 0 .66  0 0 0 .6 -.12" />
              </filter>
            </defs>

            {/* Vista desde afuera: fachada y ventana */}
            <rect x="0" y="0" width="420" height="420" fill="#e9edf4" />
            <rect x="0" y="384" width="420" height="36" fill="#d6dce7" />
            <rect x="30" y="50" width="360" height="310" rx="6" fill="#c9d1df" />
            <g clipPath={`url(#${id}-out-glass)`}>
              <g className="pdt-clear"><RoomBack /><Person /></g>
              <g className="pdt-diffused">
                <g filter={`url(#${id}-scatter-far)`}><RoomBack /></g>
                <g filter={`url(#${id}-scatter-near)`} opacity=".7"><Person /></g>
              </g>
              <rect className="pdt-o-tint" x="44" y="64" width="332" height="282" fill={`url(#${id}-tint)`} />
              <g className="pdt-o-reflection"><Reflection /></g>
              <rect className="pdt-o-frost" x="44" y="64" width="332" height="282" fill={`url(#${id}-frost)`} />
              <rect className="pdt-o-grain" x="44" y="64" width="332" height="282" filter={`url(#${id}-grain)`} />
              <rect className="pdt-o-sheen" x="44" y="64" width="332" height="282" fill={`url(#${id}-sheen)`} />
            </g>
            <rect x="207" y="64" width="6" height="282" fill="#c9d1df" />
            <rect x="22" y="356" width="376" height="10" rx="3" fill="#bcc5d5" />

            {/* Vista desde adentro */}
            <rect x="432" y="0" width="328" height="420" fill="#f4efe4" />
            <rect x="432" y="352" width="328" height="68" fill="#e2d6bf" />
            <polygon className="pdt-i-light" points="464,352 728,352 760,420 440,420" fill="#fff2c6" />
            <rect x="452" y="50" width="288" height="282" rx="5" fill="#d9d2c3" />
            <g clipPath={`url(#${id}-in-glass)`}>
              <g className="pdt-clear"><Outdoors /></g>
              <g className="pdt-diffused" filter={`url(#${id}-scatter-far)`}><Outdoors /></g>
              <rect className="pdt-i-film" x="464" y="62" width="264" height="258" fill="#44526a" />
              <rect className="pdt-i-tint" x="464" y="62" width="264" height="258" fill={`url(#${id}-tint)`} />
              <rect className="pdt-i-frost" x="464" y="62" width="264" height="258" fill={`url(#${id}-frost)`} />
              <rect className="pdt-i-grain" x="464" y="62" width="264" height="258" filter={`url(#${id}-grain)`} />
            </g>
            <rect x="593" y="62" width="6" height="258" fill="#d9d2c3" />
            <rect x="420" y="0" width="12" height="420" fill="#ffffff" />
          </svg>
        </div>

        <div className="pdt-copy">
          <p className="pdt-step"><span aria-hidden="true">2</span>Estrategia que puede tener sentido</p>
          <h3>{current.strategy}</h3>
          <p>{current.text}</p>
          <p className="pdt-caveat">{current.caveat}</p>
          <Link className="text-link" href={current.href}>{current.cta} <Icon name="arrow" size={17} /></Link>
        </div>
      </div>
    </div>
  );
}
