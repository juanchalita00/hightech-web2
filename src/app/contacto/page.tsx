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
  title: { absolute: "Cotizar polarizado en Zapopan | HIGHTECH Polarizados" },
  description: "Pide una cotización de polarizado residencial, comercial o automotriz en Zapopan y la zona metropolitana de Guadalajara. Elige si te contactamos por WhatsApp o por correo.",
};

export default async function Page({ searchParams }: { searchParams: Promise<{ servicio?: string; producto?: string }> }) {
  const params = await searchParams;
  const service = isQuoteService(params.servicio) ? params.servicio : undefined;
  const initialMessage = params.producto === "pdlc" ? "Quiero cotizar película inteligente PDLC." : "";
  return <>
    <TrustHero eyebrow="Contacto" title="Cuéntanos el espacio o el vehículo. Te ayudamos a preparar tu cotización." description="Puedes llenar el formulario o escribir por WhatsApp. Atendemos desde Zapopan, Jalisco, la zona metropolitana de Guadalajara y proyectos que se evalúan en otros estados." ctaLabel="Cotizar" ctaHref="#cotizar" points={[truth.contact.locationLabel,"Residencial · Comercial · Automotriz","WhatsApp o correo"]}/>
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
    <section className="section"><div className="container"><div className="section-heading section-heading-split"><div><p className="eyebrow">Si ya tienes información</p><h2>Con esto la cotización avanza más rápido.</h2></div><p>No hace falta tenerlo todo antes de escribir. Si ya cuentas con medidas, fotos o el modelo del vehículo, con estos datos te cotizamos más rápido.</p></div><QuotePrep/></div></section>
    <section className="section contact-policy-section"><div className="container contact-policy-grid"><div><p className="eyebrow">Automotriz</p><h2>En taller con cita.</h2><p>A domicilio solo flotillas o autos de agencia. Agendamos según la disponibilidad de la semana; te confirmamos fecha por WhatsApp.</p><Link href="/automotriz/" className="text-link text-link-strong">Ver polarizado para auto <Icon name="arrow" size={18}/></Link></div><div><p className="eyebrow">Casa y negocio</p><h2>Fotos y medidas para empezar.</h2><p>Revisamos el objetivo, el cristal y la ciudad. Si una visita ayuda, te lo decimos. Tomás Mann 5348, Jardines Vallarta, 45027 Zapopan.</p><Link href="/residencial/" className="text-link text-link-strong">Ver polarizado para casa <Icon name="arrow" size={18}/></Link></div></div></section>
  </>;
}
