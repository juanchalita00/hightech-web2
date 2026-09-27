import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle, GuideAside, GuideBody } from "@/components/GuideArticle";
import { GuideCallout } from "@/components/GuideCallout";
import { GuideHero } from "@/components/GuideHero";
import { ProductCTA } from "@/components/ProductCTA";

export const metadata:Metadata={ alternates: { canonical: "/guias/estres-termico-cristal/" },title:{ absolute: "Estrés térmico y película para cristal | HIGHTECH" },description:"Por qué la compatibilidad entre película, vidrio, exposición y sistema debe revisarse antes de instalar control solar."};
export default function Page(){return <>
  <GuideHero eyebrow="Guía · Compatibilidad" title="La película se instala sobre un sistema de vidrio que ya tiene sus propias condiciones." description="Por eso una recomendación profesional considera el tipo de cristal, exposición, bordes, sombras y aplicación antes de asumir compatibilidad." category="Compatibilidad de vidrio" ctaHref="/residencial/" ctaLabel="Revisar mi cristal" />
  <GuideArticle><GuideBody>
    <h2>¿Qué significa estrés térmico?</h2><p>El vidrio puede desarrollar diferencias de temperatura entre zonas. En determinados sistemas y condiciones, esas diferencias importan para evaluar compatibilidad y riesgo.</p>
    <h2>Una película cambia el comportamiento solar del conjunto.</h2><p>Por eso HIGHTECH no debería recomendar una aplicación sólo por “qué tan buena” es una película. La selección tiene que considerar el vidrio existente y cómo recibe el sol.</p>
    <GuideCallout title="Evaluar riesgo no significa trasladarlo automáticamente al cliente" tone="neutral"><p>La inspección y la información técnica sirven para seleccionar correctamente. Informar un riesgo no sustituye una evaluación razonable ni convierte cualquier rotura futura en responsabilidad automática de una sola parte.</p></GuideCallout>
    <h2>¿Qué conviene revisar?</h2><ul><li>tipo y configuración del vidrio, cuando se conoce;</li><li>dimensiones y condición visible;</li><li>bordes y marcos;</li><li>sombras parciales y exposición solar;</li><li>aplicación interior o exterior;</li><li>producto propuesto y documentación disponible.</li></ul>
    <h2>¿Se puede diagnosticar todo por WhatsApp?</h2><p>Las fotos y medidas ayudan a orientar y cotizar muchos proyectos. Cuando aparece una condición crítica que no puede verificarse razonablemente, la decisión correcta puede ser pedir una revisión técnica antes de instalar.</p>
  </GuideBody><GuideAside><div className="guide-aside-card"><span>Principio</span><strong>Vidrio + película + exposición.</strong><p>La compatibilidad se evalúa como sistema.</p></div><div className="guide-aside-card"><span>Relacionadas</span><Link href="/residencial/">Residencial</Link><Link href="/comercial/">Comercial</Link></div></GuideAside></GuideArticle>
  <ProductCTA title="Si el vidrio tiene una condición especial, la revisamos antes de instalar." text="Fotos, medidas y contexto nos ayudan a detectar cuándo basta una cotización remota y cuándo conviene una evaluación técnica." cta="Revisar compatibilidad" context={{sourcePage:"/guias/estres-termico-cristal/",problem:"HEAT"}} secondaryHref="/servicios/" secondaryLabel="Ver soluciones" />
</>}
