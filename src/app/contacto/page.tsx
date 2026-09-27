import type { Metadata } from "next";
import Link from "next/link";
import { ContactMethods } from "@/components/ContactMethods";
import { Icon } from "@/components/Icon";
import { QuotePrep } from "@/components/QuotePrep";
import { TrustHero } from "@/components/TrustHero";
import { truth } from "@/lib/truth";

export const metadata:Metadata={ alternates: { canonical: "/contacto/" },title:{ absolute: "Contacto | HIGHTECH Polarizados" },description:"Contacta a HIGHTECH Polarizados para revisar un proyecto residencial, comercial o automotriz en Zapopan, Jalisco."};

export default function Page(){return <>
  <TrustHero eyebrow="Contacto" title="Danos contexto. Te ayudamos a aterrizar la solución." description="WhatsApp es el canal principal para cotizar. Si es un proyecto comercial también puedes enviarnos información por correo. La instalación automotriz se realiza en taller." ctaLabel="Abrir WhatsApp" context={{sourcePage:"/contacto/"}} points={[truth.contact.locationLabel,"Residencial · Comercial · Automotriz","Cotización según aplicación"]}/>
  <section className="section"><div className="container"><div className="section-heading"><p className="eyebrow">Formas de contacto</p><h2>Elige el canal que mejor encaja con tu proyecto.</h2></div><ContactMethods/></div></section>
  <section className="section section-alt"><div className="container"><div className="section-heading section-heading-split"><div><p className="eyebrow">Para cotizar más rápido</p><h2>Con tres datos podemos empezar mucho mejor.</h2></div><p>No necesitas una ficha técnica ni medidas perfectas para escribirnos. Una referencia aproximada nos ayuda a hacer las preguntas correctas.</p></div><QuotePrep/></div></section>
  <section className="section contact-policy-section"><div className="container contact-policy-grid"><div><p className="eyebrow">Automotriz</p><h2>La instalación se realiza en taller.</h2><p>Esto permite controlar mejor las condiciones de aplicación. La disponibilidad de cita se confirma por WhatsApp; el horario comercial no equivale a disponibilidad inmediata de instalación.</p><Link href="/automotriz/" className="text-link text-link-strong">Ver servicio automotriz <Icon name="arrow" size={18}/></Link></div><div><p className="eyebrow">Arquitectónico</p><h2>Casa, oficina o proyecto.</h2><p>Para residencial y comercial revisamos medidas, fotografías, acceso y objetivo. Algunos proyectos requieren levantamiento antes de cerrar especificación.</p><Link href="/comercial/" className="text-link text-link-strong">Ver proyectos comerciales <Icon name="arrow" size={18}/></Link></div></div></section>
</>}
