import Link from "next/link";
import { Icon } from "@/components/Icon";
import { LimitationNotice } from "@/components/LimitationNotice";
import { MetricExplainer } from "@/components/MetricExplainer";
import { NanoComparison } from "@/components/NanoComparison";
import { ProductCTA } from "@/components/ProductCTA";
import nanoHero1 from "./nanoHeroData1";
import nanoHero2 from "./nanoHeroData2";
import nanoHero3 from "./nanoHeroData3";
import nanoHero4 from "./nanoHeroData4";
import { ProductHero } from "@/components/ProductHero";

export const metadata = { alternates: { canonical: "/peliculas/nanoceramica/" },
  title: { absolute: "Película nanocerámica | HIGHTECH Polarizados" },
  description: "Compara IR75, IR50, IR35, IR15 e IR5 por VLT, UV, rechazo infrarrojo a 950 nm y TSER según ficha técnica.",
};

const nanoHeroImage = "data:image/webp;base64," + nanoHero1 + nanoHero2 + nanoHero3 + nanoHero4;

const metrics = [
  { metric:"VLT", label:"Transmisión de luz visible", meaning:"Indica cuánta luz visible atraviesa la película en la medición de ficha. Es la métrica más útil para entender claridad u oscuridad.", caution:"El VLT de la película no es necesariamente el VLT final del conjunto vidrio + película." },
  { metric:"UV", label:"Rechazo ultravioleta", meaning:"Las fichas activas de la gama nano indican 99% de rechazo UV en los cinco tonos.", caution:"UV no es la única causa de decoloración de interiores." },
  { metric:"IR 950", label:"Rechazo infrarrojo a 950 nm", meaning:"Las fichas indican 95% de rechazo infrarrojo medido específicamente a 950 nm.", caution:"No equivale a 95% menos calor ni a rechazo de toda la banda infrarroja." },
  { metric:"TSER", label:"Rechazo de energía solar total", meaning:"Es una métrica distinta al rechazo IR y cambia por tono en la ficha: 59% a 96% en la gama mapeada.", caution:"No es una promesa universal de temperatura del espacio instalado." },
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
      image={{src:nanoHeroImage, alt:"Comparación visual exterior de los tonos nanocerámicos IR75, IR50, IR35, IR15 e IR5 instalados en un ventanal.", caption:"Vista exterior · referencia visual. La apariencia puede variar según el cristal, la iluminación y las condiciones del entorno."}}
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
          <p className="eyebrow">Cómo elegir</p>
          <h2>La pregunta no es “¿cuál es mejor?”, sino “¿qué balance quieres?”.</h2>
          <p>Más claridad puede ser prioridad si quieres conservar luz y vista. Un tono más oscuro puede ayudar con el deslumbramiento y dar una apariencia de mayor privacidad durante el día, pero también deja entrar menos luz.</p>
          <LimitationNotice title="La privacidad cambia con la iluminación"><p>Cuando depende del contraste o la reflectividad, puede disminuir o invertirse si el interior está más iluminado que el exterior.</p></LimitationNotice>
        </div>
        <div className="nano-choice-links">
          <Link href="/peliculas/nanoceramica/ir75/"><strong>IR75</strong><span>Para conservar la mayor cantidad de luz</span><Icon name="arrow" size={18}/></Link>
          <Link href="/peliculas/nanoceramica/ir50/"><strong>IR50</strong><span>Alta claridad con mayor control solar que IR75 según ficha</span><Icon name="arrow" size={18}/></Link>
          <Link href="/peliculas/nanoceramica/ir35/"><strong>IR35</strong><span>Punto medio entre luz, apariencia y deslumbramiento</span><Icon name="arrow" size={18}/></Link>
          <Link href="/peliculas/nanoceramica/ir15/"><strong>IR15</strong><span>Más oscuridad y privacidad visual durante el día</span><Icon name="arrow" size={18}/></Link>
          <Link href="/peliculas/nanoceramica/ir5/"><strong>IR5</strong><span>La opción más oscura de la gama</span><Icon name="arrow" size={18}/></Link>
        </div>
      </div>
    </section>

    <section id="comparar" className="section section-alt nano-compare-section">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div><p className="eyebrow">Comparador de gama</p><h2>Cinco niveles de luz, con los datos al lado.</h2></div>
          <p>IR50 e IR5 son nombres comerciales: sus VLT reales de ficha son 48% y 3%. Por eso mostramos el dato técnico junto al nombre del tono.</p>
        </div>
        <NanoComparison/>
      </div>
    </section>

    <section className="section nano-metrics-section">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div><p className="eyebrow">Si quieres profundizar</p><h2>VLT, UV, IR y TSER miden cosas diferentes.</h2></div>
          <p>No necesitas memorizar estas siglas para elegir. Las mostramos porque permiten comparar con datos qué hace cada película y evitar confundir oscuridad con desempeño.</p>
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
