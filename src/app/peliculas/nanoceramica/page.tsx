import Link from "next/link";
import { Icon } from "@/components/Icon";
import { LimitationNotice } from "@/components/LimitationNotice";
import { MetricExplainer } from "@/components/MetricExplainer";
import { NanoComparison } from "@/components/NanoComparison";
import { ProductCTA } from "@/components/ProductCTA";
import { ProductHero } from "@/components/ProductHero";
import { WarrantySummaryGate } from "@/components/WarrantySummaryGate";

export const metadata = { alternates: { canonical: "/peliculas/nanoceramica/" },
  title: { absolute: "Película nanocerámica | HIGHTECH Polarizados" },
  description: "Compara IR75, IR50, IR35, IR15 e IR5 por VLT, UV, rechazo infrarrojo a 950 nm y TSER según ficha técnica.",
};

const metrics = [
  { metric:"VLT", label:"Transmisión de luz visible", meaning:"Indica cuánta luz visible atraviesa la película en la medición de ficha. Es la métrica más útil para entender claridad u oscuridad.", caution:"El VLT de la película no es necesariamente el VLT final del conjunto vidrio + película." },
  { metric:"UV", label:"Rechazo ultravioleta", meaning:"Las fichas activas de la gama nano indican 99% de rechazo UV en los cinco tonos.", caution:"UV no es la única causa de decoloración de interiores." },
  { metric:"IR 950", label:"Rechazo infrarrojo a 950 nm", meaning:"Las fichas indican 95% de rechazo infrarrojo medido específicamente a 950 nm.", caution:"No equivale a 95% menos calor ni a rechazo de toda la banda infrarroja." },
  { metric:"TSER", label:"Rechazo de energía solar total", meaning:"Es una métrica distinta al rechazo IR y cambia por tono en la ficha: 59% a 96% en la gama mapeada.", caution:"No es una promesa universal de temperatura del espacio instalado." },
] as const;

export default function NanoPage() {
  return <>
    <ProductHero variant="nano" eyebrow="Nanocerámica HIGHTECH" title="Cinco niveles de luz. Una comparación técnica que sí dice qué mide." description="La gama activa va de IR75 a IR5. El tono modifica de forma importante la transmisión visible y el TSER de ficha; los cinco tonos indican 99% UV y 95% de rechazo infrarrojo a 950 nm." ctaLabel="Elegir tono nanocerámico" context={{sourcePage:"/peliculas/nanoceramica/", product:"Nanocerámica HIGHTECH"}} facts={[{label:"VLT",value:"75 → 3%"},{label:"UV",value:"99%"},{label:"IR a 950 nm",value:"95%"},{label:"TSER",value:"59 → 96%"}]} secondary={<Link href="/automotriz/" className="button button-secondary">Ver aplicación automotriz <Icon name="arrow" size={18}/></Link>} />

    <section className="section nano-metrics-section"><div className="container"><div className="section-heading section-heading-split"><div><p className="eyebrow">Leer una ficha sin confundir métricas</p><h2>IR, TSER, UV y VLT responden preguntas distintas.</h2></div><p>Separarlas evita frases comerciales engañosas y te ayuda a elegir por claridad, desempeño y uso real.</p></div><MetricExplainer items={metrics}/></div></section>

    <section className="section section-alt nano-compare-section"><div className="container"><div className="section-heading section-heading-split"><div><p className="eyebrow">Comparador de gama</p><h2>De IR75 a IR5, sin asumir que el número comercial es el VLT exacto.</h2></div><p>IR50 transmite 48% y IR5 transmite 3% según sus fichas. Por eso mostramos siempre el dato técnico junto al nombre comercial.</p></div><NanoComparison/></div></section>

    <section className="section nano-choice-section"><div className="container nano-choice-grid"><div><p className="eyebrow">Cómo elegir</p><h2>La pregunta no es “¿cuál es mejor?”, sino “¿qué balance quieres?”.</h2><p>Más claridad puede ser prioridad en espacios donde quieres conservar luz y vista. Tonos más oscuros cambian la apariencia, el deslumbramiento y la privacidad visual, pero también reducen más la luz disponible.</p><LimitationNotice title="Privacidad no es permanente"><p>Cuando la privacidad depende del contraste o reflectividad, puede disminuir o invertirse cuando el interior está más iluminado que el exterior.</p></LimitationNotice></div><div className="nano-choice-links"><Link href="/peliculas/nanoceramica/ir75/"><strong>IR75</strong><span>Máxima claridad activa</span><Icon name="arrow" size={18}/></Link><Link href="/peliculas/nanoceramica/ir50/"><strong>IR50</strong><span>Claridad alta</span><Icon name="arrow" size={18}/></Link><Link href="/peliculas/nanoceramica/ir35/"><strong>IR35</strong><span>Balance visual</span><Icon name="arrow" size={18}/></Link><Link href="/peliculas/nanoceramica/ir15/"><strong>IR15</strong><span>Privacidad más marcada</span><Icon name="arrow" size={18}/></Link><Link href="/peliculas/nanoceramica/ir5/"><strong>IR5</strong><span>Máxima oscuridad activa</span><Icon name="arrow" size={18}/></Link></div></div></section>

    <section className="section nano-applications-section"><div className="container"><div className="section-heading"><p className="eyebrow">Aplicación</p><h2>La misma gama puede responder a contextos distintos.</h2></div><div className="nano-application-grid"><Link href="/residencial/"><span><Icon name="home" size={22}/></span><h3>Residencial</h3><p>Conservar luz, reducir deslumbramiento y ajustar privacidad según el espacio.</p></Link><Link href="/comercial/"><span><Icon name="building" size={22}/></span><h3>Comercial</h3><p>Fachadas, oficinas y proyectos donde especificación y operación importan.</p></Link><Link href="/automotriz/"><span><Icon name="car" size={22}/></span><h3>Automotriz</h3><p>Elegir tono considerando visibilidad, uso nocturno y referencia práctica en Jalisco.</p></Link></div></div></section>

    <div className="container"><WarrantySummaryGate product="Nanocerámica HIGHTECH" /></div>
    <ProductCTA title="Elige claridad y desempeño con contexto, no sólo por el nombre del tono." text="Dinos dónde quieres instalarla y qué quieres conservar o cambiar: luz, privacidad, visibilidad o control solar." cta="Ayúdame a elegir tono" context={{sourcePage:"/peliculas/nanoceramica/", product:"Nanocerámica HIGHTECH"}} secondaryHref="/peliculas/" secondaryLabel="Comparar tecnologías" />
  </>;
}
