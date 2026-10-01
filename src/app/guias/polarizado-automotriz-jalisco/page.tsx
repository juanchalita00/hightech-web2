import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle, GuideAside, GuideBody } from "@/components/GuideArticle";
import { GuideCallout } from "@/components/GuideCallout";
import { GuideHero } from "@/components/GuideHero";
import { Icon } from "@/components/Icon";
import { ProductCTA } from "@/components/ProductCTA";
import { release } from "@/lib/truth";

export const metadata:Metadata={ alternates: { canonical: "/guias/polarizado-automotriz-jalisco/" },title:"Polarizado automotriz en Jalisco: qué dice la norma publicada",description:"Qué establece la normativa publicada de Jalisco sobre el polarizado del parabrisas y la visibilidad hacia el interior en los demás cristales, y por qué el VLT de una película se explica por separado.",robots:{index:release.routes.jaliscoGuideIndexable,follow:true}};
export default function Page(){return <>
  <GuideHero eyebrow="Guía · Automotriz · Jalisco" title="¿Qué dice la norma de Jalisco sobre el polarizado de un auto?" description="La normativa publicada no establece una tabla general de porcentajes como 75 / 35 / 20. Sí contiene reglas específicas sobre el parabrisas y sobre la visibilidad hacia el interior en los demás cristales." category="Normativa automotriz" ctaHref="/automotriz/" ctaLabel="Ver polarizado automotriz" />
  <GuideArticle><GuideBody>
    <p className="eyebrow">Lo esencial</p>
    <h2>Parabrisas y demás cristales no tienen exactamente la misma regla.</h2>
    <div className="guide-options">
      <div><strong>Parabrisas</strong><p>La normativa publicada contiene una prohibición expresa al polarizado del parabrisas. No establece un porcentaje VLT a partir del cual esa prohibición desaparezca.</p></div>
      <div><strong>Laterales y medallón</strong><p>La normativa exige que los cristales permitan visibilidad hacia el interior y sanciona los elementos que la impidan totalmente. En las fuentes oficiales revisadas no aparece una tabla estatal de porcentajes VLT por cada zona.</p></div>
    </div>

    <p className="eyebrow">El texto publicado</p>
    <h2>Dónde aparecen estas reglas.</h2>
    <div className="guide-options">
      <div><strong>Reglamento, artículo 59</strong><p>Establece que parabrisas, medallones y vidrios deben permitir visibilidad hacia el interior del vehículo y señala que “bajo ninguna circunstancia el parabrisas estará polarizado”.</p></div>
      <div><strong>Ley, artículo 360, fracción IX</strong><p>Sanciona los cristales polarizados u otros elementos que impidan totalmente la visibilidad hacia el interior, así como el polarizado de cualquier intensidad en el parabrisas.</p></div>
    </div>

    <p className="eyebrow">¿Y si la película es muy clara?</p>
    <h2>Que una película se vea casi transparente no crea por sí solo una excepción en la norma.</h2>
    <p>IR75 es el nombre comercial de una película cuya ficha reporta 75% de VLT. Ese dato describe cuánta luz visible transmite la película, pero la normativa estatal revisada no establece un umbral de 75% VLT que autorice automáticamente su uso en el parabrisas.</p>
    <p className="guide-bridge">Por eso HIGHTECH no presenta IR75 como “legal en parabrisas” únicamente por ser una película clara.</p>

    <p className="eyebrow">Otro detalle importante</p>
    <h2>75% VLT en la película no significa que el vidrio terminado quede exactamente en 75%.</h2>
    <p>El cristal original ya transmite una determinada cantidad de luz. Cuando se instala una película encima, el resultado corresponde al conjunto vidrio + película, no únicamente al número impreso en la ficha de la película.</p>
    <p className="guide-context-link"><Link className="text-link" href="/guias/que-es-vlt/">Entender qué es VLT <Icon name="arrow" size={17}/></Link></p>

    <p className="eyebrow">¿Existen permisos?</p>
    <h2>El Reglamento contempla permisos provisionales para circular con vidrios polarizados.</h2>
    <p>El artículo 66 del Reglamento incluye entre los casos que la Secretaría puede autorizar provisionalmente la circulación con vidrios polarizados hasta por un año.</p>
    <GuideCallout title="Lo que esta disposición no dice"><p>Esa disposición no publica porcentajes VLT ni significa que cualquier película o cualquier zona del vehículo quede automáticamente autorizada.</p><p>Si una persona necesita acogerse a un permiso, los requisitos, alcance y vigencia aplicables deben confirmarse directamente con la autoridad competente antes de depender de él.</p></GuideCallout>

    <p className="eyebrow">Fuentes oficiales</p>
    <h2>La referencia jurídica debe salir de la norma publicada, no de una tabla comercial.</h2>
    <p>La Biblioteca Virtual del Congreso del Estado de Jalisco registra la Ley de Movilidad, Seguridad Vial y Transporte con última modificación al 15 de agosto de 2026 y su Reglamento con actualización al 20 de enero de 2024.</p>
    <p className="guide-context-link"><a className="text-link" href="https://congresoweb.congresojal.gob.mx/BibliotecaVirtual/busquedasleyes/ListadoNvo.cfm" target="_blank" rel="noopener noreferrer">Consultar la Biblioteca Virtual del Congreso de Jalisco <span aria-hidden="true">↗</span><span className="sr-only"> (se abre en una pestaña nueva)</span></a></p>
  </GuideBody><GuideAside><div className="guide-aside-card"><span>Idea clave</span><strong>La norma no publica una tabla 75 / 35 / 20.</strong><p>Separa la regla del parabrisas de la exigencia de visibilidad hacia el interior en los demás cristales.</p></div><div className="guide-aside-card"><span>Relacionadas</span><Link href="/guias/que-es-vlt/">Qué es VLT</Link><Link href="/automotriz/">Automotriz</Link></div></GuideAside></GuideArticle>
  <ProductCTA title="Te ayudamos a separar la elección técnica del criterio normativo." text="Podemos orientarte sobre claridad, visibilidad y desempeño de cada película sin presentar un tono como garantía de legalidad o ausencia de sanción." cta="Consultar opciones para mi auto" context={{sourcePage:"/guias/polarizado-automotriz-jalisco/",businessLine:"AUTOMOTIVE"}} secondaryHref="/automotriz/" secondaryLabel="Ver polarizado automotriz" />
</>}
