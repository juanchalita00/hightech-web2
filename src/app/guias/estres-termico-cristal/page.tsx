import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle, GuideAside, GuideBody } from "@/components/GuideArticle";
import { GuideHero } from "@/components/GuideHero";
import { ProductCTA } from "@/components/ProductCTA";

export const metadata:Metadata={ alternates: { canonical: "/guias/estres-termico-cristal/" },title:{ absolute: "Estrés térmico y película para cristal | HIGHTECH" },description:"Por qué la compatibilidad entre película, vidrio, exposición y sistema debe revisarse antes de instalar control solar."};
export default function Page(){return <>
  <GuideHero eyebrow="Guía · Compatibilidad" title="¿Por qué importa revisar el vidrio antes de instalar una película?" description="Porque la película pasa a formar parte de un sistema que ya tiene sus propias condiciones. El tipo de cristal, la exposición al sol, las sombras, los bordes y la película propuesta pueden influir en cómo se comporta térmicamente el conjunto." category="Compatibilidad de vidrio" ctaHref="/residencial/" ctaLabel="Ver solución residencial" />
  <GuideArticle><GuideBody>
    <p className="eyebrow">Primero, la idea sencilla</p>
    <h2>El vidrio no siempre se calienta de manera uniforme.</h2>
    <p>Una zona del cristal puede recibir más sol mientras otra permanece más fría por el marco, una sombra o las condiciones del espacio. Esa diferencia de temperatura genera esfuerzos dentro del vidrio.</p>
    <p className="guide-bridge">A eso se le conoce como estrés térmico.</p>

    <p className="eyebrow">Dónde entra la película</p>
    <h2>La película cambia cómo interactúa el vidrio con la energía solar.</h2>
    <p>Una película puede modificar cuánto de la energía solar se transmite, se refleja o se absorbe en el conjunto. Por eso no basta con elegir un producto únicamente por tono o desempeño: también hay que revisar sobre qué vidrio se instalará.</p>
    <p className="guide-bridge">La compatibilidad se evalúa como vidrio + película + exposición.</p>

    <p className="eyebrow">No depende de una sola cosa</p>
    <h2>Varias condiciones pueden influir en el comportamiento térmico del cristal.</h2>
    <div className="guide-options">
      <div><strong>Tipo de vidrio</strong><p>No todos los sistemas de vidrio responden igual al calor ni tienen la misma resistencia.</p></div>
      <div><strong>Tamaño y condición</strong><p>Las dimensiones y la condición visible del cristal y sus bordes forman parte de la evaluación.</p></div>
      <div><strong>Sol y orientación</strong><p>La cantidad y duración de exposición solar pueden cambiar considerablemente entre ventanas.</p></div>
      <div><strong>Sombras parciales</strong><p>Una parte del cristal puede calentarse mientras otra permanece sombreada, aumentando la diferencia de temperatura dentro de la pieza.</p></div>
      <div><strong>Elementos cercanos</strong><p>Persianas, cortinas, muebles o salidas de aire muy próximas al cristal pueden modificar las condiciones térmicas alrededor de la ventana.</p></div>
    </div>

    <p className="eyebrow">Entonces, ¿qué hacemos?</p>
    <h2>La película se recomienda después de entender el cristal.</h2>
    <p>En una aplicación arquitectónica revisamos las condiciones conocidas del vidrio y del espacio antes de elegir la película. La intención no es complicar el proyecto, sino evitar recomendar una configuración sin considerar el sistema donde se va a instalar.</p>
    <p className="guide-followup">En muchos proyectos la revisión es sencilla. Cuando aparece una condición que requiere más información, puede ser necesario evaluarla con mayor detalle antes de instalar.</p>

    <p className="eyebrow">Una limitación importante</p>
    <h2>El riesgo no siempre puede predecirse con certeza absoluta.</h2>
    <p>El comportamiento real depende de varias condiciones del vidrio y de su instalación. Una revisión responsable permite detectar factores relevantes y seleccionar mejor la película, pero no convierte el comportamiento del cristal en algo completamente predecible.</p>

    <p className="eyebrow">Cuándo hace falta revisar más</p>
    <h2>Algunos cristales requieren más información antes de decidir.</h2>
    <p>Si el tipo de vidrio, la configuración o alguna condición del sistema no puede identificarse con suficiente claridad, puede convenir una revisión adicional antes de confirmar la película.</p>
  </GuideBody><GuideAside><div className="guide-aside-card"><span>Idea clave</span><strong>Vidrio + película + exposición</strong><p>La compatibilidad se entiende mejor como un sistema, no como una propiedad aislada de la película.</p></div><div className="guide-aside-card"><span>Relacionadas</span><Link href="/residencial/">Residencial</Link><Link href="/comercial/">Comercial</Link><Link href="/guias/reducir-calor-ventanas/">Reducir calor</Link></div></GuideAside></GuideArticle>
  <ProductCTA title="Revisemos primero qué tipo de cristal tienes." text="Tomamos en cuenta el vidrio, la exposición y el objetivo del espacio para recomendar una película compatible con el proyecto." cta="Quiero una recomendación" context={{sourcePage:"/guias/estres-termico-cristal/",problem:"HEAT"}} secondaryHref="/residencial/" secondaryLabel="Ver solución residencial" />
</>}
