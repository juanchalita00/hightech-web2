import type { Metadata } from "next";
import { GuideHero } from "@/components/GuideHero";
import { ProductCTA } from "@/components/ProductCTA";
import { HightechTip } from "@/components/HightechTip";

export const metadata: Metadata = {
  alternates: { canonical: "/guias/privacidad-ventanas-noche/" },
  title: { absolute: "Privacidad de noche en las ventanas | HIGHTECH Polarizados" },
  description: "De día un tono o un espejo esconden la sala. De noche, si la luz está adentro, se vuelve a ver. Así funciona el contraste.",
};

export default function Page() {
  return (
    <>
      <GuideHero eyebrow="Guía · Privacidad" title="De noche, la luz de la sala gana." description="Una película oscura o de espejo esconde de día, cuando afuera hay más luz. Enciende las lámparas y la calle puede verte otra vez." category="Privacidad" ctaHref="/peliculas/privacidad/" ctaLabel="Ver opciones de privacidad" />
      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "46rem" }}>
          <HightechTip>Es como unos lentes de sol de espejo: de día no se ven los ojos. De noche, con una lámpara detrás, sí. Si necesitas privacidad también con la sala encendida, se revisa cortina, película inteligente o una combinación.</HightechTip>
          <p>El tono 5 esconde más de día y, de noche, a algunas personas les cuesta ver hacia afuera. Ese aviso es solo de ese tono.</p>
        </div>
      </section>
      <ProductCTA title="Dinos si la privacidad la necesitas de día, de noche o en las dos." text="Con una foto de la fachada alcanza para orientarte." cta="WhatsApp" context={{ sourcePage: "/guias/privacidad-ventanas-noche/", problem: "privacy" }} secondaryHref="/pelicula-inteligente-pdlc/" secondaryLabel="Ver película inteligente" />
    </>
  );
}
