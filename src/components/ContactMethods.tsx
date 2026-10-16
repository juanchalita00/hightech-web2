import { Icon } from "@/components/Icon";
import { SocialLinks } from "@/components/SocialLinks";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { truth } from "@/lib/truth";

export function ContactMethods() {
  return <div className="contact-methods-grid">
    <article className="contact-method contact-method-primary"><span><Icon name="message" size={22}/></span><p className="eyebrow eyebrow-light">Cotización y orientación</p><h2>WhatsApp</h2><p>Si prefieres escribir directo, este es el canal para revisar tu caso.</p><WhatsAppCTA label="WhatsApp" context={{sourcePage:"/contacto/"}} position="MID_PAGE" className="button-light"/></article>
    <article className="contact-method"><span><Icon name="message" size={22}/></span><p className="eyebrow">Teléfono</p><h3>{truth.contact.phoneDisplay}</h3><p>También puedes llamarnos.</p><a className="text-link text-link-strong" href={`tel:${truth.contact.phoneE164}`}>Llamar ahora</a></article>
    <article className="contact-method"><span><Icon name="building" size={22}/></span><p className="eyebrow">Horario de atención</p><h3>Lunes a sábado</h3><p>De 10:00 a 21:00. Domingo cerrado. El horario de atención no es, por sí solo, un lugar libre en la agenda.</p></article>
    <article className="contact-method contact-method-location"><span><Icon name="building" size={22}/></span><p className="eyebrow">Ubicación</p><h3>{truth.contact.locationLabel}</h3><p>Atendemos la zona metropolitana de Guadalajara. Los proyectos en otros estados se evalúan; el traslado se revisa caso por caso.</p><p className="contact-address-note">La instalación automotriz suele hacerse en taller, con cita. A domicilio se revisa en algunos casos.</p><a className="text-link text-link-strong" href={truth.contact.social.googleMaps} target="_blank" rel="noopener noreferrer">Abrir en Google Maps</a></article>
    <article className="contact-method contact-method-social"><span><Icon name="message" size={22}/></span><p className="eyebrow">Redes</p><h3>Instagram, TikTok y más</h3><p>Los perfiles oficiales, sin parámetros de seguimiento.</p><SocialLinks labeled tone="light" /></article>
  </div>;
}
