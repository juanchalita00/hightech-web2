import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { getGoogleReviews } from "@/lib/google-reviews";
import { airportName, googleProfile } from "@/lib/public-facts";
import { truth } from "@/lib/truth";
import { BocetoBanner, CotizaWhatsApp, Estrellas, MobileBar, Pendiente, leyes, mensajes } from "../_components/Boceto";
import styles from "../boceto.module.css";

export const metadata: Metadata = {
  title: { absolute: "BOCETO portada | High Tech Polarizados México" },
  description: "Boceto de portada para revisión interna. No es la web publicada.",
  robots: { index: false, follow: false },
};

const mensaje = mensajes.portada;

/** Tres reseñas reales de content/google-reviews.json, texto y nombre tal cual. Se omite la de Michael Richards («10 grados más fresca», sin método). */
const autoresDestacados = ["Valeria Garnica", "Christian Chávez", "Miguel Tiongson"] as const;

/** Fragmentos literales de content/google-reviews.json (1 o 2 frases). Si se corta a mitad, se usa «…». */
const reseñaExtracto: Record<(typeof autoresDestacados)[number], string> = {
  "Valeria Garnica":
    "Me gustó mucho el servicio, me pareció muy buena la asesoría… …bajó el calor de la habitación y no modifico la vista.",
  "Christian Chávez":
    "…estamos muy contentos con los resultados. Sin duda, ha sido la mejor opción, ya que ahora el sol no se siente como antes, además ayudó a disminuir la temperatura de la habitación.",
  "Miguel Tiongson":
    "Excelente asesoría, atención y servicio. Muy buena calidad de trabajo.",
};

