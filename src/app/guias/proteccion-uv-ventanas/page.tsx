import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle, GuideAside, GuideBody } from "@/components/GuideArticle";
import { GuideCallout } from "@/components/GuideCallout";
import { GuideHero } from "@/components/GuideHero";
import { ProductCTA } from "@/components/ProductCTA";
import { truth } from "@/lib/truth";

export const metadata:Metadata={ alternates: { canonical: "/guias/proteccion-uv-ventanas/" },title:"Protección UV en ventanas | HIGHTECH Polarizados",description:"Qué significa el 99% de rechazo UV reportado por las fichas nanocerámicas HIGHTECH y qué límites tiene esa cifra."};
export default function Page(){const uv=truth.nano[0]?.uv ?? 99;return <>
  <GuideHero eyebrow="Guía · UV" title="Protección UV: una cifra importante, pero no toda la historia." description={`Las fichas activas de nanocerámica HIGHTECH indican ${uv}% de rechazo UV. Esa métrica puede ayudar a reducir exposición ultravioleta a través del cristal, pero no convierte la película en una solución absoluta contra todo deterioro.`} category="Protección UV" ctaHref="/peliculas/nanoceramica/" ctaLabel="Ver nanocerámica" />
  <GuideArticle><GuideBody>
    <h2>¿Qué significa el 99% UV de la ficha?</h2><p>Significa que la ficha técnica de la película reporta 99% de rechazo de radiación ultravioleta. Ese dato es distinto de VLT, rechazo infrarrojo y TSER.</p>
    <GuideCallout title="No mezclar UV con calor"><p>La protección UV no es una medida directa del control térmico. Para comparar control solar conviene leer también el TSER y el contexto del sistema instalado.</p></GuideCallout>
    <h2>¿Ayuda frente a la decoloración?</h2><p>La radiación UV puede contribuir al deterioro y decoloración de materiales. Sin embargo, HIGHTECH no debe presentar UV como la única causa: también pueden intervenir luz visible, calor, materiales, tiempo y condiciones de exposición.</p>
    <h2>¿El tono cambia el dato UV?</h2><p>En las cinco fichas nano activas que tenemos hoy, IR75, IR50, IR35, IR15 e IR5 reportan el mismo valor UV: 99%.</p>
    <h2>Entonces, ¿cómo elijo?</h2><p>Si la protección UV es una prioridad, después hay que decidir cuánto quieres conservar de luz visible, qué nivel de privacidad buscas y qué desempeño solar total muestra la ficha.</p>
  </GuideBody><GuideAside><div className="guide-aside-card"><span>Dato canónico</span><strong>99% UV</strong><p>Gama nanocerámica activa, según ficha técnica.</p></div><div className="guide-aside-card"><span>Relacionadas</span><Link href="/guias/que-es-vlt/">Qué es VLT</Link><Link href="/guias/reducir-calor-ventanas/">Reducir calor</Link></div></GuideAside></GuideArticle>
  <ProductCTA title="Protección UV sin elegir a ciegas el nivel de luz." text="Te ayudamos a combinar la protección UV documentada con el nivel de claridad o privacidad que buscas." cta="Consultar una película con protección UV" context={{sourcePage:"/guias/proteccion-uv-ventanas/",problem:"UV"}} secondaryHref="/peliculas/nanoceramica/" secondaryLabel="Comparar tonos" />
</>}
