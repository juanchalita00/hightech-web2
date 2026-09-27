import type { Metadata } from "next";
import { GuideCard } from "@/components/GuideCard";
import { GuideHero } from "@/components/GuideHero";

export const metadata: Metadata = { alternates: { canonical: "/guias/" },
  title: { absolute: "Guías de películas para cristales | HIGHTECH Polarizados" },
  description: "Guías HIGHTECH para entender VLT, TSER, rechazo infrarrojo, UV, privacidad, estrés térmico y polarizado automotriz en Jalisco.",
};

const guides = [
  { href:"/guias/reducir-calor-ventanas/", category:"Control solar", title:"Cómo reducir el calor que entra por las ventanas", description:"Qué mirar además de la oscuridad: vidrio, orientación, VLT, rechazo infrarrojo a 950 nm y TSER." },
  { href:"/guias/proteccion-uv-ventanas/", category:"Protección UV", title:"Protección UV en ventanas: qué hace y qué no", description:"Cómo leer el 99% UV de la gama nano sin convertirlo en una promesa exagerada sobre decoloración." },
  { href:"/guias/irr-vs-tser/", category:"Métricas", title:"IR vs TSER: no son la misma métrica", description:"Por qué 95% de rechazo infrarrojo a 950 nm no significa 95% menos calor y cómo leer ambas cifras." , badge:"Clave técnica"},
  { href:"/guias/que-es-vlt/", category:"Métricas", title:"Qué es VLT y qué significan 75, 50, 35, 15 y 5", description:"La transmisión de luz visible explica claridad y oscuridad; el nombre comercial no siempre coincide exactamente con la ficha." },
  { href:"/guias/privacidad-ventanas-noche/", category:"Privacidad", title:"Privacidad de noche: por qué puede invertirse", description:"La diferencia de iluminación entre interior y exterior cambia lo que se ve a través del cristal." },
  { href:"/guias/estres-termico-cristal/", category:"Compatibilidad", title:"Estrés térmico: por qué el tipo de vidrio importa", description:"Una película se selecciona como parte del sistema vidrio + película, no únicamente por tono o porcentaje." },
  { href:"/guias/polarizado-automotriz-jalisco/", category:"Automotriz · Jalisco", title:"Qué dice la norma y qué referencia nos han dado en Tránsito", description:"Separamos el texto normativo de la referencia práctica 70–75 / 35 / 20 reportada por HIGHTECH.", badge:"Revisión legal" },
] as const;

export default function GuidesPage(){return <>
  <GuideHero eyebrow="Centro de conocimiento" title="Entender el cristal antes de elegir la película." description="Guías técnicas para comparar métricas, controlar expectativas y tomar decisiones con contexto. Sin convertir una cifra de ficha en una promesa universal." category="Guías HIGHTECH" readingTime="7 temas prioritarios" />
  <section className="section guide-index-section"><div className="container">
    <div className="section-heading section-heading-split"><div><p className="eyebrow">Biblioteca inicial</p><h2>Empieza por la duda que quieres resolver.</h2></div><p>Las guías enlazan a las soluciones correspondientes, pero primero explican el problema.</p></div>
    <div className="guide-card-grid">{guides.map((guide)=><GuideCard key={guide.href} {...guide}/>)}</div>
  </div></section>
</>}
