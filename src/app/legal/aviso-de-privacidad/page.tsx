import type { Metadata } from "next";
import { SimplePage } from "@/components/SimplePage";
import { GateNotice } from "@/components/GateNotice";
export const metadata:Metadata={ alternates: { canonical: "/legal/aviso-de-privacidad/" },title:"Aviso de Privacidad",robots:{index:false,follow:true}};
export default function Page(){return <SimplePage eyebrow="Privacidad" title="Aviso de Privacidad" description="El aviso integral deberá identificar responsable, finalidades, derechos, canal ARCO, terceros y versión."><section className="section"><div className="container"><GateNotice title="PRIVACY_BLOCKED">No activar trackers publicitarios hasta cerrar el aviso, third-party registry y consentimiento aplicable.</GateNotice></div></section></SimplePage>}
