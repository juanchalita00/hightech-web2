import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { ProductCTA } from "@/components/ProductCTA";
import { ProductHero } from "@/components/ProductHero";
import { HightechTip } from "@/components/HightechTip";
import { FAQList } from "@/components/FAQList";
import { JsonLd } from "@/components/JsonLd";
import { getNanoProduct, release, truth } from "@/lib/truth";
import { toneName } from "@/lib/tones";

const toneCopy: Record<string, { headline: string; decision: string; light: string; where: string; caution?: string; neighbors: string[] }> = {
  IR75: {
    headline: "El más claro. Deja pasar mucha luz.",
    decision: "Para quien quiere bajar el calor sin que el cristal se vea oscuro.",
    light: "Deja pasar cerca de tres cuartas partes de la luz.",
    where: "Es el tono más común al frente del auto, y también sirve en casa y negocio.",
    neighbors: ["IR50"],
  },
  IR50: {
    headline: "Mucha luz, un paso más marcado que el 75.",
    decision: "Para quien quiere seguir viendo claro y notar un poco más el tono.",
    light: "Deja pasar cerca de la mitad de la luz.",
    where: "En casa, en negocio y en los cristales traseros del auto.",
    neighbors: ["IR75", "IR35"],
  },
  IR35: {
    headline: "Un punto medio entre luz y privacidad.",
    decision: "Para quien quiere que se note el tono, sin irse al extremo.",
    light: "Deja pasar cerca de un tercio de la luz.",
    where: "En casa, en negocio y en traseros y medallón del auto. Para las delanteras te asesoramos según la visibilidad que quieras conservar.",
    neighbors: ["IR50", "IR15"],
  },
  IR15: {
    headline: "Se ve oscuro y da más privacidad de día.",
    decision: "Para casa o negocio, cuando la prioridad es que se vea menos hacia adentro.",
    light: "Deja pasar poca luz.",
    where: "Pensado para casa y negocio. Si lo quieres en el auto, platicamos qué visibilidad necesitas.",
    neighbors: ["IR35", "IR5"],
  },
  IR5: {
    headline: "El más oscuro de la gama.",
    decision: "Para casa o negocio, cuando quieres la mayor privacidad de día.",
    light: "Deja pasar muy poca luz. Aunque se llama 5, en la práctica es aún más cerrado.",
    where: "Pensado para casa y negocio. Si lo quieres en el auto, platicamos qué visibilidad necesitas.",
    caution: "De noche, algunas personas batallan para ver hacia afuera. Es el único tono con este aviso.",
    neighbors: ["IR15"],
  },
};

type ToneExtra = { uses: string[]; look: string; vltNote?: string; faq: { question: string; answer: string };  };

const toneExtra: Record<string, ToneExtra> = {
  IR75: {
    uses: [
      "Casa y negocio, donde quieres conservar la claridad y una apariencia natural del cristal. Va bien en fachadas y torres.",
      "Auto: es el tono más común al frente.",
    ],
    look: "Es muy claro y puede verse ligeramente azulado, según el cristal y la luz.",
    faq: { question: "¿Cómo se ve el tono 75?", answer: "Es muy claro y prioriza la luz y una apariencia natural. Según el cristal y la luz, puede verse ligeramente azulado. Es el tono con menos privacidad de día de la gama." },
  },
  IR50: {
    uses: [
      "Casa y negocio, cuando quieres seguir viendo claro pero que el cristal tenga un tono más marcado que el 75.",
      "Auto: cristales traseros.",
    ],
    look: "Es claro y ligeramente entonado.",
    vltNote: "El número 50 es el nombre comercial; la ficha técnica marca 48%.",
    faq: { question: "¿Qué cambia del 50 al 75?", answer: "El 50 deja pasar menos luz y se nota más el tono. La protección contra rayos UV e infrarrojos que indica la ficha es la misma; lo que cambia es la luz y la privacidad de día." },
  },
  IR35: {
    uses: [
      "Casa y negocio, cuando buscas equilibrio entre luz, apariencia y privacidad de día.",
      "Auto: cristales traseros y medallón. Para las delanteras te asesoramos según la visibilidad que quieras conservar.",
    ],
    look: "Es un tono equilibrado: se nota, sin irse al extremo.",
    faq: { question: "¿El 35 sirve si quiero privacidad?", answer: "Da algo de privacidad de día, sin cerrar tanto la luz. Si la privacidad es la prioridad, compara con el 15 y el 5." },
  },
  IR15: {
    uses: [
      "Casa y negocio, cuando la prioridad es que se vea menos hacia adentro durante el día.",
      "Auto: platicamos qué visibilidad necesitas antes de recomendarlo.",
    ],
    look: "Es oscuro y da una privacidad de día marcada.",
    faq: { question: "¿El 15 oscurece mucho el espacio?", answer: "Deja pasar poca luz, así que el espacio se siente más cerrado. Si quieres conservar luz natural, te conviene comparar con el 35 o el 50." },
  },
  IR5: {
    uses: [
      "Casa y negocio, cuando quieres la mayor privacidad de día de la gama.",
      "Auto: platicamos qué visibilidad necesitas antes de recomendarlo.",
    ],
    look: "Es el más oscuro y da la máxima privacidad de día. No lo recomendamos donde quieras luz natural.",
    vltNote: "El número 5 es el nombre comercial; la ficha marca 3%.",
    faq: { question: "¿Para qué cristales no recomiendan el 5?", answer: "Para donde quieras luz natural, porque deja pasar muy poca. Tampoco es lo más cómodo para ver hacia afuera de noche. En esos casos te sugerimos un tono más claro." },
  },
};

