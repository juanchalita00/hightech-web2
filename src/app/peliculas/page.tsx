import Link from "next/link";
import { Icon } from "@/components/Icon";
import { ProductCTA } from "@/components/ProductCTA";
import { ProductHero } from "@/components/ProductHero";
import { TechnologyMatrix } from "@/components/TechnologyMatrix";

export const metadata = { alternates: { canonical: "/peliculas/" },
  title: { absolute: "Películas para cristales | HIGHTECH Polarizados" },
  description: "Compara nanocerámica, película reflectiva, seguridad y privacidad según el problema, la apariencia y la aplicación.",
};

const families = [
  { href:"/peliculas/nanoceramica/", icon:"sun" as const, label:"Control solar", title:"Nanocerámica", text:"La opción con la gama técnica más documentada de HIGHTECH: cinco niveles de luz con VLT, UV, rechazo infrarrojo a 950 nm y TSER mapeados." },
  { href:"/peliculas/plata-reflecta/", icon:"privacy" as const, label:"Arquitectura", title:"Plata Reflecta", text:"Apariencia reflectiva y privacidad principalmente diurna. El efecto depende de la diferencia de iluminación entre ambos lados del cristal." },
  { href:"/peliculas/seguridad/", icon:"shield" as const, label:"Protección del cristal", title:"Seguridad", text:"Ayuda a mantener fragmentos unidos al romperse. Los objetivos de retardo de acceso requieren evaluar el sistema completo." },
  { href:"/peliculas/privacidad/", icon:"glass" as const, label:"Control visual", title:"Privacidad", text:"La estrategia cambia según quieras privacidad diurna, mayor oscuridad o una solución que bloquee/difumine la visión." },
] as const;

export default function FilmsPage() {
  return <>
    <ProductHero variant="hub" eyebrow="Tecnologías para cristal" title="No todas las películas resuelven el mismo problema." description="Comparamos claridad, privacidad, control solar, aplicación y límites antes de recomendar una tecnología." ctaLabel="Encontrar mi solución" context={{sourcePage:"/peliculas/", problem:"unknown"}} facts={[{label:"Familias",value:"4"},{label:"Nano activos",value:"5"},{label:"Método",value:"Diagnóstico"}]} secondary={<Link className="button button-secondary" href="/servicios/">Empezar por mi problema <Icon name="arrow" size={18}/></Link>} />

    <section className="section technology-family-section"><div className="container">
      <div className="section-heading section-heading-split"><div><p className="eyebrow">Biblioteca de soluciones</p><h2>Primero define qué quieres cambiar del cristal.</h2></div><p>La misma ventana puede necesitar más claridad, más privacidad, menos deslumbramiento o un comportamiento distinto al romperse. La tecnología viene después.</p></div>
      <div className="film-family-grid">{families.map((f)=><Link className="film-family-card" href={f.href} key={f.title}><span className="film-family-icon"><Icon name={f.icon} size={24}/></span><small>{f.label}</small><h3>{f.title}</h3><p>{f.text}</p><span className="text-link text-link-strong">Explorar tecnología <Icon name="arrow" size={17}/></span></Link>)}</div>
    </div></section>

    <section className="section section-alt"><div className="container"><div className="section-heading section-heading-split"><div><p className="eyebrow">Comparación rápida</p><h2>Una vista útil sin inventar una “ganadora”.</h2></div><p>Cada familia resuelve prioridades distintas. Los datos técnicos exactos sólo se muestran cuando existe fuente aprobada para ese producto.</p></div><TechnologyMatrix/></div></section>

    <section className="section film-principles-section"><div className="container film-principles-grid"><article><span>01</span><h3>Claridad no significa ausencia de control solar.</h3><p>En nanocerámica hay opciones de alta transmisión visible con datos técnicos de ficha.</p></article><article><span>02</span><h3>Más oscuro no es sinónimo de “más protección UV”.</h3><p>La gama nano activa indica 99% de rechazo UV en los cinco tonos.</p></article><article><span>03</span><h3>Privacidad depende de luz y estrategia.</h3><p>El efecto reflectivo puede invertirse de noche cuando el interior queda más iluminado.</p></article><article><span>04</span><h3>Seguridad es un sistema, no un adjetivo.</h3><p>Retención de fragmentos y resistencia frente a intrusión no son la misma promesa.</p></article></div></section>

    <ProductCTA title="No tienes que llegar sabiendo qué película pedir." text="Cuéntanos qué quieres resolver y usamos el cristal, la luz, la aplicación y tus prioridades para orientar la selección." cta="Cuéntanos qué quieres resolver" context={{sourcePage:"/peliculas/"}} secondaryHref="/peliculas/nanoceramica/" secondaryLabel="Comparar nanocerámica" />
  </>;
}
