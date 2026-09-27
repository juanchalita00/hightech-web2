# HIGHTECH Project Intake v0.1

Status: DESIGN SPEC — NOT YET PUBLIC
Purpose: convert structured web enquiries into tracked opportunities without depending on manual inbox checking.

## 1. Product principle

The website is part of the HIGHTECH service, not only a brochure.

A project enquiry must:
- feel simpler than writing an email from scratch;
- create a durable lead record before notifications are sent;
- preserve source/context for follow-up;
- acknowledge receipt immediately without making unsupported response-time promises;
- notify the internal team through a channel that is actually monitored;
- avoid losing the opportunity if email delivery fails;
- keep personal data out of analytics events.

## 2. Intended user paths

### Fast contact
Use WhatsApp for residential, automotive and simple questions.

### Structured project intake
Use a dedicated web form for:
- companies;
- offices;
- facades;
- property managers;
- architects / contractors;
- institutional projects;
- projects with plans, specifications or multiple areas.

The structured path must not replace WhatsApp. It complements it.

## 3. Recommended public form

Keep the first version short.

Required:
- full name
- company / organization (optional for residential, required when project type is corporate)
- email
- phone / WhatsApp
- city
- project type: residential / commercial / institutional / other
- objective: heat / UV / glare / privacy / security / appearance / multiple
- free-text project description
- privacy acknowledgement

Optional:
- approximate square metres
- preferred contact channel
- notes

Attachments are a phase-two capability. Do not block launch of the intake flow on file upload.

## 4. Lead object

Create server-side before any outbound notification.

Suggested payload:

```json
{
  "lead_ref": "HT-W2-XXXXXX",
  "created_at": "ISO-8601",
  "source_page": "/contacto/",
  "utm": {
    "source": null,
    "medium": null,
    "campaign": null,
    "content": null,
    "term": null
  },
  "contact": {
    "name": "",
    "company": "",
    "email": "",
    "phone": "",
    "preferred_channel": ""
  },
  "project": {
    "city": "",
    "type": "",
    "objectives": [],
    "approx_m2": null,
    "description": ""
  },
  "consent": {
    "privacy_acknowledged": true,
    "timestamp": "ISO-8601"
  },
  "status": "NEW"
}
```

## 5. Status model

NEW
→ ACKNOWLEDGED
→ INTERNAL_NOTIFIED
→ IN_REVIEW
→ CONTACTED
→ QUALIFIED
→ QUOTE_SENT
→ WON / LOST

Do not treat email delivery as the source of truth for lead existence.

## 6. Runtime architecture

Browser
→ HIGHTECH server endpoint
→ validate + sanitize
→ create lead_ref
→ send signed payload to private n8n webhook
→ n8n persists lead
→ n8n sends customer acknowledgement
→ n8n sends internal WhatsApp notification
→ n8n schedules unattended-lead reminder
→ human follow-up updates status

Never expose the n8n webhook URL or shared secret in client-side JavaScript.

Suggested environment variables:
- PROJECT_INTAKE_ENABLED=false
- PROJECT_INTAKE_WEBHOOK_URL
- PROJECT_INTAKE_SHARED_SECRET
- PROJECT_INTAKE_INTERNAL_ALERT_TARGET
- PROJECT_INTAKE_ACK_FROM

The public form must stay disabled until the complete chain is tested end-to-end.

## 7. n8n workflow — v1

1. Webhook receives signed server payload.
2. Verify signature / shared secret.
3. Validate lead_ref and required fields.
4. Duplicate check using contact + recent time window.
5. Persist lead.
6. Create a short machine-generated summary for internal use only.
7. Send acknowledgement to customer.
8. Notify Fernando / monitored HIGHTECH WhatsApp channel.
9. Schedule an unanswered-lead check that respects configured business hours.
10. If status is still NEW / ACKNOWLEDGED / INTERNAL_NOTIFIED, send an internal reminder.
11. Record delivery failures separately; never delete the lead because one channel failed.

## 8. Internal WhatsApp alert

Target format:

Nuevo proyecto web — {lead_ref}

{company_or_contact}
{project_type} · {city}
Objetivo: {objectives}
{approx_m2_if_present}

Resumen:
{short_summary}

Contacto:
{phone}
{email}

Source:
{source_page / campaign}

The summary may be AI-assisted, but original customer text must remain stored unchanged.

## 9. Customer acknowledgement

Subject concept:
Recibimos tu solicitud | HIGHTECH Polarizados

Message goals:
- confirm receipt;
- repeat the lead reference;
- summarize the project category without inventing facts;
- explain that the information will be reviewed;
- provide WhatsApp as the fast direct channel;
- avoid promising a fixed response time unless an operational SLA has been formally adopted.

No marketing claims, warranty promises or technical recommendations should be generated automatically from the intake message.

## 10. Failure modes

### n8n unavailable
The website must not show a false success state.
Return a clear retry option plus WhatsApp fallback.

### customer email fails
Lead remains valid.
Internal notification still proceeds.
Record ACK_EMAIL_FAILED.

### internal WhatsApp alert fails
Lead remains valid.
Attempt secondary internal notification.
Record INTERNAL_ALERT_FAILED.

### duplicate form submit
Return the existing/newest lead reference when safe, instead of creating many copies.

### spam / abuse
Use server-side rate limiting, honeypot and payload limits.
CAPTCHA is optional only if abuse becomes material; avoid adding friction by default.

## 11. Privacy / analytics

- Never send name, email, phone or free-text message into analytics.
- Analytics may record non-personal events such as project_intake_started and project_intake_submitted.
- Store consent evidence with the lead.
- Retention period remains a legal/business decision and must not be hard-coded before the privacy policy is finalized.
- Uploaded plans/photos, when enabled, require a separate storage and retention rule.

## 12. Phase plan

### Phase A — now
- remove direct email as the recommended project-acquisition path;
- keep WhatsApp as the monitored fallback;
- finish visual design and form specification.

### Phase B
- implement server endpoint;
- connect private n8n webhook;
- persist lead;
- customer acknowledgement;
- internal WhatsApp alert;
- reminder loop;
- end-to-end staging tests.

### Phase C
- attachments;
- AI-assisted qualification;
- missing-data follow-up;
- quote workflow integration;
- CRM / pipeline metrics;
- won/lost attribution and revenue reporting.

## 13. Release gate

Do not expose the project form publicly until all are true:
- server validation passes;
- n8n signature verification passes;
- lead persistence verified;
- customer acknowledgement verified;
- internal alert verified;
- fallback path verified;
- privacy copy approved;
- no PII reaches analytics;
- test lead can be followed from submission to human contact.
