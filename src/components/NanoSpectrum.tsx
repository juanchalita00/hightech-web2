import Link from "next/link";
import { truth } from "@/lib/truth";
import type { CSSProperties } from "react";
import { Icon } from "@/components/Icon";
import { toneName, tone80 } from "@/lib/tones";

const toneSamples: Record<string, string> = {
  IR80: "linear-gradient(90deg, #dfe8ee 0%, #c9d8e1 100%)",
  IR75: "linear-gradient(90deg, #c7d6df 0%, #a8becb 100%)",
  IR50: "linear-gradient(90deg, #8f969b 0%, #70777c 100%)",
  IR35: "linear-gradient(90deg, #60666a 0%, #484e52 100%)",
  IR15: "linear-gradient(90deg, #292e31 0%, #191d20 100%)",
  IR5: "linear-gradient(90deg, #0b0d0f 0%, #020304 100%)",
};

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
        <div className="nano-tone-card" aria-label={`Tono ${tone80.name}`}>
          <div className="nano-tone-swatch" style={{ "--tone-bg": toneSamples.IR80, "--tone-opacity": 0 } as CSSProperties}>
            <span>{tone80.name}</span>
          </div>
          <div className="nano-tone-copy">
            <strong>{tone80.name}</strong>
            <span>VLT {tone80.vlt}</span>
            <small>—</small>
          </div>
        </div>
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
      <p className="nano-spectrum-footnote">Los números 80, 75, 50, 35, 15 y 5 son los nombres comerciales del tono; el VLT es el dato de ficha. El 50 deja pasar cerca de la mitad de la luz. El 5 deja pasar muy poca y, de noche, algunas personas batallan.</p>
    </div>
  );
}
