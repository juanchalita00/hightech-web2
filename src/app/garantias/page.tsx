import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";
import { GateNotice } from "@/components/GateNotice";
import { release } from "@/lib/truth";
import { requireReleasedInProduction } from "@/lib/deployment";

export const metadata: Metadata = { alternates: { canonical: "/garantias/" }, title: "Garantías", robots: { index: release.production.warrantiesApproved && release.routes.warrantyPageIndexable, follow: true } };
export default function Page(){requireReleasedInProduction(release.production.warrantiesApproved);return <SimplePage eyebrow="Garantías" title="La garantía depende del producto, aplicación y versión." description="Esta página sólo publicará pólizas aprobadas y trazables. Una referencia técnica de plazo no se convierte automáticamente en garantía contractual."><section className="section"><div className="container"><GateNotice title="WARRANTY_BLOCKED">No hay pólizas marcadas APPROVED_FOR_PRODUCTION todavía.</GateNotice></div></section></SimplePage>}
