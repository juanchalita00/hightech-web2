import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { truth } from "@/lib/truth";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <BrandLogo className="brand-logo-footer" variant="white" />
          <p>Soluciones profesionales para cristales residenciales, comerciales y automotrices.</p>
          <span>{truth.contact.locationLabel}</span>
        </div>
        <div className="footer-links">
          <div>
            <strong>Soluciones</strong>
            <Link href="/residencial/">Residencial</Link>
            <Link href="/comercial/">Comercial</Link>
            <Link href="/automotriz/">Automotriz</Link>
            <Link href="/peliculas/">Películas</Link>
          </div>
          <div>
            <strong>HIGHTECH</strong>
            <Link href="/nosotros/">Nosotros</Link>
            <Link href="/preguntas-frecuentes/">Preguntas frecuentes</Link>
            <Link href="/garantias/">Garantías</Link>
            <Link href="/contacto/">Contacto</Link>
          </div>
          <div>
            <strong>Legal</strong>
            <Link href="/legal/terminos-y-condiciones/">Términos y Condiciones</Link>
            <Link href="/legal/aviso-de-privacidad/">Aviso de Privacidad</Link>
            <a href={`tel:${truth.contact.phoneE164}`}>{truth.contact.phoneDisplay}</a>
            <a href={`mailto:${truth.contact.emailSales}`}>Correo de ventas</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 HIGHTECH Polarizados</span>
        <span>Información técnica con contexto · Cotización según aplicación</span>
      </div>
    </footer>
  );
}
