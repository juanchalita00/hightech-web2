import type { Metadata } from "next";
import { GuideCard } from "@/components/GuideCard";
import { GuideHero } from "@/components/GuideHero";

export const metadata: Metadata = {
  alternates: { canonical: "/guias/" },
  title: { absolute: "Guías de polarizado | HIGHTECH Polarizados" },
  description: "Guías en claro sobre calor, rayos UV, luz, privacidad de noche y el tono del auto en Jalisco.",
};

const guides = [
  { href: "/guias/reducir-calor-ventanas/", category: "Calor", title: "Cómo bajar el calor que entra por las ventanas", description: "El calor que sientes en la piel junto al cristal, y por qué oscurecer no lo resuelve solo." },
  { href: "/guias/proteccion-uv-ventanas/", category: "Rayos UV", title: "Qué hacen los rayos UV en una ventana", description: "Los mismos rayos del protector solar, y qué sí puede hacer una película por pisos y muebles." },
  { href: "/guias/irr-vs-tser/", category: "Calor", title: "El calor del sol y el tono no son la misma cosa", description: "Todos los tonos cortan el calor que se siente. La protección total varía un poco, menos de lo que parece." },
  { href: "/guias/que-es-vlt/", category: "Luz", title: "Qué significa 75, 50, 35, 15 y 5", description: "El número es la luz que deja pasar. Un número más alto es un cristal más claro." },
  { href: "/guias/privacidad-ventanas-noche/", category: "Privacidad", title: "Por qué de noche se puede ver hacia adentro", description: "La privacidad sigue a la luz. Si la sala está encendida, el cristal deja de esconder." },
  { href: "/guias/estres-termico-cristal/", category: "El vidrio", title: "Por qué el tipo de vidrio importa", description: "Un cristal grande al sol se calienta de forma dispareja. La película se elige con eso en cuenta." },
  { href: "/guias/polarizado-automotriz-jalisco/", category: "Auto · Jalisco", title: "Qué tono va en cada cristal del auto", description: "Cómo leer los tonos del auto, qué dice la regla en Jalisco y qué vemos en la práctica en Guadalajara." },
] as const;

export default function GuidesPage() {
  return (
    <>
      <GuideHero
        eyebrow="Guías"
        title="Polarizado, explicado antes de elegir."
        description="Primero la idea. Después, si hace falta, el dato. Sirven para llegar a la cotización sabiendo qué preguntar."
        category="Casa, negocio y auto"
        readingTime="Siete guías"
      />
      <section className="section guide-index-section">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">Empieza por la duda</p><h2>Calor, luz, privacidad o el auto.</h2></div>
          <div className="guide-card-grid">{guides.map((guide) => <GuideCard key={guide.href} {...guide} />)}</div>
        </div>
      </section>
    </>
  );
}
