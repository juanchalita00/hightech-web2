import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { ClientTicker } from "@/components/ClientTicker";
import { workScalePhotos } from "@/lib/work-scale-photos";
import { addressLine, googleProfile, hoursLabel } from "@/lib/public-facts";
import { truth } from "@/lib/truth";
import styles from "./nosotros.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/nosotros/" },
  title: { absolute: "Quiénes somos | High Tech Polarizados México" },
  description:
    "High Tech Polarizados México lleva las películas Hightech a todo el país. Soluciones para ventanas de casa, negocio y auto. Instaladores con más de 15 años de experiencia. Taller en Zapopan.",
};

export default function Page() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero} aria-labelledby="nosotros-hero-titulo">
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div>
            <span className={styles.sunRule} aria-hidden="true" />
            <p className={styles.eyebrow}>Quiénes somos</p>
            <h1 id="nosotros-hero-titulo">High Tech Polarizados México lleva las películas Hightech a todo el país.</h1>
            <p className={styles.heroLead}>
              Soluciones para ventanas de casa, negocio y auto. Te escuchamos primero, vemos tu cristal y elegimos contigo el tono que más te sirve.
            </p>
            <ul className={styles.pills} aria-label="Puntos clave">
              <li>Casa y negocio</li>
              <li>Auto en taller con cita</li>
              <li>Instaladores con más de 15 años de experiencia</li>
            </ul>
          </div>
          <figure className={styles.heroMedia}>
            <div className={styles.photoWrap}>
              <Image
                src="/images/galeria/residencial-atardecer-ventanal-800.webp"
                alt="Ventanal instalado con película Hightech, conservando la vista al atardecer."
                fill
                priority
                sizes="(min-width: 768px) 42vw, calc(100vw - 2rem)"
              />
            </div>
            <figcaption className={styles.photoCaption}>Trabajo real en cristal residencial.</figcaption>
          </figure>
        </div>
      </section>

      {/* QUÉ HACEMOS + CÓMO TRABAJAMOS */}
      <section className={styles.section} aria-labelledby="forma-trabajo-titulo">
        <div className={`${styles.shell} ${styles.twoCol}`}>
          <div className={styles.card}>
            <p className={styles.eyebrow}>Qué hacemos</p>
            <h2 id="forma-trabajo-titulo">Cristales más frescos, sin complicarte.</h2>
            <div className={styles.copyStack}>
              <p>
                <strong>High Tech Polarizados México</strong> lleva las películas Hightech a todo el país, para ventanas de casa, negocio y auto.
              </p>
              <p>
                Primero nos cuentas qué te molesta: el calor, el brillo del sol o la falta de privacidad. Después vemos el cristal y te recomendamos la película y el tono.
              </p>
              <p>
                En casa y negocio instalamos en tu espacio. En auto trabajamos en nuestro taller de Zapopan, con cita. Te contestamos el mismo día.
              </p>
            </div>
          </div>

          <div className={styles.cardAccent} id="como-trabajamos">
            <p className={styles.eyebrow}>Cómo trabajamos</p>
            <h3>Primero la base. Luego, una especialidad.</h3>
            <div className={styles.copyStack}>
              <p>
                Un médico primero aprende la base y después elige una rama. Aquí trabajamos igual.
              </p>
              <p>
                Cada instalador domina primero el oficio completo y luego observamos en qué tipo de cristal destaca más.
              </p>
              <p>
                En esa etapa completa su formación técnica para espacios o para vehículos. Por eso, quien instala en tu casa no polariza autos, y al revés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESPECIALISTAS POR ÁREA */}
      <section className={styles.sectionAlt} aria-labelledby="especialidades-titulo">
        <div className={styles.shell}>
          <p className={styles.eyebrow}>Especialistas por área</p>
          <h2 id="especialidades-titulo">Casa y negocio por un lado. Auto por otro.</h2>
          <div className={styles.areaGrid}>
            <article className={styles.areaCard}>
              <div className={styles.photoWrap}>
                <Image
                  src="/images/galeria/residencial-fachada-casa-800.webp"
                  alt="Fachada de casa con ventanas protegidas con película Hightech."
                  fill
                  sizes="(min-width: 768px) 44vw, calc(100vw - 2rem)"
                />
              </div>
              <h3 className={styles.areaHead}>
                <Icon name="home" size={20} />
                <span>Casa y negocio</span>
              </h3>
              <p>
                Especialistas en ventanas de casas, oficinas y fachadas. Cuidan pisos, muebles y acabados en cada cristal.
              </p>
              <p>Instaladores con más de 15 años de experiencia en obra residencial y comercial.</p>
            </article>

            <article className={styles.areaCard}>
              <div className={styles.photoWrap}>
                <Image
                  src="/images/galeria/automotriz-suv-taller-puerta-abierta-800.webp"
                  alt="Camioneta en el taller de High Tech Polarizados en Zapopan lista para instalación."
                  fill
                  sizes="(min-width: 768px) 44vw, calc(100vw - 2rem)"
                />
              </div>
              <h3 className={styles.areaHead}>
                <Icon name="car" size={20} />
                <span>Auto</span>
              </h3>
              <p>
                Especialistas dedicados solo a autos. Trabajan en un taller cerrado y limpio, con cita para cuidar cada vidrio.
              </p>
              <p>Instaladores con más de 15 años de experiencia en cristales automotrices.</p>
            </article>
          </div>
        </div>
      </section>

      {/* PRUEBA REAL */}
      {/* Trabajos reales: de una recámara a un aeropuerto. Fotos del repo; nombres de clientes solo en la tira. Fer, 23 nov 2026, 11:37. */}
      <section className={styles.section} id="nosotros-prueba" aria-labelledby="prueba-nosotros-titulo">
        <div className={styles.shell}>
          <h2 id="prueba-nosotros-titulo">De una ventana de tu casa a un aeropuerto</h2>
          <p className={styles.scaleLead}>Hacemos desde una recámara hasta proyectos grandes, con el mismo cuidado.</p>
          <ul className={styles.workPhotos}>
            {workScalePhotos.map((photo) => (
              <li key={photo.src}>
                <figure>
                  <div className={styles.photoWrap}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 800px) 22rem, 46vw"
                    />
                  </div>
                  <figcaption className={styles.photoCaption}>{photo.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
          {/* Logos reales pendientes de permiso de cada marca. Nombres confirmados por Fer, 23 nov 2026, 11:22 y 11:37. */}
          <div className={styles.workTicker}>
            <ClientTicker />
          </div>
          <div className={styles.proofStat}>
            <strong>★★★★★ +{googleProfile.count} reseñas en Google</strong>
            <span>Opiniones reales verificadas al 15 de octubre de 2026.</span>
          </div>
        </div>
      </section>

      {/* DETRÁS DEL LOGO */}
      <section className={styles.sectionAlt} id="logo" aria-labelledby="logo-titulo">
        <div className={`${styles.shell} ${styles.logoGrid}`}>
          <div>
            <p className={styles.eyebrow}>Nuestro símbolo</p>
            <h2 id="logo-titulo">Una línea, un cristal y los rayos del sol.</h2>
            <div className={styles.copyStack}>
              <p>Protección para una mejor calidad de vida.</p>
              <p>Cada parte del logotipo recuerda para qué sirve una película bien instalada.</p>
            </div>
          </div>
          <ul className={styles.logoList}>
            <li>Las dos palabras van juntas, en una sola línea de horizonte.</li>
            <li>La i no lleva punto: el círculo se quitó a propósito.</li>
            <li>La letra inicial tiene un trazo propio para reconocerse de lejos.</li>
            <li>Los rayos del sol intentan cruzar un cristal ya protegido.</li>
          </ul>
        </div>
      </section>

      {/* TALLER Y GARANTÍAS */}
      <section className={styles.section} aria-labelledby="taller-titulo">
        <div className={`${styles.shell} ${styles.twoCol}`}>
          <div className={styles.card}>
            <p className={styles.eyebrow}>Dónde estamos</p>
            <h2 id="taller-titulo">Taller y horario.</h2>
            <dl className={styles.infoList}>
              <div>
                <dt>Dirección</dt>
                <dd>{addressLine}</dd>
                <dd><a href={truth.contact.mapsUrl} target="_blank" rel="noopener noreferrer">Ver en Google Maps</a></dd>
              </div>
              <div>
                <dt>Horario</dt>
                <dd>{hoursLabel}</dd>
              </div>
              <div>
                <dt>Pagos</dt>
                <dd>Aceptamos todos los métodos de pago.</dd>
              </div>
            </dl>
          </div>

          <div className={styles.card}>
            <p className={styles.eyebrow}>Garantía por escrito</p>
            <h2>Respaldo claro por película.</h2>
            <ul className={styles.warrantyList}>
              <li><span>Nanocerámica interior (casa, negocio y auto)</span><strong>10 años</strong></li>
              <li><span>Plata Reflecta</span><strong>5 años</strong></li>
              <li><span>Película de seguridad</span><strong>5 o 10 años, según la película</strong></li>
              <li><span>Esmerilado y película exterior</span><strong>1 año</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <GoogleReviews />

      <section className="section final-cta-section">
        <div className="container final-cta-card">
          <div>
            <p className="eyebrow eyebrow-light">Siguiente paso</p>
            <h2>Cuéntanos qué cristal quieres proteger.</h2>
          </div>
          <div className="final-cta-actions">
            <Link href="/contacto/#cotizar" className="button button-light">Cotizar</Link>
            <WhatsAppCTA label="WhatsApp" context={{ sourcePage: "/nosotros/" }} position="FINAL_CTA" className="button-ghost-light" />
          </div>
        </div>
      </section>
    </div>
  );
}
