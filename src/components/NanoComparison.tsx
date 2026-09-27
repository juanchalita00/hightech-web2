import Link from "next/link";
import type { CSSProperties } from "react";
import { Icon } from "@/components/Icon";
import { truth } from "@/lib/truth";

const useCopy: Record<string, string> = {
  IR75: "Máxima claridad de la gama activa.",
  IR50: "Claridad alta con mayor TSER de ficha que IR75.",
  IR35: "Balance entre entrada de luz, apariencia y deslumbramiento.",
  IR15: "Privacidad visual más marcada y menor entrada de luz.",
  IR5: "Máxima oscuridad de la gama activa; VLT real de ficha 3%.",
};

export function NanoComparison() {
  return (
    <div className="nano-comparison">
      <div className="nano-comparison-mobile" aria-label="Comparación de tonos nanocerámicos">
        {truth.nano.map((film, index) => (
          <Link className="nano-comparison-card" href={`/peliculas/nanoceramica/${film.id.toLowerCase()}/`} key={film.id}>
            <div className="nano-comparison-swatch" style={{ "--tone-opacity": 0.08 + index * 0.17 } as CSSProperties}><span>{film.vlt}%</span></div>
            <div><strong>{film.id}</strong><p>{useCopy[film.id]}</p></div>
            <dl><div><dt>VLT</dt><dd>{film.vlt}%</dd></div><div><dt>TSER</dt><dd>{film.tser}%</dd></div></dl>
            <Icon name="arrow" size={18}/>
          </Link>
        ))}
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
