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

    <section className="section privacy-decision-section">
      <div className="container privacy-decision-grid">
        <div>
          <p className="eyebrow">Antes de elegir una solución</p>
          <h2>¿Dónde sientes que te hace falta más privacidad?</h2>
          <p>Puede ser una ventana que da a la calle, un ventanal frente a vecinos o simplemente un espacio donde quieres conservar la luz sin sentirte tan expuesto. A partir de eso revisamos qué solución tiene más sentido.</p>
        </div>
        <div>
          <ul className="privacy-situations">
            <li><span aria-hidden="true"><Icon name="privacy" size={20}/></span><div><strong>Hacia la calle o áreas comunes</strong><p>Cuando desde afuera se alcanza a ver demasiado hacia tu espacio.</p></div></li>
            <li><span aria-hidden="true"><Icon name="building" size={20}/></span><div><strong>Frente a vecinos u otros espacios</strong><p>Cuando quieres reducir las vistas directas sin cerrar completamente la ventana.</p></div></li>
            <li><span aria-hidden="true"><Icon name="sun" size={20}/></span><div><strong>Más privacidad sin perder tanta luz</strong><p>Cuando quieres sentirte más cómodo sin vivir con cortinas o persianas cerradas.</p></div></li>
          </ul>
          <p className="privacy-situations-note">Nosotros revisamos la iluminación, la orientación del cristal y la vista que quieres conservar para recomendarte la estrategia adecuada.</p>
        </div>
      </div>
    </section>

    <ProductCTA title="Cuéntanos qué quieres dejar de ver. Nosotros te ayudamos a elegir cómo." text="Envíanos fotos del cristal y dinos si la privacidad importa de día, de noche o en ambos momentos." cta="Revisar mi caso" context={{sourcePage:"/peliculas/privacidad/", problem:"privacy"}} secondaryHref="/peliculas/" secondaryLabel="Comparar películas" />
  </>;
}
