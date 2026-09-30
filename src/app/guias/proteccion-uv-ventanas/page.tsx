import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle, GuideAside, GuideBody } from "@/components/GuideArticle";
import { GuideCallout } from "@/components/GuideCallout";
import { GuideHero } from "@/components/GuideHero";
import { Icon } from "@/components/Icon";
import { ProductCTA } from "@/components/ProductCTA";
import { truth } from "@/lib/truth";

export const metadata:Metadata={ alternates: { canonical: "/guias/proteccion-uv-ventanas/" },title:{ absolute: "Protección UV en ventanas | HIGHTECH Polarizados" },description:"Qué significa el 99% de rechazo UV reportado por las fichas nanocerámicas HIGHTECH y qué límites tiene esa cifra."};
export default function Page(){const uv=truth.nano[0]?.uv ?? 99;return <>
  <GuideHero eyebrow="Guía · Protección UV" title="¿Se pueden bloquear los rayos UV sin oscurecer la ventana?" description="Sí. La radiación UV no es lo mismo que la luz visible, por lo que una película puede ofrecer alta protección UV y seguir viéndose clara. La elección depende de si además buscas control solar, seguridad o un cambio de apariencia." category="Protección UV" ctaHref="/peliculas/nanoceramica/" ctaLabel="Ver opciones con protección UV" />
  <GuideArticle><GuideBody>
    <p className="eyebrow">La idea más importante</p>
    <h2>Protección UV no significa cristal oscuro.</h2>
    <p>La radiación ultravioleta no es visible para nuestros ojos. Por eso una película puede filtrar gran parte de esa radiación sin tener que verse negra u oscura.</p>
    <p className="guide-bridge">Piensa en la protección UV como un filtro: puede actuar sobre una parte de la radiación sin bloquear toda la luz que sí queremos ver.</p>

    <p className="eyebrow">Qué significa el 99%</p>
    <h2>El dato UV describe una cosa específica.</h2>
    <p>Cuando una ficha técnica reporta 99% de protección o rechazo UV, ese porcentaje se refiere a la radiación ultravioleta que la película ayuda a bloquear bajo las condiciones de medición de la ficha.</p>
    <GuideCallout title="Lo que el 99% no dice"><p>No significa 99% menos calor, 99% menos decoloración ni 99% menos daño en todos los materiales.</p></GuideCallout>

    <h2>¿Ayuda a proteger muebles, pisos y objetos del sol?</h2>
    <p>Reducir la exposición a radiación UV puede ayudar a disminuir uno de los factores que participan en el deterioro y la decoloración de materiales.</p>
    <p className="guide-followup">Pero la radiación UV no es la única causa. También pueden influir la luz visible, el calor, el tipo de material, el tiempo de exposición y otras condiciones del espacio.</p>

    <p className="eyebrow">No confundir funciones</p>
    <h2>UV y control de calor no son la misma cosa.</h2>
    <p>Una película puede ofrecer 99% de protección UV y aun así tener un desempeño térmico muy distinto de otra película. Para hablar de control solar hay que revisar otras métricas, como TSER, además del cristal y la exposición.</p>
    <p className="guide-context-link"><Link className="text-link" href="/guias/irr-vs-tser/">Entender IR vs TSER <Icon name="arrow" size={17}/></Link></p>

    <p className="eyebrow">Dos caminos distintos</p>
    <h2>La misma protección UV puede formar parte de soluciones con objetivos diferentes.</h2>
    <div className="guide-options">
      <div><strong>Nanocerámica</strong><div><p>La gama nanocerámica activa reporta {uv}% de protección UV y además está pensada para control solar, con diferentes niveles de transmisión de luz visible y TSER según el tono.</p><p className="guide-option-link"><Link className="text-link" href="/peliculas/nanoceramica/">Ver nanocerámica <Icon name="arrow" size={16}/></Link></p></div></div>
      <div><strong>Seguridad transparente</strong><div><p>La película de seguridad transparente utilizada por HIGHTECH también ofrece 99% de protección UV, pero su función principal es ayudar a mantener unidos los fragmentos si el vidrio se rompe.</p><p>Es una alternativa especialmente interesante cuando buscas protección UV y transparencia, pero el objetivo principal no es control térmico.</p><p className="guide-option-link"><Link className="text-link" href="/peliculas/seguridad/">Ver película de seguridad <Icon name="arrow" size={16}/></Link></p></div></div>
    </div>

    <p className="eyebrow">Entonces, ¿cuál conviene?</p>
    <h2>Depende de qué quieres resolver además de los rayos UV.</h2>
    <div className="guide-options">
      <div><strong>Quiero UV + control solar</strong><p>La nanocerámica puede tener más sentido cuando también quieres trabajar el calor, el deslumbramiento o el nivel de luz visible.</p></div>
      <div><strong>Quiero UV + máxima claridad</strong><p>Una solución clara puede ser adecuada cuando la prioridad es conservar la apariencia del cristal.</p></div>
      <div><strong>Quiero UV + refuerzo del cristal</strong><p>La película de seguridad transparente puede cubrir ambas necesidades cuando además buscas retención de fragmentos.</p></div>
    </div>
    <p className="guide-bridge">El dato UV puede ser parecido; la razón para elegir una película u otra está en las demás funciones que necesitas.</p>
  </GuideBody><GuideAside><div className="guide-aside-card"><span>Idea clave</span><strong>99% UV ≠ 99% menos calor</strong><p>La protección UV y el desempeño térmico son métricas distintas.</p></div><div className="guide-aside-card"><span>Relacionadas</span><Link href="/guias/que-es-vlt/">Qué es VLT</Link><Link href="/guias/reducir-calor-ventanas/">Reducir calor</Link><Link href="/guias/irr-vs-tser/">IR vs TSER</Link></div></GuideAside></GuideArticle>
  <ProductCTA title="Cuéntanos qué quieres proteger y qué más quieres mejorar." text="Podemos ayudarte a elegir entre una solución clara, una película de control solar o una película de seguridad según el espacio y el objetivo." cta="Quiero una recomendación" context={{sourcePage:"/guias/proteccion-uv-ventanas/",problem:"UV"}} secondaryHref="/peliculas/" secondaryLabel="Comparar películas" />
</>}
