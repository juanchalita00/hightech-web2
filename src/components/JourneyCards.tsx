import Link from "next/link";
import { Icon } from "@/components/Icon";

const journeys = [
  {
    icon: "home" as const,
    title: "Residencial",
    label: "Casa / departamento",
    text: "Confort, claridad, privacidad y compatibilidad del cristal sin convertir tu casa en un espacio oscuro.",
    href: "/residencial/",
    cta: "Ver soluciones residenciales",
  },
  {
    icon: "building" as const,
    title: "Comercial",
    label: "Oficinas / fachadas",
    text: "Proyectos donde importan la imagen del edificio, el acceso, la operación y una especificación consistente.",
    href: "/comercial/",
    cta: "Revisar línea comercial",
  },
  {
    icon: "car" as const,
    title: "Automotriz",
    label: "Instalación en taller",
    text: "Nanocerámica, tonos y visibilidad con una recomendación según vehículo y alcance de instalación.",
    href: "/automotriz/",
    cta: "Ver línea automotriz",
  },
];

export function JourneyCards() {
  return (
    <div className="journey-grid">
      {journeys.map((journey) => (
        <Link href={journey.href} className="journey-card" key={journey.title}>
          <div className="journey-card-icon"><Icon name={journey.icon} size={26}/></div>
          <p className="journey-label">{journey.label}</p>
          <h3>{journey.title}</h3>
          <p>{journey.text}</p>
          <span className="journey-cta">{journey.cta} <Icon name="arrow" size={17}/></span>
        </Link>
      ))}
    </div>
  );
}
