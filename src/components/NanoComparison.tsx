import Link from "next/link";
import type { CSSProperties } from "react";
import { Icon } from "@/components/Icon";
import { truth } from "@/lib/truth";
import { toneName, tone80 } from "@/lib/tones";

const useCopy: Record<string, string> = {
  IR75: "Conserva casi toda la luz de la gama.",
  IR50: "Mucha claridad, con un tono un poco más marcado que el 75.",
  IR35: "Punto medio entre luz, apariencia y deslumbramiento.",
  IR15: "Más oscuro y más privacidad de día. Solo casa y negocio.",
  IR5: "La más oscura. Solo casa y negocio: de noche, algunas personas batallan.",
};

const toneOpacity: Record<string, number> = {
  IR75: .08,
  IR50: .2,
  IR35: .35,
  IR15: .6,
  IR5: .88,
};

export function NanoComparison() {
  return (
    <div className="nano-comparison">
      <div className="nano-comparison-guide" aria-label="Comparación visual de tonos nanocerámicos">
        <div className="nano-comparison-card">
          <div className="nano-comparison-swatch" style={{ "--tone-opacity": 0.04 } as CSSProperties}>
            <span>Tono {tone80.name}</span>
          </div>
          <div className="nano-comparison-copy">
            <strong>{tone80.name}</strong>
            <p>{tone80.description}</p>
          </div>
          <dl>
            <div><dt>Calor del sol</dt><dd>—</dd></div>
          </dl>
        </div>
        {truth.nano.map((film) => (
          <Link className="nano-comparison-card" href={`/peliculas/nanoceramica/${film.id.toLowerCase()}/`} key={film.id}>
            <div className="nano-comparison-swatch" style={{ "--tone-opacity": toneOpacity[film.id] } as CSSProperties}>
              <span>Tono {toneName(film.id)}</span>
            </div>
            <div className="nano-comparison-copy">
              <strong>{toneName(film.id)}</strong>
              <p>{useCopy[film.id]}</p>
            </div>
            <dl>
              <div><dt>Calor del sol</dt><dd>Casi todo</dd></div>
            </dl>
            <span className="nano-comparison-arrow" aria-hidden="true"><Icon name="arrow" size={18}/></span>
          </Link>
        ))}
      </div>

      <div className="table-wrap nano-comparison-table" tabIndex={0} aria-label="Tabla comparativa de nanocerámica HIGHTECH">
        <table>
          <thead><tr><th>Tono</th><th>Rayos UV</th><th>Calor del sol</th><th>Dónde encaja</th></tr></thead>
          <tbody><tr><th scope="row">{tone80.name}</th><td>—</td><td>—</td><td>{tone80.description}</td></tr>{truth.nano.map((film) => <tr key={film.id}><th scope="row"><Link href={`/peliculas/nanoceramica/${film.id.toLowerCase()}/`}>{toneName(film.id)}</Link></th><td>Hasta {film.uv}%</td><td>Casi todo</td><td>{useCopy[film.id]}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="fine-print">Los números son los nombres comerciales del tono. El 50 deja pasar cerca de la mitad de la luz y el 5, muy poca. Esos números no prometen cuántos grados bajará un cuarto.</p>
    </div>
  );
}
