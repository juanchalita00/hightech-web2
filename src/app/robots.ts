import type { MetadataRoute } from "next";
import { truth } from "@/lib/truth";

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.NEXT_PUBLIC_DEPLOYMENT_ENV === "production";
  if (!isProduction) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${truth.site.canonicalBaseUrl}/sitemap.xml`,
    host: truth.site.canonicalBaseUrl,
  };
}
