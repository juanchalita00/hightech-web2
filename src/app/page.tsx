import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { SignatureGlass } from "@/components/SignatureGlass";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { truth } from "@/lib/truth";
import styles from "./home-v09.module.css";

export const metadata: Metadata = {
  title: "HIGHTECH Polarizados",
  description: "Soluciones profesionales para cristales residenciales, comerciales y automotrices.",
  alternates: { canonical: "/" },
};

const problems = [
  { icon: "sun" as const, title: "Calor", text: "Reducir ganancia solar sin oscurecer más de lo necesario.", href: "/servicios/" },
  { icon: "uv" as const, title: "UV", text: "Proteger interiores y superficies con una especificación verificable.", href: "/servicios/" },
  { icon: "glare" as const, title: "Deslumbramiento", text: "Controlar exceso de luz según orientación, VLT y uso del espacio.", href: "/servicios/" },
  { icon: "privacy" as const, title: "Privacidad", text: "Elegir privacidad entendiendo qué ocurre de día y de noche.", href: "/peliculas/privacidad/" },
  { icon: "shield" as const, title: "Seguridad", text: "Ayudar a mantener fragmentos unidos con una solución bien especificada.", href: "/peliculas/seguridad/" },
  { icon: "car" as const, title: "Automotriz", text: "Elegir claridad, tono y desempeño para tu vehículo.", href: "/automotriz/" },
] as const;

const journeys = [
  {
    icon: "home" as const,
    label: "Casa / departamento",
    title: "Residencial",
    text: "Confort, claridad, privacidad y compatibilidad del cristal sin convertir tu casa en un espacio oscuro.",
    href: "/residencial/",
    cta: "Ver soluciones residenciales",
  },
  {
    icon: "building" as const,
    label: "Oficinas / fachadas",
    title: "Comercial",
    text: "Proyectos donde importan la imagen del edificio, el acceso, la operación y una especificación consistente.",
    href: "/comercial/",
    cta: "Revisar línea comercial",
  },
  {
    icon: "car" as const,
    label: "Instalación en taller",
    title: "Automotriz",
    text: "Nanocerámica, tonos y visibilidad con una recomendación según vehículo y alcance de instalación.",
    href: "/automotriz/",
    cta: "Ver línea automotriz",
  },
] as const;

const steps = [
  ["01", "Entendemos el objetivo", "Calor, UV, privacidad, deslumbramiento, seguridad o apariencia."],
  ["02", "Revisamos el cristal", "Aplicación, iluminación, medidas y condiciones que pueden cambiar la recomendación."],
  ["03", "Elegimos la solución", "Tecnología y tono con especificaciones y limitaciones explicadas con claridad."],
  ["04", "Cotizamos el alcance", "Recibes una propuesta según tu proyecto o vehículo, no una tarifa genérica fuera de contexto."],
] as const;

const proof = [
  ["01", "Datos de ficha", "La gama nano tiene valores técnicos mapeados y una fuente identificada por tono."],
  ["02", "Contexto antes que slogans", "95% de rechazo IR a 950 nm no se convierte en “95% menos calor”."],
  ["03", "Limitaciones visibles", "Privacidad, compatibilidad y legalidad se explican donde realmente afectan la decisión."],
] as const;

