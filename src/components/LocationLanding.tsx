import Link from "next/link";
import { Icon } from "@/components/Icon";
import { quotePath } from "@/lib/quote";

type City = "Zapopan" | "Guadalajara";

const copy: Record<City, { lede: string; points: string[]; sibling: { href: string; label: string } }> = {
  Zapopan: {
    lede: "La base de HIGHTECH está en Zapopan, Jalisco. Desde aquí atendemos casas, negocios y vehículos, y también proyectos en la zona metropolitana de Guadalajara.",
    points: [
      "El taller automotriz está en Zapopan y trabaja normalmente con cita.",
      "En casa y en negocio se puede empezar con medidas y fotos, sin visita de entrada.",
      "Un proyecto fuera de la zona metropolitana se evalúa. El traslado no se cotiza con una tarifa inventada.",
    ],
    sibling: { href: "/guadalajara/", label: "También atendemos Guadalajara" },
  },
  Guadalajara: {
    lede: "HIGHTECH atiende la zona metropolitana de Guadalajara desde su base en Zapopan: casas, oficinas, fachadas y vehículos.",
    points: [
      "Hay trabajo documentado en el Aeropuerto de Guadalajara, en un entorno de operación continua.",
      "La instalación automotriz se hace en el taller de Zapopan, normalmente con cita.",
      "Si el proyecto está en otro estado, se revisan traslado, logística y viáticos antes de comprometer una fecha.",
    ],
    sibling: { href: "/zapopan/", label: "Conoce la base en Zapopan" },
  },
};

export function LocationLanding({ city }: { city: City }) {
  const page = copy[city];
  return (
    <>
      <section className="section location-hero">
        <div className="container location-hero-grid">
          <div>
            <p className="eyebrow">{city}, Jalisco</p>
            <h1>Películas para cristales en {city}.</h1>
            <p>{page.lede}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href={quotePath()}>Solicitar cotización</Link>
              <Link className="button button-secondary" href="/galeria/">Ver proyectos</Link>
            </div>
          </div>
          <ul className="location-points">
            {page.points.map((point) => <li key={point}><Icon name="check" size={16} />{point}</li>)}
          </ul>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">Servicios</p><h2>Casa, negocio o vehículo.</h2></div>
          <div className="location-links">
            <Link href="/residencial/"><strong>Residencial</strong><span>Calor, luz, UV y privacidad en casa.</span></Link>
            <Link href="/comercial/"><strong>Comercial</strong><span>Oficinas, locales y fachadas.</span></Link>
            <Link href="/automotriz/"><strong>Automotriz</strong><span>Nanocerámica en taller, en Zapopan.</span></Link>
            <Link href="/blog/"><strong>Blog</strong><span>Guías cortas para decidir con contexto.</span></Link>
          </div>
          <p className="location-sibling"><Link className="text-link text-link-strong" href={page.sibling.href}>{page.sibling.label} <Icon name="arrow" size={17} /></Link></p>
        </div>
      </section>
    </>
  );
}
