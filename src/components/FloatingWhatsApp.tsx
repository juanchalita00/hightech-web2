"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { responsePromise } from "@/lib/public-facts";
import { track } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/whatsapp";

const href = whatsappUrl("Hola, estoy revisando la web de HIGHTECH Polarizados.");
const seenKey = "hightech-wa-bubble";

export function FloatingWhatsApp() {
  const pathname = usePathname();
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(seenKey) === "1";
    } catch {
      seen = false;
    }
    if (seen) return;
    setShowBubble(true);
    const timer = window.setTimeout(() => {
      setShowBubble(false);
      try {
        sessionStorage.setItem(seenKey, "1");
      } catch {
        /* sin almacenamiento: el globo solo se oculta */
      }
    }, 5000);
    return () => window.clearTimeout(timer);
  }, []);

  // Los bocetos traen su propia barra «Cotiza por WhatsApp»: el flotante duplicaría la acción y taparía contenido.
  if (pathname?.startsWith("/boceto/")) return null;

  return (
    <div className="float-whatsapp">
      {showBubble ? <small>{responsePromise}</small> : null}
      <a
        href={href}
        onClick={() => track("whatsapp_started", { source_page: "floating", cta_position: "FLOATING" })}
      >
        WhatsApp
      </a>
    </div>
  );
}