const toneSamples: Record<string, string> = {
  IR75: "linear-gradient(90deg, #c7d6df 0%, #a8becb 100%)",
  IR50: "linear-gradient(90deg, #8f969b 0%, #70777c 100%)",
  IR35: "linear-gradient(90deg, #60666a 0%, #484e52 100%)",
  IR15: "linear-gradient(90deg, #292e31 0%, #191d20 100%)",
  IR5: "linear-gradient(90deg, #0b0d0f 0%, #020304 100%)",
};

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>Soluciones profesionales para cristales</p>
              <h1>Confort y protección <span>sin renunciar a la luz.</span></h1>
              <p className={styles.heroDescription}>
                Para casas, empresas y vehículos. Primero entendemos qué quieres resolver; después recomendamos la película, el tono y la aplicación adecuados.
              </p>

              <div className={styles.heroActions}>
                <WhatsAppCTA
                  label="Cuéntanos qué quieres resolver"
                  context={{ sourcePage: "/" }}
                  position="HERO"
                  className={styles.primaryCta}
                />
                <Link className={styles.secondaryCta} href="/peliculas/nanoceramica/">
                  Comparar nanocerámica <Icon name="arrow" size={18} />
                </Link>
              </div>

              <div className={styles.heroProof} aria-label="Principios de HIGHTECH">
                <span><Icon name="check" size={17} /> Datos técnicos con contexto</span>
                <span><Icon name="check" size={17} /> Cotización según aplicación</span>
              </div>
            </div>

            <div className={styles.visualWrap}>
              <SignatureGlass />
            </div>
          </div>

          <div className={styles.trustLine} aria-label="Qué define la recomendación HIGHTECH">
            <div className={styles.trustLineInner}>
              <span><Icon name="glass" size={18} /> Cristal y aplicación</span>
              <span><Icon name="sun" size={18} /> Control solar</span>
              <span><Icon name="privacy" size={18} /> Luz y privacidad</span>
              <span><Icon name="shield" size={18} /> Límites explicados</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.editorialSection}>
        <div className={styles.shell + " " + styles.problemLayout}>
          <div>
            <p className={styles.eyebrow}>Empieza por el problema</p>
            <h2 className={styles.editorialTitle}>No necesitas saber qué película comprar.</h2>
            <p className={styles.editorialIntro}>
              La recomendación cambia según lo que quieras resolver, la cantidad de luz que quieras conservar y las condiciones reales del cristal.
            </p>
          </div>

          <div className={styles.problemList}>
            {problems.map((problem, index) => (
              <Link className={styles.problemItem} href={problem.href} key={problem.title}>
                <span className={styles.problemIndex}>0{index + 1}</span>
                <span className={styles.problemIcon}><Icon name={problem.icon} size={20} /></span>
                <span className={styles.problemText}>
                  <h3>{problem.title}</h3>
                  <p>{problem.text}</p>
                </span>
                <Icon className={styles.problemArrow} name="arrow" size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.journeySection}>
        <div className={styles.shell}>
          <div className={styles.journeyHeading}>
            <div>
              <p className={styles.eyebrow}>Tres formas de trabajar con HIGHTECH</p>
              <h2>Casa, empresa o vehículo. Cada proyecto pide una lógica distinta.</h2>
            </div>
            <p>
              La aplicación define cómo se especifica la solución: una vivienda, una fachada y un vehículo no se deben tratar como si fueran el mismo problema.
            </p>
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

      <section className={styles.nanoSection}>
        <div className={styles.shell + " " + styles.nanoLayout}>
          <div className={styles.nanoCopy}>
            <p className={styles.eyebrow}>Nanocerámica HIGHTECH</p>
            <h2>El tono cambia la luz. La ficha cambia el contexto.</h2>
            <p>
              Nuestra gama activa va desde IR75, pensada para conservar mucha claridad, hasta IR5, la opción más oscura. Todos los datos se muestran como especificaciones de ficha, no como promesas universales de temperatura.
            </p>

            <div className={styles.nanoFacts}>
              <div className={styles.nanoFact}><strong>99%</strong><span>rechazo UV</span></div>
              <div className={styles.nanoFact}><strong>95%</strong><span>IR medido a 950 nm</span></div>
              <div className={styles.nanoFact}><strong>5</strong><span>tonos activos</span></div>
            </div>

            <Link href="/peliculas/nanoceramica/" className={styles.nanoLink}>
              Entender la gama completa <Icon name="arrow" size={18} />
            </Link>
          </div>

          <div>
            <div className={styles.toneAxis}>
              <span>Más claridad</span>
              <span className={styles.toneAxisLabel}>Tono aproximado</span>
              <span>Más oscuridad</span>
            </div>
            <div className={styles.toneTable}>
              {truth.nano.map((film) => (
                <Link className={styles.toneRow} href={"/peliculas/nanoceramica/" + film.id.toLowerCase() + "/"} key={film.id}>
                  <span className={styles.toneName}><strong>{film.id}</strong><span>VLT {film.vlt}%</span></span>
                  <span
                    className={styles.toneSwatch}
                    style={{ "--tone-bg": toneSamples[film.id] } as CSSProperties}
                    aria-hidden="true"
                  />
                  <span className={styles.toneMeta}><strong>TSER {film.tser}%</strong><span>según ficha</span></span>
                </Link>
              ))}
            </div>
            <p className={styles.toneNote}>
              Muestra visual orientativa del tono; la apariencia final depende también del cristal y de la iluminación. IR50 e IR5 son nombres comerciales; sus VLT de ficha son 48% y 3%, respectivamente.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.methodSection}>
        <div className={styles.shell}>
          <div className={styles.methodHeading}>
            <div>
              <p className={styles.eyebrow}>Método HIGHTECH</p>
              <h2>Primero entendemos. Después recomendamos.</h2>
            </div>
            <p>El objetivo es que la solución corresponda al problema real y que sepas qué esperar antes de instalar.</p>
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

      <section className={styles.proofSection}>
        <div className={styles.shell}>
          <div className={styles.proofHeader}>
            <p className={styles.eyebrow}>Información técnica sin humo</p>
            <h2>Un porcentaje aislado no cuenta toda la historia.</h2>
            <p>
              Por eso distinguimos VLT, rechazo UV, rechazo infrarrojo medido a 950 nm y TSER. También explicamos cuándo la privacidad cambia de noche o cuándo una aplicación requiere revisar compatibilidad.
            </p>
          </div>

          <div className={styles.proofGrid}>
            {proof.map(([number, title, text]) => (
              <article className={styles.proofItem} key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <Link className={styles.proofCta} href="/guias/">
            Explorar guías técnicas <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>

      <section className={styles.finalSection}>
        <div className={styles.shell + " " + styles.finalCard}>
          <div>
            <p className={styles.eyebrow}>¿Qué quieres resolver?</p>
            <h2>Cuéntanos el espacio o el vehículo. Nosotros te ayudamos a aterrizar la solución.</h2>
          </div>
          <div className={styles.finalActions}>
            <WhatsAppCTA
              label="Abrir WhatsApp"
              context={{ sourcePage: "/" }}
              position="FINAL_CTA"
              className={styles.primaryCta}
            />
            <Link href="/contacto/" className={styles.secondaryCta}>Ver formas de contacto</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
