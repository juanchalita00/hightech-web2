import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle, GuideAside, GuideBody } from "@/components/GuideArticle";
import { GuideCallout } from "@/components/GuideCallout";
import { GuideHero } from "@/components/GuideHero";
import { MetricRelation } from "@/components/MetricRelation";
import { NanoTable } from "@/components/NanoTable";
import { ProductCTA } from "@/components/ProductCTA";

export const metadata:Metadata={ alternates: { canonical: "/guias/reducir-calor-ventanas/" },title:{ absolute: "Cómo reducir el calor que entra por las ventanas | HIGHTECH" },description:"Cómo comparar películas de control solar considerando vidrio, orientación, VLT, rechazo infrarrojo a 950 nm y TSER."};
export default function Page(){return <>
  <GuideHero eyebrow="Guía · Control solar" title="Reducir calor no es simplemente poner el cristal más oscuro." description="El resultado depende de la radiación solar, el vidrio, la orientación y la película. Para comparar opciones conviene separar claridad visible de desempeño solar." category="Control solar" ctaHref="/residencial/" ctaLabel="Ver solución residencial" />
  <GuideArticle><GuideBody>
    <h2>Empieza por distinguir luz visible y energía solar.</h2>
    <p>Una película oscura deja pasar menos luz visible, pero eso no convierte automáticamente su VLT en una medida de calor. Para leer una ficha técnica hay que mirar cada métrica por separado.</p>
    <MetricRelation/>
    <h2>¿Qué datos tenemos hoy para la gama nanocerámica?</h2>
    <p>Las cinco fichas activas de HIGHTECH reportan 99% UV y 95% de rechazo infrarrojo medido a 950 nm. El VLT y el TSER sí cambian entre tonos.</p>
    <NanoTable/>
    <GuideCallout title="95% a 950 nm no significa 95% menos calor"><p>Es una medición infrarroja en una longitud de onda concreta. No debe extrapolarse a toda la banda infrarroja ni a una reducción exacta de la temperatura interior.</p></GuideCallout>
    <h2>El cristal y la orientación también cuentan.</h2>
    <p>Dos ventanas con la misma película pueden recibir distinta carga solar por orientación, tamaño, sombra, tipo de vidrio y horario. Por eso una recomendación arquitectónica seria parte del cristal y del uso del espacio, no sólo del nombre del tono.</p>
    <h2>¿Clara u oscura?</h2>
    <p>Si preservar luz y vista es prioritario, un tono claro puede tener más sentido. Si también quieres reducir deslumbramiento o marcar privacidad visual, un tono con menor VLT puede encajar mejor. No existe un tono universalmente superior.</p>
    <p><Link href="/peliculas/nanoceramica/">Comparar la gama nanocerámica completa →</Link></p>
  </GuideBody><GuideAside><div className="guide-aside-card"><span>Decisión rápida</span><strong>No elijas sólo por oscuridad.</strong><p>Comparte fotos, medidas aproximadas, orientación si la conoces y qué quieres resolver.</p></div><div className="guide-aside-card"><span>Relacionada</span><Link href="/guias/irr-vs-tser/">IR vs TSER</Link><Link href="/guias/que-es-vlt/">Qué es VLT</Link></div></GuideAside></GuideArticle>
  <ProductCTA title="Revisemos el cristal antes de escoger el tono." text="Con fotos y medidas aproximadas podemos orientar la solución y después preparar una cotización según el proyecto." cta="Revisar mis cristales" context={{sourcePage:"/guias/reducir-calor-ventanas/",businessLine:"RESIDENTIAL",problem:"HEAT"}} secondaryHref="/residencial/" secondaryLabel="Ver residencial"/>
</>}
