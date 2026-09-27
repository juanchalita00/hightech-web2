import Link from "next/link";
import { Icon } from "@/components/Icon";

type GuideHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  category: string;
  readingTime?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function GuideHero({ eyebrow, title, description, category, readingTime = "Lectura breve", ctaHref, ctaLabel }: GuideHeroProps) {
  return <header className="guide-hero">
    <div className="container guide-hero-grid">
      <div className="guide-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lede">{description}</p>
        <div className="guide-meta" aria-label="Información de la guía">
          <span>{category}</span><i aria-hidden="true">•</i><span>{readingTime}</span><i aria-hidden="true">•</i><span>Revisión técnica HIGHTECH</span>
        </div>
        {ctaHref && ctaLabel ? <Link href={ctaHref} className="button button-primary">{ctaLabel}<Icon name="arrow" size={18}/></Link> : null}
      </div>
      <div className="guide-hero-visual" aria-hidden="true">
        <div className="guide-glass-visual">
          <span className="guide-ray guide-ray-a"/>
          <span className="guide-ray guide-ray-b"/>
          <span className="guide-ray guide-ray-c"/>
          <span className="guide-glass-plane"/>
          <small>HIGHTECH / KNOWLEDGE</small>
        </div>
      </div>
    </div>
  </header>;
}
