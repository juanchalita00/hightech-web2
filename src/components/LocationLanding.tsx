import Link from "next/link";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PriceBlock } from "@/components/PriceBlock";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { getGoogleReviews } from "@/lib/google-reviews";
import {
  locationBusinessSchema,
  locationFaqSchema,
  locationFaqs,
  metroAreaPhrase,
  zoneExamples,
  type ServiceCity,
} from "@/lib/location-pages";
import { addressLine, airportName, googleProfile, hoursLabel, phoneDisplay, prices } from "@/lib/public-facts";
import { truth } from "@/lib/truth";

const money = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

const copy: Record<ServiceCity, {
  title: string;
  lede: string;
  servicesIntro: string;
  services: { href: string; title: string; text: string }[];
  irTitle: string;
  irText: string[];
  priceTitle: string;
  priceLead: string;
  reviewAuthor: string;
  reviewLead: string;
  other: { href: string; label: string };
}> = {
  Zapopan: {
    title: "Polarizado en Zapopan.",
    lede: "El taller está en Jardines Vallarta. Desde aquí instalamos película para casa, negocio y auto en Zapopan.",
    servicesIntro: "Empezamos por tu casa o tu negocio. El auto se trabaja en el taller, con cita.",
    services: [
      { href: "/residencial/", title: "Casa", text: "Bajamos el calor del sol en ventanas de casa. Tú eliges qué tan claro queda el cristal." },
      { href: "/comercial/", title: "Negocio", text: "Oficinas, fachadas y locales. La misma Línea IR, con el cuidado de cada cristal." },
      { href: "/automotriz/", title: "Auto", text: "El auto se trabaja en el taller de Jardines Vallarta, con cita." },
    ],
    irTitle: "Línea IR, también en el tono claro.",
    irText: [
      "Trabajamos la Línea IR, una película nanocerámica Hightech.",
      "Según la ficha técnica, rechaza 95% del infrarrojo (el calor invisible del sol), medido a 950 nm.",
      "Ese dato no significa 95% menos calor dentro del cuarto o del auto.",
    ],
    priceTitle: "Precios desde, en Zapopan",
    priceLead: "Estos son los precios desde. El IVA va aparte. El precio final sale en la cotización.",
    reviewAuthor: "Valeria Garnica",
    reviewLead: "Hay +70 reseñas en Google. Esta es una de ellas, del perfil público.",
    other: { href: "/guadalajara/", label: "También instalamos en Guadalajara" },
  },
  Guadalajara: {
    title: "Polarizado en Guadalajara.",
    lede: "Instalamos en casas, negocios y autos de Guadalajara. El taller está en Zapopan, en Tomás Mann 5348.",
    servicesIntro: "Vamos a tu casa o a tu negocio en Guadalajara. El auto se trabaja en el taller de Zapopan.",
    services: [
      { href: "/residencial/", title: "Casa", text: "Para cotizar una casa en Guadalajara nos bastan fotos y medidas. La instalación se agenda en tu domicilio." },
      { href: "/comercial/", title: "Negocio", text: `Oficinas y locales en Guadalajara. Hay obra pública en el ${airportName}.` },
      { href: "/automotriz/", title: "Auto", text: "El auto se polariza en el taller de Zapopan, con cita. A domicilio solo flotillas o autos de agencia." },
    ],
    irTitle: "La misma Línea IR, en tu cristal de Guadalajara.",
    irText: [
      "En casa, negocio y auto usamos la Línea IR.",
      "La ficha técnica reporta 95% de rechazo infrarrojo, medido a 950 nm.",
      "El tono lo eliges tú, según la luz que quieres dejar pasar.",
    ],
    priceTitle: "Precios desde, para Guadalajara",
    priceLead: "Casa y negocio primero, luego el auto. Todos los precios son más IVA.",
    reviewAuthor: "Christian Chávez",
    reviewLead: "En Google hay +70 reseñas. Aquí va una, de una oficina que ya instalamos.",
    other: { href: "/zapopan/", label: "Ver el taller en Zapopan" },
  },
};

