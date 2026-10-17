import type { Metadata } from "next";
import Link from "next/link";
import { FAQList } from "@/components/FAQList";
import { JsonLd } from "@/components/JsonLd";
import { ProductCTA } from "@/components/ProductCTA";
import { TrustHero } from "@/components/TrustHero";
import { automotiveOnSiteAnswer, automotiveOnSiteQuestion, automotiveOnSiteSchema } from "@/lib/automotive-onsite";
import { hoursLabel, prices } from "@/lib/public-facts";

export const metadata: Metadata = {
  alternates: { canonical: "/preguntas-frecuentes/" },
  title: { absolute: "Preguntas frecuentes de polarizado | HIGHTECH Polarizados" },
  description: "Respuestas claras sobre polarizado en Zapopan: calor, luz, auto en Jalisco, tiempos, garantía y precios desde.",
};

const autoFrom = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(prices.autoFrom);
const archFrom = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(prices.architectureFrom);
const nanoFrom = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(prices.nanoFrom);
const windshield = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(prices.windshieldFrom);
const minimum = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(prices.projectMinimum);

const items = [
  {
    question: "¿Nanocerámica significa más oscuro?",
    answer: <p>No. Es la tecnología que corta el calor y los rayos UV. El tono, del 75 al 5, es cuánta luz quieres dejar pasar. <Link href="/guias/que-es-vlt/">Ver cómo se lee la luz</Link>.</p>,
  },
  {
    question: "¿Un tono más oscuro quita más calor?",
    answer: <p>Quita un poco más, menos de lo que la gente espera. Todos los tonos cortan el calor que se siente en la piel junto a la ventana. El oscuro cambia sobre todo la privacidad y la luz. <Link href="/guias/irr-vs-tser/">Calor y tono, en claro</Link>.</p>,
  },
  {
    question: "¿La privacidad se mantiene de noche?",
    answer: <p>Depende de dónde esté la luz. Si la sala está encendida y afuera está oscuro, se ve más hacia adentro. <Link href="/guias/privacidad-ventanas-noche/">Privacidad de noche</Link>.</p>,
  },
  {
    question: automotiveOnSiteQuestion,
    answer: <p>{automotiveOnSiteAnswer} <Link href="/automotriz/">Ver polarizado para auto</Link>.</p>,
  },
  {
    question: "¿Qué tono me conviene en el auto?",
    answer: <p>Lo más común es 75 al frente y 35 o más claro atrás, para mantener buena visibilidad hacia el interior. También instalamos parabrisas completo. Te asesoramos para elegir. <Link href="/guias/polarizado-automotriz-jalisco/">Ver la guía</Link>.</p>,
  },
  {
    question: "¿Cuánto cuesta?",
    answer: <p>Auto desde {autoFrom} (laterales y medallón, compacto); parabrisas completo desde {windshield}. Nanocerámica para casa y negocio desde {nanoFrom} por metro cuadrado; otras películas desde {archFrom}. Mínimo de proyecto {minimum}. Película inteligente y seguridad se cotizan sin precio de lista.</p>,
  },
  {
    question: "¿Qué garantía tiene?",
    answer: <p>Nanocerámica y automotriz, 10 años. Seguridad, 5 o 10 años según la película. <Link href="/garantias/">Ver garantías</Link>.</p>,
  },
  {
    question: "¿Cuánto tarda el auto?",
    answer: <p>Dos laterales, 40 a 60 minutos. El auto completo, cerca de 3 horas. Calculamos de 20 a 30 minutos por ventana. <Link href="/automotriz/#tiempos">Ver tiempos y espera</Link>.</p>,
  },
  {
    question: "¿Cuál es el horario?",
    answer: <p>{hoursLabel}</p>,
  },
  {
    question: "¿Hay que quitar una película vieja?",
    answer: <p>Si ya hay una, revisamos si hay que retirarla. Eso puede alargar el trabajo.</p>,
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={automotiveOnSiteSchema} />
      <TrustHero
        eyebrow="Preguntas frecuentes"
        title="Polarizado, en corto."
        description="Calor, luz, auto y tiempos. Si tu cristal tiene una condición rara, la respuesta se cierra en la cotización."
        points={["Casa, negocio y auto", "Tonos en Jalisco", "Precios desde"]}
      />
      <section className="section">
        <div className="container faq-page-grid">
          <div>
            <p className="eyebrow">Dudas comunes</p>
            <h2>Lo esencial antes de cotizar.</h2>
          </div>
          <FAQList items={items} />
        </div>
      </section>
      <ProductCTA
        title="Si tu caso no está en la lista, lo vemos con el cristal enfrente."
        text="Mándanos fotos o el modelo del auto."
        cta="WhatsApp"
        context={{ sourcePage: "/preguntas-frecuentes/" }}
        secondaryHref="/guias/"
        secondaryLabel="Explorar guías"
      />
    </>
  );
}
