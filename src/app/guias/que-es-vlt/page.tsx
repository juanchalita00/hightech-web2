import type { Metadata } from "next";
import Link from "next/link";
import { GuideHero } from "@/components/GuideHero";
import { ProductCTA } from "@/components/ProductCTA";
import { SimpleExample } from "@/components/SimpleExample";

export const metadata: Metadata = {
  alternates: { canonical: "/guias/que-es-vlt/" },
  title: { absolute: "Qué significan 75, 50, 35, 15 y 5 en un polarizado | HIGHTECH Polarizados" },
  description: "El número del tono es la luz que el cristal deja pasar. 75 es claro. 5 es muy oscuro. No mide, por sí solo, el calor.",
};

export default function Page() {
  return (
    <>
      <GuideHero
        eyebrow="Guía · Luz"
        title="75 es claro. 5 es oscuro."
        description="En el taller el número dice cuánta luz deja pasar la película. Un número más alto se ve más claro. No es el porcentaje de oscuridad que usa la autoridad."
        category="Luz"
        ctaHref="/peliculas/nanoceramica/"
        ctaLabel="Ver los tonos"
      />
      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "46rem" }}>
          <h2>El número es la luz que deja pasar.</h2>
          <p>75 deja pasar cerca de tres cuartas partes de la luz. 50, cerca de la mitad. 35, cerca de un tercio. 15 deja pasar poca. 5, muy poca: en la práctica es todavía más cerrado que el nombre.</p>
          <SimpleExample>
            Una persiana abierta al 75% deja el cuarto iluminado. Al 35%, ya se siente la penumbra. Al 5%, casi la cierras: de noche, algunas personas batallan para ver hacia afuera. Por eso ese aviso vive solo en el 5.
          </SimpleExample>
          <p>El 15 y el 5 son para casa y negocio. En el auto de Jalisco, las delanteras van en 75 y las traseras en 35 o más claro. <Link href="/guias/polarizado-automotriz-jalisco/">Ver la guía del auto</Link>.</p>
        </div>
      </section>
      <ProductCTA title="Si ya sabes cuánta luz quieres, el tono se elige rápido." text="Mándanos una foto del cristal o el modelo del auto." cta="WhatsApp" context={{ sourcePage: "/guias/que-es-vlt/" }} secondaryHref="/peliculas/nanoceramica/" secondaryLabel="Ver la gama" />
    </>
  );
}
