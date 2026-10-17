import Link from "next/link";
import type { CSSProperties } from "react";
import { Icon } from "@/components/Icon";
import { truth } from "@/lib/truth";
import { toneName, toneSamples } from "@/lib/tones";

const useCopy: Record<string, string> = {
  IR75: "Conserva casi toda la luz de la gama.",
  IR50: "Mucha claridad, con un tono un poco más marcado que el 75.",
  IR35: "Punto medio entre luz, apariencia y deslumbramiento.",
  IR15: "Más oscuro y más privacidad de día. Solo casa y negocio.",
  IR5: "La más oscura. Solo casa y negocio: de noche, algunas personas batallan.",
};

export function NanoComparison() {
  return (
    <div className="nano-comparison">
      <figure className="nano-comparison-photo">
        <img src="/images/comparador/referencia-fachada-exterior-nanoceramica.webp" alt="Fachada de una casa con ventanas marcadas 75%, 50%, 35%, 15% y 5%, para comparar el tono de la gama nanocerámica." loading="lazy" decoding="async" />
        <figcaption>Referencia real de tonos: 75, 50, 35, 15 y 5.</figcaption>
      </figure>
      <div className="nano-comparison-guide" aria-label="Comparación visual de tonos nanocerámicos">
        {truth.nano.map((film) => (
          <Link className="nano-comparison-card" href={`/peliculas/nanoceramica/${film.id.toLowerCase()}/`} key={film.id}>
            <div className="nano-comparison-swatch" style={{ "--tone-bg": toneSamples[film.id] } as CSSProperties} role="img" aria-label={`Muestra del tono ${toneName(film.id)}`} />
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
          <tbody>{truth.nano.map((film) => <tr key={film.id}><th scope="row"><Link href={`/peliculas/nanoceramica/${film.id.toLowerCase()}/`}>{toneName(film.id)}</Link></th><td>Hasta {film.uv}%</td><td>Casi todo</td><td>{useCopy[film.id]}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="fine-print">Los números son los nombres comerciales del tono. El 50 deja pasar cerca de la mitad de la luz y el 5, muy poca. Esos números no prometen cuántos grados bajará un cuarto.</p>
    </div>
  );
}
