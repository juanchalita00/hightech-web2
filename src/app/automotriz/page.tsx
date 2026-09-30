import Link from "next/link";
import { ApplicationFinalCTA } from "@/components/ApplicationFinalCTA";
import { ApplicationHero } from "@/components/ApplicationHero";
import { AutomotiveToneGuide } from "@/components/AutomotiveToneGuide";
import { DecisionCards } from "@/components/DecisionCards";
import { FAQList } from "@/components/FAQList";
import { Icon } from "@/components/Icon";
import { JaliscoReference } from "@/components/JaliscoReference";
import { NanoTable } from "@/components/NanoTable";
import { ProcessRail } from "@/components/ProcessRail";

export const metadata = { alternates: { canonical: "/automotriz/" },
  title: { absolute: "Polarizado automotriz nanocerámico | HIGHTECH" },
  description: "Gama nanocerámica HIGHTECH para vehículos. Compara VLT, UV, rechazo infrarrojo a 950 nm y TSER, con instalación en taller.",
};

const decisions = [
  { icon: "glass" as const, title: "Claridad", text: "Un VLT más alto conserva más luz visible. Es importante si buscas una apariencia discreta o manejas mucho de noche." },
  { icon: "privacy" as const, title: "Apariencia y privacidad", text: "Los tonos más oscuros cambian más la apariencia del vehículo y reducen la visibilidad hacia el interior, pero la privacidad no es absoluta." },
  { icon: "sun" as const, title: "Control solar", text: "En la gama HIGHTECH, los tonos comparten 99% UV y 95% de rechazo IR medido a 950 nm, mientras el TSER cambia entre opciones." },
  { icon: "glare" as const, title: "Uso nocturno", text: "Un VLT bajo deja pasar menos luz visible. Esa diferencia se vuelve especialmente importante cuando manejas de noche." },
] as const;

const steps = [
  { number: "01", title: "Vehículo y cristales", text: "Marca, modelo y qué cristales quieres trabajar." },
  { number: "02", title: "Tono y uso", text: "Definimos claridad, apariencia, privacidad y cuánto manejas de noche." },
  { number: "03", title: "Película previa", text: "Si ya existe polarizado, revisamos si necesita retiro antes de instalar." },
  { number: "04", title: "Instalación", text: "La línea automotriz HIGHTECH se instala en taller para mantener control sobre el proceso." },
] as const;

const faqs = [
  { question: "¿Todos los tonos nanocerámicos tienen la misma protección UV?", answer: <p>Las fichas activas de IR75, IR50, IR35, IR15 e IR5 indican 99% de rechazo UV. El VLT y el TSER sí cambian entre tonos.</p> },
  { question: "¿El 95% de rechazo infrarrojo equivale a reducir 95% del calor?", answer: <p>No. La ficha especifica 95% de rechazo infrarrojo medido a 950 nm. TSER es otra métrica y tampoco debe convertirse directamente en una promesa de temperatura dentro del vehículo.</p> },
  { question: "¿Puedo usar IR75 en el parabrisas sólo porque es una película clara?", answer: <p>No la presentamos como automáticamente autorizada por su VLT. IR75 reporta 75% de transmisión de luz visible, pero la normativa estatal revisada no establece un umbral de VLT que convierta una película clara en una excepción expresa para el parabrisas. Separamos la recomendación técnica del criterio normativo.</p> },
  { question: "¿Qué tono conviene si manejo mucho de noche?", answer: <p>No existe un tono universal para todos. Un VLT más alto conserva más luz visible, por lo que la elección debe considerar cuánto manejas de noche y cuánta claridad necesitas conservar. <Link href="/guias/que-es-vlt/">Entender qué es VLT</Link>.</p> },
  { question: "¿Instalan a domicilio?", answer: <p>La instalación automotriz se realiza en taller. Es la modalidad operativa definida para esta línea.</p> },
  { question: "¿Y si ya tengo polarizado?", answer: <p>Primero se revisa su estado. El retiro forma parte del alcance cuando es necesario y no se presupone igual en todos los casos.</p> },
] as const;

