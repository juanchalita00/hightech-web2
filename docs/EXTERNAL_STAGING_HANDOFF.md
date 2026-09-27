# HIGHTECH Web 2.0 — External Staging Handoff v0.8.2

## Objective

Run the first real Next.js build and browser-accessible staging deployment in an environment with npm network access.

This handoff does **not** approve production. It exists to collect runtime evidence.

## Recommended path

1. Create/connect a GitHub repository.
2. Push the contents of this project as the repository root.
3. Let GitHub Actions run `Runtime CI`.
4. After the first successful install, commit the generated `package-lock.json`. If the first install happens in GitHub Actions, the workflow uploads the generated lockfile as the `hightech-package-lock` artifact so it can be committed.
5. Connect the repository to Vercel.
6. Create a **Preview/Staging** deployment first.
7. Configure staging environment variables below.
8. Run the `Staging Runtime Smoke` workflow against the Vercel preview URL.
9. Only after runtime QA is clean should production-domain migration work begin.

## Staging environment variables

```text
NEXT_PUBLIC_SITE_URL=https://polarizadoshightech.com
NEXT_PUBLIC_DEPLOYMENT_ENV=staging
NEXT_PUBLIC_ANALYTICS_ENABLED=false
NEXT_PUBLIC_WHATSAPP_NUMBER=523322289017
```

Do not add GA4, Meta Pixel or Google Ads credentials in staging while analytics/privacy approval is still blocked.

## First networked install

```bash
npm install --no-audit --no-fund
npm run validate:all-static
npm run typecheck
npm run build
```

Commit the resulting `package-lock.json` after the first clean install/build. Subsequent CI should use `npm ci`.

## Local runtime evidence on a networked machine

```bash
npm run runtime:bootstrap -- --install
```

This performs:
- dependency install;
- static gates;
- real TypeScript check;
- Next build;
- local Next start;
- smoke test;
- HTTP contract;
- evidence JSON output.

## GitHub CI

`.github/workflows/runtime-ci.yml`

Checks:
- dependency installation;
- static gates;
- real `tsc --noEmit`;
- `next build`;
- release manifest artifact.

## Staging smoke workflow

`.github/workflows/staging-runtime-smoke.yml`

Manual input:
- Vercel staging URL.

Checks:
- critical routes;
- canonical tags;
- robots/sitemap expectations;
- 404 behavior;
- approved redirects;
- security headers;
- no unexpected trackers while analytics disabled.

## Vercel

The included `vercel.json` deliberately stays minimal:
- Next.js framework;
- `npm run build`;
- npm install without audit/fund noise.

Do not connect the production domain during the first deployment.

## What must remain blocked in staging

- final legal copy;
- public warranty promises not approved;
- LocalBusiness schema until NAP approval;
- public reviews until verified;
- project case studies without publication permission;
- analytics vendors;
- production domain/DNS cutover.

## Evidence to collect from the first successful staging

- GitHub Actions run URL/status;
- exact Node/npm versions;
- `package-lock.json`;
- `next build` output;
- Vercel preview URL;
- smoke test output;
- HTTP contract output;
- screenshots at desktop/mobile sizes;
- Lighthouse report;
- axe report;
- Safari/iPhone and Android/Chrome observations.

## Production remains separate

A green staging deployment does **not** clear:
- NAP;
- legal/T&C;
- privacy;
- warranties;
- RPCA/NOM;
- DNS/email verification;
- rollback/monitoring;
- production smoke.
