import Link from "next/link";
import { Icon } from "@/components/Icon";
import { LimitationNotice } from "@/components/LimitationNotice";
import { ProductCTA } from "@/components/ProductCTA";
import { ProductHero } from "@/components/ProductHero";
import { SecurityBreakageDemo } from "@/components/SecurityBreakageDemo";
import { SecuritySystemDiagram } from "@/components/SecuritySystemDiagram";

export const metadata = { alternates: { canonical: "/peliculas/seguridad/" },
  title: { absolute: "Película de seguridad para cristal | HIGHTECH Polarizados" },
  description: "Película arquitectónica orientada a retención de fragmentos. Los objetivos de retardo de acceso dependen del sistema completo: película, vidrio, marco y fijación.",
};

export default function SecurityPage() {
  return <>
    <ProductHero variant="security" eyebrow="Seguridad para cristales" title="Cuando un cristal se rompe, importa lo que pasa después." description="La película de seguridad transparente ayuda a mantener unidos los fragmentos después de una rotura sin convertir el cristal en una superficie oscura. Además, la ficha técnica reporta menos de 2% de transmisión UV. Si el objetivo incluye dificultar un acceso, evaluamos la película, el vidrio, el marco y la fijación como un sistema." ctaLabel="Evaluar mis cristales" context={{sourcePage:"/peliculas/seguridad/", product:"Seguridad", problem:"safety"}} facts={[{label:"Apariencia",value:"Transparente"},{label:"Protección UV",value:"Más de 98%"},{label:"Función principal",value:"Retención de fragmentos"}]} secondary={<Link href="/servicios/" className="button button-secondary">Ver necesidades <Icon name="arrow" size={18}/></Link>} />

    <section className="section section-alt security-clear-section">
      <div className="container security-clear-grid">
        <div><p className="eyebrow">Seguridad sin oscurecer</p><h2>Protección que casi no cambia cómo se ve tu cristal.</h2></div>
        <div>
          <p>La opción de seguridad que instalamos con mayor frecuencia es transparente. Mantiene una apariencia clara y añade retención de fragmentos, además de protección frente a radiación UV.</p>
          <p className="security-clear-secondary">También existen películas de seguridad con tono o acabado reflectivo cuando el proyecto requiere combinar seguridad con otras características visuales.</p>
          <p className="security-clear-source">Protección UV: más de 98%, según ficha técnica (transmisión UV menor de 2%).</p>
        </div>
      </div>
    </section>

    <section className="section security-breakage-section">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div><p className="eyebrow">Qué cambia con la película</p><h2>El vidrio puede romperse. La diferencia está en cómo quedan los fragmentos.</h2></div>
          <p>La película no convierte el cristal en irrompible. Su función base es ayudar a mantener unidos los fragmentos después de una rotura.</p>
        </div>
        <SecurityBreakageDemo />
      </div>
    </section>

    <section className="section security-function-section">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">Tres cosas que conviene distinguir</p><h2>Seguridad no significa que el cristal sea irrompible.</h2></div>
        <div className="security-do-grid">
          <article className="security-do"><span><Icon name="check" size={21}/></span><h3>Retención de fragmentos</h3><p>La película puede ayudar a mantener unidos los fragmentos cuando el vidrio se rompe.</p></article>
          <article className="security-dont"><span aria-hidden="true">×</span><h3>No es blindaje</h3><p>No presentamos una película de seguridad como cristal irrompible, blindaje o una barrera absoluta.</p></article>
          <article className="security-system"><span><Icon name="glass" size={21}/></span><h3>Intrusión es otro objetivo</h3><p>Si buscas dificultar o retardar un acceso, hay que evaluar la película junto con el vidrio, el marco y la fijación.</p></article>
        </div>
        <p className="security-thickness-note">El espesor de la película se selecciona según el objetivo y la configuración del cristal. En la gama disponible existen distintos espesores y la resistencia mecánica aumenta con el grosor.</p>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">Cuando el objetivo es intrusión</p><h2>Si te preocupa un acceso desde el exterior, no evaluamos sólo la película.</h2><p className="lede-small">En ese escenario importa cómo trabajan juntos la película, el vidrio y el marco o sistema de fijación.</p></div>
        <SecuritySystemDiagram/>
        <LimitationNotice title="El resultado depende del sistema completo"><p>Para hablar de retardo de acceso hay que conocer la configuración completa. No usamos una película aislada para prometer un resultado que depende también del vidrio, el marco y la fijación.</p></LimitationNotice>
      </div>
    </section>

    <section className="section security-process-section"><div className="container security-process-grid"><div><p className="eyebrow">Cómo lo revisamos</p><h2>Primero entendemos qué te preocupa de ese cristal.</h2><p>No todas las situaciones requieren la misma solución. Revisamos el objetivo y lo que ya existe antes de recomendar una película o configuración.</p></div><ol><li><span>01</span><div><strong>Situación</strong><p>Qué quieres mejorar: fragmentación, rotura accidental o acceso.</p></div></li><li><span>02</span><div><strong>Cristal y marco</strong><p>Qué tipo de vidrio y sistema existe hoy.</p></div></li><li><span>03</span><div><strong>Solución</strong><p>Definimos la película y, si aplica, la configuración necesaria.</p></div></li></ol></div></section>

    <ProductCTA title="Cuéntanos qué te preocupa de ese cristal." text="Revisamos el objetivo, el vidrio y el marco para recomendarte una solución acorde al caso." cta="Evaluar mi caso" context={{sourcePage:"/peliculas/seguridad/", product:"Seguridad", problem:"safety"}} secondaryHref="/peliculas/" secondaryLabel="Ver todas las películas" />
  </>;
}
