import Link from "next/link";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { quotePath, quoteServiceFromContext } from "@/lib/quote";
import type { WhatsAppContext } from "@/lib/whatsapp";

type Props = { eyebrow: string; title: string; ctaLabel: string; context: WhatsAppContext; secondaryHref?: string; secondaryLabel?: string };

export function ApplicationFinalCTA({ eyebrow, title, ctaLabel, context, secondaryHref, secondaryLabel = "Formulario de cotización" }: Props) {
  const href = secondaryHref ?? quotePath(quoteServiceFromContext(context.businessLine));
  return (
    <section className="section application-final-section">
      <div className="container application-final-card">
        <div><p className="eyebrow eyebrow-light">{eyebrow}</p><h2>{title}</h2></div>
        <div className="final-cta-actions">
          <WhatsAppCTA label={ctaLabel} context={context} position="FINAL_CTA" className="button-light"/>
          <Link href={href} className="button button-ghost-light">{secondaryLabel}</Link>
        </div>
      </div>
    </section>
  );
}
