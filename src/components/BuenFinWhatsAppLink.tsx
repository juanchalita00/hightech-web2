"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/whatsapp";

const href = whatsappUrl("Hola, vi en la web la promo del Buen Fin de hasta 15% menos");

export function BuenFinWhatsAppLink({
  className,
  ariaLabel,
  children,
}: {
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}) {
  return (
    <a
      className={className}
      href={href}
      aria-label={ariaLabel}
      onClick={() => track("whatsapp_started", { source_page: "/", cta_position: "BUEN_FIN_BANNER" })}
    >
      {children}
    </a>
  );
}
