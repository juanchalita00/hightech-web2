import type { Metadata, Viewport } from "next";
import { Overpass, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { CookieNotice } from "@/components/CookieNotice";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { RouteSchema } from "@/components/RouteSchema";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/seo";

const overpass = Overpass({ subsets: ["latin"], variable: "--font-overpass", display: "swap" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export const metadata: Metadata = {
  metadataBase: new URL("https://polarizadoshightech.com"),
  title: { default: "HIGHTECH Polarizados", template: "%s | HIGHTECH Polarizados" },
  description: "Polarizado en Zapopan y Guadalajara para casa, negocio y auto. HIGHTECH Polarizados instala películas que bajan el calor y dejan pasar la luz que eliges.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "HIGHTECH Polarizados",
    images: [{ url: "/og/hightech-og.jpg", width: 1200, height: 630, alt: "HIGHTECH Polarizados · Polarizado nanocerámico para casa, negocio y auto" }],
  },
  twitter: { card: "summary_large_image", images: ["/og/hightech-og.jpg"] },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-icon-180.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <body className={`${overpass.variable} ${sourceSans.variable}`}>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <RouteSchema />
        <a href="#contenido" className="sr-only focus:not-sr-only">Saltar al contenido</a>
        <SiteHeader />
        <main id="contenido">{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
        <CookieNotice />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
