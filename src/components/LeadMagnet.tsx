"use client";

import { track } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/whatsapp";

const href = whatsappUrl("Hola, quiero el checklist: qué tono es legal en tu auto.");

export function LeadMagnet() {
  return (
    <aside className="lead-magnet">
      <div>
        <strong>Checklist: qué tono es legal en tu auto</strong>
        <p>Te lo enviamos por WhatsApp. Sirve para ubicar delanteras, traseras y medallón antes de elegir.</p>
      </div>
      <a
        className="button button-primary"
        href={href}
        onClick={() => track("whatsapp_started", { source_page: "checklist", cta_position: "LEAD_MAGNET", product: "checklist-jalisco" })}
      >
        WhatsApp
      </a>
    </aside>
  );
}
