import type { Metadata } from "next";
import { GuideHero } from "@/components/GuideHero";
import { ProductCTA } from "@/components/ProductCTA";
import { HightechTip } from "@/components/HightechTip";

export const metadata: Metadata = {
  alternates: { canonical: "/guias/reducir-calor-ventanas/" },
  title: { absolute: "Cómo bajar el calor de las ventanas | HIGHTECH Polarizados" },
  description: "El calor entra con el sol, no solo con el tono oscuro. Una película nanocerámica lo corta y deja la luz que elijas.",
};

export default function Page() {
  return (
    <>
      <GuideHero eyebrow="Guía · Calor" title="El calor entra por el cristal, aunque se vea claro." description="Si la sala se pone pesada a las tres de la tarde, el primer paso no es oscurecerla. Es cortar el calor del sol y decidir después cuánta luz quieres." category="Calor" ctaHref="/residencial/" ctaLabel="Ver polarizado para casa" />
      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "46rem" }}>
          <HightechTip>Es el calor que sientes en la piel junto a una ventana con sol, o el asiento de piel que quema cuando dejas el auto estacionado. La película trabaja sobre ese calor.</HightechTip>
          <p>Miramos hacia dónde da la ventana, el tipo de vidrio y si quieres seguir viendo el jardín. Un tono 75 ya baja ese calor. Uno más oscuro suma privacidad y un poco más de protección total.</p>
          <p>En casa, la nanocerámica parte de $800 por metro cuadrado y otras películas, de $600. El mínimo de proyecto es de $1,500.</p>
        </div>
      </section>
      <ProductCTA title="Mándanos una foto de la ventana que más calienta." text="Con eso vemos si el siguiente paso es nanocerámica, un tono o también seguridad." cta="WhatsApp" context={{ sourcePage: "/guias/reducir-calor-ventanas/", problem: "heat" }} secondaryHref="/peliculas/nanoceramica/" secondaryLabel="Ver nanocerámica" />
    </>
  );
}
