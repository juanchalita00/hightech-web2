import type { NextConfig } from "next";
import redirects from "./content/redirects.json";
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
    return redirects
      .filter((item) => item.status === "APPROVED")
      .map((item) => ({ source: item.source, destination: item.destination, statusCode: item.code as 301 | 302 | 303 | 307 | 308 }));
  },
  async headers() { return [{ source: "/(.*)", headers: securityHeaders }]; },
};

export default nextConfig;
