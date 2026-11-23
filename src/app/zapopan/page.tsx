import type { Metadata } from "next";
import { LocationLanding } from "@/components/LocationLanding";

export const metadata: Metadata = {
  alternates: { canonical: "/zapopan/" },
  title: { absolute: "Polarizado en Zapopan, Jalisco | High Tech Polarizados México" },
  description: "Películas Hightech Línea IR para casa, negocio y auto en Zapopan. Taller en Tomás Mann 5348, Jardines Vallarta. +70 reseñas en Google.",
};

export default function Page() {
  return <LocationLanding city="Zapopan" />;
}
