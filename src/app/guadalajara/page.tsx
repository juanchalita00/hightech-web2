import type { Metadata } from "next";
import { LocationLanding } from "@/components/LocationLanding";

export const metadata: Metadata = {
  alternates: { canonical: "/guadalajara/" },
  title: { absolute: "Polarizado en Guadalajara | HIGHTECH Polarizados" },
  description: "Películas para cristales en la zona metropolitana de Guadalajara. HIGHTECH atiende casas, negocios y vehículos desde su base en Zapopan, Jalisco.",
};

export default function Page() {
  return <LocationLanding city="Guadalajara" />;
}
