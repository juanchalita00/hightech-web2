import type { Metadata } from "next";
import { LocationLanding } from "@/components/LocationLanding";

export const metadata: Metadata = {
  alternates: { canonical: "/guadalajara/" },
  title: { absolute: "Polarizado en Guadalajara | High Tech Polarizados México" },
  description: "Películas Hightech Línea IR para casa, negocio y auto en Guadalajara. Instalamos desde el taller en Zapopan. 95% de rechazo infrarrojo. +70 reseñas.",
};

export default function Page() {
  return <LocationLanding city="Guadalajara" />;
}
