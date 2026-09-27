import Link from "next/link";
import type { CSSProperties } from "react";
import { Icon } from "@/components/Icon";
import { truth } from "@/lib/truth";

const descriptions: Record<string, { label: string; use: string }> = {
  IR75: { label: "Máxima claridad", use: "Para conservar la mayor entrada de luz de la gama." },
  IR50: { label: "Claridad alta", use: "Una transición más marcada sin ir a un tono medio." },
  IR35: { label: "Balance", use: "Más control visual manteniendo una lectura clara del exterior." },
  IR15: { label: "Privacidad marcada", use: "Menor entrada de luz; conviene considerar uso nocturno." },
  IR5: { label: "Máxima oscuridad", use: "VLT de ficha 3%; cambia de forma importante la visibilidad." },
};

export function AutomotiveToneGuide() {
  return (
    <div className="auto-tone-guide">
      {truth.nano.map((film, index) => {
        const data = descriptions[film.id];
        const opacity = 0.08 + index * 0.17;
        return (
          <Link className="auto-tone-row" href={`/peliculas/nanoceramica/${film.id.toLowerCase()}/`} key={film.id}>
            <div className="auto-tone-glass" style={{ "--tone-opacity": opacity } as CSSProperties}><span>{film.vlt}%</span></div>
            <div className="auto-tone-main"><strong>{film.id}</strong><span>{data.label}</span><p>{data.use}</p></div>
            <div className="auto-tone-spec"><span>TSER</span><strong>{film.tser}%</strong></div>
            <Icon name="arrow" size={18}/>
          </Link>
        );
      })}
      <p className="auto-tone-note">IR50 e IR5 son nombres comerciales; sus VLT de ficha son 48% y 3%. Los valores técnicos son especificaciones de ficha.</p>
    </div>
  );
}
