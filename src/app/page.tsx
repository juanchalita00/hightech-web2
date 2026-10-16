import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Icon } from "@/components/Icon";
import { SignatureGlass } from "@/components/SignatureGlass";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { airportName, googleProfile, onSitePolicy } from "@/lib/public-facts";
import styles from "./home-v09.module.css";

export const metadata: Metadata = {
  title: { absolute: "Polarizado en Zapopan y Guadalajara | HIGHTECH Polarizados" },
  description: "Polarizado nanocerámico para casa, negocio y auto en Zapopan. El tono cambia la luz y la privacidad; el calor del sol se corta en todos.",
  alternates: { canonical: "/" },
};

const journeys = [
  {
    icon: "home" as const,
    label: "Casa",
    title: "Residencial",
    text: "Menos calor en la sala y en las recámaras, sin cerrar la luz del ventanal.",
    href: "/residencial/",
    cta: "Ver polarizado para casa",
  },
  {
    icon: "building" as const,
    label: "Oficina o fachada",
    title: "Negocio",
    text: "Control solar, privacidad de día y película de seguridad cuando el cristal tiene que aguantar más.",
    href: "/comercial/",
    cta: "Ver polarizado para negocio",
  },
  {
    icon: "car" as const,
    label: "Taller con cita",
    title: "Auto",
    text: onSitePolicy,
    href: "/automotriz/",
    cta: "Ver polarizado para auto",
  },
] as const;

const reasons = [
  ["01", "El tono no es el calor", "Todos los tonos cortan los rayos UV y el calor que se siente junto al cristal. Oscurecer suma privacidad, no el doble de frescura."],
  ["02", "Garantía por escrito", "Nanocerámica y automotriz, 10 años. Seguridad, 5 o 10 años según la película."],
  ["03", "Un solo lugar", "Taller en Jardines Vallarta, Zapopan. Casa y negocio se miden con fotos; el auto, con cita."],
] as const;

const steps = [
  ["01", "Nos dices qué te molesta", "Calor, luz de más, privacidad o un cristal que quieres proteger."],
  ["02", "Vemos el cristal", "Medidas, orientación y, en auto, qué vidrios se van a trabajar."],
  ["03", "Elegimos el tono", "Cuánta luz quieres conservar, no un catálogo de siglas."],
  ["04", "Cotizamos e instalamos", "Precio del trabajo concreto y una fecha."],
] as const;

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>Polarizado en Zapopan</p>
              <h1>Menos calor, <span>con la luz que elijas.</span></h1>
              <p className={styles.heroDescription}>
                La película corta el calor del sol en todos los tonos. El más oscuro no protege mucho más: cambia cuánta luz entra y cuánta privacidad quieres.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryCta} href="/contacto/#cotizar">Cotizar</Link>
                <WhatsAppCTA label="WhatsApp" context={{ sourcePage: "/" }} position="HERO" appearance="plain" className={styles.secondaryCta} />
              </div>
              <div className={styles.heroProof} aria-label="Referencias">
                <span><Icon name="check" size={17} /> {airportName}</span>
                <span><Icon name="check" size={17} /> {googleProfile.rating} en Google · {googleProfile.count} reseñas</span>
              </div>
            </div>
            <div className={styles.visualWrap}>
              <SignatureGlass />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.evidenceSection} aria-labelledby="proyecto-documentado">
        <div className={styles.shell}>
          <div className={styles.evidenceHead}>
            <div>
              <p className={styles.eyebrow}>Obra instalada</p>
              <h2 className={styles.evidenceTitle} id="proyecto-documentado">{airportName}.</h2>
            </div>
            <p className={styles.evidenceText}>
              Un pasillo de cristal junto a la plataforma, en operación continua. La misma lógica de instalación llega a casa, oficina y auto.
            </p>
          </div>
          <figure className={styles.evidenceFigure}>
            <div className={styles.evidenceMedia}>
              <Image
                src="/images/projects/airport-authority.webp"
                alt="Pasillo acristalado junto a la plataforma del Aeropuerto Internacional de Guadalajara al atardecer."
                fill
                sizes="(max-width: 1248px) calc(100vw - 2rem), 76rem"
                className={styles.evidencePhoto}
              />
            </div>
            <figcaption className={styles.evidenceCaption}>{airportName} · <Link href="/proyectos/aeropuerto-internacional-de-guadalajara/">Ver el caso</Link></figcaption>
          </figure>
        </div>
      </section>

      <GoogleReviews />

      <section className={styles.journeySection}>
        <div className={styles.shell}>
          <div className={styles.journeyHeading}>
            <div>
              <p className={styles.eyebrow}>Dónde se instala</p>
              <h2>Casa, negocio o auto.</h2>
            </div>
            <p>El cristal no se trata igual en una sala, una fachada y un vehículo. Elige el que es tuyo.</p>
          </div>
          <div className={styles.journeyGrid}>
            {journeys.map((journey, index) => (
              <Link className={styles.journeyCard} href={journey.href} key={journey.title}>
                <span className={styles.journeyNumber}>0{index + 1}</span>
                <span className={styles.journeyIcon}><Icon name={journey.icon} size={24} /></span>
                <small>{journey.label}</small>
                <h3>{journey.title}</h3>
                <p>{journey.text}</p>
                <span className={styles.journeyCta}>{journey.cta} <Icon name="arrow" size={17} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.proofSection}>
        <div className={styles.shell}>
          <div className={styles.proofHeader}>
            <p className={styles.eyebrow}>Por qué así</p>
            <h2>Claridad primero. Después, el tono.</h2>
          </div>
          <div className={styles.proofGrid}>
            {reasons.map(([number, title, text]) => (
              <article className={styles.proofItem} key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <Link className={styles.proofCta} href="/garantias/">Ver garantías <Icon name="arrow" size={18} /></Link>
        </div>
      </section>

      <section className={styles.methodSection}>
        <div className={styles.shell}>
          <div className={styles.methodHeading}>
            <div>
              <p className={styles.eyebrow}>Cómo sigue</p>
              <h2>De la molestia a la instalación.</h2>
            </div>
            <p>No hace falta llegar sabiendo el nombre de la película.</p>
          </div>
          <div className={styles.steps}>
            {steps.map(([number, title, text]) => (
              <article className={styles.step} key={number}>
                <span className={styles.stepNumber}>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalSection}>
        <div className={styles.shell + " " + styles.finalCard}>
          <div>
            <p className={styles.eyebrow}>Siguiente paso</p>
            <h2>Cuéntanos el espacio o el auto.</h2>
          </div>
          <div className={styles.finalActions}>
            <Link href="/contacto/#cotizar" className={styles.primaryCta}>Cotizar</Link>
            <WhatsAppCTA label="WhatsApp" context={{ sourcePage: "/" }} position="FINAL_CTA" appearance="plain" className={styles.secondaryCta} />
          </div>
        </div>
      </section>
    </div>
  );
}
