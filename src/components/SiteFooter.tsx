import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { SocialLinks } from "@/components/SocialLinks";
import { addressLine, hoursLabel, phoneDisplay } from "@/lib/public-facts";
import { truth } from "@/lib/truth";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <BrandLogo className="brand-logo-footer" variant="white" />
          <p>Polarizado en Zapopan y Guadalajara para casa, negocio y auto.</p>
          <span>{addressLine}</span>
          <span>{hoursLabel}</span>
          <SocialLinks />
        </div>
        <div className="footer-links">
          <div>
            <strong>Soluciones</strong>
            <Link href="/residencial/">Casa</Link>
            <Link href="/comercial/">Negocio</Link>
            <Link href="/automotriz/">Auto</Link>
            <Link href="/peliculas/">Películas</Link>
            <Link href="/peliculas/seguridad/">Seguridad</Link>
            <Link href="/pelicula-inteligente-pdlc/">Película inteligente</Link>
            <Link href="/servicios/">Servicios</Link>
            <Link href="/galeria/">Galería</Link>
          </div>
          <div>
            <strong>HIGHTECH</strong>
            <Link href="/nosotros/">Nosotros</Link>
            <Link href="/guias/">Guías</Link>
            <Link href="/proyectos/">Proyectos</Link>
            <Link href="/preguntas-frecuentes/">Preguntas frecuentes</Link>
            <Link href="/zapopan/">Polarizado en Zapopan</Link>
            <Link href="/guadalajara/">Polarizado en Guadalajara</Link>
            <Link href="/garantias/">Garantías</Link>
            <Link href="/contacto/">Contacto</Link>
          </div>
          <div>
            <strong>Contacto</strong>
            <a href={`tel:${truth.contact.phoneE164}`}>{phoneDisplay}</a>
            <a href={`mailto:${truth.contact.emailSales}`}>ventas@polarizadoshightech.com</a>
            <a href={truth.contact.mapsUrl}>Cómo llegar</a>
            <Link href="/legal/aviso-de-privacidad/">Aviso de privacidad</Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 HIGHTECH Polarizados</span>
        <span>Polarizado en Zapopan, Jalisco</span>
      </div>
    </footer>
  );
}
