import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ApplicationHero } from "@/components/ApplicationHero";
import { FAQList } from "@/components/FAQList";
import { InstallTimes } from "@/components/InstallTimes";
import { JaliscoLaw } from "@/components/JaliscoLaw";
import { JsonLd } from "@/components/JsonLd";
import { LeadMagnet } from "@/components/LeadMagnet";
import { PriceBlock } from "@/components/PriceBlock";
import { ProductCTA } from "@/components/ProductCTA";
import { HightechTip } from "@/components/HightechTip";
import { Icon } from "@/components/Icon";
import { automotiveOnSiteAnswer, automotiveOnSiteQuestion, automotiveOnSiteSchema } from "@/lib/automotive-onsite";
import { onSitePolicy, prices } from "@/lib/public-facts";

export const metadata: Metadata = {
  alternates: { canonical: "/automotriz/" },
  title: { absolute: "Polarizado para auto en Zapopan | HIGHTECH Polarizados" },
  description: "Polarizado nanocerámico para auto en Zapopan: laterales, medallón y parabrisas completo. Desde $3,500 en auto compacto; parabrisas completo desde $1,500.",
};

const peso = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });
const money = peso.format(prices.autoFrom);
const windshieldMoney = peso.format(prices.windshieldFrom);

const photos = [
  { src: "/images/fotos/auto-sedan-rojo-lateral-2-800.webp", alt: "Sedán rojo con polarizado en laterales y medallón, vista lateral.", caption: "Polarizado en laterales y medallón" },
  { src: "/images/fotos/auto-suv-azul-lateral-1-800.webp", alt: "SUV azul con polarizado en ventanas laterales.", caption: "Polarizado en laterales" },
  { src: "/images/fotos/auto-suv-azul-lateral-2-800.webp", alt: "SUV azul con polarizado en ventanas laterales.", caption: "Polarizado en laterales" },
] as const;

const faqs = [
  {
    question: "¿Más oscuro protege más del calor?",
    answer: (
      <p>
        No de la forma en que suele pensarse. Todos los tonos bloquean hasta 99% de los rayos UV y el calor que se siente en la piel junto a un cristal con sol.
        El más oscuro gana un poco más de protección total y mucha más privacidad, y de noche se ve menos. El 5 es el único que a algunas personas les cuesta de noche.
      </p>
    ),
  },
  {
    question: "¿Puedo polarizar el parabrisas?",
    answer: (
      <p>
        Sí. Instalamos parabrisas completo con nanocerámica, en claro o en el tono que prefieras. Desde {windshieldMoney}.
        Te asesoramos en persona o por WhatsApp para elegir con buena visibilidad. <Link href="/guias/polarizado-automotriz-jalisco/">Ver la guía de Jalisco</Link>.
      </p>
    ),
  },
  {
    question: automotiveOnSiteQuestion,
    answer: <p>{automotiveOnSiteAnswer}</p>,
  },
  {
    question: "¿Cuánto cuesta?",
    answer: <p>Desde {money}, laterales y medallón de un auto compacto. El parabrisas completo, desde {windshieldMoney}. Un vehículo más grande se cotiza aparte.</p>,
  },
  {
    question: "¿Qué garantía tiene?",
    answer: <p>La nanocerámica de auto tiene 10 años de garantía. <Link href="/garantias/">Ver garantías</Link>.</p>,
  },
];

export default function AutomotivePage() {
  return (
    <>
      <JsonLd data={automotiveOnSiteSchema} />
      <ApplicationHero
        variant="automotive"
        eyebrow="Polarizado automotriz · Zapopan"
        title="Polarizado para tu auto, a tu gusto."
        description="Te ayudamos a elegir el tono: más claro para ver de noche, o un poco más oscuro en los cristales traseros para más privacidad. Todos bajan el calor del sol. Instalamos laterales, medallón y parabrisas completo."
        ctaLabel="Cotizar"
        context={{ sourcePage: "/automotriz/", businessLine: "automotive", product: "Nanocerámica" }}
        proofItems={["Laterales, medallón y parabrisas", "Garantía de 10 años", onSitePolicy]}
        imageSrc="/images/fotos/auto-sedan-rojo-lateral-1-1600.webp"
        imageAlt="Sedán rojo con polarizado en laterales y medallón, vista lateral."
        imageCaption="Polarizado en laterales y medallón"
        imagePosition="50% 55%"
      />

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <p className="eyebrow">El calor y el tono</p>
              <h2>Más oscuro no siempre es mejor.</h2>
            </div>
            <p>
              Todos los tonos bloquean hasta 99% de los rayos UV y gran parte del calor del sol que se siente en la piel.
              Si lo pones más oscuro, ganas un poco más de protección y mucha más privacidad, pero ves menos hacia afuera.
            </p>
          </div>
          <HightechTip>
            Piensa en unos buenos lentes de sol: ves perfecto hacia afuera, pero te protegen del brillo y de los rayos UV.
            La película hace eso por todo tu auto, y además cuida tus asientos de piel y el tablero del sol de todos los días.
          </HightechTip>
          <PriceBlock
            title="Desde"
            rows={[
              { label: "Laterales y medallón", price: money, note: "Auto compacto." },
              { label: "Parabrisas completo, nanocerámica", price: windshieldMoney, note: "Claro o en el tono que elijas." },
            ]}
            footnote="Un vehículo más grande se cotiza aparte. Garantía de 10 años."
          />
          <p className="tone-cta"><Link className="button button-secondary" href="/peliculas/nanoceramica/">¿Cuál tono me conviene? <Icon name="arrow" size={18} /></Link></p>
        </div>
      </section>

      <JaliscoLaw />

      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1.5rem" }}>
          <LeadMagnet />
        </div>
      </section>

      <section className="section">
        <div className="container photo-split">
          <div>
            <p className="eyebrow">Cómo trabajamos</p>
            <h2>En el taller, con cita.</h2>
            <p>{onSitePolicy} Te confirmamos fecha por WhatsApp según la disponibilidad de la semana.</p>
          </div>
          <Image
            src="/images/fotos/auto-suv-negra-taller-800.webp"
            alt="Camioneta negra en el taller de HIGHTECH durante la instalación de polarizado."
            width={800}
            height={450}
            sizes="(max-width: 760px) calc(100vw - 2rem), 560px"
          />
        </div>
      </section>

      <InstallTimes />

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Trabajos recientes</p>
            <h2>Autos que ya pasaron por el taller.</h2>
          </div>
          <ul className="photo-grid">
            {photos.map((photo) => (
              <li key={photo.src}>
                <figure>
                  <Image src={photo.src} alt={photo.alt} width={800} height={600} sizes="(max-width: 760px) calc(100vw - 2rem), 360px" />
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container faq-page-grid">
          <div>
            <p className="eyebrow">Antes de agendar</p>
            <h2>Preguntas de auto.</h2>
          </div>
          <FAQList items={faqs} />
        </div>
      </section>

      <ProductCTA
        title="Cuéntanos el auto y el tono que te imaginas."
        text={onSitePolicy}
        cta="WhatsApp"
        context={{ sourcePage: "/automotriz/", businessLine: "automotive" }}
        secondaryHref="/guias/polarizado-automotriz-jalisco/"
        secondaryLabel="Ver la guía de Jalisco"
      />
    </>
  );
}
