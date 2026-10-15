import type { Metadata } from "next";
import { LegalDraft } from "@/components/LegalDraft";
import { requireReleasedInProduction } from "@/lib/deployment";
import { legalDrafts } from "@/lib/legal-drafts";
import { release } from "@/lib/truth";

export const metadata: Metadata = {
  alternates: { canonical: "/legal/terminos-y-condiciones/" },
  title: { absolute: "Términos y condiciones | HIGHTECH Polarizados" },
  description: "Borrador no vigente de los términos de HIGHTECH Polarizados. Cuando se publique, aceptar la cotización incluirá estas condiciones y las obligaciones de pago.",
  robots: { index: false, follow: false },
};

export default function Page() {
  requireReleasedInProduction(release.production.termsApproved);
  return <LegalDraft document={legalDrafts.terms} />;
}
