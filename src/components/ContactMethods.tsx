import { Icon } from "@/components/Icon";
import { GateNotice } from "@/components/GateNotice";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { getPublicAddress, truth } from "@/lib/truth";

export function ContactMethods(){
  const address=getPublicAddress();
  return <div className="contact-methods-grid">
    <article className="contact-method contact-method-primary"><span><Icon name="message" size={22}/></span><p className="eyebrow eyebrow-light">Cotización y orientación</p><h2>WhatsApp</h2><p>La vía más corta para revisar tu caso y pedir los datos que realmente necesitamos.</p><WhatsAppCTA label="Abrir WhatsApp" context={{sourcePage:"/contacto/"}} position="MID_PAGE" className="button-light"/></article>
    <article className="contact-method"><span><Icon name="message" size={22}/></span><p className="eyebrow">Teléfono</p><h3>{truth.contact.phoneDisplay}</h3><p>También puedes llamarnos directamente.</p><a className="text-link text-link-strong" href={`tel:${truth.contact.phoneE164}`}>Llamar ahora</a></article>
    <article className="contact-method"><span><Icon name="building" size={22}/></span><p className="eyebrow">Proyectos</p><h3>Revisión comercial</h3><p>Para empresas, fachadas, oficinas o proyectos de mayor alcance, podemos revisar el objetivo, medidas y condiciones necesarias antes de preparar la propuesta.</p><WhatsAppCTA label="Revisar proyecto" context={{sourcePage:"/contacto/"}} position="MID_PAGE" /></article>
    <article className="contact-method contact-method-location"><span><Icon name="building" size={22}/></span><p className="eyebrow">Ubicación</p>{address ? <><h3>Taller HIGHTECH</h3><p>{address}</p></> : <><h3>Zapopan, Jalisco</h3><p>La ubicación exacta del taller se confirma al agendar tu visita.</p><GateNotice title="NAP gate activo">No mostramos una dirección distinta entre web, Google, Meta y WhatsApp.</GateNotice></>}</article>
  </div>
}
