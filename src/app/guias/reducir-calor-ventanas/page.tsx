import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle, GuideAside, GuideBody } from "@/components/GuideArticle";
import { GuideCallout } from "@/components/GuideCallout";
import { GuideHero } from "@/components/GuideHero";
import { Icon } from "@/components/Icon";
import { MetricRelation } from "@/components/MetricRelation";
import { NanoTable } from "@/components/NanoTable";
import { ProductCTA } from "@/components/ProductCTA";

export const metadata:Metadata={ alternates: { canonical: "/guias/reducir-calor-ventanas/" },title:{ absolute: "Cómo reducir el calor que entra por las ventanas | HIGHTECH" },description:"Cómo comparar películas de control solar considerando vidrio, orientación, VLT, rechazo infrarrojo a 950 nm y TSER."};
export default function Page(){return <>
  <GuideHero eyebrow="Guía · Control solar" title="¿Cómo reducir el calor que entra por las ventanas sin oscurecer de más?" description="No se trata simplemente de elegir la película más oscura. El vidrio, la orientación, la exposición al sol y el desempeño de la película influyen en el resultado. La clave es controlar el calor cuidando la cantidad de luz que quieres conservar." category="Control solar" ctaHref="/residencial/" ctaLabel="Ver solución residencial" />
  <GuideArticle><GuideBody>
    <p className="eyebrow">Primero, una idea importante</p>
    <h2>Más oscuro no significa automáticamente menos calor.</h2>
    <p>Un tono más oscuro deja pasar menos luz visible, pero la cantidad de luz que vemos y el desempeño frente a la energía solar no son la misma cosa. Por eso una película no debería elegirse sólo por qué tan oscura se ve.</p>
    <p className="guide-bridge">Puedes buscar mayor control solar sin necesariamente convertir el espacio en un ambiente oscuro.</p>

    <p className="eyebrow">Antes de elegir película</p>
    <h2>El mismo producto puede comportarse distinto según la ventana.</h2>
    <p>La película importa, pero también importa dónde y sobre qué cristal se instala.</p>
    <div className="guide-options">
      <div><strong>Orientación y exposición</strong><p>Una ventana que recibe sol directo durante varias horas no tiene la misma carga que una ventana protegida por sombra.</p></div>
      <div><strong>Tipo de cristal</strong><p>El vidrio existente forma parte del sistema y debe considerarse antes de recomendar una película.</p></div>
      <div><strong>Tamaño de la superficie</strong><p>Un ventanal grande puede aportar una cantidad importante de energía solar al espacio.</p></div>
      <div><strong>Uso del espacio</strong><p>No necesita lo mismo una sala donde quieres conservar mucha luz que un área donde también buscas reducir deslumbramiento.</p></div>
    </div>

    <p className="eyebrow">Cómo leer una ficha técnica</p>
    <h2>Tres cifras ayudan a entender cosas diferentes.</h2>
    <p>VLT, rechazo infrarrojo y TSER no son formas distintas de decir lo mismo.</p>
    <MetricRelation/>
    <div className="guide-options">
      <div><strong>VLT</strong><p>Te dice cuánta luz visible atraviesa la película. Un VLT más alto conserva más claridad; uno más bajo produce una apariencia más oscura.</p></div>
      <div><strong>IR a 950 nm</strong><p>Es una medición de rechazo infrarrojo en un punto específico de 950 nm. No equivale por sí sola al calor total que dejará de entrar al espacio.</p></div>
      <div><strong>TSER</strong><p>Representa el rechazo de energía solar total bajo las condiciones de referencia de la ficha y sirve como una medida más amplia del comportamiento solar reportado.</p></div>
    </div>

    <h2>¿Cómo cambia la gama nanocerámica HIGHTECH?</h2>
    <p>En las cinco opciones activas, la protección UV y la medición IR a 950 nm se mantienen, mientras cambian principalmente la transmisión de luz visible y el TSER reportado.</p>
    <NanoTable/>
    <GuideCallout title="95% a 950 nm no significa 95% menos calor"><p>Es una medición infrarroja en una longitud de onda concreta. No debe extrapolarse a toda la banda infrarroja ni a una reducción exacta de la temperatura interior.</p></GuideCallout>

    <p className="eyebrow">Entonces, ¿cuál conviene?</p>
    <h2>Depende de cuánto quieres controlar y cuánto quieres conservar.</h2>
    <div className="guide-options">
      <div><strong>Quiero conservar mucha luz</strong><p>Una película clara puede tener sentido cuando la prioridad es mantener transparencia y vista sin renunciar al control solar disponible en esa opción.</p></div>
      <div><strong>También quiero reducir deslumbramiento</strong><p>Un tono intermedio puede ayudar cuando, además del calor, molesta la cantidad de luz directa que entra al espacio.</p></div>
      <div><strong>Quiero una apariencia más oscura</strong><p>Los tonos más oscuros reducen más la transmisión visible y pueden cambiar de forma más marcada la apariencia del cristal.</p></div>
    </div>
    <p className="guide-bridge">No existe un tono universalmente superior. La elección depende del cristal, la exposición y lo que quieres conservar del espacio.</p>
    <p className="guide-context-link"><Link className="text-link" href="/peliculas/nanoceramica/">Comparar la gama nanocerámica completa <Icon name="arrow" size={17}/></Link></p>
  </GuideBody><GuideAside><div className="guide-aside-card"><span>Idea clave</span><strong>No elijas sólo por oscuridad.</strong><p>Primero define qué te molesta y cuánta luz quieres conservar. Las métricas ayudan después a comparar las opciones.</p></div><div className="guide-aside-card"><span>Relacionada</span><Link href="/guias/irr-vs-tser/">IR vs TSER</Link><Link href="/guias/que-es-vlt/">Qué es VLT</Link></div></GuideAside></GuideArticle>
  <ProductCTA title="Cuéntanos qué quieres mejorar en ese espacio." text="Revisamos el cristal, la exposición al sol y la cantidad de luz que quieres conservar para recomendarte una opción adecuada." cta="Quiero una recomendación" context={{sourcePage:"/guias/reducir-calor-ventanas/",businessLine:"RESIDENTIAL",problem:"HEAT"}} secondaryHref="/residencial/" secondaryLabel="Ver solución residencial"/>
</>}
