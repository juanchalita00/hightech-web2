import Link from "next/link";
import type { CSSProperties } from "react";
import { Icon } from "@/components/Icon";
import { truth } from "@/lib/truth";

const useCopy: Record<string, string> = {
  IR75: "Conserva la mayor cantidad de luz de la gama.",
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
        {truth.nano.map((film) => (
          <Link className="nano-comparison-card" href={`/peliculas/nanoceramica/${film.id.toLowerCase()}/`} key={film.id}>
            <div className="nano-comparison-swatch" style={{ "--tone-opacity": toneOpacity[film.id] } as CSSProperties}>
              <span>Luz {film.vlt}%</span>
            </div>
            <div className="nano-comparison-copy">
              <strong>{film.id}</strong>
              <p>{useCopy[film.id]}</p>
            </div>
            <dl>
              <div><dt>Luz</dt><dd>{film.vlt}%</dd></div>
              <div><dt>Calor del sol</dt><dd>Casi todo</dd></div>
            </dl>
            <span className="nano-comparison-arrow" aria-hidden="true"><Icon name="arrow" size={18}/></span>
          </Link>
        ))}
      </div>

      <div className="table-wrap nano-comparison-table" tabIndex={0} aria-label="Tabla comparativa de nanocerámica HIGHTECH">
        <table>
          <thead><tr><th>Película</th><th>Luz</th><th>Rayos UV</th><th>Calor del sol</th><th>Dónde encaja</th></tr></thead>
          <tbody>{truth.nano.map((film) => <tr key={film.id}><th scope="row"><Link href={`/peliculas/nanoceramica/${film.id.toLowerCase()}/`}>{film.id}</Link></th><td>{film.vlt}%</td><td>{film.uv}%</td><td>Casi todo</td><td>{useCopy[film.id]}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="fine-print">El 50 deja pasar cerca de la mitad de la luz y el 5, muy poca. Esos números no prometen cuántos grados bajará un cuarto.</p>
    </div>
  );
}
