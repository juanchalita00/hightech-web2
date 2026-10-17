import type { NextConfig } from "next";
import redirects from "./content/redirects.json";
import afiliados from "./content/afiliados.json";
import { isProductionDeployment } from "./src/lib/deployment-env";

// Misma detección que robots y los hard gates (VERCEL_ENV > VERCEL_TARGET_ENV > NEXT_PUBLIC_DEPLOYMENT_ENV).
const isProduction = isProductionDeployment();

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  ...(isProduction ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" }] : []),
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: { formats: ["image/avif", "image/webp"], remotePatterns: [] },
  async redirects() {
    const base = redirects
      .filter((item) => item.status === "APPROVED")
      .map((item) => ({ source: item.source, destination: item.destination, statusCode: item.code as 301 | 302 | 303 | 307 | 308 }));
    // Afiliados: /<slug> y /<slug>/ abren WhatsApp con el mensaje del afiliado.
    // Doble codificación: Next decodifica el query del destino una vez al armar el Location.
    const affiliates = Object.entries(afiliados).flatMap(([slug, { message }]) => {
      const destination = `https://wa.me/523322289017?text=${encodeURIComponent(encodeURIComponent(message))}`;
      return [`/${slug}`, `/${slug}/`].map((source) => ({ source, destination, statusCode: 302 as const }));
    });
    return [...base, ...affiliates];
  },
  async headers() { return [{ source: "/(.*)", headers: securityHeaders }]; },
};

export default nextConfig;