const sharedFaq = [
  { question: "¿Me da privacidad de noche?", answer: "No. La privacidad depende de qué lado tiene más luz. De día se dificulta ver hacia adentro, pero de noche, con las luces interiores encendidas, el efecto se invierte y se ve desde afuera. En casa se complementa con cortinas." },
  { question: "¿Interfiere con el celular, el GPS o el wifi?", answer: "No. La nanocerámica no lleva metales, así que no interfiere con las señales de celular, GPS ni wifi." },
  { question: "¿Se decolora o se pone morada?", answer: "No. La nanocerámica no se decolora ni se pone morada con el tiempo." },
  { question: "¿Qué garantía tiene?", answer: "10 años por escrito en instalaciones interiores. Las instalaciones exteriores y los casos especiales se evalúan caso por caso y pueden tener otras condiciones." },
];

const toneImages: Record<string, { src: string; width: number; height: number; natural?: boolean; alt?: string; caption?: string }> = {
  IR75: {
    src: "/images/nanoceramica/nano-proyecto-ir75-local.webp", width: 1106, height: 1600,
    alt: "Fachada de una tienda de conveniencia con cristal de tono azulado por la película nanocerámica HIGHTECH en tono 75.",
    caption: "Proyecto real · tono 75 · local comercial",
  },
  IR50: { src: "/images/nanoceramica/nano-proyecto-ir50-torre-v3.webp", width: 1600, height: 1549, natural: true },
  IR35: { src: "/images/nanoceramica/nano-proyecto-ir35-v2.webp", width: 1115, height: 1544 },
  IR15: { src: "/images/nanoceramica/nano-proyecto-ir15.webp", width: 1200, height: 1600 },
  IR5: {
    src: "/images/nanoceramica/nano-proyecto-ir5-tesla.webp", width: 683, height: 910,
    alt: "Exterior de la agencia Tesla en Guadalajara con película nanocerámica HIGHTECH en tono 5.",
    caption: "Proyecto real · tono 5 · Agencia Tesla",
  },
};