export function LocationLanding({ city }: { city: ServiceCity }) {
  const page = copy[city];
  const faqs = locationFaqs[city];
  const reviews = getGoogleReviews();
  const review = reviews.find((item) => item.author === page.reviewAuthor) ?? reviews[0];

  return (
    <>
      <JsonLd data={locationBusinessSchema()} />
      <JsonLd data={locationFaqSchema(city)} />

      <section className="section location-hero">
        <div className="container location-hero-grid">
          <div>
            <p className="eyebrow">{city}, Jalisco</p>
            <h1>{page.title}</h1>
            <p>{page.lede}</p>
            <div className="location-zone">
              <p>{metroAreaPhrase}</p>
              <p>{zoneExamples[city]}</p>
            </div>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contacto/#cotizar">Cotizar</Link>
              <WhatsAppCTA label="WhatsApp" context={{ sourcePage: `/${city.toLowerCase()}/` }} position="HERO" className="button-secondary" />
            </div>
            <div className="nap-block">
              <strong>{addressLine}</strong>
              <span>{hoursLabel}</span>
              <a href={`tel:${truth.contact.phoneE164}`}>{phoneDisplay}</a>
              <a href={truth.contact.mapsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar en Google Maps</a>
            </div>
          </div>
          <ul className="location-points">
            <li><Icon name="home" size={16} />Casa y negocio se instalan en el inmueble.</li>
            <li><Icon name="car" size={16} />El auto, en el taller de Zapopan, con cita.</li>
            <li><Icon name="check" size={16} />+{googleProfile.count} reseñas en Google.</li>
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Qué instalamos</p>
            <h2>Casa, negocio y auto.</h2>
          </div>
          <p>{page.servicesIntro}</p>
          <div className="location-links location-links-three">
            {page.services.map((item) => (
              <Link href={item.href} key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container location-ir">
          <div className="section-heading">
            <p className="eyebrow">Línea IR</p>
            <h2>{page.irTitle}</h2>
          </div>
          {page.irText.map((text) => <p key={text}>{text}</p>)}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Precios</p>
            <h2>Cuánto cuesta.</h2>
          </div>
          <p>{page.priceLead}</p>
          <PriceBlock
            title={page.priceTitle}
            rows={[
              { label: "Casa y negocio, Línea IR", price: `${money.format(prices.nanoFrom)}`, vat: true, note: "Por metro cuadrado." },
              { label: "Otras películas para casa y negocio", price: `${money.format(prices.architectureFrom)}`, vat: true, note: "Por metro cuadrado. Esmerilado y Reflecta." },
              { label: "Mínimo de proyecto", price: `${money.format(prices.projectMinimum)}`, vat: true, note: "Casa y negocio." },
              { label: "Auto, laterales y medallón", price: `${money.format(prices.autoFrom)}`, vat: true },
              { label: "Parabrisas completo", price: `${money.format(prices.windshieldFrom)}`, vat: true },
            ]}
            footnote="Aceptamos todos los métodos de pago. Película inteligente y seguridad se cotizan sin precio de lista."
          />
        </div>
      </section>

      {review ? (
        <section className="section">
          <div className="container location-review">
            <div className="section-heading">
              <p className="eyebrow">Reseñas</p>
              <h2>+{googleProfile.count} reseñas en Google.</h2>
            </div>
            <p>{page.reviewLead}</p>
            <blockquote>
              <p>{review.quote}</p>
              <footer>
                <cite>{review.author}</cite>
                {review.translatedFrom ? <span>Traducida del {review.translatedFrom}.</span> : null}
                {" "}
                <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer">Ver en Google</a>
              </footer>
            </blockquote>
          </div>
        </section>
      ) : null}

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Preguntas de {city}</p>
            <h2>Antes de pedir la cotización.</h2>
          </div>
          <div className="city-faq">
            {faqs.map((item) => (
              <article key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
          <p className="location-sibling">
            <Link className="text-link text-link-strong" href={page.other.href}>
              {page.other.label} <Icon name="arrow" size={17} />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
