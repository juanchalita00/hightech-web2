import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { ProductCTA } from "@/components/ProductCTA";
import { ProductHero } from "@/components/ProductHero";
import { HightechTip } from "@/components/HightechTip";
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

const toneImages: Record<string, { src: string; width: number; height: number; project: boolean; natural?: boolean }> = {
  IR75: { src: "/images/nanoceramica/nano-proyecto-ir75.webp", width: 1200, height: 1600, project: true },
  IR50: { src: "/images/nanoceramica/nano-proyecto-ir50-torre-v3.webp", width: 1600, height: 1549, project: true, natural: true },
  IR35: { src: "/images/nanoceramica/nano-proyecto-ir35.webp", width: 1200, height: 1600, project: true },
  IR15: { src: "/images/nanoceramica/nano-proyecto-ir15.webp", width: 1200, height: 1600, project: true },
  IR5: { src: "/images/comparador/referencia-fachada-exterior-nanoceramica.webp", width: 1440, height: 960, project: false },
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
          portrait: img.project && !img.natural,
          natural: img.natural,
          alt: img.project ? `Proyecto real con película nanocerámica HIGHTECH en tono ${toneName(film.id)}.` : "Fachada de una casa con ventanas marcadas 75%, 50%, 35%, 15% y 5%, para comparar el tono 5 con el resto de la gama.",
          caption: img.project ? `Proyecto real · tono ${toneName(film.id)}` : "Referencia de tonos de la gama · el 5 es el más oscuro",
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
