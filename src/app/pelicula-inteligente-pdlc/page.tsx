import type { Metadata } from "next";
import Link from "next/link";
import { FAQList } from "@/components/FAQList";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PdlcExamples } from "@/components/PdlcExamples";
import { PdlcLayers } from "@/components/PdlcLayers";
import { pdlcQuotePath } from "@/lib/quote";

export const metadata: Metadata = {
  alternates: { canonical: "/pelicula-inteligente-pdlc/" },
  title: { absolute: "Película inteligente PDLC | HIGHTECH Polarizados" },
  description: "Película inteligente PDLC, también llamada vidrio inteligente: el cristal pasa de opaco a transparente. Cotización con visita técnica en Zapopan y Guadalajara.",
};

const faqs = [
  {
    question: "¿Si se va la luz se alcanza a ver hacia adentro?",
    answer: "No. Sin corriente la película se queda opaca. La privacidad no depende de que haya luz eléctrica.",
  },
  {
    question: "¿Cuánta electricidad usa la película inteligente?",
    answer: "Muy poca, y solo cuando está transparente. Apagada no consume. En la visita vemos el apagador y el cable, sin hablar de watts.",
  },
  {
    question: "¿Encendida se ve como un vidrio nuevo?",
    answer: "Encendida deja pasar casi toda la luz, con un velo ligero. No es un cristal sin película.",
  },
  {
    question: "¿Apagada oscurece por completo?",
    answer: "No. Opaca es un esmerilado: deja pasar luz y, a contraluz, se pueden notar siluetas. No es blackout.",
  },
  {
    question: "¿La puedo poner en el baño?",
    answer: "Solo si el cristal no recibe agua directa. No la instalamos dentro de la regadera ni donde se moje: la versión autoadhesiva se daña con el agua.",
  },
  {
    question: "¿Sirve en una ventana al exterior?",
    answer: "Se pega por dentro y es para uso interior. No es para fachada ni para vidrio a la intemperie. En la visita revisamos que el cristal sea liso y esté sano.",
  },
  {
    question: "¿Tengo que cambiar el vidrio?",
    answer: "No, si el vidrio que ya tienes es liso y no está dañado o texturizado. La película se adhiere por el interior.",
  },
  {
    question: "¿Película inteligente y vidrio inteligente son lo mismo?",
    answer: "Sí. Película inteligente y vidrio inteligente nombran el mismo producto: la película PDLC que se pega al vidrio existente. No sustituye el vidrio por uno nuevo.",
  },
  {
    question: "¿Necesita transformador?",
    answer: "Sí. Trabaja a bajo voltaje, 60 V, con un transformador de entrada 100–120 V. El apagador o el control remoto se define en la visita, junto con la conexión eléctrica.",
  },
  {
    question: "¿Cuánto tarda y por qué la visita es obligatoria?",
    answer: "La visita técnica es obligatoria porque se fabrica a la medida: un error de medida no se corrige en sitio. Después del anticipo, la fabricación ronda un mes. Luego se instala y se conecta.",
  },
  {
    question: "¿Baja el calor del espacio?",
    answer: "No es su función. Sobre todo encendida, no bloquea mucho calor. Si buscas control solar, conviene otra película.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer: "Cotización con visita técnica. No publicamos un precio por metro. Hacemos desde piezas pequeñas, incluso una ventana de 1 × 1 m. En proyectos chicos aplica un mínimo de proyecto.",
  },
  {
    question: "¿Qué garantía tiene?",
    answer: "La garantía se define en la cotización. En esta página no publicamos un plazo.",
  },
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "es-MX",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const uses = [
  { icon: "privacy" as const, title: "Salas de juntas", text: "Cerrar la reunión y volver a abrir la vista al pasillo." },
  { icon: "building" as const, title: "Oficinas", text: "Divisiones interiores que a veces necesitan privacidad y a veces no." },
  { icon: "drop" as const, title: "Baños", text: "Solo lejos del agua. No dentro de la regadera ni donde salpique." },
  { icon: "home" as const, title: "Recámaras", text: "Privacidad de un momento a otro, sin cambiar el vidrio." },
  { icon: "shield" as const, title: "Consultorios", text: "Separar la sala de espera de la consulta cuando hace falta." },
  { icon: "message" as const, title: "Recepciones", text: "Abrir o cerrar la vista hacia el área de atención." },
] as const;

const limits = [
  { icon: "sun" as const, title: "No bloquea mucho calor", text: "Sobre todo encendida, deja pasar la energía del sol. No prometemos bajar la temperatura del espacio." },
  { icon: "home" as const, title: "Solo en interior", text: "Se instala por dentro del vidrio. No es para fachadas ni para cristal a la intemperie." },
  { icon: "drop" as const, title: "Sin agua ni humedad directa", text: "Si la película autoadhesiva se moja, se echa a perder. El vidrio tiene que estar seco." },
  { icon: "bolt" as const, title: "Necesita corriente", text: "Hace falta transformador y conexión eléctrica. Apagada no consume; encendida, sí." },
] as const;

const steps = [
  { title: "Visita técnica", text: "Es obligatoria. Vemos el vidrio, el acceso y dónde puede ir la parte eléctrica." },
  { title: "Medición", text: "Se corta a la medida. El cristal tiene que ser liso y no estar dañado." },
  { title: "Fabricación", text: "A partir del anticipo, el plazo ronda un mes." },
  { title: "Instalación", text: "Se pega por dentro y se conecta al transformador." },
] as const;

export default function PdlcPage() {
  return <>
    <JsonLd data={faqSchema} />
    <section className="pdlc-top">
      <div className="container pdlc-top-inner">
        <h1>Película inteligente PDLC</h1>
        <p className="pdlc-oneliner">Con un botón, tu cristal pasa de opaco a transparente.</p>
        <PdlcExamples />
        <div className="hero-actions">
          <Link className="button button-primary" href={pdlcQuotePath}>Cotizar <Icon name="arrow" size={18} /></Link>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container pdlc-about">
        <p className="eyebrow">Qué es</p>
        <h2>Se pega sobre el vidrio que ya tienes.</h2>
        <p>Es película inteligente: también se busca como vidrio inteligente. Apagada se ve opaca. Encendida, transparente. Se pega sobre el vidrio que ya está, sin cambiarlo.</p>
        <p>No es control solar y no oscurece por completo. El cambio es inmediato.</p>
        <h3 className="pdlc-layers-title">Capas, del vidrio hacia adentro</h3>
        <PdlcLayers />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div><p className="eyebrow">Dónde se usa</p><h2>Cuando quieres cerrar la vista y volver a abrirla.</h2></div>
          <p>Tiene sentido en vidrio interior, liso y seco. Si el objetivo es calor o oscuridad total, no es esta película.</p>
        </div>
        <div className="pdlc-use-grid">
          {uses.map((item) => (
            <article className="decision-card" key={item.title}>
              <div className="decision-card-head"><span className="decision-icon"><Icon name={item.icon} size={22} /></span></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">Límites</p><h2>Lo que no hace.</h2></div>
        <div className="decision-grid pdlc-limits">
          {limits.map((item) => (
            <article className="decision-card" key={item.title}>
              <div className="decision-card-head"><span className="decision-icon"><Icon name={item.icon} size={22} /></span></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <p className="pdlc-limit-link"><Link className="text-link" href="/peliculas/nanoceramica/">Si buscas control solar, ver nanocerámica <Icon name="arrow" size={17} /></Link></p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div><p className="eyebrow">Proceso</p><h2>De la visita a la instalación.</h2></div>
          <p>No se pide por medida aproximada. Primero se visita, se mide y se fabrica la pieza.</p>
        </div>
        <div className="process-rail">
          {steps.map((step, index) => (
            <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>
          ))}
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <div className="pdlc-price">
          <p className="eyebrow">Precio</p>
          <h2>Cotización con visita técnica</h2>
          <p>No publicamos un precio por metro. El alcance depende de los metros, el número de piezas y la conexión eléctrica.</p>
          <p>Hacemos desde piezas pequeñas, incluso una ventana de 1 × 1 m. En proyectos chicos aplica un mínimo de proyecto.</p>
          <Link className="button button-primary" href={pdlcQuotePath}>Cotizar <Icon name="arrow" size={18} /></Link>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container faq-layout">
        <div><p className="eyebrow">Preguntas frecuentes</p><h2>Antes de pedirla.</h2></div>
        <FAQList items={faqs} />
      </div>
    </section>

    <section className="section product-cta-section">
      <div className="container">
        <div className="product-cta-card">
          <div>
            <p className="eyebrow">Siguiente paso</p>
            <h2>Si encaja, el siguiente paso es la visita.</h2>
            <p>En el formulario dejamos escrito que quieres película inteligente PDLC. Si falta una foto o una medida, la pedimos después.</p>
          </div>
          <div className="product-cta-actions">
            <Link className="button button-primary" href={pdlcQuotePath}>Cotizar <Icon name="arrow" size={18} /></Link>
            <Link className="button button-secondary" href="/guias/privacidad-ventanas-noche/">Privacidad de noche</Link>
          </div>
        </div>
      </div>
    </section>
  </>;
}
