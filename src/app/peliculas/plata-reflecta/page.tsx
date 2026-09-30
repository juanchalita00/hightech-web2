import Link from "next/link";
import { Icon } from "@/components/Icon";
import { LimitationNotice } from "@/components/LimitationNotice";
import { ProductCTA } from "@/components/ProductCTA";
import { ProductHero } from "@/components/ProductHero";
import { ReflectiveNightPrivacy } from "@/components/ReflectiveNightPrivacy";

export const metadata = { alternates: { canonical: "/peliculas/plata-reflecta/" },
  title: { absolute: "Película Plata Reflecta | HIGHTECH Polarizados" },
  description: "Solución arquitectónica reflectiva para control solar y privacidad principalmente diurna, evaluada según cristal y proyecto.",
};

export default function ReflectivePage() {
  return <>
    <ProductHero variant="reflective" eyebrow="Plata Reflecta · arquitectura" title="Privacidad de día con una apariencia más reflectiva." description="Cuando afuera hay más luz que adentro, la película puede dificultar la vista hacia el interior. También modifica la apariencia del cristal y puede aportar control solar." ctaLabel="Quiero saber si me funciona" context={{sourcePage:"/peliculas/plata-reflecta/", product:"Plata Reflecta", businessLine:"residential"}} facts={[{label:"Ideal para",value:"Privacidad diurna"},{label:"Acabado",value:"Más reflectivo"},{label:"De noche",value:"Cambia con la luz"}]} secondary={<Link href="/peliculas/nanoceramica/" className="button button-secondary">Comparar con nanocerámica <Icon name="arrow" size={18}/></Link>} />

    <section className="section reflecta-fit-section"><div className="container"><div className="section-heading section-heading-split"><div><p className="eyebrow">Cuándo tiene sentido</p><h2>No es sólo hacer el cristal más oscuro.</h2></div><p>Plata Reflecta cambia cómo se ve el vidrio desde afuera. Tiene más sentido cuando buscas privacidad durante el día y estás de acuerdo con una apariencia más espejada.</p></div><div className="reflecta-fit-grid"><article><span>01</span><h3>Privacidad durante el día</h3><p>Con el exterior más iluminado, puede dificultar la vista hacia el interior.</p></article><article><span>02</span><h3>Apariencia más espejada</h3><p>El acabado se nota desde afuera, así que también forma parte de cómo quieres que se vea la fachada.</p></article><article><span>03</span><h3>Control solar</h3><p>También puede aportar control solar. El desempeño exacto depende del producto y de la aplicación elegida.</p></article></div></div></section>

    <section className="section section-dark reflecta-light-section"><div className="container reflecta-light-grid"><div><p className="eyebrow eyebrow-light">Lo más importante que debes saber</p><h2>La privacidad depende del contraste de luz entre adentro y afuera.</h2><p>Durante el día, normalmente hay más luz afuera y la película puede dificultar la vista hacia el interior. De noche, si el interior queda más iluminado que el exterior, ese efecto puede reducirse o incluso invertirse.</p><p><strong>No es un espejo de un solo lado permanente.</strong> Si necesitas privacidad también de noche, conviene revisar la iluminación y, según el caso, otra solución o una combinación distinta.</p><Link className="text-link text-link-on-dark" href="/peliculas/privacidad/">Ver opciones de privacidad <Icon name="arrow" size={17}/></Link></div><div className="reflecta-day-night" aria-hidden="true"><div><small>Día</small><span className="reflecta-window day"/><strong>Más luz afuera</strong></div><div><small>Noche</small><span className="reflecta-window night"/><strong>Más luz adentro</strong></div></div></div></section>

    <section className="section reflecta-night-section">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div><p className="eyebrow">Privacidad nocturna</p><h2>Cómo cambia la privacidad según la luz interior</h2></div>
          <p>La privacidad no depende sólo de la película. También cambia según cuánta luz haya dentro, cuánta haya afuera y qué tan cerca estén las fuentes de luz del cristal.</p>
        </div>
        <ReflectiveNightPrivacy />
        <p className="reflecta-night-note"><strong>Referencia orientativa:</strong> el resultado puede variar según la película, el tipo de cristal, la intensidad de la iluminación y las condiciones del exterior.</p>
      </div>
    </section>

    <section className="section"><div className="container reflecta-check-grid"><div><p className="eyebrow">Antes de recomendarla</p><h2>Primero revisamos dónde y sobre qué cristal se va a instalar.</h2><p>No es lo mismo una ventana vertical que un domo, ni una instalación interior que una exterior. Revisamos el tipo de cristal y las condiciones del proyecto antes de definir la película y la forma de aplicación.</p></div><LimitationNotice title="El desempeño depende de la película y la aplicación"><p>Los valores técnicos, la compatibilidad de uso y la garantía deben corresponder al producto específico que se vaya a instalar; no los generalizamos para toda la familia reflectiva.</p></LimitationNotice></div></section>

    <ProductCTA title="¿Buscas más privacidad durante el día?" text="Con fotos del interior y exterior podemos revisar cómo se comporta la luz en tus ventanas y decirte si Plata Reflecta tiene sentido o si otra solución encaja mejor." cta="Revisar mis ventanas" context={{sourcePage:"/peliculas/plata-reflecta/", product:"Plata Reflecta", problem:"privacy"}} secondaryHref="/peliculas/privacidad/" secondaryLabel="Ver opciones de privacidad" />
  </>;
}
