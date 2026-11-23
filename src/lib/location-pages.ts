import { localBusinessSchema } from "@/lib/seo";
import { addressLine, airportName, hoursLabel, onSitePolicy } from "@/lib/public-facts";

/**
 * Zona de atención, confirmada por Fer, 23 nov 2026, 16:26.
 * Se atiende toda la zona metropolitana de Guadalajara.
 * Ejemplos de donde más se trabaja: en Zapopan, Puerta de Hierro, Valle Real y Andares;
 * en Guadalajara, Providencia. No es una lista cerrada ni una promesa de exclusividad.
 * El areaServed del schema sigue siendo solo las ciudades Zapopan y Guadalajara.
 */
export const metroAreaPhrase = "Atendemos toda la zona metropolitana de Guadalajara.";

export const zoneExamples = {
  Zapopan: "En Zapopan, donde más trabajamos es en Puerta de Hierro, Valle Real y Andares.",
  Guadalajara: "En Guadalajara, donde más trabajamos es en Providencia.",
} as const;

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

/** LocalBusiness del sitio, con openingHoursSpecification de public-facts / seo.ts. */
export function locationBusinessSchema() {
  return localBusinessSchema();
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
