import Link from "next/link";
import { Icon } from "@/components/Icon";
import { LimitationNotice } from "@/components/LimitationNotice";
import { PrivacyDecisionTool } from "@/components/PrivacyDecisionTool";
import { PrivacyLightDemo } from "@/components/PrivacyLightDemo";
import { ProductCTA } from "@/components/ProductCTA";
import { ProductHero } from "@/components/ProductHero";

export const metadata = { alternates: { canonical: "/peliculas/privacidad/" },
  title: { absolute: "Privacidad para cristales | HIGHTECH Polarizados" },
  description: "Opciones de privacidad para cristales según iluminación, oscuridad, reflectividad y necesidad de bloquear o difuminar la visión.",
};

export default function PrivacyPage() {
  return <>
    <ProductHero variant="privacy" eyebrow="Privacidad" title="La privacidad no depende sólo de qué tan oscura se ve una película." description="La luz interior y exterior puede cambiar completamente el resultado. Por eso distinguimos privacidad por contraste, por oscuridad y privacidad que requiere bloquear o difuminar la visión." ctaLabel="Buscar privacidad" context={{sourcePage:"/peliculas/privacidad/", problem:"privacy"}} facts={[{label:"Reflectiva",value:"Principalmente día"},{label:"Oscuridad",value:"Reduce VLT"},{label:"Noche",value:"Revisar luz"}]} secondary={<Link href="/residencial/" className="button button-secondary">Privacidad residencial <Icon name="arrow" size={18}/></Link>} />

    <section className="section privacy-strategy-section">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div><p className="eyebrow">Primero define qué quieres lograr</p><h2>¿Qué tipo de privacidad necesitas?</h2></div>
          <p>No todas las soluciones de privacidad funcionan igual. Elige lo que quieres conseguir y te mostramos qué estrategia puede tener más sentido.</p>
        </div>
        <PrivacyDecisionTool />
      </div>
    </section>

    <section className="section section-alt privacy-light-section"><div className="container"><div className="section-heading"><p className="eyebrow">Por qué cambia de noche</p><h2>El contraste trabaja en ambos sentidos.</h2><p className="lede-small">Cuando afuera hay más luz, el reflejo exterior puede dominar. Cuando adentro queda mucho más iluminado, las personas del exterior pueden ver hacia el interior con mayor facilidad.</p></div><PrivacyLightDemo/><LimitationNotice title="Ningún efecto espejo depende sólo de la película"><p>Orientación, iluminación, hora, distancia y condiciones del entorno influyen en la percepción de privacidad.</p></LimitationNotice></div></section>

    <section className="section privacy-decision-section"><div className="container privacy-decision-grid"><div><p className="eyebrow">Antes de cotizar</p><h2>Enséñanos el espacio de día y, si la noche importa, también de noche.</h2><p>Dos fotografías desde dentro y fuera pueden aclarar mucho más que elegir un tono por nombre. La privacidad es un problema visual y debe diagnosticarse como tal.</p></div><div className="privacy-photo-check"><div><Icon name="sun" size={21}/><strong>Foto de día</strong><span>Interior y exterior</span></div><div><Icon name="privacy" size={21}/><strong>Expectativa</strong><span>Qué quieres que deje de verse</span></div><div><Icon name="glare" size={21}/><strong>Foto nocturna</strong><span>Si la privacidad de noche es crítica</span></div></div></div></section>

    <ProductCTA title="La mejor solución de privacidad empieza por entender cuándo y desde dónde quieres ocultar la vista." text="Mándanos fotos del cristal y cuéntanos si la prioridad es día, noche o ambos escenarios." cta="Revisar mi privacidad" context={{sourcePage:"/peliculas/privacidad/", problem:"privacy"}} secondaryHref="/peliculas/" secondaryLabel="Comparar tecnologías" />
  </>;
}
