import { truth } from "@/lib/truth";

export type WhatsAppContext = {
  sourcePage: string;
  businessLine?: string;
  problem?: string;
  product?: string;
  tone?: string;
};

// Los códigos internos se traducen a frases para el visitante; un código desconocido se omite.
const businessLineMessages: Record<string, string> = {
  residential: "Quiero revisar una solución para mis cristales residenciales.",
  commercial: "Quiero revisar un proyecto comercial.",
  automotive: "Quiero cotizar película para mi vehículo.",
};

const problemMessages: Record<string, string> = {
  heat: "Quiero reducir el calor que entra por los cristales.",
  uv: "Quiero mejorar la protección frente a rayos UV.",
  privacy: "Quiero mejorar la privacidad.",
  safety: "Quiero revisar una solución de seguridad para los cristales.",
  security: "Quiero revisar una solución de seguridad para los cristales.",
  glare: "Quiero reducir el deslumbramiento.",
};

const normalize = (value?: string) => value?.trim().toLowerCase() ?? "";

export function whatsappMessage(context: WhatsAppContext, leadRef?: string): string {
  const lines = ["Hola, estoy revisando la web de HIGHTECH Polarizados."];
  const businessLine = businessLineMessages[normalize(context.businessLine)];
  if (businessLine) lines.push(businessLine);
  if (context.product) lines.push(`Estoy revisando ${context.product}.`);
  const problem = problemMessages[normalize(context.problem)];
  if (problem) lines.push(problem);
  if (leadRef) lines.push(`Referencia web: ${leadRef}`);
  return lines.join("\n");
}

export function whatsappUrl(message: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? truth.contact.phoneE164.replace("+", "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
