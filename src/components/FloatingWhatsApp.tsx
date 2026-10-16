"use client";

import { responsePromise } from "@/lib/public-facts";
import { track } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/whatsapp";

const href = whatsappUrl("Hola, estoy revisando la web de HIGHTECH Polarizados.");

export function FloatingWhatsApp() {
  return (
    <div className="float-whatsapp">
      <small>{responsePromise}</small>
      <a
        href={href}
        onClick={() => track("whatsapp_started", { source_page: "floating", cta_position: "FLOATING" })}
      >
        WhatsApp
      </a>
    </div>
  );
}
