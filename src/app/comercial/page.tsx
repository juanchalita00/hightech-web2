import Link from "next/link";
import { ApplicationFinalCTA } from "@/components/ApplicationFinalCTA";
import { ApplicationHero } from "@/components/ApplicationHero";
import { DecisionCards } from "@/components/DecisionCards";
import { FAQList } from "@/components/FAQList";
import { Icon } from "@/components/Icon";
import { ProcessRail } from "@/components/ProcessRail";

export const metadata = { alternates: { canonical: "/comercial/" },
  title: { absolute: "Películas para cristales comerciales | HIGHTECH" },
  description: "Evaluación de proyectos comerciales e institucionales para control solar, privacidad, deslumbramiento y seguridad en cristales.",
};

const decisions = [
  { icon: "building" as const, title: "Fachada y exposición", text: "Orientación, cantidad de cristal y horas de sol pueden cambiar lo que necesita cada área." },
  { icon: "sun" as const, title: "Uso del espacio", text: "Una oficina, una sala de juntas y un escaparate no necesariamente necesitan la misma cantidad de luz o privacidad." },
  { icon: "glass" as const, title: "Tipo de vidrio", text: "La configuración del cristal forma parte de la selección y de la revisión de compatibilidad." },
  { icon: "shield" as const, title: "Operación y acceso", text: "Horarios, altura, acceso y continuidad de actividades pueden cambiar la forma de ejecutar el proyecto." },
] as const;

const steps = [
  { number: "01", title: "Entendemos el objetivo", text: "Qué áreas quieres trabajar y qué problema necesitas resolver en cada una." },
  { number: "02", title: "Revisamos condiciones", text: "Cristal, exposición, acceso y cualquier condición que pueda cambiar la solución." },
  { number: "03", title: "Definimos alcance y logística", text: "Película, áreas, secuencia de trabajo y condiciones de intervención." },
  { number: "04", title: "Preparamos la cotización", text: "La propuesta corresponde al alcance real del proyecto, no a una tarifa genérica por metro." },
] as const;

const faqs = [
  { question: "¿Trabajan sólo oficinas?", answer: <p>No. La línea comercial puede aplicarse a oficinas, fachadas, locales e instalaciones institucionales, siempre según el vidrio y el objetivo del proyecto.</p> },
  { question: "¿Pueden cotizar con planos o medidas?", answer: <p>Podemos empezar con la información que ya tengas disponible, como medidas, planos o fotografías del proyecto. Según el alcance, puede hacer falta una revisión adicional antes de cerrar la especificación.</p> },
  { question: "¿Publican precio por m²?", answer: <p>No como tarifa universal. El material, metraje, acceso, retiro, horarios, logística y condiciones del vidrio pueden cambiar el alcance.</p> },
  { question: "¿La película reflectiva da privacidad de noche?", answer: <p>No debe prometerse así. La privacidad reflectiva depende del contraste de iluminación y puede invertirse cuando el interior está más iluminado que el exterior. <Link href="/guias/privacidad-ventanas-noche/">Entender privacidad de noche</Link>.</p> },
] as const;

