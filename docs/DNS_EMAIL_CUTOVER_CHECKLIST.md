# HIGHTECH Web 2.0 — DNS & Email Cutover Checklist

**Estado actual:** `UNVERIFIED_PRE_CUTOVER`

No cambiar nameservers ni registros destructivamente hasta completar este documento con valores reales exportados del DNS vigente.

## Antes del cutover

- [ ] Exportar zona DNS completa.
- [ ] Identificar A/AAAA/CNAME del apex.
- [ ] Identificar `www`.
- [ ] Registrar todos los MX y prioridades.
- [ ] Registrar SPF completo.
- [ ] Registrar selectores DKIM y valores.
- [ ] Registrar DMARC.
- [ ] Registrar verificaciones de Google.
- [ ] Registrar verificaciones de Meta u otros proveedores.
- [ ] Inventariar subdominios en uso.
- [ ] Confirmar qué registros pertenecen al hosting viejo y cuáles al correo.
- [ ] Confirmar TLS/certificado del deployment nuevo.
- [ ] Documentar rollback al host anterior.

## Validación antes de cambiar tráfico

- [ ] Sitio staging compila y pasa smoke.
- [ ] Canonicals apuntan a `https://polarizadoshightech.com`.
- [ ] Redirect fixtures pasan.
- [ ] Correo entrante probado.
- [ ] Correo saliente probado.
- [ ] SPF sigue autorizando sólo proveedores reales.
- [ ] DKIM firma correctamente.
- [ ] DMARC no se pierde.

## Después del cutover

- [ ] Apex resuelve al destino esperado.
- [ ] `www` redirige al host canónico.
- [ ] HTTP redirige a HTTPS.
- [ ] MX no cambió accidentalmente.
- [ ] Enviar/recibir correos de prueba externos.
- [ ] Revisar SSL.
- [ ] Correr runtime smoke en producción.
- [ ] Verificar robots/sitemap.
- [ ] Enviar sitemap a Search Console.
- [ ] Revisar 404/5xx y redirects durante primeras horas.

**Regla:** una migración web no justifica romper correo.
