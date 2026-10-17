import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductCTA } from "@/components/ProductCTA";
import { ProductHero } from "@/components/ProductHero";
import { HightechTip } from "@/components/HightechTip";

export const metadata: Metadata = {
  alternates: { canonical: "/peliculas/seguridad/" },
  title: { absolute: "Película de seguridad para cristal | HIGHTECH Polarizados" },
  description: "Película de seguridad que retiene los fragmentos si el cristal se rompe. Garantía de 5 o 10 años según la película. Para casa, negocio y plantas.",
};

const benefits = [
  "Si el cristal se rompe, los fragmentos se quedan adheridos a la película y no se dispersan.",
  "Dificulta un intento de robo o vandalismo: el hueco no se abre de un golpe.",
  "Ayuda cuando hay viento fuerte o un movimiento que empuja el vidrio.",
  "Se puede combinar con control solar o un tono, si el proyecto lo pide.",
  "Corta los rayos UV que decoloran lo que está detrás del cristal.",
];

const uses = [
  ["Vidrio templado", "Canceles, barandales y divisiones que, al romperse, no deberían soltar pedazos."],
  ["Fachadas y muro cortina", "Cristal de piso a techo en oficinas y locales."],
  ["Tragaluces y domos", "Donde un fragmento cae desde arriba."],
  ["Escuelas y hospitales", "Pasillos y áreas donde circula gente."],
  ["Vitrinas y mostradores", "Cristal que se toca todo el día."],
];

export default function SecurityPage() {
  return (
    <>
      <ProductHero
        variant="security"
        eyebrow="Seguridad para cristales"
        title="Si el cristal se rompe, los pedazos se quedan en su lugar."
        description="¿Buscas además más protección contra intentos de robo? Revisamos el vidrio, el marco y la instalación para recomendarte la película. La garantía es de 5 o 10 años, según cuál se instale."
        context={{ sourcePage: "/peliculas/seguridad/", product: "Seguridad", problem: "safety" }}
        facts={[
          { label: "Apariencia", value: "Casi invisible" },
          { label: "Rayos UV", value: "Los bloquea" },
          { label: "Garantía", value: "5 o 10 años" },
        ]}
        image={{
          src: "/images/projects/commercial-office.webp",
          alt: "Oficina con divisiones de cristal en un proyecto documentado por HIGHTECH.",
          caption: "Proyecto documentado por HIGHTECH.",
        }}
      />

      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1.5rem" }}>
          <div className="section-heading">
            <p className="eyebrow">Qué hace</p>
            <h2>El vidrio puede romperse. La película evita que se deshaga.</h2>
          </div>
          <ul className="sarro-uses">
            {benefits.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <HightechTip>
            Piensa en un parabrisas estrellado: se rompe en mil líneas y, aun así, se queda en el marco. La película de seguridad busca ese efecto en una ventana, un cancel o una fachada.
          </HightechTip>
          <p>No es blindaje y no vuelve el cristal irrompible. El espesor se elige según el vidrio y lo que quieres proteger. El precio se cotiza por proyecto; no hay una tarifa de lista.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <p className="eyebrow">Dónde se usa</p>
              <h2>De una casa a una planta.</h2>
            </div>
            <p>La misma idea —retener el vidrio— cambia de escala según el lugar.</p>
          </div>
          <div className="nano-application-grid">
            {uses.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <Link className="text-link" href="/peliculas/seguridad/industria-bpm/">Plantas de alimento, bebida y farmacéutica</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container sarro-grid">
          <div>
            <p className="eyebrow">Instalación</p>
            <h2>Se aplica por dentro, sobre el cristal limpio.</h2>
            <p>Revisamos el tipo de vidrio, el marco y si el objetivo es solo retener fragmentos o también demorar un acceso. Esas dos metas no se resuelven con la misma configuración.</p>
          </div>
          <Image src="/images/projects/residential-process.webp" alt="Aplicación de película sobre un ventanal, como referencia de instalación." width={1200} height={800} style={{ width: "100%", height: "auto", borderRadius: "1rem" }} />
        </div>
      </section>

      <ProductCTA
        title="Cuéntanos qué cristal quieres proteger."
        text="Con una foto y la medida aproximada empezamos."
        cta="WhatsApp"
        context={{ sourcePage: "/peliculas/seguridad/", product: "Seguridad", problem: "safety" }}
        secondaryHref="/peliculas/seguridad/industria-bpm/"
        secondaryLabel="Ver plantas y auditorías"
      />
    </>
  );
}
