import type { Metadata } from "next";
import { LocationLanding } from "@/components/LocationLanding";

export const metadata: Metadata = {
  alternates: { canonical: "/zapopan/" },
  title: { absolute: "Polarizado en Zapopan, Jalisco | HIGHTECH Polarizados" },
  description: "HIGHTECH Polarizados tiene su base en Zapopan. Instalación de películas residenciales, comerciales y automotrices, con cobertura en la zona metropolitana de Guadalajara.",
};

export default function Page() {
  return <LocationLanding city="Zapopan" />;
}
