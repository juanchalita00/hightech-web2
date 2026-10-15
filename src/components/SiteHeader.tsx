import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { Icon } from "@/components/Icon";
import { MobileMenu } from "@/components/MobileMenu";

const links = [
  ["Servicios", "/servicios/"],
  ["Residencial", "/residencial/"],
  ["Comercial", "/comercial/"],
  ["Automotriz", "/automotriz/"],
  ["Películas", "/peliculas/"],
  ["Galería", "/galeria/"],
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
          <Link className="header-cta" href="/contacto/#cotizar">
            Cotizar <Icon name="arrow" size={17} />
          </Link>

          <MobileMenu links={links} />
        </div>
      </div>
    </header>
  );
}
