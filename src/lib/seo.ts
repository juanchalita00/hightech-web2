import { socialSameAs } from "@/lib/social";
import { truth } from "@/lib/truth";

export function canonicalUrl(path = "/") {
  const normalized = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  return new URL(normalized, truth.site.canonicalBaseUrl).toString();
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${truth.site.canonicalBaseUrl}/#organization`,
    name: truth.brand.name,
    url: truth.site.canonicalBaseUrl,
    telephone: truth.contact.phoneE164,
    email: truth.contact.emailSales,
    sameAs: socialSameAs(),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${truth.site.canonicalBaseUrl}/#website`,
    url: truth.site.canonicalBaseUrl,
    name: truth.brand.name,
    publisher: { "@id": `${truth.site.canonicalBaseUrl}/#organization` },
    inLanguage: "es-MX",
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${truth.site.canonicalBaseUrl}/#localbusiness`,
    name: truth.brand.name,
    url: truth.site.canonicalBaseUrl,
    image: `${truth.site.canonicalBaseUrl}/brand/hightech-logo.png`,
    telephone: truth.contact.phoneE164,
    email: truth.contact.emailSales,
    parentOrganization: { "@id": `${truth.site.canonicalBaseUrl}/#organization` },
    sameAs: socialSameAs(),
    address: {
      "@type": "PostalAddress",
      streetAddress: truth.contact.exactAddress.streetAddress,
      addressLocality: truth.contact.exactAddress.addressLocality,
      addressRegion: truth.contact.exactAddress.addressRegion,
      postalCode: truth.contact.exactAddress.postalCode,
      addressCountry: truth.contact.exactAddress.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.6839,
      longitude: -103.4262,
    },
    hasMap: truth.contact.mapsUrl,
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Zapopan" },
      { "@type": "City", name: "Guadalajara" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "21:00",
      },
    ],
  };
}
