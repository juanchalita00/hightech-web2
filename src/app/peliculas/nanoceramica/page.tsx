import Link from "next/link";
import { Icon } from "@/components/Icon";
import { LimitationNotice } from "@/components/LimitationNotice";
import { MetricExplainer } from "@/components/MetricExplainer";
import { NanoComparison } from "@/components/NanoComparison";
import { ProductCTA } from "@/components/ProductCTA";
import { ProductHero } from "@/components/ProductHero";

export const metadata = { alternates: { canonical: "/peliculas/nanoceramica/" },
  title: { absolute: "Película nanocerámica | HIGHTECH Polarizados" },
  description: "Cinco tonos de nanocerámica. Todos cortan los rayos UV y el calor del sol. El número es la luz que quieres dejar pasar.",
};

const metrics = [
  { metric:"Luz", label:"Cuánta luz deja pasar", meaning:"75 es claro. 5 es muy oscuro. El número más alto se ve más claro.", caution:"El cristal de abajo también cambia un poco cómo se ve." },
  { metric:"UV", label:"Rayos que decoloran", meaning:"Los cinco tonos bloquean hasta 99% de esos rayos, también el más claro.", caution:"El sol no es la única causa de que un piso o una tela envejezcan." },
  { metric:"Calor", label:"El que se siente en la piel", meaning:"Todos los tonos cortan casi todo ese calor, el del asiento que quema o la ventana al sol.", caution:"Oscurecer suma un poco más de protección total, menos de lo que parece, y mucha más privacidad." },
] as const;

export default function NanoPage() {
  return <>
    <ProductHero
      variant="nano"
      eyebrow="Nanocerámica HIGHTECH"
      title="Control solar con la luz que quieres conservar."
      description="Hay opciones muy claras y otras más oscuras. La diferencia está en cuánta luz quieres conservar, la privacidad que buscas y las condiciones de tu espacio."
      ctaLabel="Ayúdame a elegir"
      image={{ src:"/images/comparador/referencia-fachada-exterior-nanoceramica.webp", alt:"Fachada de una casa con ventanas marcadas 75%, 50%, 35%, 15% y 5% para comparar los tonos de nanocerámica HIGHTECH.", caption:"Referencia real de tonos: 75, 50, 35, 15 y 5.", width:1440, height:960 }}
      context={{sourcePage:"/peliculas/nanoceramica/", product:"Nanocerámica HIGHTECH"}}
      secondary={<Link href="#comparar" className="button button-secondary">Comparar tonos <Icon name="arrow" size={18}/></Link>}
    />

    <section className="section section-alt nano-simple-section">
      <div className="container nano-simple-grid">
        <div className="nano-simple-copy">
          <p className="eyebrow">Antes de ver números</p>
          <h2>Una película clara también puede ofrecer control solar.</h2>
          <p>Que una película deje entrar mucha luz no significa que no esté trabajando. La tecnología nanocerámica permite conservar claridad mientras ayuda a reducir la energía solar que atraviesa el cristal.</p>
          <p className="nano-simple-signature"><strong>La protección no siempre se ve. Se mide. Y se siente.</strong></p>
        </div>
        <aside className="nano-simple-example">
          <span>Hightech Tip</span>
          <h3>Piensa en el protector solar.</h3>
          <p>Puede quedar prácticamente transparente sobre la piel y aun así proteger frente a rayos UV. Con una película ocurre algo parecido: que se vea clara no significa que no esté ofreciendo protección.</p>
          <p><strong>Eso sí:</strong> protección UV y control solar son características distintas. Por eso no elegimos una película solamente por qué tan oscura se ve.</p>
        </aside>
      </div>
    </section>

    <section className="section nano-choice-section">
      <div className="container nano-choice-grid">
        <div>
          <p className="eyebrow">Tu espacio, primero</p>
          <h2>Antes del tono, dinos qué te está molestando.</h2>
          <p>Puede ser el calor de la tarde, el reflejo en una pantalla, falta de privacidad o simplemente que no quieres oscurecer de más una habitación. Partimos de eso y después buscamos el tono que mejor encaje con tu cristal, la luz del espacio y lo que quieres conservar.</p>
          <LimitationNotice title="La privacidad cambia con la iluminación"><p>Cuando depende del contraste o la reflectividad, puede disminuir o invertirse si el interior está más iluminado que el exterior.</p></LimitationNotice>
        </div>
        <div className="nano-choice-links">
          <Link href="/peliculas/nanoceramica/ir75/"><strong>75</strong><span>Quiero conservar la mayor cantidad de luz</span><Icon name="arrow" size={18}/></Link>
          <Link href="/peliculas/nanoceramica/ir50/"><strong>50</strong><span>Quiero mucha claridad, con un tono un poco más marcado que el 75</span><Icon name="arrow" size={18}/></Link>
          <Link href="/peliculas/nanoceramica/ir35/"><strong>35</strong><span>Busco un punto medio entre luz, apariencia y deslumbramiento</span><Icon name="arrow" size={18}/></Link>
          <Link href="/peliculas/nanoceramica/ir15/"><strong>15</strong><span>Quiero una apariencia más oscura y mayor privacidad visual durante el día</span><Icon name="arrow" size={18}/></Link>
          <Link href="/peliculas/nanoceramica/ir5/"><strong>5</strong><span>Quiero la opción más oscura de la gama</span><Icon name="arrow" size={18}/></Link>
        </div>
      </div>
    </section>

    <section id="comparar" className="section section-alt nano-compare-section">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div><p className="eyebrow">Comparador de gama</p><h2>Primero decide cuánta luz quieres conservar.</h2></div>
          <p>Elige primero cuánta luz quieres. El calor del sol se corta en todos. El tono más oscuro suma privacidad y un poco más de protección total.</p>
        </div>
        <NanoComparison/>
      </div>
    </section>

    <section className="section nano-metrics-section">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div><p className="eyebrow">Cómo leer los datos</p><h2>Qué significa cada dato y para qué te sirve.</h2></div>
          <p>Luz, rayos que decoloran y calor que se siente. Son tres cosas distintas.</p>
        </div>
        <MetricExplainer items={metrics}/>
      </div>
    </section>

    <section className="section section-alt nano-applications-section">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">Según dónde la necesitas</p><h2>La tecnología es la misma. La decisión cambia con el espacio.</h2></div>
        <div className="nano-application-grid">
          <Link href="/residencial/"><span><Icon name="home" size={22}/></span><h3>Residencial</h3><p>Si quieres reducir deslumbramiento o ganar confort sin oscurecer de más, importa mucho la luz que quieres conservar.</p></Link>
          <Link href="/comercial/"><span><Icon name="building" size={22}/></span><h3>Comercial</h3><p>En oficinas y fachadas también pesan la imagen del edificio, la operación y una especificación consistente.</p></Link>
          <Link href="/automotriz/"><span><Icon name="car" size={22}/></span><h3>Automotriz</h3><p>En vehículo, además del control solar, importan la visibilidad, el uso nocturno y el tono que quieres manejar.</p></Link>
        </div>
      </div>
    </section>

    <ProductCTA title="Dinos qué quieres resolver. Nosotros te ayudamos a elegir." text="Puede ser calor, reflejo o privacidad. También tomamos en cuenta cuánta luz y visibilidad quieres mantener para recomendarte el tono más adecuado." cta="Quiero una recomendación" context={{sourcePage:"/peliculas/nanoceramica/", product:"Nanocerámica HIGHTECH"}} secondaryHref="/guias/irr-vs-tser/" secondaryLabel="Calor y tono" />
  </>;
}
