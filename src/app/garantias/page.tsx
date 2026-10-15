import type { Metadata } from "next";
import { LegalDraft } from "@/components/LegalDraft";
import { requireReleasedInProduction } from "@/lib/deployment";
import { legalDrafts } from "@/lib/legal-drafts";
import { release } from "@/lib/truth";

export const metadata: Metadata = {
  alternates: { canonical: "/garantias/" },
  title: { absolute: "Garantías de instalación | HIGHTECH Polarizados" },
  description: "Borrador no vigente de las garantías de HIGHTECH Polarizados. Los plazos se publicarán solo cuando exista una póliza revisada para cada línea.",
  robots: { index: false, follow: false },
};

export default function Page() {
  requireReleasedInProduction(release.production.warrantiesApproved);
  return <LegalDraft document={legalDrafts.warranty} />;
}