export default function CommercialPage() {
  const wa = { sourcePage: "/comercial/", businessLine: "commercial" };
  return (
    <>
      <ApplicationHero
        variant="commercial"
        eyebrow="Comercial e institucional"
        title="Control solar, privacidad y seguridad pensados para cómo funciona tu espacio."
        description="Revisamos oficinas, locales, fachadas y áreas de trabajo para definir qué necesita cada zona, considerando el cristal, la exposición y la operación del inmueble antes de especificar una película."
        ctaLabel="Revisar mi proyecto"
        context={wa}
        secondary={<Link href="/peliculas/" className="button button-secondary">Explorar soluciones <Icon name="arrow" size={18}/></Link>}
        proofItems={["Evaluación por proyecto", "Solución según cada área", "Operación y acceso considerados"]}
      />

      <section className="commercial-metric-strip">
        <div className="container commercial-metric-grid">
          <div><strong>01</strong><span>Calor</span><small>Reducir la carga solar que recibe el espacio.</small></div>
          <div><strong>02</strong><span>Deslumbramiento</span><small>Controlar reflejos y exceso de luz en áreas de trabajo.</small></div>
          <div><strong>03</strong><span>Privacidad</span><small>Definir cuánto debe verse hacia adentro sin asumir privacidad permanente.</small></div>
          <div><strong>04</strong><span>Seguridad</span><small>Añadir retención de fragmentos cuando ese sea el objetivo.</small></div>
        </div>
      </section>

      <section className="section commercial-decision-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><p className="eyebrow">Un mismo inmueble, distintas necesidades</p><h2>No todos los cristales del proyecto tienen que resolver lo mismo.</h2></div>
            <p>Una fachada puede recibir sol directo, una sala de juntas necesitar más privacidad y un área de atención requerir mayor claridad. La solución se define por zona antes de elegir película o tono.</p>
          </div>
          <DecisionCards items={decisions} />
        </div>
      </section>

      <section className="section section-dark commercial-solutions-section">
        <div className="container commercial-solutions-layout">
          <div>
            <p className="eyebrow eyebrow-light">Soluciones según el objetivo</p>
            <h2>Primero definimos qué debe cambiar. Después elegimos la película.</h2>
            <p className="commercial-dark-lede">La tecnología no se selecciona por costumbre. Se compara según lo que necesita cada área y las condiciones del cristal.</p>
          </div>
          <div className="commercial-solution-list">
            <Link href="/peliculas/nanoceramica/"><span>Control solar y claridad</span><strong>Nanocerámica</strong><Icon name="arrow" size={18}/></Link>
            <Link href="/peliculas/plata-reflecta/"><span>Privacidad diurna y apariencia reflectiva</span><strong>Plata Reflecta</strong><Icon name="arrow" size={18}/></Link>
            <Link href="/peliculas/seguridad/"><span>Retención de fragmentos</span><strong>Seguridad</strong><Icon name="arrow" size={18}/></Link>
            <Link href="/peliculas/privacidad/"><span>Control de visibilidad</span><strong>Privacidad</strong><Icon name="arrow" size={18}/></Link>
          </div>
        </div>
      </section>

      <section className="section commercial-spec-section">
        <div className="container commercial-spec-grid">
          <div className="commercial-spec-panel">
            <p className="eyebrow">Antes de especificar</p>
            <h2>La película correcta depende también del cristal y del proyecto.</h2>
            <p>Revisamos la información técnica del producto junto con el tipo de vidrio, la exposición y las condiciones de instalación antes de cerrar una recomendación.</p>
            <Link href="/peliculas/nanoceramica/" className="button button-primary">Consultar nanocerámica</Link>
          </div>
          <div className="commercial-spec-checklist">
            <article><span>01</span><div><h3>Objetivo</h3><p>Qué queremos mejorar en esa zona del inmueble.</p></div></article>
            <article><span>02</span><div><h3>Vidrio</h3><p>Qué sistema existe y qué condiciones debemos considerar.</p></div></article>
            <article><span>03</span><div><h3>Ejecución</h3><p>Cómo acceder, intervenir y coordinar el trabajo.</p></div></article>
            <article><span>04</span><div><h3>Alcance</h3><p>Qué material, áreas y condiciones deben quedar incluidos en la cotización.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section section-alt commercial-process-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><p className="eyebrow">Cómo empieza un proyecto</p><h2>De la necesidad a un alcance claro antes de instalar.</h2></div>
            <p>Podemos comenzar con la información que ya exista del inmueble y profundizar la revisión cuando el proyecto lo necesite.</p>
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

      <ApplicationFinalCTA eyebrow="Proyecto comercial" title="Cuéntanos qué necesitas resolver y en qué áreas del inmueble." ctaLabel="Revisar mi proyecto" context={wa} secondaryHref="/peliculas/" secondaryLabel="Comparar tecnologías" />
    </>
  );
}
