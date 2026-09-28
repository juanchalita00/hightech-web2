import Link from "next/link";
import { ApplicationFinalCTA } from "@/components/ApplicationFinalCTA";
import { ApplicationHero } from "@/components/ApplicationHero";
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
  { icon: "sun" as const, title: "Orientación y sol", text: "No recibe la misma carga solar una ventana al poniente que una zona con luz indirecta. La recomendación debe partir del espacio real." },
  { icon: "glass" as const, title: "Tipo de cristal", text: "La compatibilidad importa. Algunas configuraciones requieren revisar vidrio, sistema, aplicación interior/exterior y condiciones existentes." },
  { icon: "privacy" as const, title: "Luz y privacidad", text: "Oscurecer no es el único camino. Primero definimos cuánta luz quieres conservar y qué nivel de privacidad esperas." },
  { icon: "glare" as const, title: "Uso del espacio", text: "Recámara, sala, estudio u oficina en casa pueden necesitar balances diferentes entre claridad y deslumbramiento." },
] as const;

const steps = [
  { number: "01", title: "Cuéntanos qué quieres resolver", text: "Calor, UV, deslumbramiento, privacidad o una combinación de varios objetivos." },
  { number: "02", title: "Comparte fotos y medidas", text: "Con medidas aproximadas y fotografías podemos entender mejor el espacio antes de cotizar." },
  { number: "03", title: "Revisamos la solución", text: "Seleccionamos tecnología y tono considerando cristal, iluminación y expectativas visuales." },
  { number: "04", title: "Cotizamos el proyecto", text: "El precio se define por el alcance real, no por una tarifa pública genérica por metro cuadrado." },
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
      <ApplicationHero
        variant="residential"
        eyebrow="Residencial"
        title="Menos carga solar. Más confort. La luz que sí quieres conservar."
        description="Seleccionamos la película según orientación, tipo de cristal, entrada de luz, privacidad y el objetivo real de cada espacio."
        ctaLabel="Cotizar mis cristales"
        context={wa}
        secondary={<Link href="/peliculas/" className="button button-secondary">Ver tipos de película <Icon name="arrow" size={18}/></Link>}
        proofItems={["Cotización según proyecto", "Opciones claras y oscuras", "Compatibilidad antes de prometer"]}
      />

      <section className="application-strip" aria-label="Objetivos residenciales frecuentes">
        <div className="container application-strip-inner">
          <span><Icon name="sun" size={18}/> Control solar</span><i />
          <span><Icon name="uv" size={18}/> UV</span><i />
          <span><Icon name="glare" size={18}/> Deslumbramiento</span><i />
          <span><Icon name="privacy" size={18}/> Privacidad</span>
        </div>
      </section>

      <section className="section application-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><p className="eyebrow">Antes de elegir tono</p><h2>La ventana no se decide sólo por qué tan oscuro se ve.</h2></div>
            <p>Una recomendación residencial cambia con el sol que recibe el cristal, la iluminación interior, el tipo de vidrio y lo que quieres seguir viendo desde adentro.</p>
          </div>
          <DecisionCards items={decisions} />
        </div>
      </section>

      <section className="section residential-solutions-section">
        <div className="container residential-solutions-grid">
          <div className="residential-solution-copy">
            <p className="eyebrow">Soluciones que podemos evaluar</p>
            <h2>No todo problema residencial pide la misma película.</h2>
            <div className="solution-link-list">
              <Link href="/peliculas/nanoceramica/"><span><strong>Nanocerámica</strong><small>Cuando claridad y control solar son prioridad.</small></span><Icon name="arrow" size={18}/></Link>
              <Link href="/peliculas/plata-reflecta/"><span><strong>Plata Reflecta</strong><small>Para arquitectura donde se busca una apariencia reflectiva y privacidad diurna.</small></span><Icon name="arrow" size={18}/></Link>
              <Link href="/peliculas/privacidad/"><span><strong>Privacidad</strong><small>Cuando lo principal es controlar visibilidad, entendiendo condiciones de día y noche.</small></span><Icon name="arrow" size={18}/></Link>
              <Link href="/peliculas/seguridad/"><span><strong>Seguridad</strong><small>Para ayudar a mantener fragmentos unidos cuando el cristal se rompe.</small></span><Icon name="arrow" size={18}/></Link>
            </div>
          </div>
          <div className="compatibility-card">
            <span className="compatibility-icon"><Icon name="glass" size={25}/></span>
            <p className="eyebrow">Compatibilidad</p>
            <h3>No todo cristal admite cualquier configuración.</h3>
            <p>Vidrios especiales, sistemas aislados, aplicaciones exteriores, dobles capas o condiciones particulares pueden requerir una evaluación adicional. La compatibilidad se revisa antes de generalizar una solución.</p>
            <Link href="/guias/" className="text-link text-link-strong">Ver guías técnicas <Icon name="arrow" size={17}/></Link>
          </div>
        </div>
      </section>

      <section className="section section-nano residential-nano-section">
        <div className="container nano-layout">
          <div className="nano-copy">
            <p className="eyebrow">Gama nanocerámica</p>
            <h2>Desde mucha claridad hasta privacidad más marcada.</h2>
            <p className="lede-small">Los cinco tonos activos comparten 99% de rechazo UV y 95% de rechazo infrarrojo medido a 950 nm según ficha. Lo que cambia de forma importante es la entrada de luz y el TSER indicado para cada tono.</p>
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
