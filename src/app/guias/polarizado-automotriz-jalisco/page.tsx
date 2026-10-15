import type { Metadata } from "next";
import Link from "next/link";
import { AutomotiveLawCopy } from "@/components/AutomotiveLawCopy";
import { Icon } from "@/components/Icon";
import { GuideArticle, GuideAside, GuideBody } from "@/components/GuideArticle";
import { GuideHero } from "@/components/GuideHero";
import { ProductCTA } from "@/components/ProductCTA";
import { release } from "@/lib/truth";

export const metadata: Metadata = {
  alternates: { canonical: "/guias/polarizado-automotriz-jalisco/" },
  title: { absolute: "Porcentajes de polarizado automotriz | HIGHTECH Polarizados" },
  description: "Cita el texto publicado en Jalisco y, aparte, lo que la mayoría suele instalar: 35% en laterales y medallón, y 75% en el parabrisas. No es asesoría legal.",
  robots: { index: release.routes.jaliscoGuideIndexable, follow: true },
};

export default function Page() {
  return <>
    <GuideHero eyebrow="Guía · Automotriz" title="Qué suele usarse en un auto, y qué dice el texto." description="Primero, lo que la mayoría suele instalar. Después, la cita del texto publicado. Es solo informativo, no es asesoría legal." category="Referencia automotriz" ctaHref="/automotriz/" ctaLabel="Ver polarizado automotriz" />
    <GuideArticle>
      <GuideBody>
        <AutomotiveLawCopy />
        <p className="eyebrow">El tono de la película</p>
        <h2>El número describe la luz.</h2>
        <div className="chips" aria-label="Gama nanocerámica activa">{["75%", "50%", "35%", "15%", "5%"].map((tone) => <span className="chip" key={tone}>{tone}</span>)}</div>
        <div className="auto-law-notes">
          <article><span className="decision-icon"><Icon name="glass" size={20} /></span><h3>Gama activa</h3><p>Esos números comparan cuánta luz visible deja pasar cada película. No convierten un tono en una regla oficial.</p></article>
          <article><span className="decision-icon"><Icon name="sun" size={20} /></span><h3>20, 70 y 80</h3><p>Son nombres históricos, o una película que el vehículo ya trae. No son la gama que se instala hoy.</p></article>
          <article><span className="decision-icon"><Icon name="glare" size={20} /></span><h3>De noche</h3><p>Un tono más oscuro deja pasar menos luz. No significa, por sí solo, que el vehículo se caliente menos.</p></article>
        </div>
        <p className="context-note">Un rechazo infrarrojo de hasta 95% no significa 95% menos calor.</p>
        <p className="guide-context-link"><Link className="text-link" href="/blog/mitos-de-porcentajes-en-el-auto/">Leer los mitos de los porcentajes</Link></p>
      </GuideBody>
      <GuideAside>
        <div className="guide-aside-card"><span>Idea clave</span><strong>Solo informativo.</strong><p>Esto es solo informativo, no es asesoría legal.</p></div>
        <div className="guide-aside-card"><span>Relacionadas</span><Link href="/automotriz/">Automotriz</Link><Link href="/guias/que-es-vlt/">Qué es VLT</Link><Link href="/contacto/?servicio=automotriz#cotizar">Cotizar mi vehículo</Link></div>
      </GuideAside>
    </GuideArticle>
    <ProductCTA title="Dinos el vehículo y qué cristales quieres trabajar." text="Te orientamos sobre claridad, apariencia y uso nocturno." cta="Escribir por WhatsApp" context={{sourcePage:"/guias/polarizado-automotriz-jalisco/",businessLine:"AUTOMOTIVE"}} secondaryHref="/contacto/?servicio=automotriz#cotizar" secondaryLabel="Formulario de cotización" />
  </>;
}
