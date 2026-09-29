import Link from "next/link";
import type { CSSProperties } from "react";
import { Icon } from "@/components/Icon";
import { truth } from "@/lib/truth";

const useCopy: Record<string, string> = {
  IR75: "Conserva la mayor cantidad de luz de la gama.",
  IR50: "Alta claridad con mayor control solar que IR75, según ficha.",
  IR35: "Punto medio entre luz, apariencia y deslumbramiento.",
  IR15: "Apariencia más oscura y mayor privacidad visual durante el día.",
  IR5: "La opción más oscura de la gama; VLT de ficha 3%.",
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
              <span>VLT {film.vlt}%</span>
            </div>
            <div className="nano-comparison-copy">
              <strong>{film.id}</strong>
              <p>{useCopy[film.id]}</p>
            </div>
            <dl>
              <div><dt>Luz visible</dt><dd>{film.vlt}%</dd></div>
              <div><dt>TSER</dt><dd>{film.tser}%</dd></div>
            </dl>
            <span className="nano-comparison-arrow" aria-hidden="true"><Icon name="arrow" size={18}/></span>
          </Link>
        ))}
      </div>

      <div className="nano-comparison-tech-intro">
        <strong>Datos técnicos de ficha</strong>
        <span>Para comparar desempeño además de apariencia.</span>
      </div>

      <div className="table-wrap nano-comparison-table" tabIndex={0} aria-label="Tabla comparativa de nanocerámica HIGHTECH">
        <table>
          <thead><tr><th>Película</th><th>VLT</th><th>UV</th><th>Rechazo infrarrojo</th><th>TSER</th><th>Orientación de uso</th></tr></thead>
          <tbody>{truth.nano.map((film) => <tr key={film.id}><th scope="row"><Link href={`/peliculas/nanoceramica/${film.id.toLowerCase()}/`}>{film.id}</Link></th><td>{film.vlt}%</td><td>{film.uv}%</td><td>{film.infraredRejection}% a {film.infraredWavelengthNm} nm</td><td>{film.tser}%</td><td>{useCopy[film.id]}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="fine-print">IR50 e IR5 son nombres comerciales; sus VLT de ficha son 48% y 3%. Los datos son especificaciones de ficha y no representan una reducción universal de temperatura en el espacio instalado.</p>
    </div>
  );
}
