import { truth } from "@/lib/truth";

export type WhatsAppContext = {
  sourcePage: string;
  businessLine?: string;
  problem?: string;
  product?: string;
  tone?: string;
};

export function whatsappMessage(context: WhatsAppContext, leadRef?: string): string {
  const lines = ["Hola, estoy revisando la web de HIGHTECH Polarizados."];
  if (context.businessLine === "residential") lines.push("Quiero revisar una solución para mis cristales residenciales.");
  if (context.businessLine === "commercial") lines.push("Quiero revisar un proyecto comercial.");
  if (context.businessLine === "automotive") lines.push("Quiero cotizar película nanocerámica para mi vehículo.");
  if (context.product) lines.push(`Estoy revisando ${context.product}.`);
  if (context.problem) lines.push(`Mi prioridad es: ${context.problem}.`);
  if (leadRef) lines.push(`Referencia web: ${leadRef}`);
  return lines.join("\n");
}

export function whatsappUrl(message: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? truth.contact.phoneE164.replace("+", "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
