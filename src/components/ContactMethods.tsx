import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { truth } from "@/lib/truth";

export function ContactMethods() {
  return <div className="contact-methods-grid">
    <article className="contact-method contact-method-primary"><span><Icon name="message" size={22}/></span><p className="eyebrow eyebrow-light">Cotización y orientación</p><h2>WhatsApp</h2><p>Si prefieres escribir directo, este es el canal para revisar tu caso.</p><WhatsAppCTA label="Abrir WhatsApp" context={{sourcePage:"/contacto/"}} position="MID_PAGE" className="button-light"/></article>
    <article className="contact-method"><span><Icon name="message" size={22}/></span><p className="eyebrow">Teléfono</p><h3>{truth.contact.phoneDisplay}</h3><p>También puedes llamarnos.</p><a className="text-link text-link-strong" href={`tel:${truth.contact.phoneE164}`}>Llamar ahora</a></article>
    <article className="contact-method"><span><Icon name="building" size={22}/></span><p className="eyebrow">Horario de atención</p><h3>Lunes a sábado</h3><p>Lunes a viernes de 9:00 a 20:00. Sábado de 9:00 a 15:00. Domingo cerrado. Ese horario no es la disponibilidad de instalación.</p></article>
    <article className="contact-method contact-method-location"><span><Icon name="building" size={22}/></span><p className="eyebrow">Ubicación</p><h3>{truth.contact.locationLabel}</h3><p>Atendemos la zona metropolitana de Guadalajara. Los proyectos en otros estados se evalúan; el traslado se revisa caso por caso.</p><p className="contact-address-note">La instalación automotriz se hace en taller, normalmente con cita.</p></article>
  </div>;
}
