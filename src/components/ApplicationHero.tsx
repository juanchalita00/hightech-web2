import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import type { WhatsAppContext } from "@/lib/whatsapp";

type Variant = "residential" | "commercial" | "automotive";

type Props = {
  variant: Variant;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  context: WhatsAppContext;
  secondary?: React.ReactNode;
  proofItems: readonly string[];
};

const variantIcon = {
  residential: "home",
  commercial: "building",
  automotive: "car",
} as const;

export function ApplicationHero({ variant, eyebrow, title, description, ctaLabel, context, secondary, proofItems }: Props) {
  return (
    <section className={`application-hero application-hero-${variant}`}>
      <div className="container application-hero-grid">
        <div className="application-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="application-hero-lede">{description}</p>
          <div className="hero-actions">
            <WhatsAppCTA label={ctaLabel} context={context} position="HERO" />
            {secondary}
          </div>
          <div className="application-proof-list" aria-label="Puntos clave">
            {proofItems.map((item) => <span key={item}><Icon name="check" size={16}/>{item}</span>)}
          </div>
        </div>

        <div className={`application-visual application-visual-${variant}`} aria-hidden="true">
          <div className="application-visual-badge">
            <Icon name={variantIcon[variant]} size={18}/>
            <span>{variant === "residential" ? "Arquitectura" : variant === "commercial" ? "Proyecto" : "Taller"}</span>
          </div>
          {variant === "residential" && (
            <div className="residential-window">
              <div className="res-sky"/><div className="res-horizon"/>
              <div className="res-frame res-frame-v"/><div className="res-frame res-frame-h"/>
              <div className="res-film"/><div className="res-light"/>
            </div>
          )}
          {variant === "commercial" && (
            <div className="commercial-facade">
              {Array.from({ length: 18 }).map((_, index) => <i key={index}/>)}
              <div className="commercial-scanline"/>
            </div>
          )}
          {variant === "automotive" && (
            <div className="automotive-silhouette">
              <div className="auto-roof"/>
              <div className="auto-glass auto-glass-front"/><div className="auto-glass auto-glass-rear"/>
              <div className="auto-body"/>
              <div className="auto-wheel auto-wheel-left"/><div className="auto-wheel auto-wheel-right"/>
            </div>
          )}
          <div className="application-visual-caption">
            <strong>{variant === "residential" ? "Luz + confort" : variant === "commercial" ? "Especificación + operación" : "Claridad + tono"}</strong>
            <span>{variant === "residential" ? "La recomendación cambia por vidrio, orientación y privacidad." : variant === "commercial" ? "El alcance cambia por fachada, acceso y uso del espacio." : "Elige por VLT, uso nocturno, privacidad y desempeño."}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
