import type { Metadata } from "next";
import Link from "next/link";
import { GateNotice } from "@/components/GateNotice";
import { GuideArticle, GuideAside, GuideBody } from "@/components/GuideArticle";
import { GuideCallout } from "@/components/GuideCallout";
import { GuideHero } from "@/components/GuideHero";
import { JaliscoReference } from "@/components/JaliscoReference";
import { ProductCTA } from "@/components/ProductCTA";
import { truth } from "@/lib/truth";

export const metadata:Metadata={ alternates: { canonical: "/guias/polarizado-automotriz-jalisco/" },title:"Polarizado automotriz en Jalisco: norma y referencia práctica",description:"Qué establece la normativa publicada sobre polarizado y cómo HIGHTECH comunica por separado la referencia práctica 70–75 / 35 / 20 recibida en consultas con personal de Tránsito.",robots:{index:false,follow:true}};
export default function Page(){const r=truth.jaliscoAutomotive.operationalReference;return <>
  <GuideHero eyebrow="Guía · Automotriz · Jalisco" title="Qué dice la norma y qué referencia nos han dado en Tránsito." description="No presentamos 70–75 / 35 / 20 como una tabla escrita en la Ley. Separamos la normativa publicada de la orientación práctica que HIGHTECH reporta haber recibido directamente." category="Legalidad automotriz" ctaHref="/automotriz/" ctaLabel="Ver polarizado automotriz" />
  <GuideArticle><GuideBody>
    <GateNotice title="LEGAL_CONTENT_REVIEW">La arquitectura y el contenido informativo están construidos, pero esta guía permanece noindex hasta la liberación jurídica final y el cierre de citas oficiales en producción.</GateNotice>
    <h2>1. Lo que sí establece la normativa publicada.</h2><p>La Ley de Movilidad, Seguridad Vial y Transporte del Estado de Jalisco sanciona el uso de cristales polarizados u otros elementos que impidan totalmente la visibilidad hacia el interior y menciona de forma específica el polarizado de cualquier intensidad en el parabrisas.</p>
    <GuideCallout title="Importante"><p>La normativa revisada no presenta una tabla escrita 75 / 35 / 20 como los límites numéricos de cada zona del vehículo. Por eso HIGHTECH no la describe como “la tabla de la Ley”.</p></GuideCallout>
    <h2>2. La referencia práctica que HIGHTECH recibió de Tránsito.</h2><JaliscoReference/>
    <p>La referencia operativa registrada es {r.windshield} para parabrisas, {r.frontSide} para piloto/copiloto y {r.rearSideAndBack} para laterales traseros y medallón. Se comunica con atribución y no como garantía absoluta frente a cualquier criterio de autoridad.</p>
    <h2>3. ¿Por qué IR75 requiere una explicación adicional?</h2><p>IR75 es el nombre comercial de una película cuya ficha reporta 75% VLT. La cuestión jurídica específica de si una película clara de control solar debe considerarse “polarizado” para la restricción del parabrisas permanece sin una conclusión categórica en nuestro sistema de publicación.</p>
    <h2>4. Película y sistema final no son exactamente lo mismo.</h2><p>El VLT de la película no debe presentarse automáticamente como el VLT final del conjunto vidrio + película. El vidrio original también transmite luz y la medición final del sistema puede ser distinta.</p>
    <h2>5. Fuente normativa a revisar antes de decidir.</h2><p>La versión vigente debe comprobarse siempre en la Biblioteca Virtual del Congreso del Estado de Jalisco. La ley aparece con reforma registrada al 15 de agosto de 2026 y el reglamento con actualización al 20 de enero de 2024 en el registro consultado.</p>
    <p><a href="https://congresoweb.congresojal.gob.mx/BibliotecaVirtual/busquedasleyes/ListadoNvo.cfm" target="_blank" rel="noreferrer">Consultar Biblioteca Virtual del Congreso de Jalisco ↗</a></p>
  </GuideBody><GuideAside><div className="guide-aside-card"><span>Referencia práctica HIGHTECH</span><strong>70–75 / 35 / 20</strong><p>Orientación reportada de consultas directas con personal de Tránsito; no tabla literal de la Ley.</p></div><div className="guide-aside-card"><span>Relacionadas</span><Link href="/guias/que-es-vlt/">Qué es VLT</Link><Link href="/automotriz/">Automotriz</Link></div></GuideAside></GuideArticle>
  <ProductCTA title="Te orientamos considerando visibilidad, uso nocturno y la referencia práctica disponible." text="La recomendación técnica no sustituye el criterio de la autoridad ni se presenta como garantía de ausencia de sanción." cta="Consultar configuración para mi auto" context={{sourcePage:"/guias/polarizado-automotriz-jalisco/",businessLine:"AUTOMOTIVE"}} secondaryHref="/automotriz/" secondaryLabel="Ver automotriz" />
</>}
