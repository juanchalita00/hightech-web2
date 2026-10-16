"use client";

import { usePathname } from "next/navigation";
import { prices } from "@/lib/public-facts";

const origin = "https://polarizadoshightech.com";

const names: Record<string, string> = {
  "/residencial/": "Polarizado para casa",
  "/comercial/": "Polarizado para negocio",
  "/automotriz/": "Polarizado para auto",
  "/peliculas/": "Películas",
  "/peliculas/nanoceramica/": "Nanocerámica",
  "/peliculas/plata-reflecta/": "Plata Reflecta",
  "/peliculas/seguridad/": "Película de seguridad",
  "/peliculas/seguridad/industria-bpm/": "Plantas y BPM",
  "/peliculas/privacidad/": "Privacidad",
  "/pelicula-inteligente-pdlc/": "Película inteligente",
  "/guias/": "Guías",
  "/galeria/": "Galería",
  "/proyectos/": "Proyectos",
  "/garantias/": "Garantías",
  "/nosotros/": "Nosotros",
  "/contacto/": "Contacto",
  "/servicios/": "Servicios",
  "/preguntas-frecuentes/": "Preguntas frecuentes",
  "/zapopan/": "Polarizado en Zapopan",
  "/guadalajara/": "Polarizado en Guadalajara",
};

const services: Record<string, { name: string; description: string; minPrice?: number; unitText?: string }> = {
  "/automotriz/": {
    name: "Polarizado automotriz en Zapopan",
    description: `Laterales, medallón y parabrisas completo con nanocerámica. Desde $${prices.autoFrom.toLocaleString("es-MX")} en auto compacto; parabrisas completo desde $${prices.windshieldFrom.toLocaleString("es-MX")}. Garantía de 10 años.`,
    minPrice: prices.autoFrom,
  },
  "/residencial/": {
    name: "Polarizado residencial en Zapopan",
    description: `Película para casa que baja el calor del sol. Nanocerámica desde $${prices.nanoFrom.toLocaleString("es-MX")} por metro cuadrado; otras películas desde $${prices.architectureFrom.toLocaleString("es-MX")}. Mínimo de proyecto $${prices.projectMinimum.toLocaleString("es-MX")}.`,
    minPrice: prices.architectureFrom,
    unitText: "m²",
  },
  "/comercial/": {
    name: "Polarizado comercial en Guadalajara y Zapopan",
    description: `Película para oficinas, locales y fachadas. Nanocerámica desde $${prices.nanoFrom.toLocaleString("es-MX")} por metro cuadrado; otras películas desde $${prices.architectureFrom.toLocaleString("es-MX")}. Mínimo de proyecto $${prices.projectMinimum.toLocaleString("es-MX")}.`,
    minPrice: prices.architectureFrom,
    unitText: "m²",
  },
  "/peliculas/seguridad/": {
    name: "Película de seguridad para cristal",
    description: "Si el cristal se rompe, los pedazos se quedan en la película. Garantía de 5 o 10 años según la película. El precio se cotiza.",
  },
  "/peliculas/seguridad/industria-bpm/": {
    name: "Película de seguridad para plantas",
    description: "Ayuda a cumplir el punto de control de vidrio que revisan los auditores de alimentos, bebidas y farmacéutica. No certifica la planta.",
  },
  "/pelicula-inteligente-pdlc/": {
    name: "Película inteligente PDLC",
    description: "Con un botón, el cristal interior pasa de opaco a transparente. El precio se cotiza y la visita técnica es obligatoria.",
  },
};

function titleFor(path: string, segment: string) {
  if (names[path]) return names[path];
  if (segment.startsWith("ir")) return segment.toUpperCase();
  return segment.replace(/-/g, " ");
}

export function RouteSchema() {
  const pathname = usePathname() || "/";
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const parts = path.split("/").filter(Boolean);
  const crumbs = [{ name: "Inicio", path: "/" }];
  let acc = "";
  for (const part of parts) {
    acc += `/${part}/`;
    crumbs.push({ name: titleFor(acc, part), path: acc });
  }
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${origin}${crumb.path}`,
    })),
  };
  const service = services[path];
  const serviceSchema = service
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.description,
        serviceType: service.name,
        areaServed: ["Zapopan", "Guadalajara"],
        provider: { "@id": `${origin}/#localbusiness` },
        url: `${origin}${path}`,
        ...(service.minPrice
          ? {
              offers: {
                "@type": "Offer",
                priceCurrency: "MXN",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  minPrice: service.minPrice,
                  priceCurrency: "MXN",
                  ...(service.unitText ? { unitText: service.unitText } : {}),
                },
              },
            }
          : {}),
      }
    : null;
  const blocks = [breadcrumb, serviceSchema].filter(Boolean);
  return (
    <>
      {blocks.map((data) => (
        <script
          key={(data as { "@type": string })["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
