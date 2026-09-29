import Link from "next/link";
import { ApplicationFinalCTA } from "@/components/ApplicationFinalCTA";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { DecisionCards } from "@/components/DecisionCards";
import { FAQList } from "@/components/FAQList";
import { Icon } from "@/components/Icon";
import { NanoSpectrum } from "@/components/NanoSpectrum";
import { ProcessRail } from "@/components/ProcessRail";
import styles from "./residential-v1.module.css";

export const metadata = { alternates: { canonical: "/residencial/" },
  title: { absolute: "Polarizado residencial | HIGHTECH Polarizados" },
  description: "Soluciones para cristales residenciales orientadas a control solar, UV, deslumbramiento y privacidad, seleccionadas según el vidrio y el espacio.",
};

const decisions = [
  { icon: "sun" as const, title: "Orientación y sol", text: "La orientación y las horas de sol directo ayudan a definir el control solar que necesitas." },
  { icon: "glass" as const, title: "Tipo de cristal", text: "Revisamos el vidrio y su configuración para elegir una aplicación compatible." },
  { icon: "privacy" as const, title: "Luz y privacidad", text: "Buscamos el balance entre luz natural, vista al exterior y privacidad de día y de noche." },
  { icon: "glare" as const, title: "Uso del espacio", text: "Una sala, una recámara y un estudio necesitan distintos niveles de claridad y control del deslumbramiento." },
] as const;

const steps = [
  { number: "01", title: "Cuéntanos qué quieres resolver", text: "Calor, UV, deslumbramiento, privacidad o una combinación de varios objetivos." },
  { number: "02", title: "Comparte fotos y medidas", text: "Con medidas aproximadas y fotografías podemos entender mejor el espacio antes de cotizar." },
  { number: "03", title: "Revisamos la solución", text: "Seleccionamos tecnología y tono considerando cristal, iluminación y expectativas visuales." },
  { number: "04", title: "Cotizamos el proyecto", text: "Cotizamos según película, medidas y condiciones reales de instalación." },
] as const;

const faqs = [
  { question: "¿Tengo que saber qué película quiero?", answer: <p>No. Puedes empezar por el problema. HIGHTECH compara claridad, privacidad, control solar y condiciones del cristal antes de recomendar una opción.</p> },
  { question: "¿Una película más oscura protege más contra UV?", answer: <p>En la gama nanocerámica activa, las fichas de los cinco tonos indican 99% de rechazo UV. El tono cambia principalmente la transmisión visible y también cambia el TSER indicado por ficha.</p> },
  { question: "¿La privacidad funciona igual de noche?", answer: <p>No necesariamente. En soluciones reflectivas o basadas en contraste, la privacidad puede invertirse cuando hay más luz dentro que fuera. Por eso la expectativa nocturna debe definirse antes de elegir.</p> },
  { question: "¿Por qué no publican un precio fijo por m²?", answer: <p>Porque dos proyectos con el mismo metraje pueden requerir distinta película, acceso, retiro, aplicación o evaluación de compatibilidad. Preferimos cotizar el sistema que corresponde a tus cristales.</p> },
] as const;

