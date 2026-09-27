# First Staging Checklist

## Repository
- [ ] Repository created
- [ ] Project files pushed at repository root
- [ ] No secrets committed
- [ ] GitHub Actions enabled

## First install/build
- [ ] `npm install` succeeded
- [ ] `package-lock.json` generated
- [ ] lockfile committed
- [ ] static gates pass
- [ ] real typecheck passes
- [ ] `next build` passes

## Vercel preview
- [ ] repository connected
- [ ] Preview deployment created
- [ ] no production domain attached
- [ ] `NEXT_PUBLIC_DEPLOYMENT_ENV=staging`
- [ ] analytics disabled
- [ ] WhatsApp number configured

## Runtime
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
