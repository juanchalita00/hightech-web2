import Link from "next/link";
import { Icon } from "@/components/Icon";
import { LimitationNotice } from "@/components/LimitationNotice";
import { MetricExplainer } from "@/components/MetricExplainer";
import { NanoComparison } from "@/components/NanoComparison";
import { ProductCTA } from "@/components/ProductCTA";
import { ProductHero } from "@/components/ProductHero";

export const metadata = { alternates: { canonical: "/peliculas/nanoceramica/" },
  title: { absolute: "Película nanocerámica | HIGHTECH Polarizados" },
  description: "Compara IR75, IR50, IR35, IR15 e IR5 por VLT, UV, rechazo infrarrojo a 950 nm y TSER según ficha técnica.",
};

const metrics = [
  { metric:"VLT", label:"Cuánta luz visible deja pasar", meaning:"Te ayuda a entender qué tan claro u oscuro se percibe un tono. Un VLT más alto deja pasar más luz visible.", caution:"El VLT de la película no es necesariamente el VLT final del conjunto vidrio + película." },
  { metric:"UV", label:"Protección frente a radiación UV", meaning:"Las fichas activas de la gama nanocerámica indican 99% de rechazo UV en los cinco tonos.", caution:"La radiación UV no es la única causa de decoloración de interiores." },
  { metric:"IR 950", label:"Medición infrarroja a 950 nm", meaning:"Las fichas indican 95% de rechazo infrarrojo medido específicamente a una longitud de onda de 950 nm.", caution:"No significa 95% menos calor ni representa toda la banda infrarroja." },
  { metric:"TSER", label:"Energía solar total rechazada", meaning:"Sirve para comparar cuánto de la energía solar total rechaza cada película. En la ficha de esta gama cambia de 59% a 96% según el tono.", caution:"No es una promesa de cuántos grados bajará un espacio." },
] as const;

export default function NanoPage() {
  return <>
    <ProductHero
      variant="nano"
      eyebrow="Nanocerámica HIGHTECH"
      title="Control solar con la luz que quieres conservar."
      description="Hay opciones muy claras y otras más oscuras. La diferencia está en cuánta luz quieres conservar, la privacidad que buscas y las condiciones de tu espacio."
      ctaLabel="Ayúdame a elegir"
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
          <span>Un ejemplo sencillo</span>
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
          <Link href="/peliculas/nanoceramica/ir75/"><strong>IR75</strong><span>Quiero conservar la mayor cantidad de luz</span><Icon name="arrow" size={18}/></Link>
          <Link href="/peliculas/nanoceramica/ir50/"><strong>IR50</strong><span>Quiero mucha claridad con mayor control solar que IR75 según ficha</span><Icon name="arrow" size={18}/></Link>
          <Link href="/peliculas/nanoceramica/ir35/"><strong>IR35</strong><span>Busco un punto medio entre luz, apariencia y deslumbramiento</span><Icon name="arrow" size={18}/></Link>
          <Link href="/peliculas/nanoceramica/ir15/"><strong>IR15</strong><span>Quiero una apariencia más oscura y mayor privacidad visual durante el día</span><Icon name="arrow" size={18}/></Link>
          <Link href="/peliculas/nanoceramica/ir5/"><strong>IR5</strong><span>Quiero la opción más oscura de la gama</span><Icon name="arrow" size={18}/></Link>
        </div>
      </div>
    </section>

    <section id="comparar" className="section section-alt nano-compare-section">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div><p className="eyebrow">Comparador de gama</p><h2>Primero decide cuánta luz quieres conservar.</h2></div>
          <p>El VLT te ayuda a entender qué tan claro u oscuro es cada tono. Después puedes comparar el TSER y los demás datos técnicos sin confundir apariencia con desempeño.</p>
        </div>
        <NanoComparison/>
      </div>
    </section>

    <section className="section nano-metrics-section">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div><p className="eyebrow">Cómo leer los datos</p><h2>Qué significa cada dato y para qué te sirve.</h2></div>
          <p>No necesitas memorizar las siglas. VLT habla de luz visible; UV e IR miden partes distintas de la radiación; y TSER ayuda a comparar el rechazo de energía solar total.</p>
        </div>
        <MetricExplainer items={metrics}/>
      </div>
    </section>

    <section className="section section-alt nano-applications-section">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">Aplicación</p><h2>La misma tecnología se elige distinto según dónde la necesitas.</h2></div>
        <div className="nano-application-grid">
          <Link href="/residencial/"><span><Icon name="home" size={22}/></span><h3>Residencial</h3><p>Conservar luz, reducir deslumbramiento y ajustar privacidad según cada espacio.</p></Link>
          <Link href="/comercial/"><span><Icon name="building" size={22}/></span><h3>Comercial</h3><p>Fachadas, oficinas y proyectos donde confort, especificación y operación importan.</p></Link>
          <Link href="/automotriz/"><span><Icon name="car" size={22}/></span><h3>Automotriz</h3><p>Elegir tono considerando visibilidad, uso nocturno y las condiciones del vehículo.</p></Link>
        </div>
      </div>
    </section>

    <ProductCTA title="Dinos qué quieres resolver. Nosotros te ayudamos a encontrar el balance." text="Cuéntanos dónde quieres instalarla y qué quieres conservar o cambiar: luz, privacidad, visibilidad o control solar." cta="Ayúdame a elegir tono" context={{sourcePage:"/peliculas/nanoceramica/", product:"Nanocerámica HIGHTECH"}} secondaryHref="/peliculas/" secondaryLabel="Comparar tecnologías" />
  </>;
}
