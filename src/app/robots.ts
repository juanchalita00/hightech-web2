import type { MetadataRoute } from "next";
import { isProductionDeployment } from "@/lib/deployment";
import { release, truth } from "@/lib/truth";

export default function robots(): MetadataRoute.Robots {
  if (!isProductionDeployment()) return { rules: { userAgent: "*", disallow: "/" } };
  const disallow = ["/api/"];
  if (!release.production.termsApproved) disallow.push("/legal/terminos-y-condiciones/");
  // El aviso de privacidad ya no se bloquea en robots (Fer, 23 nov 2026): debe poder rastrearse.
  // La página sigue con noindex y fuera del sitemap hasta que privacyApproved pase a true.
  return {
    rules: { userAgent: "*", allow: "/", disallow },
    sitemap: `${truth.site.canonicalBaseUrl}/sitemap.xml`,
    host: truth.site.canonicalBaseUrl,
  };
}
