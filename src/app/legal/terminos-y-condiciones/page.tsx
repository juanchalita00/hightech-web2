import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";
import { GateNotice } from "@/components/GateNotice";
import { requireReleasedInProduction } from "@/lib/deployment";
import { release } from "@/lib/truth";
export const metadata:Metadata={ alternates: { canonical: "/legal/terminos-y-condiciones/" },title:"Términos y Condiciones",robots:{index:false,follow:true}};
export default function Page(){requireReleasedInProduction(release.production.termsApproved);return <SimplePage eyebrow="Legal" title="Términos y Condiciones" description="La versión pública deberá mostrar proveedor, versión, fecha efectiva y documento inmutable aprobado."><section className="section"><div className="container"><GateNotice title="LEGAL_BLOCKED">El paquete jurídico de trabajo no se publica como contrato B2C hasta liberación final.</GateNotice></div></section></SimplePage>}
