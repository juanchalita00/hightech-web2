import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PrivacyDecisionTool } from "@/components/PrivacyDecisionTool";
import { ProductCTA } from "@/components/ProductCTA";
import { ProductHero } from "@/components/ProductHero";

export const metadata = { alternates: { canonical: "/peliculas/privacidad/" },
  title: { absolute: "Privacidad para cristales | HIGHTECH Polarizados" },
  description: "Opciones de privacidad para cristales según iluminación, oscuridad, reflectividad y necesidad de bloquear o difuminar la visión.",
};

export default function PrivacyPage() {
  return <>
    <ProductHero variant="privacy" eyebrow="Privacidad" title="La privacidad que necesitas depende de cuándo y qué quieres ocultar." description="No es lo mismo buscar privacidad durante el día, hacer el cristal más oscuro o impedir que se distinga el interior. Te ayudamos a elegir la estrategia según tu espacio, la iluminación y la vista que quieres conservar." ctaLabel="Encontrar mi solución" context={{sourcePage:"/peliculas/privacidad/", problem:"privacy"}} facts={[{label:"Privacidad de día",value:"Reflectividad"},{label:"Más oscuridad",value:"Tono"},{label:"Menos dependencia de la luz",value:"Difusión"}]} secondary={<Link href="/residencial/" className="button button-secondary">Privacidad residencial <Icon name="arrow" size={18}/></Link>} />

    <section className="section privacy-strategy-section">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div><p className="eyebrow">Primero define qué quieres lograr</p><h2>¿Qué tipo de privacidad necesitas?</h2></div>
          <p>No todas las soluciones de privacidad funcionan igual. Elige lo que quieres conseguir y te mostramos qué estrategia puede tener más sentido.</p>
        </div>
        <PrivacyDecisionTool />
      </div>
    </section>

    <section className="section section-alt privacy-night-section">
      <div className="container privacy-night-grid">
        <div><p className="eyebrow">Un punto que cambia la decisión</p><h2>La privacidad de día no garantiza privacidad de noche.</h2></div>
        <div>
          <p>Cuando el interior está más iluminado que el exterior, una película reflectiva puede perder parte de su efecto de privacidad. Si la noche es importante para ti, conviene revisar la iluminación antes de elegir.</p>
          <Link className="text-link" href="/peliculas/plata-reflecta/">Ver cómo cambia con la iluminación <Icon name="arrow" size={17}/></Link>
        </div>
      </div>
    </section>

    <section className="section privacy-decision-section"><div className="container privacy-decision-grid"><div><p className="eyebrow">Antes de recomendarte una solución</p><h2>Muéstranos lo que quieres ocultar y desde dónde se ve.</h2><p>Con unas fotos podemos entender el contraste de luz, la vista que quieres conservar y el nivel de privacidad que estás buscando.</p></div><div className="privacy-photo-check"><div><Icon name="privacy" size={21}/><strong>Foto desde afuera</strong><span>Qué se alcanza a ver</span></div><div><Icon name="sun" size={21}/><strong>Foto desde adentro</strong><span>Qué luz y vista quieres conservar</span></div><div><Icon name="glare" size={21}/><strong>Foto de noche</strong><span>Si la privacidad nocturna también importa</span></div></div></div></section>

    <ProductCTA title="Cuéntanos qué quieres dejar de ver. Nosotros te ayudamos a elegir cómo." text="Envíanos fotos del cristal y dinos si la privacidad importa de día, de noche o en ambos momentos." cta="Revisar mi caso" context={{sourcePage:"/peliculas/privacidad/", problem:"privacy"}} secondaryHref="/peliculas/" secondaryLabel="Comparar películas" />
  </>;
}