export function generateStaticParams() {
  return truth.nano.map((film) => ({ tone: film.id.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ tone: string }> }): Promise<Metadata> {
  const { tone } = await params;
  const film = getNanoProduct(tone);
  if (!film) return {};
  const copy = toneCopy[film.id];
  return {
    title: { absolute: `Polarizado nanocerámico tono ${toneName(film.id)} | HIGHTECH Polarizados` },
    description: `Tono ${toneName(film.id)}: ${copy.headline} Bloquea los rayos UV y el calor del sol, y deja pasar la luz de este tono.`,
    alternates:{canonical:`/peliculas/nanoceramica/${tone.toLowerCase()}/`},
    robots: release.routes.tonePagesIndexable ? { index: true, follow: true } : { index: false, follow: true },
  };
}

export default async function TonePage({ params }: { params: Promise<{ tone: string }> }) {
  const { tone } = await params;
  const film = getNanoProduct(tone);
  if (!film) notFound();
  const copy = toneCopy[film.id];
  const img = toneImages[film.id];
  const extra = toneExtra[film.id];
  const name = toneName(film.id);
  const faqs = [extra.faq, ...sharedFaq];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es-MX",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  };
  const specs: [string, string][] = [
    ["Luz visible que pasa (VLT)", `${film.vlt}%`],
    ["Rechazo infrarrojo", `${film.infraredRejection}%, medido a ${film.infraredWavelengthNm} nm, según ficha técnica`],
    ["Rayos UV", `Hasta ${film.uv}% de rechazo, según ficha técnica`],
  ];
  return (
    <>
      <ProductHero
        variant="nano"
        eyebrow="Nanocerámica"
        title={`Tono ${toneName(film.id)}. ${copy.headline}`}
        description={copy.decision}
        context={{ sourcePage: `/peliculas/nanoceramica/${tone}/`, product: film.id, tone: film.id }}
        facts={[
          { label: "Luz", value: copy.light },
          { label: "Rayos UV", value: "Bloquea hasta 99%" },
          { label: "Calor del sol", value: "Casi todo, como el resto de la gama" },
        ]}
        image={img ? {
          src: img.src,
          width: img.width,
          height: img.height,
          portrait: !img.natural,
          natural: img.natural,
          alt: img.alt ?? `Proyecto real con película nanocerámica HIGHTECH en tono ${toneName(film.id)}.`,
          caption: img.caption ?? `Proyecto real · tono ${toneName(film.id)}`,
        } : undefined}
        secondary={<Link href="/peliculas/nanoceramica/" className="button button-secondary">Ver toda la gama <Icon name="arrow" size={18} /></Link>}
      />
      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "46rem" }}>
          <h2>{copy.where}</h2>
          <p>
            La nanocerámica es una capa casi invisible que corta los rayos que calientan y los que decoloran, sin depender de que el cristal se vea negro.
            Oscurecer más no multiplica esa protección: suma privacidad y resta luz.
          </p>
          <HightechTip>
            {film.id === "IR5"
              ? "Es como manejar con lentes de sol muy oscuros ya de noche: el sol no está, y aun así cuesta ver el camino. Por eso el 5 se recomienda sobre todo para casa y negocio."
              : "Un bloqueador transparente también protege la piel. Aquí pasa lo mismo: el tono se elige por la luz que quieres, no porque el más oscuro “proteja más”."}
          </HightechTip>
          {copy.caution ? <p><strong>{copy.caution}</strong></p> : null}
        </div>
      </section>
      <section className="section section-alt">
        <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "46rem" }}>
          <p className="eyebrow">Recomendado para</p>
          <h2>Dónde funciona mejor el tono {name}.</h2>
          <p>{extra.look}</p>
          <ul style={{ display: "grid", gap: ".6rem", paddingLeft: "1.2rem", margin: 0 }}>
            {extra.uses.map((use) => <li key={use}>{use}</li>)}
          </ul>
          <HightechTip>
            De día se dificulta ver hacia adentro. De noche, con las luces interiores encendidas, el efecto se invierte: la película no da privacidad nocturna.
          </HightechTip>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "46rem" }}>
          <p className="eyebrow">Cómo funciona</p>
          <h2>Cómo funciona la nanocerámica.</h2>
          <ul style={{ display: "grid", gap: ".6rem", paddingLeft: "1.2rem", margin: 0 }}>
            <li>Rechaza la radiación infrarroja, que es parte de lo que calienta al pasar por el cristal.</li>
            <li>No lleva metales, así que no interfiere con las señales de celular, GPS ni wifi.</li>
            <li>No se decolora ni se pone morada con el tiempo.</li>
          </ul>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "46rem" }}>
          <p className="eyebrow">Ficha</p>
          <h2>Datos del tono {name}.</h2>
          <div className="table-scroll">
            <table className="install-times install-times--specs">
              <caption className="sr-only">Datos técnicos del tono {name}</caption>
              <thead><tr><th>Dato</th><th>Valor</th></tr></thead>
              <tbody>
                {specs.map(([label, value]) => <tr key={label}><td>{label}</td><td>{value}</td></tr>)}
              </tbody>
            </table>
          </div>
          {extra.vltNote ? <p className="install-times-note">{extra.vltNote}</p> : null}
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "46rem" }}>
          <p className="eyebrow">Durabilidad y garantía</p>
          <h2>10 años por escrito en instalación interior.</h2>
          <p>
            La garantía escrita de la nanocerámica es de 10 años cuando se instala por el interior del cristal.
            Las instalaciones exteriores y los casos especiales se evalúan caso por caso y pueden tener otras condiciones.
            Consulta el detalle en <Link href="/garantias/">garantías</Link>.
          </p>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "46rem" }}>
          <p className="eyebrow">Cuidados</p>
          <h2>Después de instalar, espera antes de limpiar.</h2>
          <ul style={{ display: "grid", gap: ".6rem", paddingLeft: "1.2rem", margin: 0 }}>
            <li>En el auto, no bajes los cristales durante 48 horas.</li>
            <li>El secado tarda de 15 a 30 días. Al inicio son normales las burbujas de agua y un aspecto opaco.</li>
            <li>Para limpiar usa un paño suave, sin amoníaco ni abrasivos.</li>
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">Preguntas</p>
            <h2>Dudas sobre el tono {name}.</h2>
          </div>
          <FAQList items={faqs.map((f) => ({ question: f.question, answer: <p>{f.answer}</p> }))} />
        </div>
        <JsonLd data={faqSchema} />
      </section>
      <section className="section section-alt">
        <div className="container tone-neighbors">
          <div>
            <p className="eyebrow">Al lado</p>
            <h2>Comparar con el tono de junto ayuda a decidir la luz.</h2>
          </div>
          <div>
            {copy.neighbors.map((id) => (
              <Link href={`/peliculas/nanoceramica/${id.toLowerCase()}/`} key={id}>
                <strong>{id}</strong>
                <span>Ver este tono</span>
                <Icon name="arrow" size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ProductCTA
        title={`¿El tono ${toneName(film.id)} encaja en tu cristal?`}
        text="Cuéntanos si es casa, negocio o auto, y cuánta luz quieres conservar."
        cta="WhatsApp"
        context={{ sourcePage: `/peliculas/nanoceramica/${tone}/`, product: film.id, tone: film.id }}
        secondaryHref="/peliculas/nanoceramica/"
        secondaryLabel="Comparar toda la gama"
      />
    </>
  );
}
