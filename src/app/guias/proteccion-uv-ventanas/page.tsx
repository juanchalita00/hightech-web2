import type { Metadata } from "next";
import { GuideHero } from "@/components/GuideHero";
import { ProductCTA } from "@/components/ProductCTA";
import { SimpleExample } from "@/components/SimpleExample";

export const metadata: Metadata = {
  alternates: { canonical: "/guias/proteccion-uv-ventanas/" },
  title: { absolute: "Rayos UV en las ventanas | HIGHTECH Polarizados" },
  description: "Los rayos UV decoloran pisos y muebles junto a la ventana. La nanocerámica los bloquea en todos los tonos, también en el más claro.",
};

export default function Page() {
  return (
    <>
      <GuideHero eyebrow="Guía · Rayos UV" title="El sol decolora aunque el cristal se vea transparente." description="Los rayos UV son los del protector solar. No se ven y sí marcan un piso de madera o una tela que pasa años junto a la ventana." category="Rayos UV" ctaHref="/residencial/" ctaLabel="Ver polarizado para casa" />
      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "46rem" }}>
          <SimpleExample>Un piso de madera junto a un ventanal se aclara en la franja donde pega el sol. La película corta esos rayos. El tono 75, el más claro, ya los bloquea: no hace falta oscurecer la sala para eso.</SimpleExample>
          <p>Bloquear los rayos UV no congela un mueble para siempre. El tiempo, el uso y otras luces siguen. Lo que sí cambia es la parte que entraba por ese cristal.</p>
        </div>
      </section>
      <ProductCTA title="Si el piso o el sillón ya muestran el sol, lo vemos con una foto." text="El tono se elige por la luz, no por los rayos UV: esos van en todos." cta="WhatsApp" context={{ sourcePage: "/guias/proteccion-uv-ventanas/", problem: "uv" }} />
    </>
  );
}
