import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle, GuideAside, GuideBody } from "@/components/GuideArticle";
import { GuideCallout } from "@/components/GuideCallout";
import { GuideHero } from "@/components/GuideHero";
import { MetricRelation } from "@/components/MetricRelation";
import { NanoTable } from "@/components/NanoTable";
import { ProductCTA } from "@/components/ProductCTA";

export const metadata:Metadata={ alternates: { canonical: "/guias/irr-vs-tser/" },title:"IR vs TSER: cuál es la diferencia | HIGHTECH",description:"Por qué 95% de rechazo infrarrojo a 950 nm y TSER son métricas distintas y cómo leerlas correctamente en una ficha de película."};
export default function Page(){return <>
  <GuideHero eyebrow="Guía · Métricas" title="IR vs TSER: dos cifras que responden preguntas diferentes." description="Nuestras fichas nano reportan 95% de rechazo infrarrojo a 950 nm, mientras el TSER cambia por tono. No son cifras intercambiables." category="Métricas técnicas" ctaHref="/peliculas/nanoceramica/" ctaLabel="Comparar tonos" />
  <GuideArticle><GuideBody>
    <h2>La diferencia más importante está en qué se está midiendo.</h2><MetricRelation/>
    <h2>Rechazo infrarrojo a 950 nm</h2><p>La fuente técnica disponible para la gama HIGHTECH indica 95% de rechazo infrarrojo medido a 950 nm. Esa redacción es deliberada: describe exactamente el punto que muestra la ficha.</p>
    <GuideCallout title="Lo que la ficha no nos permite afirmar" tone="warning"><p>No contamos hoy con una curva espectral completa de esta gama. Por eso no extrapolamos el 95% a otras longitudes de onda ni a toda la banda infrarroja.</p></GuideCallout>
    <h2>TSER</h2><p>TSER significa rechazo de energía solar total en la condición de referencia de la ficha. En nuestra gama mapeada cambia de 59% en IR75 a 96% en IR5.</p>
    <NanoTable/>
    <h2>¿Por qué pueden coexistir 95% IR y TSER distintos?</h2><p>Porque el 95% IR reportado se refiere al punto de 950 nm, mientras que TSER resume otra magnitud. Además, los tonos tienen distintos niveles de transmisión visible y comportamiento solar en la ficha.</p>
    <h2>Medición propia futura</h2><p>Cuando HIGHTECH incorpore equipo propio de medición, esos resultados se registrarán aparte de las fichas del proveedor: equipo, longitud de onda o rango realmente medido, vidrio, película, fecha, condiciones y método. No se mezclarán como si fueran la misma fuente.</p>
  </GuideBody><GuideAside><div className="guide-aside-card"><span>Regla editorial</span><strong>95% IR @ 950 nm</strong><p>No: “95% menos calor”. No: “95% aplicado a toda la banda infrarroja”.</p></div><div className="guide-aside-card"><span>Relacionadas</span><Link href="/guias/que-es-vlt/">Qué es VLT</Link><Link href="/guias/reducir-calor-ventanas/">Reducir calor</Link></div></GuideAside></GuideArticle>
  <ProductCTA title="Compara películas con métricas completas, no con una sola cifra." text="Podemos ayudarte a leer VLT, UV, IR a 950 nm y TSER según el contexto donde se instalará." cta="Comparar tonos nanocerámicos" context={{sourcePage:"/guias/irr-vs-tser/",product:"Nanocerámica HIGHTECH"}} secondaryHref="/peliculas/nanoceramica/" secondaryLabel="Ver tabla técnica" />
</>}
