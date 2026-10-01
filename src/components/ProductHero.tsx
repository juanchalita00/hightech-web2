import type { ReactNode } from "react";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import type { WhatsAppContext } from "@/lib/whatsapp";

export type ProductHeroVariant = "hub" | "nano" | "reflective" | "security" | "privacy";

type Fact = { label: string; value: string };

type Props = {
  variant: ProductHeroVariant;
  eyebrow: string;
  title: string;
  description: string;
  facts?: readonly Fact[];
  ctaLabel?: string;
  context?: WhatsAppContext;
  secondary?: ReactNode;
  image?: { src: string; alt: string; caption?: string };
};

export function ProductHero({ variant, eyebrow, title, description, facts = [], ctaLabel, context, secondary, image }: Props) {
  return (
    <section className={`product-hero product-hero-${variant}`}>
      <div className="container product-hero-grid">
        <div className="product-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lede">{description}</p>
          {(ctaLabel && context) || secondary ? (
            <div className="hero-actions">
              {ctaLabel && context ? <WhatsAppCTA label={ctaLabel} context={context} position="HERO" /> : null}
              {secondary}
            </div>
          ) : null}
          {facts.length ? (
            <div className="product-hero-facts" aria-label="Datos clave">
              {facts.map((fact) => <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}
            </div>
          ) : null}
        </div>
        {image ? (
          <figure className="product-hero-photo">
            <img src={image.src} alt={image.alt} width={900} height={600} />
            {image.caption ? <figcaption>{image.caption}</figcaption> : null}
          </figure>
        ) : (
          <div className="product-hero-visual" aria-hidden="true">
            <div className="product-glass-frame">
              <span className="product-glass-sky" />
              <span className="product-glass-horizon" />
              <span className="product-glass-panel product-glass-panel-a" />
              <span className="product-glass-panel product-glass-panel-b" />
              <span className="product-glass-panel product-glass-panel-c" />
              <span className="product-glass-glow" />
            </div>
            <div className="product-hero-badge"><span>HIGHTECH</span><strong>{variant === "nano" ? "Nanocerámica" : variant === "reflective" ? "Reflectiva" : variant === "security" ? "Seguridad" : variant === "privacy" ? "Privacidad" : "Tecnologías"}</strong></div>
          </div>
        )}
      </div>
    </section>
  );
}
