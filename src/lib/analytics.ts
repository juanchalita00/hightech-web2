import { release } from "@/lib/truth";

export type EventName =
  | "solution_selected" | "film_compared" | "project_viewed" | "technical_spec_opened"
  | "warranty_viewed" | "warranty_document_opened" | "legal_reference_opened" | "faq_opened"
  | "related_product_clicked" | "quote_started" | "whatsapp_started" | "phone_clicked" | "directions_clicked";

export type EventPayload = Record<string, string | number | boolean | null | undefined>;
const PII_KEYS = new Set(["name","full_name","phone","email","address","rfc","vin","plate","message","whatsapp_text","photo","latitude","longitude"]);

export function sanitizeEventPayload(payload: EventPayload): EventPayload {
  return Object.fromEntries(Object.entries(payload).filter(([key, value]) => value !== undefined && !PII_KEYS.has(key)));
}

export function analyticsRuntimeEnabled() {
  return process.env.NEXT_PUBLIC_DEPLOYMENT_ENV === "production"
    && process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true"
    && release.production.analyticsPrivacyApproved === true;
}

export function track(name: EventName, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;
  const clean = sanitizeEventPayload(payload);
  window.dispatchEvent(new CustomEvent("hightech:analytics", { detail: { name, payload: clean } }));
  if (!analyticsRuntimeEnabled()) return;
  // Provider adapters remain intentionally absent until the third-party registry is approved.
}