export default function AutomotivePage() {
  const wa = { sourcePage: "/automotriz/", businessLine: "automotive" };
  return (
    <>
      <ApplicationHero
        variant="automotive"
        eyebrow="Automotriz"
        title="El tono correcto depende de cuánto quieres ver, no sólo de qué tan oscuro se vea."
        description="Te ayudamos a elegir entre mayor claridad, una apariencia más oscura o más privacidad visual, considerando también cómo usas el vehículo de noche. Después comparamos las prestaciones técnicas de cada tono."
        ctaLabel="Cotizar mi vehículo"
        context={wa}
        secondary={<Link href="#tonos" className="button button-secondary">Comparar tonos <Icon name="arrow" size={18}/></Link>}
        proofItems={["5 tonos disponibles", "99% protección UV", "Instalación en taller"]}
      />

      <section className="automotive-spec-strip" aria-label="Qué decidir antes de elegir tono">
        <div className="container automotive-spec-strip-inner">
          <div><strong>01</strong><span>Claridad</span><small>Cuánta luz quieres conservar.</small></div>
          <div><strong>02</strong><span>Apariencia</span><small>Qué tan marcado quieres que se vea el tono.</small></div>
          <div><strong>03</strong><span>Privacidad</span><small>Cuánto quieres reducir la visibilidad hacia el interior.</small></div>
          <div><strong>04</strong><span>Uso nocturno</span><small>Cuánta visibilidad exterior necesitas cuando hay menos luz.</small></div>
        </div>
      </section>

      <section className="section automotive-decision-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><p className="eyebrow">Antes de escoger tono</p><h2>Más oscuro no significa automáticamente mejor.</h2></div>
            <p>La oscuridad cambia la entrada de luz, la apariencia y la visibilidad. Pero no debes usarla como sustituto de protección UV, rechazo infrarrojo o desempeño solar.</p>
          </div>
          <DecisionCards items={decisions} />
        </div>
      </section>

      <section className="section automotive-diff-section">
        <div className="container auto-diff-grid">
          <div><p className="eyebrow">Una diferencia importante</p><h2>No eliges un tono para obtener más protección UV.</h2></div>
          <div>
            <p>En las cinco películas nanocerámicas activas, la ficha reporta 99% de protección UV y 95% de rechazo infrarrojo medido a 950 nm.</p>
            <p>Lo que sí cambia entre tonos es principalmente la cantidad de luz visible que atraviesa, la apariencia del cristal y el TSER reportado.</p>
            <p className="auto-diff-note">95% IR a 950 nm no significa 95% menos calor.</p>
            <Link className="text-link" href="/guias/irr-vs-tser/">Entender IR vs TSER <Icon name="arrow" size={17}/></Link>
          </div>
        </div>
      </section>

      <section className="section section-alt automotive-tones-section" id="tonos">
        <div className="container auto-tones-layout">
          <div className="auto-tones-copy">
            <p className="eyebrow">Elige cuánta luz quieres conservar</p>
            <h2>De muy claro a muy oscuro.</h2>
            <p>La diferencia principal entre tonos se percibe en cuánta luz visible dejan pasar y cómo cambia la apariencia y la visibilidad.</p>
            <p>El nombre comercial ayuda a identificar cada tono, pero cuando el VLT real de ficha es distinto mostramos también el dato técnico.</p>
            <div className="context-note"><strong>Ejemplo:</strong> IR50 tiene VLT de ficha 48% e IR5 tiene VLT de ficha 3%.</div>
            <Link href="/peliculas/nanoceramica/" className="text-link text-link-strong">Ver la tecnología completa <Icon name="arrow" size={17}/></Link>
          </div>
          <AutomotiveToneGuide />
        </div>
      </section>

      <section className="section automotive-table-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><p className="eyebrow">Si quieres comparar a detalle</p><h2>Cada cifra responde una pregunta diferente.</h2></div>
            <p>VLT habla de luz visible. La protección UV y el rechazo IR se leen por separado, y el TSER describe otra parte del comportamiento solar reportado por la ficha.</p>
          </div>
          <NanoTable />
          <p className="auto-table-links"><Link className="text-link" href="/guias/que-es-vlt/">Qué es VLT <Icon name="arrow" size={16}/></Link><Link className="text-link" href="/guias/irr-vs-tser/">IR vs TSER <Icon name="arrow" size={16}/></Link></p>
        </div>
      </section>

      <section className="section jalisco-section"><div className="container"><JaliscoReference /></div></section>

      <section className="section automotive-process-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><p className="eyebrow">Cómo cotizamos</p><h2>Primero entendemos tu vehículo y qué cristales quieres trabajar.</h2></div>
            <p>Con esos datos podemos definir el alcance, revisar si existe película previa y orientarte sobre los tonos disponibles.</p>
          </div>
          <ProcessRail steps={steps} />
        </div>
      </section>

      <section className="section section-alt application-faq-section">
        <div className="container faq-layout">
          <div><p className="eyebrow">Antes de agendar</p><h2>Las preguntas que más cambian la elección.</h2></div>
          <FAQList items={faqs} />
        </div>
      </section>

      <ApplicationFinalCTA eyebrow="Tu vehículo" title="Dinos qué vehículo tienes y qué cristales quieres trabajar. Te ayudamos a elegir el tono y preparar la cotización." ctaLabel="Cotizar mi vehículo" context={wa} secondaryHref="/guias/polarizado-automotriz-jalisco/" secondaryLabel="Ver normativa de Jalisco" />
    </>
  );
}
