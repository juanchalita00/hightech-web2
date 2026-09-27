import Link from "next/link";
import { Icon } from "@/components/Icon";
import { LimitationNotice } from "@/components/LimitationNotice";
import { ProductCTA } from "@/components/ProductCTA";
import { ProductHero } from "@/components/ProductHero";
import { WarrantySummaryGate } from "@/components/WarrantySummaryGate";
import { GateNotice } from "@/components/GateNotice";

export const metadata = { alternates: { canonical: "/peliculas/plata-reflecta/" },
  title: { absolute: "Película Plata Reflecta | HIGHTECH Polarizados" },
  description: "Solución arquitectónica reflectiva para control solar y privacidad principalmente diurna, evaluada según cristal y proyecto.",
};

export default function ReflectivePage() {
  return <>
    <ProductHero variant="reflective" eyebrow="Plata Reflecta · arquitectura" title="Privacidad diurna cuando una apariencia reflectiva sí forma parte de la solución." description="La reflectividad puede ayudar a limitar la vista hacia el interior durante el día y aportar control solar, pero el resultado depende del producto, el cristal y la diferencia de luz entre ambos lados." ctaLabel="Consultar aplicación" context={{sourcePage:"/peliculas/plata-reflecta/", product:"Plata Reflecta", businessLine:"residential"}} facts={[{label:"Uso",value:"Arquitectura"},{label:"Privacidad",value:"Principalmente día"},{label:"Noche",value:"Depende de luz"}]} secondary={<Link href="/peliculas/nanoceramica/" className="button button-secondary">Comparar con nanocerámica <Icon name="arrow" size={18}/></Link>} />

    <section className="section reflecta-fit-section"><div className="container"><div className="section-heading section-heading-split"><div><p className="eyebrow">Cuándo tiene sentido</p><h2>La reflectividad es una decisión visual además de técnica.</h2></div><p>No la recomendamos por default. Funciona mejor cuando el proyecto acepta una apariencia más espejada y la privacidad diurna es una prioridad real.</p></div><div className="reflecta-fit-grid"><article><span>01</span><h3>Privacidad diurna</h3><p>El contraste de iluminación puede dificultar la vista hacia el interior durante el día.</p></article><article><span>02</span><h3>Apariencia arquitectónica</h3><p>El acabado cambia la lectura exterior del cristal; conviene evaluarlo como parte de la fachada.</p></article><article><span>03</span><h3>Control solar</h3><p>Puede formar parte de una estrategia de control solar, pero los valores exactos se definen por producto/SKU.</p></article></div></div></section>

    <section className="section section-dark reflecta-light-section"><div className="container reflecta-light-grid"><div><p className="eyebrow eyebrow-light">La regla de luz</p><h2>De noche, el lado más iluminado suele quedar más expuesto.</h2><p>Por eso una película reflectiva no debe venderse como espejo unidireccional permanente. Si la privacidad nocturna es crítica, el problema necesita otra estrategia o una combinación distinta.</p><Link className="text-link text-link-on-dark" href="/peliculas/privacidad/">Entender privacidad <Icon name="arrow" size={17}/></Link></div><div className="reflecta-day-night" aria-hidden="true"><div><small>Día</small><span className="reflecta-window day"/><strong>Exterior más luminoso</strong></div><div><small>Noche</small><span className="reflecta-window night"/><strong>Interior más luminoso</strong></div></div></div></section>

    <section className="section"><div className="container reflecta-check-grid"><div><p className="eyebrow">Antes de especificar</p><h2>Hay que revisar el cristal y la forma de aplicación.</h2><p>Interior, exterior, domos, inclinación y condiciones especiales no se generalizan. El producto debe estar autorizado para la aplicación concreta.</p></div><LimitationNotice title="No generalizamos desempeño ni garantía"><p>Mientras no exista una ficha/SKU vinculado para el caso concreto, HIGHTECH no publica TSER, rechazo IR, uso exterior universal ni un plazo de garantía único para toda la familia reflectiva.</p></LimitationNotice></div></section>

    <div className="container"><GateNotice title="Strong claims gate">`reflectiveStrongClaims=false`: mantener ocultos datos técnicos exactos y garantía universal hasta vincular fuente aprobada.</GateNotice><WarrantySummaryGate product="Plata Reflecta" /></div>
    <ProductCTA title="Si buscas privacidad de día, primero revisemos cómo se comporta la luz en tu cristal." text="Con fotos del interior y exterior podemos evaluar si una solución reflectiva tiene sentido o si conviene otra estrategia." cta="Consultar mi aplicación" context={{sourcePage:"/peliculas/plata-reflecta/", product:"Plata Reflecta", problem:"privacy"}} secondaryHref="/peliculas/privacidad/" secondaryLabel="Ver opciones de privacidad" />
  </>;
}
