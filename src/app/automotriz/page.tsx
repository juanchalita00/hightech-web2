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
  { icon: "sun" as const, title: "Control solar", text: "La ficha de cada tono incluye TSER y rechazo infrarrojo medido a 950 nm. Son métricas distintas y se explican por separado." },
  { icon: "glass" as const, title: "Entrada de luz", text: "VLT indica cuánta luz visible transmite la película. IR75 deja pasar mucha más luz que IR15 o IR5." },
  { icon: "privacy" as const, title: "Privacidad", text: "Los tonos más oscuros cambian la visibilidad y apariencia; la privacidad nunca debe tratarse como absoluta." },
  { icon: "glare" as const, title: "Uso nocturno", text: "Reducir VLT también cambia la visibilidad de noche. El tono debe elegirse considerando cómo usas el vehículo." },
] as const;

const steps = [
  { number: "01", title: "Identificamos el vehículo", text: "Marca, modelo, año cuando haga falta y qué cristales quieres trabajar." },
  { number: "02", title: "Definimos el tono", text: "Claridad, privacidad, uso nocturno y referencia práctica de Jalisco entran en la conversación." },
  { number: "03", title: "Revisamos película previa", text: "Si existe polarizado instalado, su condición puede cambiar el alcance de retiro y preparación." },
  { number: "04", title: "Instalamos en taller", text: "La línea automotriz HIGHTECH se instala en taller para mantener control sobre el proceso." },
] as const;

const faqs = [
  { question: "¿Todos los tonos nanocerámicos tienen la misma protección UV?", answer: <p>Las fichas activas de IR75, IR50, IR35, IR15 e IR5 indican 99% de rechazo UV. El VLT y el TSER sí cambian entre tonos.</p> },
  { question: "¿El 95% de rechazo infrarrojo equivale a reducir 95% del calor?", answer: <p>No. La ficha especifica 95% de rechazo infrarrojo medido a 950 nm. TSER es otra métrica y tampoco debe convertirse directamente en una promesa de temperatura dentro del vehículo.</p> },
  { question: "¿IR75 es legal en parabrisas?", answer: <p>HIGHTECH no lo presenta como una garantía legal absoluta. En consultas directas con personal de Tránsito nos han indicado 70–75% como referencia práctica para parabrisas, mientras la normativa publicada mantiene una redacción específica sobre polarizado. Por eso explicamos ambas capas y no prometemos ausencia de sanción.</p> },
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
        title="Elige cuánto quieres ver. No sólo cuánto quieres oscurecer."
        description="La gama nanocerámica HIGHTECH se compara por VLT, UV, rechazo infrarrojo a 950 nm y TSER. Después aterrizamos el tono a tu vehículo y forma de uso."
        ctaLabel="Cotizar mi vehículo"
        context={wa}
        secondary={<Link href="#tonos" className="button button-secondary">Comparar tonos <Icon name="arrow" size={18}/></Link>}
        proofItems={["5 tonos activos", "Instalación en taller", "Datos técnicos por ficha"]}
      />

      <section className="automotive-spec-strip" aria-label="Especificaciones de la gama nanocerámica">
        <div className="container automotive-spec-strip-inner">
          <div><strong>99%</strong><span>UV</span><small>según ficha</small></div>
          <div><strong>95%</strong><span>IR a 950 nm</span><small>según ficha</small></div>
          <div><strong>75→3%</strong><span>VLT</span><small>gama activa</small></div>
          <div><strong>59→96%</strong><span>TSER</span><small>según tono</small></div>
        </div>
      </section>

      <section className="section automotive-decision-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><p className="eyebrow">Antes de escoger tono</p><h2>La película más oscura no es automáticamente la mejor para ti.</h2></div>
            <p>El equilibrio cambia según cuánto manejas de noche, cuánta claridad quieres conservar, qué privacidad buscas y en qué cristal se aplicará.</p>
          </div>
          <DecisionCards items={decisions} />
        </div>
      </section>

      <section className="section section-alt automotive-tones-section" id="tonos">
        <div className="container auto-tones-layout">
          <div className="auto-tones-copy">
            <p className="eyebrow">Gama activa</p>
            <h2>IR75, IR50, IR35, IR15 e IR5.</h2>
            <p>Los nombres comerciales ayudan a identificar cada película; cuando el VLT real de ficha es diferente, mostramos el valor técnico. No convertimos el nombre en una medición que no es.</p>
            <div className="context-note"><strong>Ejemplo:</strong> IR50 tiene VLT de ficha 48% e IR5 tiene VLT de ficha 3%.</div>
            <Link href="/peliculas/nanoceramica/" className="text-link text-link-strong">Ver la tecnología completa <Icon name="arrow" size={17}/></Link>
          </div>
          <AutomotiveToneGuide />
        </div>
      </section>

      <section className="section automotive-table-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><p className="eyebrow">Comparador técnico</p><h2>Los números sirven cuando sabemos qué miden.</h2></div>
            <p>VLT describe luz visible. El rechazo infrarrojo mostrado por nuestras fichas está medido a 950 nm. TSER describe otra parte del desempeño de la configuración de prueba.</p>
          </div>
          <NanoTable />
        </div>
      </section>

      <section className="section jalisco-section"><div className="container"><JaliscoReference /></div></section>

      <section className="section automotive-process-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><p className="eyebrow">Proceso automotriz</p><h2>Primero vehículo y tono. Después instalación.</h2></div>
            <p>La cotización se prepara según el vehículo y el alcance. No exponemos las categorías internas con las que opera el motor comercial.</p>
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

      <ApplicationFinalCTA eyebrow="Tu vehículo" title="Dinos marca, modelo y qué cristales quieres trabajar. Te damos la cotización correspondiente." ctaLabel="Cotizar mi vehículo" context={wa} secondaryHref="/guias/polarizado-automotriz-jalisco/" secondaryLabel="Ver referencia de Jalisco" />
    </>
  );
}
