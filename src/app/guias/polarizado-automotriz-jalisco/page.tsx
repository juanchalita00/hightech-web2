import type { Metadata } from "next";
import Link from "next/link";
import { AutomotiveDisclaimer } from "@/components/AutomotiveDisclaimer";
import { GuideArticle, GuideAside, GuideBody } from "@/components/GuideArticle";
import { GuideHero } from "@/components/GuideHero";
import { ProductCTA } from "@/components/ProductCTA";
import { automotiveReference } from "@/lib/automotive-reference";
import { release } from "@/lib/truth";

export const metadata: Metadata = {
  alternates: { canonical: "/guias/polarizado-automotriz-jalisco/" },
  title: { absolute: "Porcentajes de polarizado automotriz | HIGHTECH Polarizados" },
  description: "Referencia de uso común para el auto: 35% en laterales y medallón, y 75% en el parabrisas. No es información oficial ni asesoría legal.",
  robots: { index: release.routes.jaliscoGuideIndexable, follow: true },
};

export default function Page() {
  return <>
    <GuideHero eyebrow="Guía · Automotriz" title="Qué suele usarse en un auto, y qué no podemos decidir por ti." description={automotiveReference.lead} category="Referencia automotriz" ctaHref="/automotriz/" ctaLabel="Ver polarizado automotriz" />
    <GuideArticle>
      <GuideBody>
        <AutomotiveDisclaimer compact />
        <p className="eyebrow">La referencia</p>
        <h2>35% en laterales y medallón. 75% en el parabrisas.</h2>
        <p>{automotiveReference.reference}</p>
        <p>{automotiveReference.windshield}</p>
        <p>{automotiveReference.disclaimer}</p>
        <p className="eyebrow">El tono de la película</p>
        <h2>El número describe la luz, no una autorización.</h2>
        <p>La gama nanocerámica activa es 75, 50, 35, 15 y 5. Esos números ayudan a comparar cuánta luz visible deja pasar cada película. No convierten un tono en una regla oficial.</p>
        <p>Los nombres 20, 70 y 80 son históricos, o corresponden a una película que el vehículo ya trae. No son la gama que se instala hoy.</p>
        <p>Un tono más oscuro deja pasar menos luz. Eso importa si manejas de noche. No significa, por sí solo, que el vehículo se caliente menos. Un rechazo infrarrojo de hasta 95% tampoco significa 95% menos calor.</p>
        <p className="guide-context-link"><Link className="text-link" href="/blog/mitos-de-porcentajes-en-el-auto/">Leer los mitos de los porcentajes</Link></p>
      </GuideBody>
      <GuideAside>
        <div className="guide-aside-card"><span>Idea clave</span><strong>Tú decides el tono.</strong><p>HIGHTECH orienta sobre claridad y uso. No presenta ningún tono como oficial.</p></div>
        <div className="guide-aside-card"><span>Relacionadas</span><Link href="/automotriz/">Automotriz</Link><Link href="/guias/que-es-vlt/">Qué es VLT</Link><Link href="/contacto/?servicio=automotriz#cotizar">Cotizar mi vehículo</Link></div>
      </GuideAside>
    </GuideArticle>
    <ProductCTA title="Dinos el vehículo y qué cristales quieres trabajar." text="Te orientamos sobre claridad, apariencia y uso nocturno. La elección del tono queda en ti." cta="Escribir por WhatsApp" context={{sourcePage:"/guias/polarizado-automotriz-jalisco/",businessLine:"AUTOMOTIVE"}} secondaryHref="/contacto/?servicio=automotriz#cotizar" secondaryLabel="Formulario de cotización" />
  </>;
}
