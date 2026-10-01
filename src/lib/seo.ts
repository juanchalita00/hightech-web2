import { getPublicAddress, truth } from "@/lib/truth";

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
  const address = getPublicAddress();
  if (!address) return null;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${truth.site.canonicalBaseUrl}/#localbusiness`,
    name: truth.brand.name,
    url: truth.site.canonicalBaseUrl,
    telephone: truth.contact.phoneE164,
    email: truth.contact.emailSales,
    parentOrganization: { "@id": `${truth.site.canonicalBaseUrl}/#organization` },
    hasMap: truth.contact.mapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
  };
}
