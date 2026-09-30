"use client";

import { useMemo } from "react";
import { generateLeadRef } from "@/lib/lead-ref";
import { track } from "@/lib/analytics";
import { whatsappMessage, whatsappUrl, type WhatsAppContext } from "@/lib/whatsapp";

type Props = {
  label: string;
  context: WhatsAppContext;
  position?: string;
  className?: string;
};

export function WhatsAppCTA({ label, context, position = "FINAL_CTA", className = "" }: Props) {
  const href = useMemo(() => whatsappUrl(whatsappMessage(context)), [context]);

  function handleClick() {
    // Referencia interna para cruzar el clic con la conversación; no se agrega al mensaje de WhatsApp.
    const leadRef = generateLeadRef();
    track("whatsapp_started", {
      source_page: context.sourcePage,
      business_line: context.businessLine,
      problem: context.problem,
      product: context.product,
      tone: context.tone,
      cta_position: position,
      lead_ref: leadRef,
    });
  }

  return (
    <a className={`button button-primary ${className}`.trim()} href={href} onClick={handleClick}>
      {label}
    </a>
  );
}
