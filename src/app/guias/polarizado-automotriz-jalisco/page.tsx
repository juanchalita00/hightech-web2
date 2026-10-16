import type { Metadata } from "next";
import Link from "next/link";
import { GuideHero } from "@/components/GuideHero";
import { JaliscoLaw } from "@/components/JaliscoLaw";
import { LeadMagnet } from "@/components/LeadMagnet";
import { ProductCTA } from "@/components/ProductCTA";
import { SimpleExample } from "@/components/SimpleExample";

export const metadata: Metadata = {
  alternates: { canonical: "/guias/polarizado-automotriz-jalisco/" },
  title: { absolute: "Polarizado automotriz en Jalisco: qué tono va en cada cristal | HIGHTECH Polarizados" },
  description: "En Jalisco, las ventanas delanteras van en 75, las traseras y el medallón en 35 o más claro, y el parabrisas sin película. Fuente: Secretaría de Movilidad de Jalisco, vigente 2026.",
};

export default function Page() {
  return (
    <>
      <GuideHero
        eyebrow="Guía · Jalisco"
        title="Polarizado en Jalisco: el número del taller y el de la autoridad no se leen igual."
        description="Movilidad habla de qué tan oscuro se ve el cristal. En el taller, 75 significa que deja pasar mucha luz. Por eso el tono claro de las delanteras es 75, no un número chico."
        category="Automotriz"
        ctaHref="/automotriz/"
        ctaLabel="Ver polarizado para auto"
      />
      <JaliscoLaw />
      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1.25rem", maxWidth: "46rem" }}>
          <h2>Cómo leer los dos números.</h2>
          <p>
            La infografía de la Secretaría de Movilidad de Jalisco permite hasta 30% de oscuridad en los vidrios delanteros
            y hasta 70% en traseros y medallón. El parabrisas va en cero: sin polarizado. También piden que se pueda ver el interior,
            y el entintado de fábrica sí se permite porque no pasa de ese nivel.
          </p>
          <p>
            Traducido a los tonos que instalamos: delanteras, solo 75. Traseras y medallón, 35, 50 o 75. El 15 y el 5 se quedan en casa y negocio.
          </p>
          <SimpleExample>
            Una persiana abierta al 75% deja entrar casi toda la luz del cuarto. Abierta al 35%, la sala se ve más en penumbra.
            El 5 es casi cerrarla: de noche, algunas personas batallan para ver hacia afuera. Por eso ese aviso vive solo en el tono 5.
          </SimpleExample>
          <LeadMagnet />
          <p><Link href="/automotriz/">Volver al polarizado para auto</Link></p>
        </div>
      </section>
      <ProductCTA
        title="Si ya tienes el auto en mente, lo aterrizamos en el taller."
        text="En taller con cita. A domicilio solo flotillas o autos de agencia."
        cta="WhatsApp"
        context={{ sourcePage: "/guias/polarizado-automotriz-jalisco/", businessLine: "automotive" }}
        secondaryHref="/peliculas/nanoceramica/"
        secondaryLabel="Ver los tonos"
      />
    </>
  );
}
