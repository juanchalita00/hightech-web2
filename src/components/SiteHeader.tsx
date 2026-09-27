import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { Icon } from "@/components/Icon";

const links = [
  ["Servicios", "/servicios/"],
  ["Residencial", "/residencial/"],
  ["Comercial", "/comercial/"],
  ["Automotriz", "/automotriz/"],
  ["Películas", "/peliculas/"],
  ["Contacto", "/contacto/"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <BrandLogo priority />

        <nav aria-label="Navegación principal" className="desktop-nav">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>

        <div className="header-actions">
          <Link className="header-cta" href="/contacto/">
            Cotizar <Icon name="arrow" size={17} />
          </Link>

          <details className="mobile-menu">
            <summary aria-label="Abrir menú"><span></span><span></span><span></span></summary>
            <nav aria-label="Navegación móvil" className="mobile-nav-panel">
              {links.map(([label, href]) => <Link key={href} href={href}>{label}<Icon name="arrow" size={17}/></Link>)}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
