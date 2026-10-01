import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { ProcessRail } from "@/components/ProcessRail";
import { ReviewShelf } from "@/components/ReviewShelf";
import { TrustHero } from "@/components/TrustHero";
import { TrustPillars } from "@/components/TrustPillars";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { truth } from "@/lib/truth";

export const metadata:Metadata={ alternates: { canonical: "/nosotros/" },title:{ absolute: "Nosotros | HIGHTECH Polarizados" },description:"Cómo trabaja HIGHTECH Polarizados: diagnóstico, recomendación técnica, cotización, instalación y comunicación clara de límites y especificaciones."};

const process=[
  {number:"01",title:"Entendemos el problema",text:"Calor, UV, deslumbramiento, privacidad, seguridad o una combinación concreta."},
  {number:"02",title:"Revisamos la aplicación",text:"Cristal, exposición, uso del espacio o vehículo, tono deseado y condiciones de instalación."},
  {number:"03",title:"Comparamos opciones",text:"La película se recomienda con especificaciones y limitaciones visibles, no sólo por oscuridad."},
  {number:"04",title:"Cotizamos el alcance",text:"Definimos qué se instalará y qué información adicional necesita el proyecto antes de agendar."},
] as const;

export default function Page(){return <>
  <TrustHero eyebrow="HIGHTECH Polarizados" title="La precisión técnica también es parte del servicio." description="HIGHTECH trabaja como proveedor de soluciones para cristales: primero entendemos qué quieres resolver y después aterrizamos una película, un tono y una aplicación coherentes con ese objetivo." points={["Residencial y comercial como prioridad","Automotriz con instalación en taller","Especificaciones explicadas con contexto"]}/>
  <section className="section"><div className="container"><div className="section-heading section-heading-split"><div><p className="eyebrow">Cómo pensamos</p><h2>No vendemos oscuridad. Diseñamos una recomendación.</h2></div><p>La apariencia importa, pero no sustituye el análisis de luz, exposición, cristal, privacidad, compatibilidad y uso real.</p></div><TrustPillars/></div></section>
  <section className="section section-dark"><div className="container about-director-grid"><div><p className="eyebrow eyebrow-light">Dirección</p><h2>{truth.brand.director}</h2><p>Director de {truth.brand.name}. La dirección participa en la definición comercial y técnica de los proyectos, las recomendaciones y los criterios de servicio.</p></div><div className="about-principle"><span>Principio rector</span><strong>“Primero entendemos qué quieres resolver. Después recomendamos la película.”</strong><p>La misma claridad debe mantenerse desde la primera consulta hasta la instalación.</p></div></div></section>
  <section className="section"><div className="container"><div className="section-heading"><p className="eyebrow">Proceso</p><h2>Una conversación útil antes de instalar.</h2></div><ProcessRail steps={process}/></div></section>
  <section className="section section-alt"><div className="container about-proof-grid"><div><p className="eyebrow">Qué sí usamos como prueba</p><h2>Fuente, contexto y límites.</h2><p>Una ficha técnica sostiene una especificación. Una fotografía real puede demostrar un proyecto. Una medición demuestra un caso bajo sus condiciones. No mezclamos esos niveles.</p><Link href="/guias/" className="text-link text-link-strong">Leer guías técnicas <Icon name="arrow" size={18}/></Link></div><div className="about-proof-list"><article><b>01</b><h3>Ficha técnica</h3><p>Para datos concretos de producto.</p></article><article><b>02</b><h3>Proyecto documentado</h3><p>Para mostrar una instalación auténtica.</p></article><article><b>03</b><h3>Permiso</h3><p>La foto de un cliente no se convierte automáticamente en publicidad.</p></article></div></div></section>
  <ReviewShelf/>
  <section className="section final-cta-section"><div className="container final-cta-card"><div><p className="eyebrow eyebrow-light">Hablemos de tu caso</p><h2>No necesitas llegar sabiendo qué película elegir.</h2></div><div className="final-cta-actions"><WhatsAppCTA label="Cuéntanos qué quieres resolver" context={{sourcePage:"/nosotros/"}} position="FINAL_CTA" className="button-light"/><Link href="/servicios/" className="button button-ghost-light">Explorar soluciones</Link></div></div></section>
</>}
