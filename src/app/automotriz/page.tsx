import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationHero } from "@/components/ApplicationHero";
import { FAQList } from "@/components/FAQList";
import { InstallTimes } from "@/components/InstallTimes";
import { JaliscoLaw } from "@/components/JaliscoLaw";
import { JsonLd } from "@/components/JsonLd";
import { LeadMagnet } from "@/components/LeadMagnet";
import { ProductCTA } from "@/components/ProductCTA";
import { SimpleExample } from "@/components/SimpleExample";
import { automotiveOnSiteAnswer, automotiveOnSiteQuestion, automotiveOnSiteSchema } from "@/lib/automotive-onsite";
import { onSitePolicy, prices } from "@/lib/public-facts";

export const metadata: Metadata = {
  alternates: { canonical: "/automotriz/" },
  title: { absolute: "Polarizado para auto en Zapopan | HIGHTECH Polarizados" },
  description: "Polarizado nanocerámico para auto en Zapopan. Delanteras en 75, traseras y medallón en 35 o más claro, sin película en el parabrisas. Desde $3,500 en auto compacto.",
};

const money = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(prices.autoFrom);

const faqs = [
  {
    question: "¿Más oscuro protege más del calor?",
    answer: (
      <p>
        No de la forma en que suele pensarse. Todos los tonos bloquean los rayos UV y el calor que se siente en la piel junto a un cristal con sol.
        El más oscuro gana un poco más de protección total y mucha más privacidad, y de noche se ve menos. El 5 es el único que a algunas personas les cuesta de noche.
      </p>
    ),
  },
  {
    question: "¿Puedo polarizar el parabrisas?",
    answer: (
      <p>
        No. En Jalisco el parabrisas va sin película. Las delanteras llevan el tono 75, el más claro. Traseras y medallón pueden ir en 35, 50 o 75.
        El 15 y el 5 son para casa y negocio, no para el auto. <Link href="/guias/polarizado-automotriz-jalisco/">Ver la guía de Jalisco</Link>.
      </p>
    ),
  },
  {
    question: automotiveOnSiteQuestion,
    answer: <p>{automotiveOnSiteAnswer}</p>,
  },
  {
    question: "¿Cuánto cuesta?",
    answer: <p>Desde {money}, laterales y medallón de un auto compacto. Un parcial o un vehículo más grande se cotiza aparte.</p>,
  },
  {
    question: "¿Qué garantía tiene?",
    answer: <p>La nanocerámica de auto tiene 10 años de garantía. <Link href="/garantias/">Ver garantías</Link>.</p>,
  },
];

export default function AutomotivePage() {
  return (
    <>
      <JsonLd data={automotiveOnSiteSchema} />
      <ApplicationHero
        variant="automotive"
        eyebrow="Polarizado automotriz · Zapopan"
        title="Polarizado para tu auto, a tu gusto."
        description="Te ayudamos a elegir el tono: más claro para ver de noche, o un poco más oscuro atrás para más privacidad. Todos bajan el calor del sol. En el parabrisas no instalamos película."
        ctaLabel="Cotizar"
        context={{ sourcePage: "/automotriz/", businessLine: "automotive", product: "Nanocerámica" }}
        proofItems={["Delanteras en 75", "Garantía de 10 años", onSitePolicy]}
      />

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <p className="eyebrow">El calor y el tono</p>
              <h2>Más oscuro no siempre es mejor.</h2>
            </div>
            <p>
              Todos los tonos bloquean el 99% de los rayos UV y casi todo el calor del sol que se siente en la piel.
              Si lo pones más oscuro, ganas un poco más de protección y mucha más privacidad, pero ves menos hacia afuera.
            </p>
          </div>
          <SimpleExample>
            El calor del sol en el auto es el mismo que sientes en la piel junto a una ventana, o el que deja un asiento de piel que quema.
            La película corta ese calor. El tono cambia sobre todo la luz y la privacidad, no es un interruptor de más o menos calor.
          </SimpleExample>
          <p className="price-line">Desde {money}. Incluye laterales y medallón de un auto compacto.</p>
          <p><Link className="text-link" href="/peliculas/nanoceramica/">¿Cuál tono me conviene?</Link></p>
        </div>
      </section>

      <JaliscoLaw />

      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1.5rem" }}>
          <LeadMagnet />
        </div>
      </section>

      <InstallTimes />

      <section className="section">
        <div className="container faq-page-grid">
          <div>
            <p className="eyebrow">Antes de agendar</p>
            <h2>Preguntas de auto.</h2>
          </div>
          <FAQList items={faqs} />
        </div>
      </section>

      <ProductCTA
        title="Cuéntanos el auto y el tono que te imaginas."
        text={onSitePolicy}
        cta="WhatsApp"
        context={{ sourcePage: "/automotriz/", businessLine: "automotive" }}
        secondaryHref="/guias/polarizado-automotriz-jalisco/"
        secondaryLabel="Ver la guía de Jalisco"
      />
    </>
  );
}
