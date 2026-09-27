import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import type { WhatsAppContext } from "@/lib/whatsapp";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  context?: WhatsAppContext;
  points: readonly string[];
};

export function TrustHero({ eyebrow, title, description, ctaLabel, context, points }: Props) {
  return <section className="trust-hero"><div className="container trust-hero-grid">
    <div className="trust-hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="trust-hero-lede">{description}</p>
      {ctaLabel && context ? <div className="hero-actions"><WhatsAppCTA label={ctaLabel} context={context} position="HERO" /></div> : null}
      <div className="trust-hero-points">{points.map((point)=><span key={point}><Icon name="check" size={16}/>{point}</span>)}</div>
    </div>
    <div className="trust-visual" aria-hidden="true">
      <div className="trust-glass trust-glass-a"><span>01</span><strong>Entender</strong><small>problema + cristal</small></div>
      <div className="trust-glass trust-glass-b"><span>02</span><strong>Comparar</strong><small>luz + desempeño</small></div>
      <div className="trust-glass trust-glass-c"><span>03</span><strong>Explicar</strong><small>alcance + límites</small></div>
    </div>
  </div></section>;
}
