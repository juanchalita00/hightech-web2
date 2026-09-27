# Architecture notes

## Trust boundary

`content/publication-truth.json` is a temporary snapshot of approved public facts. It intentionally omits the exact address while NAP is unresolved and contains no public warranty records.

## Legal/warranty boundary

Legal pages exist as route shells, but their metadata is noindex and their content remains blocked until the release state changes. The final CMS should preserve immutable legal versions referenced by quote/folio.

## Analytics boundary

Components call only `track()`. Provider adapters are not active. This prevents accidental activation of GA4/Meta before privacy/consent approval.

## Evidence boundary

Generated imagery may support design but must never enter project evidence. The CMS evidence type requires `publicationAllowed` and project/product mapping.

## Release boundary

`release-check.mjs production` is meant to fail today. A deploy workflow should call it before production promotion.


## Canonical / schema boundary — v0.7

Every registered route has a canonical path. `Organization` and `WebSite` may render globally; `LocalBusiness` is gated by NAP approval and exact address availability.

## Migration boundary — v0.7

Approved legacy redirects are implemented as explicit HTTP 301 responses and backed by test fixtures. Pending redirects never activate just because they exist in the registry.

## Runtime release boundary — v0.7

Static validation is separate from runtime smoke. `smokeTestPassed` remains false until an actual deployment passes route, canonical, robots, sitemap, 404 and redirect checks.
