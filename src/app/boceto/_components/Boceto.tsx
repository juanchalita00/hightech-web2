import type { ReactNode } from "react";
import { Icon } from "@/components/Icon";
import { whatsappUrl } from "@/lib/whatsapp";
import styles from "../boceto.module.css";

/** Mensajes fijos de WhatsApp: el formato lo definió el brief y no se arma con whatsappMessage(). */
export const mensajes = {
  portada: "Hola, vengo de la web: portada. Quiero cotizar película para mi (casa, negocio o auto).",
  fichaIr15Auto: "Hola, vengo de la web: ficha IR15 auto. Mi auto es: (marca, modelo y año).",
} as const;

export const CTA_LABEL = "Cotiza por WhatsApp";

export const leyes = {
  reglamento:
    "https://congresoweb.congresojal.gob.mx/BibliotecaVirtual/legislacion/Reglamentos/Documentos_PDF-Reglamentos/Reglamento%20de%20la%20Ley%20de%20Movilidad,%20Seguridad%20Vial%20y%20Transporte%20del%20Estado%20de%20Jalisco-230224.pdf",
  ley:
    "https://congresoweb.congresojal.gob.mx/BibliotecaVirtual/legislacion/Leyes/Documentos_PDF-Leyes/Ley%20de%20Movilidad,%20Seguridad%20Vial%20y%20Transporte%20del%20Estado%20de%20Jalisco-200826.pdf",
} as const;

export function BocetoBanner() {
  return (
    <>
      {/* Boceto: una sola acción. Se oculta el botón «Cotizar» del encabezado global solo en estas páginas. */}
      <style>{`.header-cta{display:none !important}`}</style>
      <p className={styles.bocetoBanner} role="note">
        BOCETO para revisión de Fer · no indexado · no es la web publicada
      </p>
    </>
  );
}

/** La única acción de los bocetos. */
export function CotizaWhatsApp({ message, variant = "solid" }: { message: string; variant?: "solid" | "light" }) {
  return (
    <a className={variant === "light" ? styles.ctaLight : styles.cta} href={whatsappUrl(message)} rel="noopener">
      <Icon name="message" size={20} />
      <span>{CTA_LABEL}</span>
    </a>
  );
}

/** Barra fija solo en móvil (el CSS la oculta desde 768 px). */
export function MobileBar({ message }: { message: string }) {
  return (
    <div className={styles.mobileBar}>
      <CotizaWhatsApp message={message} />
    </div>
  );
}

export function Pendiente({ children }: { children: ReactNode }) {
  return (
    <div className={styles.pendiente} role="note">
      <span className={styles.pendienteIcon} aria-hidden="true">{"⚠︎"}</span>
      <p>
        <strong>PENDIENTE:</strong> {children}
      </p>
    </div>
  );
}

/** Estrellas de reseña: mismo SVG y color que GoogleReviews (globals.css, #e0a106). */
export function Estrellas({ rating }: { rating: number }) {
  return (
    <span className="google-review-stars" role="img" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 20 20" aria-hidden="true" className={index < rating ? "is-on" : undefined}>
          <path d="M10 1.7 12.35 6.9l5.65.5-4.28 3.72 1.32 5.48L10 13.9l-5.04 2.7 1.32-5.48L2 7.4l5.65-.5L10 1.7Z" />
        </svg>
      ))}
    </span>
  );
}

