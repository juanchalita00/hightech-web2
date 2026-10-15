"use client";

import { useMemo, useState } from "react";
import { whatsappUrl } from "@/lib/whatsapp";
import {
  detailLabel,
  detailPlaceholder,
  formatQuoteMessage,
  isQuoteService,
  publishedQuoteTermsHref,
  quoteServices,
  quoteWebhookUrl,
  serviceLabels,
  type QuotePayload,
  type QuoteService,
} from "@/lib/quote";

type Props = { initialService?: string };

type Status = "idle" | "sending" | "opened" | "manual";

const emptyErrors = { name: "", phone: "", city: "", detail: "" };

export function QuoteForm({ initialService }: Props) {
  const starting = isQuoteService(initialService) ? initialService : "residencial";
  const [service, setService] = useState<QuoteService>(starting);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [detail, setDetail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState(emptyErrors);
  const [status, setStatus] = useState<Status>("idle");
  const [fallbackHref, setFallbackHref] = useState("");
  const termsHref = useMemo(() => publishedQuoteTermsHref(), []);

  function validate() {
    const next = { ...emptyErrors };
    if (name.trim().length < 2) next.name = "Escribe tu nombre.";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) next.phone = "Escribe un WhatsApp de 10 dígitos.";
    if (city.trim().length < 2) next.city = "Escribe tu ciudad.";
    if (detail.trim().length < 2) next.detail = service === "automotriz" ? "Indica marca y modelo." : "Indica los metros aproximados.";
    setErrors(next);
    return !next.name && !next.phone && !next.city && !next.detail;
  }

  async function onSubmit(event: { preventDefault(): void }) {
    event.preventDefault();
    if (!validate()) return;
    const payload: QuotePayload = {
      name: name.trim(),
      phone: phone.trim(),
      city: city.trim(),
      service,
      detail: detail.trim(),
      message: message.trim(),
      source: "web-quote-form",
      page: "/contacto/",
    };
    setStatus("sending");
    const webhook = quoteWebhookUrl();
    if (webhook) {
      try {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch {
        // La conversación sigue en WhatsApp aunque el webhook no responda.
      }
    }
    const href = whatsappUrl(formatQuoteMessage(payload));
    setFallbackHref(href);
    const opened = window.open(href, "_blank", "noopener,noreferrer");
    setStatus(opened ? "opened" : "manual");
  }

  return (
    <form className="quote-form" onSubmit={onSubmit} noValidate>
      <div className="quote-form-grid">
        <label>
          Nombre
          <input name="name" autoComplete="name" value={name} onChange={(event: { target: { value: string } }) => setName(event.target.value)} required />
          {errors.name ? <small>{errors.name}</small> : null}
        </label>
        <label>
          WhatsApp
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="33 0000 0000" value={phone} onChange={(event: { target: { value: string } }) => setPhone(event.target.value)} required />
          {errors.phone ? <small>{errors.phone}</small> : null}
        </label>
        <label>
          Ciudad
          <input name="city" autoComplete="address-level2" placeholder="Zapopan" value={city} onChange={(event: { target: { value: string } }) => setCity(event.target.value)} required />
          {errors.city ? <small>{errors.city}</small> : null}
        </label>
        <fieldset>
          <legend>Tipo de servicio</legend>
          <div className="quote-service-options">
            {quoteServices.map((option) => (
              <label key={option}>
                <input type="radio" name="service" value={option} checked={service === option} onChange={() => setService(option)} />
                {serviceLabels[option]}
              </label>
            ))}
          </div>
        </fieldset>
        <label className="quote-form-wide">
          {detailLabel(service)}
          <input name="detail" value={detail} placeholder={detailPlaceholder(service)} onChange={(event: { target: { value: string } }) => setDetail(event.target.value)} required />
          {errors.detail ? <small>{errors.detail}</small> : null}
        </label>
        <label className="quote-form-wide">
          Mensaje
          <textarea name="message" rows={4} value={message} onChange={(event: { target: { value: string } }) => setMessage(event.target.value)} placeholder="Cuéntanos qué quieres resolver. Si ya tienes medidas o fotos, las puedes mandar después por WhatsApp." />
        </label>
      </div>
      <div className="quote-form-actions">
        <button className="button button-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Abriendo WhatsApp…" : "Enviar y abrir WhatsApp"}
        </button>
        <p>No pedimos correo. La solicitud se arma en WhatsApp al 33 2228 9017.</p>
      </div>
      {termsHref ? <p className="quote-form-terms">Al aceptar la cotización aceptas los <a href={termsHref}>términos y condiciones</a>, incluidas las obligaciones de pago.</p> : null}
      {status === "opened" || status === "manual" ? (
        <p className="quote-form-status" role="status">
          {status === "manual" ? "Tu navegador bloqueó la ventana nueva. " : "Si WhatsApp no quedó abierto, "}
          <a href={fallbackHref} target="_blank" rel="noopener noreferrer">continúa la cotización por WhatsApp</a>.
        </p>
      ) : null}
    </form>
  );
}
