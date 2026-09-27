import Link from "next/link";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

const specs = [
  ["99%", "UV", "gama nano"],
  ["95%", "IR a 950 nm", "según ficha"],
  ["59–96%", "TSER", "según tono"],
] as const;

export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="container home-hero-grid">
        <div className="home-hero-copy">
          <div className="hero-kicker"><span className="hero-kicker-dot" /> Soluciones profesionales para cristales</div>
          <h1>Confort y protección <span>sin renunciar a la luz.</span></h1>
          <p className="hero-description">
            Para casas, empresas y vehículos. Primero entendemos qué quieres resolver; después recomendamos la película, el tono y la aplicación adecuados.
          </p>
          <div className="hero-actions">
            <WhatsAppCTA label="Cuéntanos qué quieres resolver" context={{ sourcePage: "/" }} position="HERO" />
            <Link className="button button-secondary button-with-icon" href="/peliculas/nanoceramica/">
              Comparar nanocerámica <Icon name="arrow" size={18}/>
            </Link>
          </div>
          <div className="hero-mini-proof" aria-label="Principios de HIGHTECH">
            <span><Icon name="check" size={17}/> Datos técnicos con contexto</span>
            <span><Icon name="check" size={17}/> Cotización según aplicación</span>
          </div>
        </div>

        <div className="hero-glass-stage" aria-label="Vista conceptual de la gama nanocerámica">
          <div className="glass-window" aria-hidden="true">
            <div className="glass-sky" />
            <div className="glass-frame glass-frame-v1" />
            <div className="glass-frame glass-frame-v2" />
            <div className="glass-frame glass-frame-h" />
            <div className="glass-film glass-film-left" />
            <div className="glass-film glass-film-right" />
            <div className="spectrum-markers">
              <i></i><i></i><i></i><i></i><i></i>
            </div>
          </div>
          <div className="hero-spec-card">
            <div className="hero-spec-head">
              <span>Gama nanocerámica HIGHTECH</span>
              <span className="live-dot">5 tonos</span>
            </div>
            <div className="hero-spec-grid">
              {specs.map(([value, label, note]) => (
                <div key={label} className="hero-spec-item">
                  <strong>{value}</strong>
                  <span>{label}</span>
                  <small>{note}</small>
                </div>
              ))}
            </div>
            <p className="hero-spec-note">Los datos son especificaciones de ficha. El desempeño final depende también del cristal y de la aplicación.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
