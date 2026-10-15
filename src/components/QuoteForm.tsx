"use client";

import { useMemo, useState } from "react";
import { whatsappUrl } from "@/lib/whatsapp";
import { truth } from "@/lib/truth";
import {
  channelLabels,
  detailLabel,
  detailPlaceholder,
  formatQuoteMessage,
  isEmailAddress,
  isQuoteService,
  isWhatsAppNumber,
  publishedQuoteTermsHref,
  quoteChannels,
  quoteMailUrl,
  quoteServices,
  quoteWebhookUrl,
  serviceLabels,
  type QuoteChannel,
  type QuotePayload,
  type QuoteService,
} from "@/lib/quote";

type Props = { initialService?: string };

type Status = "idle" | "sending" | "sent" | "opened" | "manual" | "failed";

const emptyErrors = { name: "", phone: "", email: "", city: "", detail: "", channel: "", company: "" };

export function QuoteForm({ initialService }: Props) {
  const starting = isQuoteService(initialService) ? initialService : "residencial";
  const [service, setService] = useState<QuoteService>(starting);
  const [channel, setChannel] = useState<QuoteChannel | "">("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [detail, setDetail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState(emptyErrors);
  const [status, setStatus] = useState<Status>("idle");
  const [fallbackHref, setFallbackHref] = useState("");
  const termsHref = useMemo(() => publishedQuoteTermsHref(), []);
  const webhook = quoteWebhookUrl();

  function validate() {
    const next = { ...emptyErrors };
    if (name.trim().length < 2) next.name = "Escribe tu nombre.";
    if (company.trim().length > 120) next.company = "El nombre de la empresa es demasiado largo.";
    if (city.trim().length < 2) next.city = "Escribe tu ciudad.";
    if (detail.trim().length < 2) next.detail = service === "automotriz" ? "Indica marca y modelo." : "Indica los metros aproximados.";
    if (channel !== "whatsapp" && channel !== "correo") next.channel = "Elige WhatsApp o correo.";
    if (channel === "whatsapp" && !isWhatsAppNumber(phone)) next.phone = "Escribe un WhatsApp de 10 dígitos.";
    if (channel === "correo" && !isEmailAddress(email.trim())) next.email = "Escribe un correo válido.";
    if (channel !== "whatsapp" && phone.trim() && !isWhatsAppNumber(phone)) next.phone = "Escribe un WhatsApp de 10 dígitos.";
    if (channel !== "correo" && email.trim() && !isEmailAddress(email.trim())) next.email = "Escribe un correo válido.";
    setErrors(next);
    return !next.name && !next.phone && !next.email && !next.city && !next.detail && !next.channel && !next.company;
  }

  function fallbackFor(payload: QuotePayload): string {
    return payload.channel === "correo" ? quoteMailUrl(payload) : whatsappUrl(formatQuoteMessage(payload));
  }

  async function onSubmit(event: { preventDefault(): void }) {
    event.preventDefault();
    if (!validate() || (channel !== "whatsapp" && channel !== "correo")) return;
    const payload: QuotePayload = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      company: company.trim(),
      city: city.trim(),
      service,
      detail: detail.trim(),
      message: message.trim(),
      channel,
      source: "web-quote-form",
      page: "/contacto/",
    };
    const href = fallbackFor(payload);
    setFallbackHref(href);
    setStatus("sending");
    if (webhook) {
      try {
        const response = await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        setStatus(response.ok ? "sent" : "failed");
      } catch {
        setStatus("failed");
      }
      return;
    }
    const opened = window.open(href, "_blank", "noopener,noreferrer");
    setStatus(opened ? "opened" : "manual");
  }

  const channelName = channel === "correo" || channel === "whatsapp" ? channelLabels[channel] : "";
  const submitLabel = status === "sending"
    ? "Enviando…"
    : webhook
      ? "Enviar solicitud"
      : channel === "correo"
        ? "Enviar y abrir el correo"
        : channel === "whatsapp"
          ? "Enviar y abrir WhatsApp"
          : "Enviar solicitud";

  return (
    <form className="quote-form" onSubmit={onSubmit} noValidate>
      <div className="quote-form-grid">
        <label>
          Nombre
          <input name="name" autoComplete="name" value={name} onChange={(event: { target: { value: string } }) => setName(event.target.value)} aria-invalid={errors.name ? true : undefined} required />
          {errors.name ? <small>{errors.name}</small> : null}
        </label>
        <label>
          Ciudad
          <input name="city" autoComplete="address-level2" placeholder="Zapopan" value={city} onChange={(event: { target: { value: string } }) => setCity(event.target.value)} aria-invalid={errors.city ? true : undefined} required />
          {errors.city ? <small>{errors.city}</small> : null}
        </label>
        <label className="quote-form-wide">
          Empresa <span className="quote-optional">opcional</span>
          <input name="organization" autoComplete="organization" placeholder="Si cotizas para una empresa" value={company} onChange={(event: { target: { value: string } }) => setCompany(event.target.value)} aria-invalid={errors.company ? true : undefined} />
          {errors.company ? <small>{errors.company}</small> : null}
        </label>
        <fieldset>
          <legend>Prefiero que me contacten por</legend>
          <div className="quote-service-options">
            {quoteChannels.map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name="channel"
                  value={option}
                  checked={channel === option}
                  onChange={() => {
                    setChannel(option);
                    setErrors((current) => ({ ...current, channel: "", phone: "", email: "" }));
                  }}
                />
                {channelLabels[option]}
              </label>
            ))}
          </div>
          {errors.channel ? <small>{errors.channel}</small> : null}
        </fieldset>
        <label>
          WhatsApp
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="33 0000 0000" value={phone} onChange={(event: { target: { value: string } }) => setPhone(event.target.value)} aria-invalid={errors.phone ? true : undefined} aria-required={channel === "whatsapp"} required={channel === "whatsapp"} />
          {errors.phone ? <small>{errors.phone}</small> : null}
        </label>
        <label>
          Correo
          <input name="email" type="email" inputMode="email" autoComplete="email" placeholder="nombre@empresa.com" value={email} onChange={(event: { target: { value: string } }) => setEmail(event.target.value)} aria-invalid={errors.email ? true : undefined} aria-required={channel === "correo"} required={channel === "correo"} />
          {errors.email ? <small>{errors.email}</small> : null}
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
          <input name="detail" value={detail} placeholder={detailPlaceholder(service)} onChange={(event: { target: { value: string } }) => setDetail(event.target.value)} aria-invalid={errors.detail ? true : undefined} required />
          {errors.detail ? <small>{errors.detail}</small> : null}
        </label>
        <label className="quote-form-wide">
          Mensaje
          <textarea name="message" rows={4} value={message} onChange={(event: { target: { value: string } }) => setMessage(event.target.value)} placeholder="Cuéntanos qué quieres resolver. Si ya tienes medidas o fotos, las puedes mandar después." />
        </label>
      </div>
      <div className="quote-form-actions">
        <button className="button button-primary" type="submit" disabled={status === "sending"}>
          {submitLabel}
        </button>
        <p>
          {webhook
            ? "Enviamos la solicitud y te contactamos por el medio que elijas."
            : channel === "correo"
              ? `Se abre tu correo hacia ${truth.contact.emailSales}.`
              : `Si eliges WhatsApp, se abre el chat al ${truth.contact.phoneDisplay}.`}
        </p>
      </div>
      {termsHref ? <p className="quote-form-terms">Al aceptar la cotización aceptas los <a href={termsHref}>términos y condiciones</a>, incluidas las obligaciones de pago.</p> : null}
      {status === "sent" ? (
        <p className="quote-form-status" role="status">Recibimos tu solicitud. Te contactamos por {channelName === "Correo" ? "correo" : "WhatsApp"}.</p>
      ) : null}
      {status === "opened" || status === "manual" || status === "failed" ? (
        <p className="quote-form-status" role="status">
          {status === "failed" ? "No se pudo enviar la solicitud. " : status === "manual" ? "Tu navegador bloqueó la ventana nueva. " : "Si no se abrió, "}
          <a href={fallbackHref} target="_blank" rel="noopener noreferrer">{channel === "correo" ? "continúa la cotización por correo" : "continúa la cotización por WhatsApp"}</a>.
        </p>
      ) : null}
    </form>
  );
}
