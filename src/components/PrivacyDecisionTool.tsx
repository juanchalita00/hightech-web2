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
    sceneLabel: "Desde afuera, de día, el cristal refleja el cielo y el interior apenas se distingue. Desde adentro, el espacio conserva buena parte de la luz y la vista hacia el exterior.",
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
    sceneLabel: "Desde afuera, el cristal se ve más oscuro pero todavía transparente: el interior se percibe con menos claridad. Desde adentro, entra menos luz y la vista hacia afuera se oscurece.",
  },
  {
    key: "diffuse",
    title: "Que no se distinga el interior",
    intent: "Necesito privacidad menos dependiente de la iluminación.",
    strategy: "Difuminar o bloquear visión",
    text: "Si la prioridad es impedir que se distinga claramente lo que hay detrás del cristal, puede ser necesaria una solución que difumine o limite la visión en lugar de depender únicamente de oscuridad o reflectividad.",
    caveat: "La solución correcta depende de cuánto quieres ocultar y de cuánta luz o visibilidad deseas conservar.",
    cta: "Revisar mi caso",
    href: "/contacto/",
    sceneLabel: "Desde afuera, las personas y objetos detrás del cristal se ven difuminados y no se identifican. Desde adentro, entra luz pero la vista hacia el exterior también queda difuminada.",
  },
];

// El módulo aparece una sola vez por página, así que un prefijo fijo basta para los ids.
const id = "privacy-goal";

function Room() {
  return <>
    <rect x="56" y="66" width="358" height="288" fill="#f4efe4" />
    <rect x="56" y="294" width="358" height="60" fill="#e2d6bf" />
    <rect x="88" y="104" width="74" height="52" rx="3" fill="#c7b596" />
    <rect x="95" y="111" width="60" height="38" rx="2" fill="#e9e0cd" />
    <line x1="190" y1="66" x2="190" y2="112" stroke="#8e9ab2" strokeWidth="2" />
    <path d="M174 128 L180 112 L200 112 L206 128 Z" fill="#6f7fa6" />
    <rect x="96" y="246" width="150" height="46" rx="10" fill="#6f7fa6" />
    <rect x="96" y="222" width="22" height="70" rx="8" fill="#6f7fa6" />
    <rect x="104" y="292" width="7" height="20" fill="#56648a" />
    <rect x="232" y="292" width="7" height="20" fill="#56648a" />
    <circle cx="300" cy="170" r="17" fill="#2f3b61" />
    <path d="M280 318 L282 214 Q284 194 300 192 Q316 194 318 214 L320 318 Z" fill="#2f3b61" />
    <rect x="286" y="318" width="11" height="22" rx="3" fill="#2f3b61" />
    <rect x="303" y="318" width="11" height="22" rx="3" fill="#2f3b61" />
    <rect x="360" y="286" width="30" height="34" rx="4" fill="#b98f6b" />
    <ellipse cx="366" cy="262" rx="10" ry="24" fill="#5f7f63" transform="rotate(-18 366 262)" />
    <ellipse cx="384" cy="258" rx="10" ry="26" fill="#6f9072" transform="rotate(16 384 258)" />
    <ellipse cx="375" cy="250" rx="8" ry="28" fill="#56745a" />
  </>;
}

function Outdoors() {
  return <>
    <rect x="522" y="82" width="166" height="236" fill={`url(#${id}-sky)`} />
    <circle cx="650" cy="118" r="14" fill="#fff6d6" />
    <path d="M522 250 L570 214 L618 250 Z" fill="#b8c4d8" />
    <rect x="530" y="250" width="80" height="68" fill="#d5dcea" />
    <rect x="548" y="266" width="18" height="18" fill="#9fb0c9" />
    <rect x="626" y="232" width="8" height="86" fill="#7c6a58" />
    <circle cx="630" cy="214" r="34" fill="#7fa38a" />
    <circle cx="652" cy="236" r="24" fill="#6d937a" />
    <rect x="522" y="304" width="166" height="14" fill="#a9b7a0" />
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
          <svg viewBox="0 0 720 420" role="img" aria-label={current.sceneLabel}>
            <defs>
              <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#b9dcf3" />
                <stop offset="1" stopColor="#eaf5fb" />
              </linearGradient>
              <linearGradient id={`${id}-mirror`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#e7edf6" />
                <stop offset=".5" stopColor="#a4b2c8" />
                <stop offset="1" stopColor="#d3dbe7" />
              </linearGradient>
              <clipPath id={`${id}-out-glass`}><rect x="56" y="66" width="358" height="288" /></clipPath>
              <clipPath id={`${id}-in-glass`}><rect x="522" y="82" width="166" height="236" /></clipPath>
              <filter id={`${id}-blur`} x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="11" /></filter>
            </defs>

            {/* Vista desde afuera: fachada y ventana */}
            <rect x="0" y="0" width="470" height="420" fill="#e9edf4" />
            <rect x="0" y="384" width="470" height="36" fill="#d6dce7" />
            <rect x="40" y="50" width="390" height="320" rx="6" fill="#c9d1df" />
            <g clipPath={`url(#${id}-out-glass)`}>
              <g className="pdt-sharp"><Room /></g>
              <g className="pdt-blurred" filter={`url(#${id}-blur)`}><Room /></g>
              <rect className="pdt-o-tint" x="56" y="66" width="358" height="288" fill="#0e1633" />
              <rect className="pdt-o-mirror" x="56" y="66" width="358" height="288" fill={`url(#${id}-mirror)`} />
              <g className="pdt-o-reflection" fill="#ffffff">
                <ellipse cx="120" cy="104" rx="42" ry="13" opacity=".75" />
                <ellipse cx="150" cy="96" rx="26" ry="12" opacity=".75" />
                <ellipse cx="330" cy="130" rx="36" ry="10" opacity=".6" />
                <path d="M56 354 L56 300 Q90 260 120 290 Q150 250 190 286 Q220 262 250 300 L250 354 Z" fill="#8d9fb8" opacity=".55" />
              </g>
              <rect className="pdt-o-frost" x="56" y="66" width="358" height="288" fill="#f5f7fb" />
              <path className="pdt-sheen" d="M90 354 L230 66 L262 66 L122 354 Z M300 354 L414 120 L414 170 L324 354 Z" fill="#ffffff" />
            </g>
            <rect x="232" y="66" width="6" height="288" fill="#c9d1df" />
            <rect x="32" y="366" width="406" height="10" rx="3" fill="#bcc5d5" />

            {/* Vista desde adentro */}
            <rect x="490" y="0" width="230" height="420" fill="#f4efe4" />
            <rect x="490" y="352" width="230" height="68" fill="#e2d6bf" />
            <polygon className="pdt-i-light" points="522,352 688,352 720,420 500,420" fill="#fff4cf" />
            <rect x="510" y="70" width="190" height="260" rx="5" fill="#d9d2c3" />
            <g clipPath={`url(#${id}-in-glass)`}>
              <g className="pdt-sharp"><Outdoors /></g>
              <g className="pdt-blurred" filter={`url(#${id}-blur)`}><Outdoors /></g>
              <rect className="pdt-i-tint" x="522" y="82" width="166" height="236" fill="#1b2442" />
              <rect className="pdt-i-frost" x="522" y="82" width="166" height="236" fill="#f7f9fc" />
            </g>
            <rect x="602" y="82" width="6" height="236" fill="#d9d2c3" />
            <rect x="480" y="0" width="10" height="420" fill="#ffffff" />
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
