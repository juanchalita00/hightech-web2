import type { MetadataRoute } from "next";
import { isProductionDeployment } from "@/lib/deployment";
import { truth } from "@/lib/truth";

export default function robots(): MetadataRoute.Robots {
  if (!isProductionDeployment()) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${truth.site.canonicalBaseUrl}/sitemap.xml`,
    host: truth.site.canonicalBaseUrl,
  };
}
