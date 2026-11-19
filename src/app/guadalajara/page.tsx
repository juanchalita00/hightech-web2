import type { Metadata } from "next";
import { LocationLanding } from "@/components/LocationLanding";

export const metadata: Metadata = {
  alternates: { canonical: "/guadalajara/" },
  title: { absolute: "Polarizado en Guadalajara | High Tech Polarizados México" },
  description: "Polarizado en Guadalajara: películas para casa, negocio y auto. High Tech Polarizados México instala en Guadalajara y Zapopan, con taller en Tomás Mann 5348, Zapopan.",
};

export default function Page() {
  return <LocationLanding city="Guadalajara" />;
}
