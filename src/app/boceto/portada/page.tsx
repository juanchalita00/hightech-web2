import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { getGoogleReviews } from "@/lib/google-reviews";
import { addressLine, airportName, googleProfile } from "@/lib/public-facts";
import { truth } from "@/lib/truth";
import { BocetoBanner, CotizaWhatsApp, Estrellas, Fuente, MobileBar, Pendiente, leyes, mensajes } from "../_components/Boceto";
import styles from "../boceto.module.css";

export const metadata: Metadata = {
  title: { absolute: "BOCETO portada | High Tech Polarizados México" },
  description: "Boceto de portada para revisión interna. No es la web publicada.",
  robots: { index: false, follow: false },
};

const mensaje = mensajes.portada;

/** Tres reseñas reales de content/google-reviews.json, texto y nombre tal cual. Se omite la de Michael Richards («10 grados más fresca», sin método). */
const autoresDestacados = ["Valeria Garnica", "Christian Chávez", "Miguel Tiongson"] as const;

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
          <p className={styles.kicker}>Lo que nos cuentan</p>
          <h2 id="problema-titulo">¿Te suena?</h2>
          <div className={styles.quotes}>
            <div className={styles.quoteGroup}>
              <h3><Icon name="home" size={20} /> En casa o en el negocio</h3>
              <ul className={styles.quoteList}>
                <li>«Es una recámara que tiene vista al sur, y se calienta que parece invernadero.»</li>
                <li>«Es para una terraza que se siente como horno.»</li>
                <li>«Busco que el vecino no me vea incluso con toda la cortina arriba.»</li>
                <li>«…cuenta con aire acondicionado pero aún así.»</li>
                <li>«Me da mucho calor en la noche y no puedo dormir.»</li>
              </ul>
              <Fuente>frases de clientes de casa y negocio en chats de WhatsApp, sin datos personales.</Fuente>
            </div>
            <div className={styles.quoteGroup}>
              <h3><Icon name="car" size={20} /> En el auto</h3>
              <ul className={styles.quoteList}>
                <li>«Lo quiero para disminuir el calor.»</li>
                <li>«Al manejar entra el sol y me quema.»</li>
                <li>«Lo necesito más para darle privacidad que para el calor.»</li>
                <li>«Para no tener multas.»</li>
                <li>«Me interesa más reducir calor y la exposición a los rayos UV.»</li>
              </ul>
              <Fuente>frases de clientes de auto en chats de WhatsApp 2024–2026, sin datos personales.</Fuente>
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

      {/* ESPECIALISTAS POR ÁREA */}
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
            </div>
            <div className={styles.specialty}>
              <h3><Icon name="car" size={20} /> Auto</h3>
              <p>Instaladores de automotriz, formados para la película de auto.</p>
            </div>
          </div>
          <p>No se mezclan. Un solo instalador no puede ser experto en todo; cada quien se especializa donde tiene más potencial.</p>
          <Fuente>Fer, 19 nov 2026.</Fuente>
        </div>
      </section>

      {/* 3. EL DIAGNÓSTICO */}
      <section className={styles.section} aria-labelledby="diagnostico-titulo">
        <div className={styles.shell}>
          <p className={styles.kicker}>Cómo trabajamos</p>
          <h2 id="diagnostico-titulo">Primero vemos qué te molesta. Después, la película.</h2>
          <p className={styles.lead}>No vendemos polarizado por catálogo. Revisamos tu caso y te decimos qué sí te sirve.</p>
          <Pendiente>nombre del diagnóstico, lo define Fer.</Pendiente>
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
          <Fuente>posicionamiento y ruta de venta (base de conocimiento §1 y §7).</Fuente>
        </div>
      </section>

      {/* 4. BENEFICIOS */}
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
        <div className={styles.shell}>
          <Fuente>TSER y UV de la ficha SRC-TECH-SEP19 (System of Truth v0.19 §7); señal: base de conocimiento §4.</Fuente>
        </div>
      </section>

      {/* 5. PRUEBA */}
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
                <blockquote>{r.quote}</blockquote>
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
          <Fuente>aeropuerto: Fer, 19 nov 2026, y texto de la web actual; reseñas: perfil de Google (content/google-reviews.json), texto literal; conteo: public-facts.ts.</Fuente>
        </div>
      </section>

      {/* 6. QUIÉNES SOMOS */}
      <section className={styles.sectionAlt} aria-labelledby="nosotros-titulo">
        <div className={`${styles.shell} ${styles.aboutGrid}`}>
          <div>
            <p className={styles.kicker}>Quiénes somos</p>
            <h2 id="nosotros-titulo">High Tech Polarizados México.</h2>
            <p>High Tech Polarizados México es el distribuidor en todo México de las películas Hightech, nuestra marca, línea IR nanocerámica, para casa, negocio y auto.</p>
            <Pendiente>años de experiencia, con fuente.</Pendiente>
            <p>Primero revisa qué te molesta y el cristal; después recomienda el tono y la película, y te pasa la cotización. El auto se instala en el taller, con cita. Te contestamos el mismo día.</p>
            <p>Nuestro taller está en Tomás Mann 5348, Jardines Vallarta, Zapopan.</p>
            <p>Entre sus proyectos está el {airportName}: un pasillo de cristal junto a la plataforma, en operación continua.</p>
            <p>Tiene +{googleProfile.count} reseñas en Google, al 15 de octubre de 2026.</p>
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
        <div className={styles.shell}>
          <Fuente>taller y horario: base de conocimiento §1 y §2 ({addressLine}); aeropuerto: Fer, 19 nov 2026; reseñas: public-facts.ts; respuesta el mismo día: Fer, 19 nov 2026. Años de experiencia: PENDIENTE (SoT v0.19, sin evidencia aprobada).</Fuente>
        </div>
      </section>

      {/* 7. OBJECIONES */}
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
              <p>
                El <a href={leyes.reglamento}>Reglamento de Movilidad de Jalisco</a> pide que los cristales dejen ver hacia el interior y señala que el parabrisas no debe ir polarizado (art. 59, fr. VIII). La <a href={leyes.ley}>Ley de Movilidad</a> lo considera infracción con multa de 1 a 5 UMA (art. 360, fr. IX).
              </p>
            </div>
            <p>En el parabrisas lo más común es el IR75. Si quieres privacidad, en High Tech recomendamos máximo IR35, para que te sientas cómodo y conserves la visibilidad. Es lo que suele hacerse.</p>
            <p>El tono de cada cristal lo platicamos contigo.</p>
            <Pendiente>revisión del abogado de este texto.</Pendiente>
          </div>

          <div className={styles.objection}>
            <h3>«Me cotizaron la mitad»</h3>
            <p>Pregunta qué película y qué garantía te ofrecen. No todos los nanocerámicos rinden igual.</p>
            <p>Compara dos cosas: el número de calor en la ficha (TSER) y la garantía por escrito.</p>
          </div>
          <Fuente>objeciones: base de conocimiento §10; norma: PDF oficiales del Congreso de Jalisco.</Fuente>
        </div>
      </section>

      {/* 8. OFERTA, GARANTÍA Y PRECIOS */}
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
              <p>Nanocerámica para casa y negocio: precio por m² con IVA incluido.</p>
              <Pendiente>Fer confirma la cifra con IVA (tarifa de lista $850/m² + IVA).</Pendiente>
              <p className={styles.small}>Mínimo por proyecto: $1,500.</p>
            </div>
          </div>

          <h3 style={{ marginTop: "2.5rem" }}>Garantía de la película Hightech</h3>
          <ul className={styles.warranty}>
            <li><span>Nanocerámica, auto y casa</span><strong>10 años</strong></li>
            <li><span>Película instalada por fuera del cristal</span><strong>1 año</strong></li>
            <li><span>Plata Reflecta</span><strong>5 o 10 años según la línea</strong></li>
          </ul>
          <p style={{ marginTop: "1rem" }}>La instalación se cubre en el certificado de garantía HIGHTECH que te entregamos.</p>
          <Pendiente>póliza escrita revisada por abogado.</Pendiente>
          <Fuente>precio auto: Fer, 19 nov 2026 (el estándar es el piso; + IVA; pagos: todos los métodos, hasta 3 MSI); mínimo: config minimo_pedido; garantías: base de conocimiento §6 y brief.</Fuente>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className={styles.section} aria-labelledby="faq-titulo">
        <div className={`${styles.shell} ${styles.narrow}`}>
          <p className={styles.kicker}>Preguntas frecuentes</p>
          <h2 id="faq-titulo">Lo que más nos preguntan.</h2>
          <div className={styles.faq}>
            <details>
              <summary>¿Se ve hacia adentro de noche?</summary>
              <p>Sí, si adentro hay más luz que afuera. De día cuesta ver hacia adentro; de noche, con la luz prendida, se invierte.</p>
            </details>
            <details>
              <summary>¿Interfiere con el celular?</summary>
              <p>No. La película no corta la señal.</p>
            </details>
            <details>
              <summary>¿Cuánto tarda en mi auto?</summary>
              <p>Laterales y medallón, de 2 a 3 horas. El auto completo, de 3 a 4 horas.</p>
            </details>
            <details>
              <summary>¿Van a domicilio?</summary>
              <p>El auto se trabaja en el taller, con cita. A domicilio solo flotillas o autos de agencia.</p>
            </details>
            <details>
              <summary>¿Son especialistas en casa o solo en autos?</summary>
              <p>En las dos. En High Tech hay instaladores de residencial y de automotriz, y no se mezclan. Formamos a cada quien según las especificaciones de la película de su área, porque un solo instalador no puede ser experto en todo.</p>
            </details>
            <details>
              <summary>¿Qué marca instalan?</summary>
              <p>Instalamos películas Hightech, nuestra marca, línea IR nanocerámica. Son películas importadas, fabricadas bajo especificaciones Hightech.</p>
            </details>
          </div>
          <Fuente>base de conocimiento §7 y §9; domicilio: texto de la web actual (public-facts.ts); especialistas: Fer, 19 nov 2026.</Fuente>
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