function fechaResena(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export default function BocetoPortadaPage() {
  const todas = getGoogleReviews();
  const perfilGoogle = todas[0]?.sourceUrl ?? truth.contact.mapsUrl;
  const reseñasElegidas = autoresDestacados.map((nombre) => {
    const found = todas.find((r) => r.author === nombre);
    if (!found) throw new Error(`Falta la reseña de ${nombre} en content/google-reviews.json`);
    return found;
  });

  return (
    <div className={styles.page}>
      <BocetoBanner />

      {/* 1. HERO */}
      <section className={styles.hero} aria-labelledby="hero-titulo">
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div>
            <span className={styles.sunRule} aria-hidden="true" />
            <p className={styles.kicker}>Casa, negocio y auto · Instalamos en Zapopan y Guadalajara</p>
            <h1 id="hero-titulo">Menos calor, sin quedarte a oscuras.</h1>
            <p className={styles.heroText}>
              ¿Tu casa parece horno? ¿El aire no enfría? Le ponemos película a tus cristales para que entre menos calor. Tú eliges qué tan claro queda.
            </p>
            <p className={styles.brandLine}>Distribuidores en todo México de las películas Hightech, nuestra marca, línea IR nanocerámica.</p>
            <div className={styles.ctaRow}>
              <CotizaWhatsApp message={mensaje} />
            </div>
          </div>
          <ul className={styles.trust} aria-label="Datos de confianza">
            <li><Icon name="check" size={18} /> +{googleProfile.count} reseñas en Google</li>
            <li><Icon name="check" size={18} /> {airportName}</li>
          </ul>
        </div>
      </section>

      {/* 2. EL PROBLEMA */}
      <section className={styles.sectionAlt} aria-labelledby="problema-titulo">
        <div className={styles.shell}>
          <h2 id="problema-titulo">¿Te pasa esto?</h2>
          <div className={styles.quotes}>
            <div className={styles.quoteGroup}>
              <h3><Icon name="home" size={20} /> En casa o en el negocio</h3>
              <ul className={styles.quoteList}>
                <li>Mi casa parece horno</li>
                <li>El aire no alcanza</li>
                <li>El vecino me ve</li>
                <li>El sol daña mis muebles</li>
                <li>Reflejo en la tele</li>
              </ul>
            </div>
            <div className={styles.quoteGroup}>
              <h3><Icon name="car" size={20} /> En el auto</h3>
              <ul className={styles.quoteList}>
                <li>Mi carro se calienta mucho</li>
                <li>El sol me quema al manejar</li>
                <li>Se me quema el brazo manejando</li>
                <li>Los asientos hierven</li>
                <li>Quiero privacidad</li>
                <li>No quiero multas</li>
              </ul>
            </div>
          </div>
          <figure className={styles.waTestimonio}>
            <blockquote>
              <p>«Todo excelente muchas gracias, sí redujo bastante el calor en el depa.»</p>
            </blockquote>
            <figcaption>Cliente de casa, por WhatsApp</figcaption>
          </figure>
        </div>
      </section>

      {/* ESPECIALISTAS POR ÁREA. Fuente: Fer, 19 nov 2026. */}
      <section className={styles.section} aria-labelledby="especialistas-titulo">
        <div className={styles.shell}>
          <p className={styles.kicker}>Especialistas por área</p>
          <h2 id="especialistas-titulo">Casa, negocio y auto, cada uno con su especialidad.</h2>
          <p className={styles.lead}>Hay empresas que se dedican a un solo ramo, o que tienen mucha rotación de instaladores, y por eso no se especializan.</p>
          <p>En High Tech formamos a los instaladores según las especificaciones de la película de cada área.</p>
          <div className={styles.specialties}>
            <div className={styles.specialty}>
              <h3><Icon name="home" size={20} /> Casa y negocio</h3>
              <p>Instaladores de residencial, formados para la película de esa área.</p>
              <figure className={styles.figure}>
                <div className={`${styles.photo} ${styles.photoPortrait}`}>
                  <Image
                    src="/boceto/casa-ir50.webp"
                    alt="Interior de una casa o departamento con película nanocerámica IR50 en las ventanas, junto a plantas."
                    fill
                    sizes="(min-width: 900px) 28rem, calc(100vw - 2rem)"
                  />
                </div>
                <figcaption>Trabajo residencial con película IR50.</figcaption>
              </figure>
              {/* Foto de un cliente, enviada por Fer el 20 nov 2026. HT Nanocerámico IR75 en ventana de casa: 39.2 °C antes y 29.6 °C después. Recorte de fotos/cliente-ir75-casa-antes-despues.jpg: solo se quitó el fondo y la interfaz de WhatsApp; los números no se retocaron. No se usa en secciones de auto. */}
              <figure className={styles.figure} id="prueba-calor-casa">
                <div className={styles.photoHeat}>
                  <Image
                    src="/boceto/casa-ir75-antes-despues.webp"
                    alt="Ventana de casa con película nanocerámica IR75: termómetro en el cristal, 39.2 °C antes de la instalación y 29.6 °C después."
                    width={557}
                    height={231}
                    sizes="(min-width: 900px) 28rem, calc(100vw - 2rem)"
                  />
                </div>
                <figcaption>Antes 39.2 °C. Después 29.6 °C. Foto real de un cliente.</figcaption>
              </figure>
            </div>
            <div className={styles.specialty}>
              <h3><Icon name="car" size={20} /> Auto</h3>
              <p>Instaladores de automotriz, formados para la película de auto.</p>
              <Pendiente>foto real de un Tesla con película instalada.</Pendiente>
            </div>
          </div>
          <p>No se mezclan. Un solo instalador no puede ser experto en todo; cada quien se especializa donde tiene más potencial.</p>
        </div>
      </section>

      {/* 3. EL DIAGNÓSTICO. Nombre: Fer, 20 nov 2026. Posicionamiento: base de conocimiento §1 y §7. */}
      <section className={styles.section} aria-labelledby="diagnostico-titulo">
        <div className={styles.shell}>
          <p className={styles.kicker}>Diagnóstico Hightech del Cristal</p>
          <h2 id="diagnostico-titulo">Primero vemos qué te molesta. Después, la película.</h2>
          <p className={styles.lead}>El Diagnóstico Hightech del Cristal no empieza por el catálogo: empieza por tu molestia y por el vidrio. Luego sale el tono y la película.</p>
          <ol className={styles.steps}>
            <li>
              <h3>Nos cuentas</h3>
              <p>Qué te molesta. Nos mandas fotos del cristal o el modelo de tu auto.</p>
            </li>
            <li>
              <h3>Revisamos</h3>
              <p>El cristal y cómo usas el espacio o el auto.</p>
            </li>
            <li>
              <h3>Te recomendamos</h3>
              <p>El tono y la película, con tu cotización.</p>
            </li>
            <li>
              <h3>Instalamos</h3>
              <p>En tu casa o negocio. El auto, en el taller con cita.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* 4. BENEFICIOS. TSER y UV: ficha SRC-TECH-SEP19 (SoT v0.19 §7). Señal: base de conocimiento §4. */}
      <section className={styles.sectionAlt} aria-labelledby="beneficios-titulo">
        <div className={`${styles.shell} ${styles.benefitsGrid}`}>
          <div>
            <p className={styles.kicker}>En qué se nota</p>
            <h2 id="beneficios-titulo">Entra menos calor.</h2>
            <p className={styles.bigFigure}>
              <span className={styles.bigNumber}>59 a 96%</span>
              <span className={styles.bigCaption}>del calor del sol lo bloquea la película nanocerámica, según el tono.</span>
            </p>
            <p className={styles.context}>
              Dato de laboratorio de la ficha técnica. Ya instalada puede cambiar según el cristal.
            </p>
          </div>
          <ul className={styles.benefitList}>
            <li>
              <Icon name="sun" size={24} />
              <div>
                <h3>99% de los rayos UV, en todos los tonos</h3>
                <p>Del más claro al más oscuro.</p>
              </div>
            </li>
            <li>
              <Icon name="message" size={24} />
              <div>
                <h3>Tu celular sigue con señal</h3>
                <p>La película no interfiere con el celular ni con otras señales.</p>
              </div>
            </li>
            <li>
              <Icon name="privacy" size={24} />
              <div>
                <h3>Tú eliges qué tan claro u oscuro</h3>
                <p>Cinco tonos: del 75, el más claro, al 5, el más oscuro.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 5. PRUEBA. Aeropuerto: Fer, 19 nov 2026, y web actual. Reseñas: content/google-reviews.json, fragmentos literales. Conteo: public-facts.ts. */}
      <section className={styles.section} aria-labelledby="prueba-titulo">
        <div className={styles.shell}>
          <p className={styles.kicker}>Dónde ya está instalada</p>
          <h2 id="prueba-titulo">{airportName}</h2>
          <div className={styles.proofGrid}>
            <figure className={styles.figure}>
              <div className={styles.photo}>
                <Image
                  src="/images/projects/airport-authority.webp"
                  alt="Pasillo de cristal junto a la plataforma del Aeropuerto Internacional de Guadalajara, al atardecer."
                  fill
                  sizes="(min-width: 1200px) 44rem, calc(100vw - 2rem)"
                />
              </div>
              <figcaption>Un pasillo de cristal junto a la plataforma, en operación continua.</figcaption>
            </figure>
            <div>
              <div className={styles.reviewCount}>
                <span className="google-review-headline-stars" role="img" aria-label="5 de 5 estrellas">★★★★★</span>
                <strong>+{googleProfile.count}</strong>
                <span>reseñas en Google, al 15 de octubre de 2026.</span>
              </div>
              <p><a href={perfilGoogle}>Ver las reseñas en Google</a></p>
            </div>
          </div>
          <div className={styles.reviews}>
            {reseñasElegidas.map((r) => (
              <figure className={styles.review} key={r.author}>
                <blockquote>{reseñaExtracto[r.author as (typeof autoresDestacados)[number]]}</blockquote>
                <figcaption>
                  <div className={styles.reviewHead}>
                    <strong>{r.author}</strong>
                    {typeof r.rating === "number" ? <Estrellas rating={r.rating} /> : null}
                  </div>
                  {r.publishedAt ? <span>{fechaResena(r.publishedAt)}</span> : null}
                  {" "}<a href={r.sourceUrl} target="_blank" rel="noopener noreferrer">Ver en Google</a>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 6. QUIÉNES SOMOS. Taller y horario: base §1 y §2 / public-facts.ts. Experiencia de instaladores y respuesta el mismo día: Fer, 19-20 nov 2026. Aeropuerto: Fer, 19 nov 2026. */}
      <section className={styles.sectionAlt} aria-labelledby="nosotros-titulo">
        <div className={`${styles.shell} ${styles.aboutGrid}`}>
          <div>
            <p className={styles.kicker}>Quiénes somos</p>
            <h2 id="nosotros-titulo">High Tech Polarizados México.</h2>
            <p>High Tech Polarizados México lleva las películas Hightech a todo el país.</p>
            <p>Hightech es nuestra marca.</p>
            <p>Se instalan en los cristales de casa, de negocio y de auto.</p>
            <p>Esa línea de películas se llama IR nanocerámica.</p>
            <p>Nuestros instaladores tienen más de 15 años de experiencia.</p>
            <p>Primero vemos qué te molesta y vemos tu cristal.</p>
            <p>Después te decimos qué película y qué tono te conviene, y te damos el precio.</p>
            <p>Si es para un auto, lo instalamos en el taller, con cita.</p>
            <p>Te contestamos el mismo día.</p>
            <p>Nuestro taller está en Tomás Mann 5348, Jardines Vallarta, Zapopan.</p>
            <p>Uno de nuestros trabajos está en el {airportName}.</p>
            <p>Es un pasillo de cristal junto a donde se mueven los aviones.</p>
            <p>Ese pasillo sigue en uso todos los días.</p>
            <p>En Google hay +{googleProfile.count} reseñas, al 15 de octubre de 2026.</p>
          </div>
          <dl className={styles.facts}>
            <div>
              <dt>Taller</dt>
              <dd>Tomás Mann 5348, Jardines Vallarta, Zapopan</dd>
              <dd><a href={truth.contact.mapsUrl}>Ver en Google Maps</a></dd>
            </div>
            <div>
              <dt>Horario</dt>
              <dd>Lunes a sábado, de 10:00 a 19:00</dd>
              <dd>Domingo cerrado</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 7. OBJECIONES. Base de conocimiento §10. Norma: PDF del Congreso de Jalisco, Reglamento art. 59 fr. VIII y Ley art. 360 fr. IX. */}
      <section className={styles.section} aria-labelledby="objeciones-titulo">
        <div className={styles.shell}>
          <p className={styles.kicker}>Lo que nos preguntan antes de decidir</p>
          <h2 id="objeciones-titulo">Tres dudas, de frente.</h2>

          <div className={styles.objection}>
            <h3>«¿Es caro?»</h3>
            <p>No es polarizado tradicional. Algo que no resuelve el calor sale más caro, porque luego hay que quitarlo y poner otro.</p>
            <p><a href="#precios">Ver precios desde</a></p>
          </div>

          <div className={styles.objection} id="multa">
            <h3>«¿Y si me multan?»</h3>
            <div className={styles.lawNote}>
              <p>«Parabrisas, medallones y vidrios en buen estado que permitan la visibilidad hacia el interior del vehículo; bajo ninguna circunstancia el parabrisas estará polarizado;»</p>
              <p>«Usar cristales polarizados u otros elementos que impidan totalmente la visibilidad hacia el interior del vehículo, o polarizado de cualquier intensidad en el parabrisas del vehículo;»</p>
              <p className={styles.lawCite}><a href={leyes.reglamento}>Reglamento art. 59 fr. VIII</a> / <a href={leyes.ley}>Ley art. 360 fr. IX</a></p>
            </div>
            <p>En el parabrisas lo más común es el IR75. Si quieres privacidad, en High Tech recomendamos máximo IR35, para que te sientas cómodo y conserves la visibilidad. Es lo que suele hacerse.</p>
            <p>El tono de cada cristal lo platicamos contigo.</p>
          </div>

          <div className={styles.objection}>
            <h3>«Me cotizaron la mitad»</h3>
            <p>Pregunta qué película y qué garantía te ofrecen. No todos los nanocerámicos rinden igual.</p>
            <p>Compara dos cosas: el número de calor en la ficha (TSER) y la garantía por escrito.</p>
          </div>
        </div>
      </section>

      {/* 8. OFERTA, GARANTÍA Y PRECIOS. Auto: Fer, 19 nov 2026. Casa/negocio $850 y $600 + IVA: Fer, 20 nov 2026. Mínimo $1,500: config minimo_pedido. Garantía de la película: Fer, 20 nov 2026. */}
      <section className={styles.sectionAlt} aria-labelledby="precios-titulo" id="precios">
        <div className={styles.shell}>
          <p className={styles.kicker}>Precios y garantía</p>
          <h2 id="precios-titulo">Cuánto cuesta.</h2>
          <div className={styles.priceGrid}>
            <div className={styles.priceBlock}>
              <h3><Icon name="car" size={22} /> Auto</h3>
              <span className={styles.from}>Desde $4,000 <span className={styles.plusIva}>+ IVA</span></span>
              <p>Película IR nanocerámica Hightech. Laterales y medallón. Parabrisas desde $1,500 <span className={styles.plusIva}>+ IVA</span>.</p>
              <p className={styles.small}>Aceptamos todos los métodos de pago. Hasta 3 meses sin intereses.</p>
            </div>
            <div className={styles.priceBlock}>
              <h3><Icon name="home" size={22} /> Casa y negocio</h3>
              <p>Nanocerámica desde $850 <span className={styles.plusIva}>+ IVA</span> por m².</p>
              <p>Soluciones desde $600 <span className={styles.plusIva}>+ IVA</span> por m² (esmerilado y Reflecta).</p>
              <p className={styles.small}>Mínimo por proyecto: $1,500.</p>
            </div>
          </div>

          <h3 style={{ marginTop: "2.5rem" }}>Garantía de la película Hightech</h3>
          <ul className={styles.warranty}>
            <li><span>Nanocerámica interior</span><strong>10 años</strong></li>
            <li><span>Zonas con película exterior</span><strong>1 año</strong></li>
            <li><span>Esmerilado</span><strong>1 año</strong></li>
            <li><span>Plata Reflecta</span><strong>5 o 10 años, según la línea</strong></li>
          </ul>
        </div>
      </section>

      {/* 9. FAQ. Base §7 y §9; domicilio: public-facts.ts; especialistas y marca: Fer, 19 nov 2026. Andamio: Fer, 20 nov 2026 (solo doble o triple altura; sin precio). */}
      <section className={styles.section} aria-labelledby="faq-titulo">
        <div className={`${styles.shell} ${styles.narrow}`}>
          <p className={styles.kicker}>Preguntas frecuentes</p>
          <h2 id="faq-titulo">Lo que más nos preguntan.</h2>
          <div className={styles.faq}>
            <details>
              <summary>¿Se ve hacia adentro de noche?</summary>
              <p>De día, desde afuera cuesta ver hacia adentro.</p>
              <p>De noche, si prendes la luz de adentro, sí se puede ver hacia adentro.</p>
            </details>
            <details>
              <summary>¿Interfiere con el celular?</summary>
              <p>No.</p>
              <p>Tu celular sigue con señal.</p>
            </details>
            <details>
              <summary>¿Cuánto tarda en mi auto?</summary>
              <p>Los cristales de los lados y el de atrás tardan de 2 a 3 horas.</p>
              <p>El auto completo tarda de 3 a 4 horas.</p>
            </details>
            <details>
              <summary>¿Van a domicilio?</summary>
              <p>El auto se trabaja en el taller, con cita.</p>
              <p>Solo vamos a otro lugar si son muchos autos juntos (una flotilla) o si el auto es de una agencia, o sea, de un lote de venta.</p>
            </details>
            <details>
              <summary>¿Son especialistas en casa o solo en autos?</summary>
              <p>En las dos.</p>
              <p>Hay instaladores para casa y negocio, y otros para autos.</p>
              <p>No se mezclan.</p>
              <p>Cada uno se forma para la película de su área.</p>
              <p>Un solo instalador no puede ser experto en todo.</p>
            </details>
            <details>
              <summary>¿Qué marca instalan?</summary>
              <p>Instalamos películas Hightech, nuestra marca.</p>
              <p>Es la línea IR nanocerámica.</p>
              <p>Son películas que vienen de otro país.</p>
              <p>Se fabrican siguiendo lo que pide Hightech.</p>
            </details>
            <details>
              <summary>¿Cobran andamio en casa o negocio?</summary>
              <p>El andamio solo se cobra en lugares de doble o triple altura.</p>
              <p>Eso quiere decir ventanas muy altas, como de dos o tres pisos.</p>
            </details>
          </div>
        </div>
      </section>

      {/* 10. CIERRE */}
      <section className={`${styles.sectionDark} ${styles.closing}`} aria-labelledby="cierre-titulo">
        <div className={styles.shell}>
          <span className={styles.sunRule} aria-hidden="true" />
          <h2 id="cierre-titulo">Cuéntanos qué te molesta del sol.</h2>
          <p>Mándanos fotos de tus cristales o el modelo de tu auto.</p>
          <div className={styles.ctaRow}>
            <CotizaWhatsApp message={mensaje} variant="light" />
            <p className={styles.ctaNote} style={{ color: "#fff" }}>Te contestamos el mismo día.</p>
          </div>
        </div>
      </section>

      <MobileBar message={mensaje} />
    </div>
  );
}
