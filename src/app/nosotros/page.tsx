import type { Metadata } from "next";
import Link from "next/link";
import { GoogleReviews } from "@/components/GoogleReviews";
import { ProcessRail } from "@/components/ProcessRail";
import { TrustHero } from "@/components/TrustHero";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { addressLine, hoursLabel } from "@/lib/public-facts";

export const metadata: Metadata = {
  alternates: { canonical: "/nosotros/" },
  title: { absolute: "Nosotros | HIGHTECH Polarizados en Zapopan" },
  description: "HIGHTECH Polarizados instala en Zapopan desde Tomás Mann 5348. Casa, negocio y auto, con garantía de 10 años en nanocerámica.",
};

const process = [
  { number: "01", title: "Entendemos qué te molesta", text: "Calor, luz de más, privacidad o un cristal que quieres proteger." },
  { number: "02", title: "Vemos el vidrio", text: "Casa, negocio o auto. Medidas, orientación y cuánta luz quieres conservar." },
  { number: "03", title: "Elegimos la película", text: "El tono cambia la luz y la privacidad. El calor del sol se corta en todos." },
  { number: "04", title: "Cotizamos e instalamos", text: "Precio del trabajo concreto y una fecha. En auto, con cita en el taller." },
] as const;

export default function Page() {
  return (
    <>
      <TrustHero
        eyebrow="HIGHTECH Polarizados"
        title="Polarizado en Zapopan, con el cristal como punto de partida."
        description="Primero vemos qué te molesta. Después elegimos la película y el tono."
        points={["Taller en Jardines Vallarta", "Casa y negocio en la zona", "Auto en taller con cita"]}
      />
      <section className="section" id="logo">
        <div className="container logo-story">
          <div>
            <p className="eyebrow">Detrás de nuestro logo</p>
            <h2>Una línea, un cristal, los rayos.</h2>
            <p>La frase de la marca es protección para una mejor calidad de vida.</p>
          </div>
          <ul>
            <li>Las dos palabras van juntas, en una sola línea de horizonte.</li>
            <li>La i no lleva punto: el círculo se quitó a propósito.</li>
            <li>La letra capital tiene un trazo propio, para que se reconozca de lejos.</li>
            <li>Los rayos del sol intentan cruzar un cristal ya protegido.</li>
          </ul>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">El taller</p>
            <h2>Dónde estamos.</h2>
          </div>
          <p>{addressLine}</p>
          <p>{hoursLabel}</p>
          <p>La nanocerámica, en casa y en auto, tiene 10 años de garantía. La película de seguridad, 5 o 10 según cuál se instale.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">Proceso</p><h2>Una conversación antes de instalar.</h2></div>
          <ProcessRail steps={process} />
        </div>
      </section>
      <GoogleReviews />
      <section className="section final-cta-section">
        <div className="container final-cta-card">
          <div><p className="eyebrow eyebrow-light">Siguiente paso</p><h2>Cuéntanos el cristal.</h2></div>
          <div className="final-cta-actions">
            <Link href="/contacto/#cotizar" className="button button-light">Cotizar</Link>
            <WhatsAppCTA label="WhatsApp" context={{ sourcePage: "/nosotros/" }} position="FINAL_CTA" className="button-ghost-light" />
          </div>
        </div>
      </section>
    </>
  );
}
