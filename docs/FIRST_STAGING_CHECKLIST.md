# First Staging Checklist

## Repository
- [x] Repository created
- [x] Project files pushed at repository root
- [x] No secrets committed
- [ ] GitHub Actions enabled

## First install/build
- [x] `npm install` succeeded
- [x] `package-lock.json` generated
- [x] lockfile committed
- [x] static gates pass
- [x] real typecheck passes
- [x] `next build` passes

## Vercel preview
- [ ] repository connected
- [ ] Preview deployment created
- [ ] no production domain attached
- [ ] `NEXT_PUBLIC_DEPLOYMENT_ENV=staging`
- [ ] analytics disabled
- [ ] WhatsApp number configured

## Runtime
_Verificado sólo en local contra `next start` (ver `docs/RUNTIME_VERIFICATION_V0.8.2.md`). Pendiente contra el Vercel Preview._

- [ ] `/` returns 200
- [ ] `/residencial/` returns 200
- [ ] `/comercial/` returns 200
- [ ] `/automotriz/` returns 200
- [ ] `/peliculas/` returns 200
- [ ] `/peliculas/nanoceramica/` returns 200
- [ ] `/guias/` returns 200
- [ ] `/contacto/` returns 200
- [ ] `/robots.txt` reflects staging
- [ ] `/sitemap.xml` behaves as designed
- [ ] unknown URL returns 404
- [ ] approved redirects return 301
- [ ] canonical host is correct
- [ ] security headers present
- [ ] no GA4/Meta/Ads trackers loaded

## Browser QA
- [ ] Chrome desktop
- [ ] Edge desktop
- [ ] Safari macOS
- [ ] Android Chrome
- [ ] iPhone Safari
- [ ] keyboard navigation
- [ ] 200% zoom
- [ ] 320px reflow
- [ ] reduced motion

## Evidence
- [ ] build log saved
- [ ] smoke output saved
- [ ] HTTP contract output saved
- [ ] screenshots saved
- [ ] Lighthouse saved
- [ ] axe saved
