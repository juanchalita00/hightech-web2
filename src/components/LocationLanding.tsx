import Link from "next/link";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { addressLine, airportName, hoursLabel, onSitePolicy, phoneDisplay } from "@/lib/public-facts";
import { truth } from "@/lib/truth";

type City = "Zapopan" | "Guadalajara";

const copy: Record<City, {
  lede: string;
  colonias: string[];
  note: string;
  faqs: { q: string; a: string }[];
}> = {
  Zapopan: {
    lede: "El taller está en Jardines Vallarta. Desde aquí instalamos polarizado en casa, negocio y auto, y salimos a la zona de Andares, Puerta de Hierro y Valle Real.",
    colonias: ["Jardines Vallarta", "Puerta de Hierro", "Andares", "Valle Real", "Colinas de San Javier", "Puerta Plata"],
    note: "Si tu colonia no está en la lista y sigue en Zapopan, también la atendemos. El traslado dentro del municipio se ve en la cotización.",
    faqs: [
      { q: "¿El taller está en Zapopan?", a: `${addressLine} ${hoursLabel}` },
      { q: "¿Instalan el auto en mi casa?", a: onSitePolicy },
      { q: "¿Atienden Providencia?", a: "Providencia la cubrimos desde esta base. Si el cristal está del lado de Guadalajara, la página de esa ciudad tiene el mismo servicio." },
    ],
  },
  Guadalajara: {
    lede: `Instalamos polarizado en Guadalajara desde el taller de Zapopan. Hay obra en el ${airportName} y atendemos casas y oficinas en el centro y el poniente de la ciudad.`,
    colonias: ["Americana", "Lafayette", "Country Club", "Monraz", "Colomos", "Chapultepec"],
    note: "El auto se trabaja en el taller de Zapopan, con cita. Casa y negocio se miden con fotos y, si hace falta, una visita.",
    faqs: [
      { q: "¿Tienen obra en Guadalajara?", a: `Sí. El caso público es el ${airportName}: un pasillo de cristal junto a la plataforma.` },
      { q: "¿Hay que ir a Zapopan para cotizar una casa?", a: "No. Con fotos y medidas aproximadas empezamos. La instalación se agenda en la dirección del inmueble." },
      { q: "¿El auto se polariza en Guadalajara?", a: onSitePolicy },
    ],
  },
};

export function LocationLanding({ city }: { city: City }) {
  const page = copy[city];
  const other = city === "Zapopan" ? { href: "/guadalajara/", label: "Polarizado en Guadalajara" } : { href: "/zapopan/", label: "Polarizado en Zapopan" };
  return (
    <>
      <section className="section location-hero">
        <div className="container location-hero-grid">
          <div>
            <p className="eyebrow">{city}, Jalisco</p>
            <h1>Polarizado en {city}.</h1>
            <p>{page.lede}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contacto/#cotizar">Cotizar</Link>
              <WhatsAppCTA label="WhatsApp" context={{ sourcePage: `/${city.toLowerCase()}/` }} position="HERO" className="button-secondary" />
            </div>
            <div className="nap-block">
              <strong>{addressLine}</strong>
              <span>{hoursLabel}</span>
              <a href={`tel:${truth.contact.phoneE164}`}>{phoneDisplay}</a>
              <a href={truth.contact.mapsUrl}>Cómo llegar</a>
            </div>
          </div>
          <ul className="location-points">
            {page.colonias.map((colonia) => <li key={colonia}><Icon name="check" size={16} />{colonia}</li>)}
          </ul>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Colonias</p>
            <h2>Dónde instalamos en {city}.</h2>
          </div>
          <p>{page.note}</p>
          <div className="location-links">
            <Link href="/residencial/"><strong>Casa</strong><span>Calor, luz y privacidad.</span></Link>
            <Link href="/comercial/"><strong>Negocio</strong><span>Oficinas, fachadas y plantas.</span></Link>
            <Link href="/automotriz/"><strong>Auto</strong><span>{onSitePolicy}</span></Link>
            <Link href="/guias/"><strong>Guías</strong><span>Calor, luz y el tono del auto en Jalisco.</span></Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">Preguntas de {city}</p><h2>Antes de pedir la cotización.</h2></div>
          <div className="city-faq">
            {page.faqs.map((item) => (
              <article key={item.q}><h3>{item.q}</h3><p>{item.a}</p></article>
            ))}
          </div>
          <p className="location-sibling"><Link className="text-link text-link-strong" href={other.href}>{other.label} <Icon name="arrow" size={17} /></Link></p>
        </div>
      </section>
    </>
  );
}
