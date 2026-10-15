import { release } from "@/lib/truth";

export const quoteServices = ["residencial", "comercial", "automotriz"] as const;

export type QuoteService = (typeof quoteServices)[number];

export type QuotePayload = {
  name: string;
  phone: string;
  city: string;
  service: QuoteService;
  detail: string;
  message: string;
  source: "web-quote-form";
  page: "/contacto/";
};

export const serviceLabels: Record<QuoteService, string> = {
  residencial: "Residencial",
  comercial: "Comercial",
  automotriz: "Automotriz",
};

/** Ancla estable para cuando la cotización publicada remita a los términos. */
export const quoteTermsAnchor = {
  path: "/legal/terminos-y-condiciones/",
  acceptance: "aceptacion-de-cotizacion",
  payment: "obligaciones-de-pago",
} as const;

/**
 * La aceptación de la cotización deberá equivaler a la aceptación de los términos,
 * incluidas las obligaciones de pago. El enlace solo se muestra cuando los términos
 * estén aprobados para publicarse.
 */
export function publishedQuoteTermsHref(): string | null {
  if (!release.production.termsApproved) return null;
  return `${quoteTermsAnchor.path}#${quoteTermsAnchor.acceptance}`;
}

const contextService: Record<string, QuoteService> = {
  residential: "residencial",
  residencial: "residencial",
  commercial: "comercial",
  comercial: "comercial",
  automotive: "automotriz",
  automotriz: "automotriz",
};

export function quoteServiceFromContext(value?: string): QuoteService | undefined {
  if (!value) return undefined;
  return contextService[value.trim().toLowerCase()];
}

export function isQuoteService(value: string | undefined): value is QuoteService {
  return quoteServices.includes(value as QuoteService);
}

export function quotePath(service?: QuoteService): string {
  if (!service) return "/contacto/#cotizar";
  return `/contacto/?servicio=${service}#cotizar`;
}

export function detailLabel(service: QuoteService): string {
  return service === "automotriz" ? "Marca y modelo del vehículo" : "Metros cuadrados aproximados";
}

export function detailPlaceholder(service: QuoteService): string {
  return service === "automotriz" ? "Ejemplo: Jetta 2020" : "Ejemplo: 18 m²";
}

export function quoteWebhookUrl(): string | undefined {
  const value = process.env.NEXT_PUBLIC_QUOTE_WEBHOOK_URL?.trim();
  return value ? value : undefined;
}

export function formatQuoteMessage(payload: QuotePayload): string {
  const lines = [
    "Hola, quiero cotizar con HIGHTECH Polarizados.",
    `Nombre: ${payload.name}`,
    `WhatsApp: ${payload.phone}`,
    `Ciudad: ${payload.city}`,
    `Servicio: ${serviceLabels[payload.service]}`,
    `${payload.service === "automotriz" ? "Vehículo" : "Superficie aproximada"}: ${payload.detail}`,
  ];
  if (payload.message.trim()) lines.push(`Mensaje: ${payload.message.trim()}`);
  return lines.join("\n");
}
