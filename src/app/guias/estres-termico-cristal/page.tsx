import type { Metadata } from "next";
import { GuideHero } from "@/components/GuideHero";
import { ProductCTA } from "@/components/ProductCTA";
import { SimpleExample } from "@/components/SimpleExample";

export const metadata: Metadata = {
  alternates: { canonical: "/guias/estres-termico-cristal/" },
  title: { absolute: "Por qué el tipo de vidrio importa | HIGHTECH Polarizados" },
  description: "Un cristal grande al sol se calienta de forma dispareja. Antes de instalar, vemos qué vidrio es para no forzarlo.",
};

export default function Page() {
  return (
    <>
      <GuideHero eyebrow="Guía · El vidrio" title="No toda película va en todo cristal." description="Un ventanal, un cancel y un domo no se calientan igual. Por eso preguntamos qué vidrio tienes antes de recomendar." category="El vidrio" ctaHref="/contacto/#cotizar" ctaLabel="Cotizar" />
      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "46rem" }}>
          <SimpleExample>Un vaso frío se empaña y, si le echas agua hirviendo de golpe, puede tronar. El cristal de una fachada también sufre cuando una parte está al sol y la sombra le corta la otra. La película se elige para no empeorar ese contraste.</SimpleExample>
          <p>Si el vidrio ya tiene una película vieja, un tinte o está en un domo, lo decimos antes de agendar. A veces el paso correcto es no instalar esa opción.</p>
        </div>
      </section>
      <ProductCTA title="Una foto del cristal basta para empezar." text="Si tienes el tipo de vidrio, también ayuda. Con eso vemos si la película es compatible antes de hablar de tono." cta="WhatsApp" context={{ sourcePage: "/guias/estres-termico-cristal/" }} />
    </>
  );
}
