import type { Metadata } from "next";
import Link from "next/link";
import { ContactMethods } from "@/components/ContactMethods";
import { Icon } from "@/components/Icon";
import { QuoteForm } from "@/components/QuoteForm";
import { QuotePrep } from "@/components/QuotePrep";
import { TrustHero } from "@/components/TrustHero";
import { isQuoteService } from "@/lib/quote";
import { truth } from "@/lib/truth";

export const metadata: Metadata = {
  alternates: { canonical: "/contacto/" },
  title: { absolute: "Cotizar películas para cristales en Zapopan | HIGHTECH Polarizados" },
  description: "Pide una cotización de polarizado residencial, comercial o automotriz en Zapopan y la zona metropolitana de Guadalajara. Elige si te contactamos por WhatsApp o por correo.",
};

export default async function Page({ searchParams }: { searchParams: Promise<{ servicio?: string; producto?: string }> }) {
  const params = await searchParams;
  const service = isQuoteService(params.servicio) ? params.servicio : undefined;
  const initialMessage = params.producto === "pdlc" ? "Quiero cotizar película inteligente PDLC." : "";
  return <>
    <TrustHero eyebrow="Contacto" title="Cuéntanos el espacio o el vehículo. Te ayudamos a aterrizar la cotización." description="Puedes llenar el formulario o escribir por WhatsApp. Atendemos desde Zapopan, Jalisco, la zona metropolitana de Guadalajara y proyectos que se evalúan en otros estados." ctaLabel="Ir al formulario" ctaHref="#cotizar" points={[truth.contact.locationLabel,"Residencial · Comercial · Automotriz","WhatsApp o correo"]}/>
    <section className="section" id="cotizar">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div><p className="eyebrow">Solicitud de cotización</p><h2>Los datos que necesitamos para empezar.</h2></div>
          <p>Nombre, ciudad y cómo prefieres que te contactemos. Si falta algo, lo pedimos en la conversación.</p>
        </div>
        <QuoteForm initialService={service} initialMessage={initialMessage} />
      </div>
    </section>
    <section className="section section-alt"><div className="container"><div className="section-heading"><p className="eyebrow">Otras formas de contacto</p><h2>WhatsApp, teléfono y horario.</h2></div><ContactMethods/></div></section>
    <section className="section"><div className="container"><div className="section-heading section-heading-split"><div><p className="eyebrow">Si ya tienes información</p><h2>Con esto la cotización avanza más rápido.</h2></div><p>No hace falta tenerlo todo antes de escribir. Si ya cuentas con medidas, fotos o el modelo del vehículo, ayúdanos a no preguntarte de nuevo.</p></div><QuotePrep/></div></section>
    <section className="section contact-policy-section"><div className="container contact-policy-grid"><div><p className="eyebrow">Automotriz</p><h2>Taller, o a domicilio si se confirma.</h2><p>La cita se confirma por WhatsApp. En algunos casos, como flotillas, maquinaria o autos nuevos de agencia, el equipo revisa si se puede instalar a domicilio. El horario de atención no significa que haya un lugar libre ese mismo día.</p><Link href="/automotriz/" className="text-link text-link-strong">Ver servicio automotriz <Icon name="arrow" size={18}/></Link></div><div><p className="eyebrow">Arquitectónico</p><h2>Casa, oficina o proyecto.</h2><p>Revisamos el objetivo, las medidas, la ciudad y las condiciones que puedan cambiar el alcance. Si una foto o una visita ayudan, te lo decimos.</p><Link href="/comercial/" className="text-link text-link-strong">Ver proyectos comerciales <Icon name="arrow" size={18}/></Link></div></div></section>
  </>;
}
