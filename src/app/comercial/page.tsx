import Link from "next/link";
import { ApplicationFinalCTA } from "@/components/ApplicationFinalCTA";
import { ApplicationHero } from "@/components/ApplicationHero";
import { DecisionCards } from "@/components/DecisionCards";
import { FAQList } from "@/components/FAQList";
import { Icon } from "@/components/Icon";
import { ProcessRail } from "@/components/ProcessRail";

export const metadata = { alternates: { canonical: "/comercial/" },
  title: "Películas para cristales comerciales | HIGHTECH",
  description: "Evaluación de proyectos comerciales e institucionales para control solar, privacidad, deslumbramiento y seguridad en cristales.",
};

const decisions = [
  { icon: "building" as const, title: "Fachada y áreas", text: "Orientación, cantidad de cristal y uso de cada zona cambian la solución. Una fachada puede necesitar más de una respuesta." },
  { icon: "sun" as const, title: "Desempeño buscado", text: "Control solar, claridad, deslumbramiento y privacidad deben priorizarse antes de elegir tecnología o tono." },
  { icon: "glass" as const, title: "Sistema de vidrio", text: "Compatibilidad, ubicación de la película y condiciones existentes se revisan cuando el proyecto lo exige." },
  { icon: "shield" as const, title: "Operación y acceso", text: "Horarios, altura, accesos, continuidad del negocio y seguridad de instalación forman parte del alcance." },
] as const;

const steps = [
  { number: "01", title: "Definimos objetivo y alcance", text: "Áreas, problema, metraje aproximado, horarios y condiciones operativas." },
  { number: "02", title: "Revisamos la solución técnica", text: "Película, tono, compatibilidad, instalación y cualquier condición que cambie la especificación." },
  { number: "03", title: "Coordinamos el proyecto", text: "Accesos, logística, documentación, secuencia de áreas y tiempos de intervención." },
  { number: "04", title: "Formalizamos la cotización", text: "El proyecto se cotiza por alcance real; no exponemos una tarifa pública genérica de m²." },
] as const;

const faqs = [
  { question: "¿Trabajan sólo oficinas?", answer: <p>No. La línea comercial puede aplicarse a oficinas, fachadas, locales e instalaciones institucionales, siempre revisando el tipo de vidrio y el objetivo del proyecto.</p> },
  { question: "¿Pueden cotizar sólo con planos o medidas?", answer: <p>Podemos empezar con información del proyecto, fotografías, medidas o planos disponibles. Dependiendo del alcance, puede requerirse levantamiento o revisión técnica adicional.</p> },
  { question: "¿Publican precio por m²?", answer: <p>No como tarifa general. Metraje, película, acceso, retiro, horario, logística y condiciones del vidrio pueden cambiar el alcance. La cotización comercial se prepara por proyecto.</p> },
  { question: "¿La película reflectiva da privacidad de noche?", answer: <p>No debe prometerse así. La privacidad reflectiva depende del contraste de iluminación y puede invertirse cuando el interior está más iluminado que el exterior.</p> },
] as const;

