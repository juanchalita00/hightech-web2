import type { Metadata } from "next";
import { LocationLanding } from "@/components/LocationLanding";

export const metadata: Metadata = {
  alternates: { canonical: "/zapopan/" },
  title: { absolute: "Polarizado en Zapopan, Jalisco | High Tech Polarizados México" },
  description: "Polarizado en Zapopan: películas para casa, negocio y auto. High Tech Polarizados México instala en Zapopan y la zona metropolitana de Guadalajara, con taller en Tomás Mann 5348.",
};

export default function Page() {
  return <LocationLanding city="Zapopan" />;
}
