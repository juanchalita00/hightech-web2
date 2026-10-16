import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { ProductCTA } from "@/components/ProductCTA";
import { ProductHero } from "@/components/ProductHero";
import { SimpleExample } from "@/components/SimpleExample";
import { getNanoProduct, release, truth } from "@/lib/truth";

const toneCopy: Record<string, { headline: string; decision: string; light: string; where: string; caution?: string; neighbors: string[] }> = {
  IR75: {
    headline: "El más claro. Deja pasar mucha luz.",
    decision: "Para quien quiere bajar el calor sin que el cristal se vea oscuro.",
    light: "Deja pasar cerca de tres cuartas partes de la luz.",
    where: "Es el tono de las ventanas delanteras del auto, y también sirve en casa y negocio.",
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
    where: "En casa, en negocio y en traseros y medallón. En las delanteras del auto no va: ahí solo el 75.",
    neighbors: ["IR50", "IR15"],
  },
  IR15: {
    headline: "Se ve oscuro y da más privacidad de día.",
    decision: "Para casa o negocio, cuando la prioridad es que se vea menos hacia adentro.",
    light: "Deja pasar poca luz.",
    where: "Solo arquitectónico. En el auto no lo instalamos.",
    neighbors: ["IR35", "IR5"],
  },
  IR5: {
    headline: "El más oscuro de la gama.",
    decision: "Para casa o negocio, cuando quieres la mayor privacidad de día.",
    light: "Deja pasar muy poca luz. Aunque se llama 5, en la práctica es aún más cerrado.",
    where: "Solo arquitectónico. En el auto no lo instalamos.",
    caution: "De noche, algunas personas batallan para ver hacia afuera. Es el único tono con este aviso.",
    neighbors: ["IR15"],
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
    title: { absolute: `Polarizado ${film.id} | HIGHTECH Polarizados` },
    description: `${film.id}: ${copy.headline} Bloquea los rayos UV y el calor del sol, y deja pasar la luz de este tono.`,
    alternates:{canonical:`/peliculas/nanoceramica/${tone.toLowerCase()}/`},
    robots: release.routes.tonePagesIndexable ? { index: true, follow: true } : { index: false, follow: true },
  };
}

export default async function TonePage({ params }: { params: Promise<{ tone: string }> }) {
  const { tone } = await params;
  const film = getNanoProduct(tone);
  if (!film) notFound();
  const copy = toneCopy[film.id];
  return (
    <>
      <ProductHero
        variant="nano"
        eyebrow="Nanocerámica"
        title={`${film.id}. ${copy.headline}`}
        description={copy.decision}
        context={{ sourcePage: `/peliculas/nanoceramica/${tone}/`, product: film.id, tone: film.id }}
        facts={[
          { label: "Luz", value: copy.light },
          { label: "Rayos UV", value: "Bloquea el 99%" },
          { label: "Calor del sol", value: "Casi todo, como el resto de la gama" },
        ]}
        secondary={<Link href="/peliculas/nanoceramica/" className="button button-secondary">Ver toda la gama <Icon name="arrow" size={18} /></Link>}
      />
      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "46rem" }}>
          <h2>{copy.where}</h2>
          <p>
            La nanocerámica es una capa casi invisible que corta los rayos que calientan y los que decoloran, sin depender de que el cristal se vea negro.
            Oscurecer más no multiplica esa protección: suma privacidad y resta luz.
          </p>
          <SimpleExample>
            {film.id === "IR5"
              ? "Es como manejar con lentes de sol muy oscuros ya de noche: el sol no está, y aun así cuesta ver el camino. Por eso el 5 se queda en casa y negocio."
              : "Un bloqueador transparente también protege la piel. Aquí pasa lo mismo: el tono se elige por la luz que quieres, no porque el más oscuro “proteja más”."}
          </SimpleExample>
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
        title={`¿${film.id} encaja en tu cristal?`}
        text="Cuéntanos si es casa, negocio o auto, y cuánta luz quieres conservar."
        cta="WhatsApp"
        context={{ sourcePage: `/peliculas/nanoceramica/${tone}/`, product: film.id, tone: film.id }}
        secondaryHref="/peliculas/nanoceramica/"
        secondaryLabel="Comparar toda la gama"
      />
    </>
  );
}