export default function CommercialPage() {
  const wa = { sourcePage: "/comercial/", businessLine: "commercial" };
  return (
    <>
      <ApplicationHero
        variant="commercial"
        eyebrow="Comercial e institucional"
        title="El cristal forma parte de la operación del edificio."
        description="Evaluamos fachadas, oficinas y áreas de trabajo considerando desempeño, apariencia, acceso, logística y uso del espacio antes de especificar una solución."
        ctaLabel="Revisar mi proyecto"
        context={wa}
        secondary={<Link href="/peliculas/" className="button button-secondary">Explorar soluciones <Icon name="arrow" size={18}/></Link>}
        proofItems={["Cotización por proyecto", "Especificación según aplicación", "Logística incluida en el diagnóstico"]}
      />

      <section className="commercial-metric-strip">
        <div className="container commercial-metric-grid">
          <div><strong>01</strong><span>Desempeño</span><small>Qué debe resolver el cristal.</small></div>
          <div><strong>02</strong><span>Compatibilidad</span><small>Qué sistema de vidrio tenemos.</small></div>
          <div><strong>03</strong><span>Operación</span><small>Cómo intervenir sin ignorar el edificio.</small></div>
          <div><strong>04</strong><span>Alcance</span><small>Qué se cotiza realmente.</small></div>
        </div>
      </section>

      <section className="section commercial-decision-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><p className="eyebrow">Especificar antes de instalar</p><h2>No es residencial multiplicado por más metros.</h2></div>
            <p>Un proyecto comercial agrega variables de fachada, operación, acceso y documentación. Por eso la propuesta debe responder al edificio y no sólo al material.</p>
          </div>
          <DecisionCards items={decisions} />
        </div>
      </section>

      <section className="section section-dark commercial-solutions-section">
        <div className="container commercial-solutions-layout">
          <div>
            <p className="eyebrow eyebrow-light">Soluciones por objetivo</p>
            <h2>Una misma fachada puede pedir balances diferentes.</h2>
            <p className="commercial-dark-lede">La tecnología se elige después de definir claridad, control solar, privacidad, deslumbramiento y comportamiento del cristal.</p>
          </div>
          <div className="commercial-solution-list">
            <Link href="/peliculas/nanoceramica/"><span>Control solar con claridad</span><strong>Nanocerámica</strong><Icon name="arrow" size={18}/></Link>
            <Link href="/peliculas/plata-reflecta/"><span>Privacidad diurna + apariencia reflectiva</span><strong>Plata Reflecta</strong><Icon name="arrow" size={18}/></Link>
            <Link href="/peliculas/seguridad/"><span>Retención de fragmentos</span><strong>Seguridad</strong><Icon name="arrow" size={18}/></Link>
            <Link href="/peliculas/privacidad/"><span>Control de visibilidad</span><strong>Privacidad</strong><Icon name="arrow" size={18}/></Link>
          </div>
        </div>
      </section>

      <section className="section commercial-spec-section">
        <div className="container commercial-spec-grid">
          <div className="commercial-spec-panel">
            <p className="eyebrow">Información que sí sirve</p>
            <h2>Ficha técnica, alcance y limitaciones tienen que hablar entre sí.</h2>
            <p>Para nanocerámica ya contamos con VLT, rechazo UV, rechazo infrarrojo a 950 nm y TSER mapeados por tono. Para otras líneas evitamos inventar cifras hasta tener la fuente correspondiente.</p>
            <Link href="/peliculas/nanoceramica/" className="button button-primary">Consultar nanocerámica</Link>
          </div>
          <div className="commercial-spec-checklist">
            <article><span>01</span><div><h3>Producto correcto</h3><p>La especificación debe corresponder a la película y aplicación reales.</p></div></article>
            <article><span>02</span><div><h3>Compatibilidad</h3><p>Vidrio, orientación y sistema pueden cambiar la solución.</p></div></article>
            <article><span>03</span><div><h3>Acceso</h3><p>Altura, horarios y condiciones de intervención forman parte del proyecto.</p></div></article>
            <article><span>04</span><div><h3>Promesa controlada</h3><p>No convertimos una cifra de ficha en ahorro, temperatura o privacidad universal.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section section-alt commercial-process-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><p className="eyebrow">Flujo de proyecto</p><h2>De la necesidad a una cotización que sí corresponde al alcance.</h2></div>
            <p>Podemos empezar con fotos, medidas, planos o información del inmueble y escalar la revisión cuando el proyecto lo requiera.</p>
          </div>
          <ProcessRail steps={steps} />
        </div>
      </section>

      <section className="section application-faq-section">
        <div className="container faq-layout">
          <div><p className="eyebrow">Preguntas de proyecto</p><h2>Menos “precio por metro”. Más contexto útil.</h2></div>
          <FAQList items={faqs} />
        </div>
      </section>

      <ApplicationFinalCTA eyebrow="Proyecto comercial" title="Compártenos el inmueble, las áreas y lo que quieres resolver. Empezamos desde ahí." ctaLabel="Revisar mi proyecto" context={wa} secondaryHref="/peliculas/" secondaryLabel="Comparar tecnologías" />
    </>
  );
}
