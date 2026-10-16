import type { Metadata } from "next";
import { GuideHero } from "@/components/GuideHero";
import { ProductCTA } from "@/components/ProductCTA";
import { SimpleExample } from "@/components/SimpleExample";

export const metadata: Metadata = {
  alternates: { canonical: "/guias/irr-vs-tser/" },
  title: { absolute: "Calor del sol y tono del polarizado | HIGHTECH Polarizados" },
  description: "Todos los tonos cortan el calor que se siente en la piel junto a la ventana. La protección total varía un poco con el tono, menos de lo que suele pensarse.",
};

export default function Page() {
  return (
    <>
      <GuideHero
        eyebrow="Guía · Calor"
        title="Oscurecer no es lo mismo que quitar el calor."
        description="El calor que sientes junto a un cristal con sol es luz infrarroja. La película nanocerámica la corta en todos los tonos. El más oscuro no la corta el doble."
        category="Calor"
        ctaHref="/peliculas/nanoceramica/"
        ctaLabel="Ver los tonos"
      />
      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "46rem" }}>
          <h2>Dos calores, no uno.</h2>
          <p>Está el calor que se siente en la piel y en un asiento de piel que quema. Ese, la gama lo corta casi por completo, en el claro y en el oscuro.</p>
          <p>Y está el calor total que el sol mete al cuarto, que también incluye la luz que ves. Ahí el tono más oscuro ayuda un poco más, porque deja pasar menos luz. La diferencia existe, y es menor de lo que la gente espera.</p>
          <SimpleExample>
            Una sartén al sol se pone imposible de tocar aunque no la veas “oscura”. El calor viaja aunque el cristal se vea claro. Por eso un 75 también baja la temperatura del interior.
          </SimpleExample>
          <p>No decimos que todos los tonos protejan igual del calor. Decimos que el salto grande está en poner la película, no en irte al tono más negro.</p>
        </div>
      </section>
      <ProductCTA title="Si el problema es el calor de la tarde, partimos de ahí." text="La luz que quieres conservar se elige después." cta="WhatsApp" context={{ sourcePage: "/guias/irr-vs-tser/", problem: "heat" }} secondaryHref="/guias/reducir-calor-ventanas/" secondaryLabel="Cómo bajar el calor" />
    </>
  );
}
