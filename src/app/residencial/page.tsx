import Image from "next/image";
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
  { number: "01", title: "Cuéntanos qué quieres resolver", text: "Calor, deslumbramiento, privacidad, protección UV o una combinación de varios objetivos." },
  { number: "02", title: "Envíanos fotos y medidas aproximadas", text: "Para una primera revisión no tienen que ser perfectas. Si necesitamos validar alguna medida antes de cerrar el proyecto, te lo indicamos." },
  { number: "03", title: "Revisamos tu cristal y las opciones", text: "Validamos compatibilidad, tecnología y tono según el espacio, la luz y el resultado que buscas." },
  { number: "04", title: "Recibes tu cotización", text: "Te enviamos la solución propuesta, el alcance del trabajo y el precio correspondiente." },
] as const;

const faqs = [
  { question: "¿Tengo que saber qué película quiero?", answer: <p>No. Puedes empezar contándonos qué quieres resolver. Revisamos claridad, privacidad, control solar y las condiciones del cristal antes de recomendar una opción.</p> },
  { question: "¿El polarizado va a oscurecer mucho mis ventanas?", answer: <p>No necesariamente. Hay opciones nanocerámicas muy claras y otras más oscuras. Elegimos el nivel de luz y privacidad según el espacio y el resultado que buscas.</p> },
  { question: "¿Cómo puede una película clara ayudar con el calor?", answer: <p>Porque que una protección sea transparente no significa que no esté funcionando. Piensa en el protector solar: puede quedar prácticamente invisible sobre la piel y aun así protegerla contra rayos UV. Con una película pasa algo parecido: puede verse muy clara y seguir ofreciendo protección. En el cristal, la protección UV y el control solar son características distintas, por eso no elegimos una película solamente por qué tan oscura se ve.</p> },
  { question: "¿La privacidad funciona igual de noche?", answer: <p>No siempre. En películas reflectivas o que dependen del contraste de luz, el efecto puede disminuir o invertirse cuando hay más iluminación dentro que fuera. Por eso conviene definir desde el inicio qué nivel de privacidad esperas de día y de noche.</p> },
  { question: "¿Cuántos grados puede bajar la temperatura?", answer: <p>No existe una cantidad fija de grados que podamos garantizar para todas las casas. El resultado depende del tipo de cristal, cuánto sol recibe, el tamaño y la ventilación del espacio, entre otras condiciones. Por eso comparamos el desempeño de las películas y elegimos una opción adecuada para cada proyecto.</p> },
  { question: "¿Cómo se calcula la cotización?", answer: <p>Consideramos la película recomendada, las medidas, el tipo de cristal, el acceso y las condiciones de instalación. Si existe película previa que deba retirarse u otra condición especial, también se contempla antes de cerrar el proyecto.</p> },
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
            <Image
              src="/images/projects/residential-landmark.webp"
              alt="Interior residencial con ventanal de piso a techo y vista urbana, proyecto documentado por HIGHTECH."
              fill
              preload
              sizes="(max-width: 900px) min(calc(100vw - 2rem), 42rem), 46vw"
              className={styles.heroPhoto}
            />
            <figcaption className={styles.heroCaption}>
              <strong>Disfruta tu espacio. Conserva la luz.</strong>
              <span>Proyecto residencial documentado por HIGHTECH.</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="application-strip" aria-label="Objetivos residenciales frecuentes">
        <div className="container application-strip-inner">
          <span><Icon name="sun" size={18}/> Control solar</span><i />
          <span><Icon name="uv" size={19}/> Protección ultravioleta</span><i />
          <span><Icon name="glare" size={18}/> Deslumbramiento</span><i />
          <span><Icon name="privacy" size={18}/> Privacidad</span>
        </div>
      </section>

      <section className="section application-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><p className="eyebrow">Antes de recomendar una solución</p><h2>No todas las habitaciones necesitan lo mismo.</h2></div>
            <p>Una sala con sol de tarde, una recámara y un estudio pueden necesitar soluciones distintas. Por eso revisamos cómo entra el sol, el cristal, la luz que quieres conservar y el uso que le das al espacio.</p>
          </div>
          <DecisionCards items={decisions} />
        </div>
      </section>

      <section className="section residential-solutions-section">
        <div className="container residential-solutions-grid">
          <div className="residential-solution-copy">
            <p className="eyebrow">Soluciones según tu necesidad</p>
            <h2>No empezamos por el tono. Empezamos por lo que quieres resolver.</h2>
            <div className="solution-link-list">
              <Link href="/peliculas/nanoceramica/"><span><strong>Nanocerámica</strong><small>Control solar con distintos niveles de luz, desde opciones muy claras hasta más oscuras.</small></span><Icon name="arrow" size={18}/></Link>
              <Link href="/peliculas/plata-reflecta/"><span><strong>Plata Reflecta</strong><small>Control solar y privacidad durante el día con una apariencia más reflectiva.</small></span><Icon name="arrow" size={18}/></Link>
              <Link href="/peliculas/privacidad/"><span><strong>Privacidad</strong><small>Para limitar la visibilidad hacia el interior, considerando que el efecto cambia entre día y noche.</small></span><Icon name="arrow" size={18}/></Link>
              <Link href="/peliculas/seguridad/"><span><strong>Seguridad</strong><small>Ayuda a mantener unidos los fragmentos del cristal en caso de rotura.</small></span><Icon name="arrow" size={18}/></Link>
            </div>
          </div>
          <div className="compatibility-card">
            <span className="compatibility-icon"><Icon name="glass" size={25}/></span>
            <p className="eyebrow">Compatibilidad</p>
            <h3>Primero revisamos tu cristal.</h3>
            <p>No todas las películas son adecuadas para todos los vidrios. Revisamos el tipo de cristal y las condiciones de instalación antes de recomendar una solución. Algunos cristales especiales o aplicaciones particulares requieren una revisión adicional.</p>
            <Link href="/guias/" className="text-link text-link-strong">Cómo revisamos tu cristal <Icon name="arrow" size={17}/></Link>
          </div>
        </div>
      </section>

      <section className="section section-nano residential-nano-section">
        <div className="container nano-layout">
          <div className="nano-copy">
            <p className="eyebrow">Gama nanocerámica</p>
            <h2>Elige cuánta luz quieres conservar.</h2>
            <p className="lede-small">No necesitas oscurecer tu casa para obtener control solar. Hay películas muy claras y otras más oscuras. El tono define principalmente cuánta luz quieres conservar; el desempeño solar se compara por separado.</p>
            <div className="context-note"><strong>Para comparar:</strong> el <strong>VLT</strong> indica cuánta luz visible atraviesa el cristal y el <strong>TSER</strong> ayuda a comparar cuánta energía solar total se rechaza. En la gama nanocerámica, las fichas indican 99% de rechazo UV y 95% de rechazo IR medido a 950 nm; ese 95% IR no significa 95% menos calor dentro de una habitación.</div>
            <Link href="/peliculas/nanoceramica/" className="text-link text-link-strong">Entender VLT y TSER <Icon name="arrow" size={17}/></Link>
          </div>
          <NanoSpectrum />
        </div>
      </section>

      <section className="section residential-process-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><p className="eyebrow">Cómo cotizamos residencial</p><h2>Con fotos y medidas aproximadas podemos empezar.</h2></div>
            <p>No necesitas saber qué película elegir. Primero entendemos qué quieres resolver, revisamos tus cristales y después te proponemos una solución.</p>
          </div>
          <ProcessRail steps={steps} />
          <figure className={styles.evidence}>
            <div className={styles.evidenceMedia}>
              <Image
                src="/images/projects/residential-process.webp"
                alt="Instalador aplicando película en un ventanal amplio de un proyecto arquitectónico."
                fill
                sizes="(max-width: 900px) calc(100vw - 2rem), 38rem"
                className={styles.evidencePhoto}
              />
            </div>
            <figcaption className={styles.evidenceCopy}>
              <p className="eyebrow">Instalación real</p>
              <h3>La aplicación también depende del espacio.</h3>
              <p>Acceso, dimensiones, exposición y configuración del cristal forman parte del trabajo antes de cerrar una solución.</p>
              <span className={styles.evidenceCaption}>Instalación HIGHTECH · Proyecto arquitectónico</span>
            </figcaption>
          </figure>
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
