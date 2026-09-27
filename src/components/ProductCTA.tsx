import Link from "next/link";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import type { WhatsAppContext } from "@/lib/whatsapp";
import { Icon } from "@/components/Icon";

type Props = { eyebrow?: string; title: string; text: string; cta: string; context: WhatsAppContext; secondaryHref?: string; secondaryLabel?: string };

export function ProductCTA({ eyebrow="Siguiente paso", title, text, cta, context, secondaryHref, secondaryLabel }: Props) {
  return <section className="section product-cta-section"><div className="container"><div className="product-cta-card"><div>{eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}<h2>{title}</h2><p>{text}</p></div><div className="product-cta-actions"><WhatsAppCTA label={cta} context={context} position="FINAL_CTA" />{secondaryHref && secondaryLabel ? <Link href={secondaryHref} className="button button-secondary">{secondaryLabel}<Icon name="arrow" size={18}/></Link> : null}</div></div></div></section>;
}
