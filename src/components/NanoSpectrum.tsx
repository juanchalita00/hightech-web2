import Link from "next/link";
import { truth } from "@/lib/truth";
import type { CSSProperties } from "react";
import { Icon } from "@/components/Icon";

export function NanoSpectrum() {
  return (
    <div className="nano-spectrum">
      <div className="nano-spectrum-head">
        <div>
          <span className="nano-mini-label">Más claridad</span>
          <span className="nano-mini-label nano-mini-label-right">Más oscuridad</span>
        </div>
        <div className="nano-spectrum-line" aria-hidden="true"><span></span></div>
      </div>

      <div className="nano-tone-grid">
        {truth.nano.map((film, index) => {
          const opacity = 0.08 + index * 0.17;
          return (
            <Link href={`/peliculas/nanoceramica/${film.id.toLowerCase()}/`} className="nano-tone-card" key={film.id}>
              <div className="nano-tone-swatch" style={{ "--tone-opacity": opacity } as CSSProperties}>
                <span>{film.vlt}%</span>
              </div>
              <div className="nano-tone-copy">
                <strong>{film.id}</strong>
                <span>VLT {film.vlt}%</span>
                <small>TSER {film.tser}%</small>
              </div>
              <Icon name="arrow" size={18}/>
            </Link>
          );
        })}
      </div>
      <p className="nano-spectrum-footnote">IR50 e IR5 son nombres comerciales; sus VLT de ficha son 48% y 3%, respectivamente.</p>
    </div>
  );
}
