import Link from "next/link";
import { truth } from "@/lib/truth";
import type { CSSProperties } from "react";
import { Icon } from "@/components/Icon";

const toneSamples: Record<string, string> = {
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
