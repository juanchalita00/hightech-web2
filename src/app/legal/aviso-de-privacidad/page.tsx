import type { Metadata } from "next";
import { LegalDraft } from "@/components/LegalDraft";
import { requireReleasedInProduction } from "@/lib/deployment";
import { legalDrafts } from "@/lib/legal-drafts";
import { release } from "@/lib/truth";

export const metadata: Metadata = {
  alternates: { canonical: "/legal/aviso-de-privacidad/" },
  title: { absolute: "Aviso de privacidad | HIGHTECH Polarizados" },
  description: "Borrador no vigente del aviso de privacidad de HIGHTECH Polarizados en Zapopan. Describe los datos del formulario de cotización, sin publicarse todavía.",
  robots: { index: false, follow: false },
};

export default function Page() {
  requireReleasedInProduction(release.production.privacyApproved);
  return <LegalDraft document={legalDrafts.privacy} />;
}
