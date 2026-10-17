import Link from "next/link";
import { truth } from "@/lib/truth";
import type { CSSProperties } from "react";
import { Icon } from "@/components/Icon";
import { toneName, toneSamples } from "@/lib/tones";

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

      <div className="nano-column-head" aria-hidden="true">
        <span></span>
        <div className="nano-column-head-main">
          <span>Tono</span>
          <span>VLT (ficha)</span>
          <span>Calor del sol</span>
        </div>
        <span></span>
      </div>

      <div className="nano-tone-grid">
        {truth.nano.map((film) => {
          return (
            <Link href={`/peliculas/nanoceramica/${film.id.toLowerCase()}/`} className="nano-tone-card" key={film.id}>
              <div
                className="nano-tone-swatch"
                style={{
                  "--tone-bg": toneSamples[film.id],
                  "--tone-opacity": 0,
                } as CSSProperties}
              >
                <span>{toneName(film.id)}</span>
              </div>
              <div className="nano-tone-copy">
                <strong>{toneName(film.id)}</strong>
                <span>VLT {film.vlt}%</span>
                <small>Corta el calor del sol</small>
              </div>
              <Icon name="arrow" size={18}/>
            </Link>
          );
        })}
      </div>
      <p className="nano-spectrum-footnote">Los números 75, 50, 35, 15 y 5 son los nombres comerciales del tono; el VLT es el dato de ficha. El 50 deja pasar cerca de la mitad de la luz. El 5 deja pasar muy poca y, de noche, algunas personas batallan.</p>
    </div>
  );
}
