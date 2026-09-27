import { SimplePage } from "@/components/SimplePage";

export const metadata = { alternates: { canonical: "/servicios/" }, title: "Servicios" };

export default function Page() {
  return <SimplePage eyebrow="Soluciones por necesidad" title="No necesitas saber qué película elegir." description="Empieza por lo que quieres resolver: calor, UV, deslumbramiento, privacidad, seguridad o una aplicación automotriz." ctaLabel="Encontrar mi solución" context={{ sourcePage: "/servicios/" }} />;
}