export default function ResidentialPage() {
  const wa = { sourcePage: "/residencial/", businessLine: "residential" };
  return (
    <div className={styles.page}>
      <section className="application-hero application-hero-residential">
        <div className="container application-hero-grid">
          <div className="application-hero-copy">
            <p className="eyebrow">Polarizado residencial</p>
            <h1>Menos calor.<br/><span className={styles.heroAccent}>Más comodidad en casa.</span></h1>
            <p className="application-hero-lede">Controla el calor y el deslumbramiento con una película elegida para tus ventanas y la luz que quieres conservar.</p>
            <div className="hero-actions">
              <WhatsAppCTA label="Cotizar mis cristales" context={wa} position="HERO" />
              <Link href="/peliculas/" className="button button-secondary">Ver tipos de película <Icon name="arrow" size={18}/></Link>
            </div>
            <p className={styles.heroHelp}>Podemos empezar con fotos y medidas aproximadas.</p>
          </div>
          <figure className={styles.heroScene}>
            <img
              src="https://images.unsplash.com/photo-1758957530781-4ff54e09bee2?auto=format&fit=crop&w=1800&q=82"
              alt="Sala y comedor con ventanales amplios y luz natural."
              width={1200}
              height={1200}
              fetchPriority="high"
              className={styles.heroPhoto}
            />
            <figcaption className={styles.heroCaption}>
              <strong>Disfruta tu espacio. Conserva la luz.</strong>
              <span>Imagen de referencia, no corresponde a una instalación HIGHTECH.</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="application-strip" aria-label="Objetivos residenciales frecuentes">
        <div className="container application-strip-inner">
          <span><Icon name="sun" size={18}/> Control solar</span><i />
          <span><Icon name="uv" size={18}/> Protección ultravioleta</span><i />
          <span><Icon name="glare" size={18}/> Deslumbramiento</span><i />
          <span><Icon name="privacy" size={18}/> Privacidad</span>
        </div>
      </section>

      <section className="section application-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><p className="eyebrow">Antes de elegir tono</p><h2>Una solución para tus ventanas.</h2></div>
            <p>Para recomendarte una película, revisamos cuatro aspectos de tu espacio.</p>
          </div>
          <DecisionCards items={decisions} />
        </div>
      </section>

      <section className="section residential-solutions-section">
        <div className="container residential-solutions-grid">
          <div className="residential-solution-copy">
            <p className="eyebrow">Soluciones según tu necesidad</p>
            <h2>La película correcta depende de lo que quieres resolver.</h2>
            <div className="solution-link-list">
              <Link href="/peliculas/nanoceramica/"><span><strong>Nanocerámica</strong><small>Control solar y alta claridad para conservar la luz natural.</small></span><Icon name="arrow" size={18}/></Link>
              <Link href="/peliculas/plata-reflecta/"><span><strong>Plata Reflecta</strong><small>Mayor apariencia reflectiva y privacidad durante el día.</small></span><Icon name="arrow" size={18}/></Link>
              <Link href="/peliculas/privacidad/"><span><strong>Privacidad</strong><small>Para controlar la visibilidad según las condiciones de luz del espacio.</small></span><Icon name="arrow" size={18}/></Link>
              <Link href="/peliculas/seguridad/"><span><strong>Seguridad</strong><small>Ayuda a mantener unidos los fragmentos del cristal en caso de rotura.</small></span><Icon name="arrow" size={18}/></Link>
            </div>
          </div>
          <div className="compatibility-card">
            <span className="compatibility-icon"><Icon name="glass" size={25}/></span>
            <p className="eyebrow">Compatibilidad</p>
            <h3>Primero revisamos tu cristal.</h3>
            <p>El tipo de vidrio y sus condiciones determinan qué películas podemos instalar de forma adecuada. En cristales especiales, sistemas aislados o aplicaciones exteriores puede ser necesaria una revisión adicional antes de recomendar una opción.</p>
            <Link href="/guias/" className="text-link text-link-strong">Conocer cómo evaluamos el cristal <Icon name="arrow" size={17}/></Link>
          </div>
        </div>
      </section>

      <section className="section section-nano residential-nano-section">
        <div className="container nano-layout">
          <div className="nano-copy">
            <p className="eyebrow">Gama nanocerámica</p>
            <h2>Elige cuánta luz quieres conservar.</h2>
            <p className="lede-small">De IR75 a IR5 cambia principalmente la cantidad de luz visible que atraviesa el cristal y el TSER indicado para cada tono. Los cinco tonos comparten, según ficha, 99% de rechazo UV y 95% de rechazo infrarrojo medido a 950 nm.</p>
            <div className="context-note"><strong>Importante:</strong> 95% a 950 nm no equivale a reducir en 95% el calor total dentro de una habitación.</div>
            <Link href="/peliculas/nanoceramica/" className="text-link text-link-strong">Entender VLT y TSER <Icon name="arrow" size={17}/></Link>
          </div>
          <NanoSpectrum />
        </div>
      </section>

      <section className="section residential-process-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><p className="eyebrow">Cómo cotizamos residencial</p><h2>Con fotos y medidas ya podemos empezar a entender el proyecto.</h2></div>
            <p>No necesitas llegar con una película decidida. La cotización parte del espacio, el problema y las condiciones de instalación.</p>
          </div>
          <ProcessRail steps={steps} />
        </div>
      </section>

      <section className="section section-alt application-faq-section">
        <div className="container faq-layout">
          <div><p className="eyebrow">Preguntas frecuentes</p><h2>Lo que conviene saber antes de instalar.</h2></div>
          <FAQList items={faqs} />
        </div>
      </section>

      <ApplicationFinalCTA eyebrow="Tu espacio primero" title="Mándanos fotos o medidas aproximadas y te ayudamos a aterrizar la solución." ctaLabel="Cotizar mis cristales" context={wa} secondaryHref="/peliculas/nanoceramica/" secondaryLabel="Comparar nanocerámica" />
    </div>
  );
}
