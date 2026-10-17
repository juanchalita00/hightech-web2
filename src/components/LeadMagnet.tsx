"use client";

import { track } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/whatsapp";

const href = whatsappUrl("Hola, quiero el checklist: cómo elegir el tono de tu auto.");

export function LeadMagnet() {
  return (
    <aside className="lead-magnet">
      <div>
        <strong>Checklist: cómo elegir el tono de tu auto</strong>
        <p>Te lo enviamos por WhatsApp. Sirve para pensar en delanteras, traseras, medallón y parabrisas antes de elegir.</p>
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
