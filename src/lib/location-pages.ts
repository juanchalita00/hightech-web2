import { localBusinessSchema } from "@/lib/seo";
import { addressLine, airportName, hoursLabel, onSitePolicy } from "@/lib/public-facts";

/**
 * PENDIENTE — colonias y zonas atendidas, además de las ciudades.
 * No hay una lista confirmada en public-facts.ts, publication-truth.json,
 * claims.json, gallery.json ni projects.json, ni en los docs del proyecto.
 * Lo único con fuente es: el taller está en Jardines Vallarta, Zapopan;
 * y se atiende Zapopan, Guadalajara y la zona metropolitana de Guadalajara.
 *
 * Se retiraron de la vista, por no tener fuente, estas colonias que solo
 * vivían en LocationLanding:
 * - Zapopan: Puerta de Hierro, Andares, Valle Real, Colinas de San Javier,
 *   Puerta Plata, Providencia.
 * - Guadalajara: Americana, Lafayette, Country Club, Monraz, Colomos,
 *   Chapultepec.
 */

export type ServiceCity = "Zapopan" | "Guadalajara";

export const locationFaqs = {
  Zapopan: [
    {
      q: "¿El taller está en Zapopan?",
      a: `Sí. ${addressLine} ${hoursLabel}`,
    },
    {
      q: "¿Instalan el auto en mi casa?",
      a: onSitePolicy,
    },
    {
      q: "¿Van a domicilio para una casa o un negocio?",
      a: "Con fotos y medidas aproximadas empezamos. La instalación se agenda en la dirección del inmueble.",
    },
    {
      q: "¿Facturan?",
      a: "Sí, facturamos todos nuestros trabajos. Pídela al cotizar.",
    },
  ],
  Guadalajara: [
    {
      q: "¿Tienen obra en Guadalajara?",
      a: `Sí. El caso público es el ${airportName}: un pasillo de cristal junto a la plataforma.`,
    },
    {
      q: "¿Hay que ir a Zapopan para cotizar una casa?",
      a: "No. Con fotos y medidas aproximadas empezamos. La instalación se agenda en la dirección del inmueble.",
    },
    {
      q: "¿El auto se polariza en Guadalajara?",
      a: onSitePolicy,
    },
    {
      q: "¿Facturan?",
      a: "Sí, facturamos todos nuestros trabajos. Pídela al cotizar.",
    },
  ],
} as const;

/** LocalBusiness igual al del sitio, sin openingHours: el horario no se agrega al schema de estas páginas hasta que Fer lo confirme otra vez. */
export function locationBusinessSchema() {
  const { openingHoursSpecification: _hours, ...business } = localBusinessSchema();
  return business;
}

export function locationFaqSchema(city: ServiceCity) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es-MX",
    mainEntity: locationFaqs[city].map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
