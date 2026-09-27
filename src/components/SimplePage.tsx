import { PageHero } from "@/components/PageHero";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import type { WhatsAppContext } from "@/lib/whatsapp";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  context?: WhatsAppContext;
  children?: React.ReactNode;
};

export function SimplePage({ eyebrow, title, description, ctaLabel, context, children }: Props) {
  return (
    <div className="simple-page">
      <PageHero eyebrow={eyebrow} title={title} description={description}>
        {ctaLabel && context ? <WhatsAppCTA label={ctaLabel} context={context} position="HERO" /> : null}
      </PageHero>
      {children}
    </div>
  );
}
