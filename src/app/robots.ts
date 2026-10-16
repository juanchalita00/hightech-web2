import type { MetadataRoute } from "next";
import { isProductionDeployment } from "@/lib/deployment";
import { release, truth } from "@/lib/truth";

export default function robots(): MetadataRoute.Robots {
  if (!isProductionDeployment()) return { rules: { userAgent: "*", disallow: "/" } };
  const disallow = ["/api/"];
  if (!release.production.termsApproved) disallow.push("/legal/terminos-y-condiciones/");
  if (!release.production.privacyApproved) disallow.push("/legal/aviso-de-privacidad/");
  return {
    rules: { userAgent: "*", allow: "/", disallow },
    sitemap: `${truth.site.canonicalBaseUrl}/sitemap.xml`,
    host: truth.site.canonicalBaseUrl,
  };
}
