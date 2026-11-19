import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "High Tech Polarizados México",
    short_name: "HIGHTECH",
    description: "High Tech Polarizados México. Películas Hightech para casa, negocio y auto. Instalamos en Zapopan y Guadalajara.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#293462",
    lang: "es-MX",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
