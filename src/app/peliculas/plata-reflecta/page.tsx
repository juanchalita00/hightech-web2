import Link from "next/link";
import { Icon } from "@/components/Icon";
import { LimitationNotice } from "@/components/LimitationNotice";
import { ProductCTA } from "@/components/ProductCTA";
import { ProductHero } from "@/components/ProductHero";
import { ReflectaMirror } from "@/components/ReflectaMirror";
import { SimpleExample } from "@/components/SimpleExample";

export const metadata = { alternates: { canonical: "/peliculas/plata-reflecta/" },
  title: { absolute: "Película Plata Reflecta | HIGHTECH Polarizados" },
  description: "Solución arquitectónica reflectiva para control solar y privacidad principalmente diurna, evaluada según cristal y proyecto.",
};

export default function ReflectivePage() {
  return <>
    <ProductHero variant="reflective" eyebrow="Plata Reflecta · arquitectura" title="Privacidad de día con una apariencia más reflectiva." description="Cuando afuera hay más luz que adentro, la película puede dificultar la vista hacia el interior. También modifica la apariencia del cristal y puede aportar control solar." ctaLabel="Quiero saber si me funciona" context={{sourcePage:"/peliculas/plata-reflecta/", product:"Plata Reflecta", businessLine:"residential"}} facts={[{label:"Ideal para",value:"Privacidad diurna"},{label:"Acabado",value:"Más reflectivo"},{label:"De noche",value:"Cambia con la luz"}]} secondary={<Link href="/peliculas/nanoceramica/" className="button button-secondary">Comparar con nanocerámica <Icon name="arrow" size={18}/></Link>} />

    <section className="section reflecta-fit-section"><div className="container"><div className="section-heading section-heading-split"><div><p className="eyebrow">Cuándo tiene sentido</p><h2>No es sólo hacer el cristal más oscuro.</h2></div><p>Plata Reflecta cambia cómo se ve el vidrio desde afuera. Tiene más sentido cuando buscas privacidad durante el día y estás de acuerdo con una apariencia más espejada.</p></div><div className="reflecta-fit-grid"><article><span>01</span><h3>Privacidad durante el día</h3><p>Con el exterior más iluminado, puede dificultar la vista hacia el interior.</p></article><article><span>02</span><h3>Apariencia más espejada</h3><p>El acabado se nota desde afuera, así que también forma parte de cómo quieres que se vea la fachada.</p></article><article><span>03</span><h3>Control solar</h3><p>También puede aportar control solar. El desempeño exacto depende del producto y de la aplicación elegida.</p></article></div></div></section>

    <ReflectaMirror />

    <section className="section">
      <div className="container" style={{ maxWidth: "46rem" }}>
        <SimpleExample>
          De día, unos lentes de espejo tapan los ojos. De noche, con una lámpara detrás, se alcanza a ver. Plata Reflecta funciona con esa misma regla de luz.
        </SimpleExample>
        <p style={{ marginTop: "1rem" }}><Link href="/peliculas/privacidad/">Si también necesitas privacidad de noche, hay otras opciones.</Link></p>
      </div>
    </section>

    <section className="section"><div className="container reflecta-check-grid"><div><p className="eyebrow">Antes de recomendarla</p><h2>Primero revisamos dónde y sobre qué cristal se va a instalar.</h2><p>No es lo mismo una ventana vertical que un domo, ni una instalación interior que una exterior. Revisamos el tipo de cristal y las condiciones del proyecto antes de definir la película y la forma de aplicación.</p></div><LimitationNotice title="El desempeño depende de la película y la aplicación"><p>Los valores técnicos, la compatibilidad de uso y la garantía deben corresponder al producto específico que se vaya a instalar; no los generalizamos para toda la familia reflectiva.</p></LimitationNotice></div></section>

    <ProductCTA title="¿Buscas más privacidad durante el día?" text="Con fotos del interior y exterior podemos revisar cómo se comporta la luz en tus ventanas y decirte si Plata Reflecta tiene sentido o si otra solución encaja mejor." cta="Revisar mis ventanas" context={{sourcePage:"/peliculas/plata-reflecta/", product:"Plata Reflecta", problem:"privacy"}} secondaryHref="/peliculas/privacidad/" secondaryLabel="Ver opciones de privacidad" />
  </>;
}
