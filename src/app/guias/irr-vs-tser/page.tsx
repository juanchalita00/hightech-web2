import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle, GuideAside, GuideBody } from "@/components/GuideArticle";
import { GuideCallout } from "@/components/GuideCallout";
import { GuideHero } from "@/components/GuideHero";
import { Icon } from "@/components/Icon";
import { MetricRelation } from "@/components/MetricRelation";
import { NanoTable } from "@/components/NanoTable";
import { ProductCTA } from "@/components/ProductCTA";
import { truth } from "@/lib/truth";

export const metadata:Metadata={ alternates: { canonical: "/guias/irr-vs-tser/" },title:{ absolute: "IR vs TSER: cuál es la diferencia | HIGHTECH Polarizados" },description:"Por qué 95% de rechazo infrarrojo a 950 nm y TSER son métricas distintas y cómo leerlas correctamente en una ficha de película."};
export default function Page(){
  const film = (id: string) => truth.nano.find((item) => item.id === id);
  const ir75 = film("IR75"), ir5 = film("IR5");
  const ref = truth.nano[0];
  const ir = `${ref?.infraredRejection}%`, nm = `${ref?.infraredWavelengthNm} nm`;
  return <>
  <GuideHero eyebrow="Guía · Métricas" title="Si todas dicen 95% IR, ¿por qué el TSER cambia?" description="Porque no están midiendo lo mismo. En la gama nanocerámica HIGHTECH, el 95% IR corresponde a una medición a 950 nm, mientras que el TSER representa el rechazo de energía solar total reportado por la ficha." category="IR vs TSER" ctaHref="/peliculas/nanoceramica/" ctaLabel="Comparar la gama" />
  <GuideArticle><GuideBody>
    <p className="eyebrow">La diferencia en una frase</p>
    <h2>IR a 950 nm y TSER responden preguntas diferentes.</h2>
    <p>El dato IR indica cuánto rechazo reporta la película en una longitud de onda específica del infrarrojo. El TSER resume el rechazo de energía solar total bajo las condiciones de referencia de la ficha.</p>
    <p className="guide-bridge">Por eso dos películas pueden compartir el mismo dato IR a 950 nm y tener un TSER diferente.</p>
    <MetricRelation/>

    <p className="eyebrow">Primero, el dato IR</p>
    <h2>95% IR no significa 95% menos calor.</h2>
    <p>La fuente técnica disponible para la gama HIGHTECH reporta {ir} de rechazo infrarrojo medido a {nm}. Eso describe el comportamiento de la película en ese punto de medición.</p>
    <GuideCallout title="Lo que la ficha no nos permite afirmar" tone="warning"><p>No contamos con una curva espectral completa que permita extender ese {ir} a toda la banda infrarroja. Por eso no lo extrapolamos a otras longitudes de onda.</p></GuideCallout>

    <p className="eyebrow">Después, el TSER</p>
    <h2>TSER mira la energía solar total desde otra perspectiva.</h2>
    <p>TSER significa rechazo de energía solar total. La ficha lo reporta como una medida del porcentaje de energía solar total rechazada por el sistema de referencia utilizado en la prueba.</p>
    <p className="guide-followup">Tampoco debe interpretarse como una promesa directa de cuántos grados bajará un espacio.</p>

    <p className="eyebrow">Entonces, ¿cómo pueden coexistir?</p>
    <h2>Porque una sola medición infrarroja no describe toda la energía solar.</h2>
    <p>El {ir} IR reportado corresponde específicamente a {nm}. El TSER resume otra magnitud más amplia de la ficha. Por eso los tonos pueden compartir el mismo valor IR a {nm} y, al mismo tiempo, mostrar diferentes valores de TSER.</p>
    <p className="guide-bridge">No hay contradicción: son dos métricas distintas.</p>

    <p className="eyebrow">La gama HIGHTECH</p>
    <h2>Mismo dato IR a 950 nm, distinto TSER según el tono.</h2>
    <NanoTable/>
    <p className="guide-followup">En esta gama, el dato IR a {nm} se mantiene en {ir}, mientras el TSER aumenta conforme cambian las características del tono y de la transmisión solar reportada. La tabla describe el comportamiento reportado de estos productos; no es una regla universal para todas las películas del mercado.</p>

    <p className="eyebrow">Un ejemplo sencillo</p>
    <h2>IR75 e IR5 pueden compartir 95% IR y aun así no tener el mismo TSER.</h2>
    <div className="guide-options">
      <div><strong>IR75</strong><p>VLT {ir75?.vlt}%, IR {ir75?.infraredRejection}% a {ir75?.infraredWavelengthNm} nm, TSER {ir75?.tser}%</p></div>
      <div><strong>IR5</strong><p>VLT {ir5?.vlt}%, IR {ir5?.infraredRejection}% a {ir5?.infraredWavelengthNm} nm, TSER {ir5?.tser}%</p></div>
    </div>
    <p className="guide-followup">El ejemplo muestra por qué el dato IR aislado no describe por sí solo todo el comportamiento solar de la película.</p>

    <p className="eyebrow">Cómo usar las cifras</p>
    <h2>No elijas una película mirando un solo porcentaje.</h2>
    <div className="guide-options">
      <div><strong>1. Mira la luz visible</strong><p>El VLT te ayuda a entender cuánta claridad quieres conservar.</p></div>
      <div><strong>2. Lee el IR con su contexto</strong><p>En esta gama, el {ir} está reportado específicamente a {nm}.</p></div>
      <div><strong>3. Revisa el TSER</strong><p>Te da otra referencia del comportamiento solar total reportado por la ficha.</p></div>
    </div>
    <p className="guide-bridge">Después, el vidrio, la orientación y la exposición real del espacio también influyen en la recomendación.</p>
    <p className="guide-context-link"><Link className="text-link" href="/guias/que-es-vlt/">Entender qué es VLT <Icon name="arrow" size={17}/></Link></p>

    <h2>Ficha técnica y medición en campo no son la misma fuente.</h2>
    <p>Cuando se realizan mediciones propias, deben registrarse por separado indicando equipo, vidrio, película, condición y método. No deben mezclarse con los valores de laboratorio de una ficha técnica.</p>
  </GuideBody><GuideAside><div className="guide-aside-card"><span>Idea clave</span><strong>95% IR @ 950 nm ≠ 95% menos calor</strong><p>El dato IR tiene un contexto de medición específico. El TSER es una métrica distinta.</p></div><div className="guide-aside-card"><span>Relacionadas</span><Link href="/guias/que-es-vlt/">Qué es VLT</Link><Link href="/guias/reducir-calor-ventanas/">Reducir calor</Link><Link href="/peliculas/nanoceramica/">Nanocerámica</Link></div></GuideAside></GuideArticle>
  <ProductCTA title="Comparemos la película completa, no una sola cifra." text="Te ayudamos a revisar claridad, UV, IR a 950 nm y TSER según el cristal, la exposición y lo que quieres lograr en el espacio." cta="Quiero una recomendación" context={{sourcePage:"/guias/irr-vs-tser/",product:"Nanocerámica HIGHTECH"}} secondaryHref="/peliculas/nanoceramica/" secondaryLabel="Comparar nanocerámica" />
</>}
