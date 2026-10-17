import type { Metadata } from "next";
import Link from "next/link";
import { GuideHero } from "@/components/GuideHero";
import { JaliscoLaw } from "@/components/JaliscoLaw";
import { LeadMagnet } from "@/components/LeadMagnet";
import { ProductCTA } from "@/components/ProductCTA";
import { HightechTip } from "@/components/HightechTip";

export const metadata: Metadata = {
  alternates: { canonical: "/guias/polarizado-automotriz-jalisco/" },
  title: { absolute: "Polarizado automotriz en Jalisco: qué tono va en cada cristal | HIGHTECH Polarizados" },
  description: "Qué tono se usa en cada cristal del auto en Jalisco, qué dice la regla y qué vemos en la práctica en Guadalajara. Te asesoramos para elegir con buena visibilidad.",
};

export default function Page() {
  return (
    <>
      <GuideHero
        eyebrow="Guía · Jalisco"
        title="Polarizado en Jalisco: cómo leer los tonos."
        description="En el taller, 75 significa que el cristal deja pasar mucha luz: es el tono más claro. Aquí te explicamos cómo leer los números y cómo elegir con buena visibilidad."
        category="Automotriz"
        ctaHref="/automotriz/"
        ctaLabel="Ver polarizado para auto"
      />
      <JaliscoLaw />
      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1.25rem", maxWidth: "46rem" }}>
          <h2>Cómo leer los dos números.</h2>
          <p>
            La Secretaría de Movilidad habla de qué tan oscuro se ve el cristal; en el taller hablamos al revés, de la luz que deja pasar.
            Por eso un número más alto es un tono más claro. Lo que importa en los dos casos es que se pueda ver hacia el interior.
          </p>
          <p>
            Lo más común en el auto son los tonos 75, 50 y 35. El 15 y el 5 son más oscuros y se usan sobre todo en casa y negocio; si te interesan para el auto, lo platicamos.
          </p>
          <HightechTip>
            Unos lentes de sol claros dejan pasar casi toda la luz; unos muy oscuros te dejan ver menos, sobre todo de noche.
            Con la película pasa igual: el 75 es el más claro y el 5 el más oscuro, por eso el 5 es el que a algunas personas les cuesta de noche.
          </HightechTip>
          <LeadMagnet />
          <p><Link href="/automotriz/">Volver al polarizado para auto</Link></p>
        </div>
      </section>
      <ProductCTA
        title="Si ya tienes el auto en mente, lo vemos en el taller."
        text="En taller con cita. A domicilio solo flotillas o autos de agencia."
        cta="WhatsApp"
        context={{ sourcePage: "/guias/polarizado-automotriz-jalisco/", businessLine: "automotive" }}
        secondaryHref="/peliculas/nanoceramica/"
        secondaryLabel="Ver los tonos"
      />
    </>
  );
}
