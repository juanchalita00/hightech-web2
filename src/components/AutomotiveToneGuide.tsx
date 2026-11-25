import Link from "next/link";
import type { CSSProperties } from "react";
import { Icon } from "@/components/Icon";
import { filmSwatchVars, type FilmToneId } from "@/lib/automotive-tone-look";
import { truth } from "@/lib/truth";
import { toneName } from "@/lib/tones";

const descriptions: Record<Exclude<FilmToneId, "none">, { label: string; use: string }> = {
  IR75: { label: "Muy claro", use: "Conserva la mayor entrada de luz visible de la gama." },
  IR50: { label: "Claro", use: "Mantiene buena claridad con una apariencia un poco más marcada." },
  IR35: { label: "Intermedio", use: "Un punto medio entre claridad y una apariencia más oscura." },
  IR15: { label: "Oscuro", use: "Reduce bastante la luz visible; conviene considerar especialmente el uso nocturno." },
  IR5: { label: "Muy oscuro", use: "Cambia de forma importante la visibilidad y la apariencia." },
};

const isFilmTone = (id: string): id is Exclude<FilmToneId, "none"> => id in descriptions;

export function AutomotiveToneGuide() {
  return (
    <div className="auto-tone-guide">
      {truth.nano.map((film) => {
        if (!isFilmTone(film.id)) return null;
        const data = descriptions[film.id];
        return (
          <Link className="auto-tone-row" href={`/peliculas/nanoceramica/${film.id.toLowerCase()}/`} key={film.id}>
            <div className="auto-tone-glass" style={filmSwatchVars(film.id) as CSSProperties}>
              <span>{toneName(film.id)}</span>
            </div>
            <div className="auto-tone-main">
              <strong>{toneName(film.id)}</strong>
              <span>{data.label}</span>
              <p>{data.use}</p>
            </div>
            <div className="auto-tone-spec">
              <span>TSER</span>
              <strong>{film.tser}%</strong>
            </div>
            <Icon name="arrow" size={18} />
          </Link>
        );
      })}
    </div>
  );
}
