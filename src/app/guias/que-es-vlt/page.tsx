import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle, GuideAside, GuideBody } from "@/components/GuideArticle";
import { GuideCallout } from "@/components/GuideCallout";
import { GuideHero } from "@/components/GuideHero";
import { NanoComparison } from "@/components/NanoComparison";
import { ProductCTA } from "@/components/ProductCTA";

export const metadata:Metadata={ alternates: { canonical: "/guias/que-es-vlt/" },title:"Qué es VLT en una película para cristal | HIGHTECH",description:"Qué significa transmisión de luz visible y cómo interpretar IR75, IR50, IR35, IR15 e IR5 sin confundir el nombre comercial con el VLT técnico."};
export default function Page(){return <>
  <GuideHero eyebrow="Guía · Métricas" title="VLT: la forma más directa de entender cuánta luz visible atraviesa." description="Un VLT más alto significa más transmisión visible; uno más bajo, una apariencia más oscura. Eso no lo convierte en una medida única de desempeño térmico." category="Transmisión de luz visible" ctaHref="/peliculas/nanoceramica/" ctaLabel="Comparar la gama" />
  <GuideArticle><GuideBody>
    <h2>¿Qué significa VLT?</h2><p>VLT es transmisión de luz visible. Si una ficha indica 75% VLT, describe cuánta luz visible atraviesa la película bajo la medición de referencia.</p>
    <GuideCallout title="Nombre comercial ≠ VLT exacto"><p>IR50 tiene VLT de ficha de 48%. IR5 tiene VLT de 3%. Por eso HIGHTECH muestra el nombre comercial y el dato técnico por separado.</p></GuideCallout>
    <h2>Comparación de la gama activa</h2><NanoComparison/>
    <h2>¿VLT alto significa menos protección?</h2><p>No puede concluirse eso sólo desde el VLT. En nuestras fichas, todos los tonos nano reportan 99% UV y 95% IR a 950 nm, mientras el TSER sí cambia entre tonos.</p>
    <h2>¿Y el VLT final del vidrio?</h2><p>El dato de la película no debe confundirse automáticamente con el resultado final del conjunto vidrio + película. El vidrio existente también transmite una cantidad de luz y puede modificar la lectura del sistema.</p>
    <h2>Visibilidad nocturna</h2><p>Los tonos de menor VLT reducen más la luz visible disponible. Esa diferencia debe considerarse especialmente en automotriz y en espacios donde se necesita ver hacia el exterior de noche.</p>
  </GuideBody><GuideAside><div className="guide-aside-card"><span>Gama activa</span><strong>75% → 3% VLT</strong><p>IR75 a IR5 según las fichas mapeadas.</p></div><div className="guide-aside-card"><span>Relacionadas</span><Link href="/automotriz/">Aplicación automotriz</Link><Link href="/guias/privacidad-ventanas-noche/">Privacidad de noche</Link></div></GuideAside></GuideArticle>
  <ProductCTA title="El tono correcto depende de cuánta luz quieres conservar." text="Cuéntanos si priorizas claridad, privacidad, deslumbramiento o una combinación y te ayudamos a comparar." cta="Ayúdame a elegir VLT" context={{sourcePage:"/guias/que-es-vlt/",product:"Nanocerámica HIGHTECH"}} secondaryHref="/peliculas/nanoceramica/" secondaryLabel="Ver nanocerámica" />
</>}
