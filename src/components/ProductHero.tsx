import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
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
  image?: { src: string; alt: string; caption?: string; width?: number; height?: number; portrait?: boolean };
};

export function ProductHero({ variant, eyebrow, title, description, facts = [], context, secondary, image }: Props) {
  return (
    <section className={`product-hero product-hero-${variant}`}>
      <div className="container product-hero-grid">
        <div className="product-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lede">{description}</p>
          {context || secondary ? (
            <div className="hero-actions">
              <Link className="button button-primary" href="/contacto/#cotizar">Cotizar</Link>
              {context ? <WhatsAppCTA label="WhatsApp" context={context} position="HERO" className="button-secondary" /> : null}
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
          <figure className={`product-hero-photo${image.portrait ? " product-hero-photo-portrait" : ""}`}>
            <Image src={image.src} alt={image.alt} width={image.width ?? 900} height={image.height ?? 600} sizes={image.portrait ? "(max-width: 760px) 90vw, 420px" : "(max-width: 760px) 100vw, 560px"} priority />
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
