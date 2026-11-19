import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { getGoogleReviews } from "@/lib/google-reviews";
import { addressLine, airportName, googleProfile } from "@/lib/public-facts";
import { truth } from "@/lib/truth";
import { BocetoBanner, CotizaWhatsApp, Fuente, MobileBar, Pendiente, leyes, mensajes } from "../_components/Boceto";
import styles from "../boceto.module.css";

export const metadata: Metadata = {
  title: { absolute: "BOCETO portada | HIGHTECH Polarizados" },
  description: "Boceto de portada para revisión interna. No es la web publicada.",
  robots: { index: false, follow: false },
};

const mensaje = mensajes.portada;

// Fragmentos textuales de reseñas reales del perfil de Google (content/google-reviews.json).
const reseñasElegidas = [
  {
    author: "Valeria Garnica",
    excerpt:
      "Tenía una habitación donde pegaba el sol todo el tiempo, pero no quería perder la vista […] me mostraron una película transparente que me sorprendió mucho, bajó el calor de la habitación.",
  },
  {
    author: "Christian Chávez",
    excerpt:
      "Ahora el sol no se siente como antes […] una de las ventanas no había quedado bien y decidieron repetir el proceso sin dudar.",
  },
  {
    author: "Marivi AC",
    excerpt: "Ofrecen los productos adecuados para cada ubicación.",
  },
] as const;

export default function BocetoPortadaPage() {
  const perfilGoogle = getGoogleReviews()[0]?.sourceUrl ?? truth.contact.mapsUrl;

  return (
    <div className={styles.page}>
      <BocetoBanner />

      {/* 1. HERO */}
      <section className={styles.hero} aria-labelledby="hero-titulo">
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div>
            <span className={styles.sunRule} aria-hidden="true" />
            <p className={styles.kicker}>Casa, negocio y auto · Zapopan y Guadalajara</p>
            <h1 id="hero-titulo">Menos calor, sin quedarte a oscuras.</h1>
            <p className={styles.heroText}>
              ¿Tu cuarto parece horno? ¿El aire no enfría? Le ponemos película a tus cristales para que entre menos calor. Tú eliges qué tan claro queda.
            </p>
            <p className={styles.brandLine}>Distribuidores en México de las películas Hightech</p>
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
                <li>«Parece horno.»</li>
                <li>«El aire no enfría.»</li>
                <li>«Mi vecino me ve.»</li>
                <li>«Reflejo en la pantalla.»</li>
              </ul>
            </div>
            <div className={styles.quoteGroup}>
              <h3><Icon name="car" size={20} /> En el auto</h3>
              <ul className={styles.quoteList}>
                <li>«Ya tengo polarizado y no sirve.»</li>
              </ul>
              <Pendiente>más frases reales de clientes de auto, tomadas de los chats de WhatsApp (no se inventan).</Pendiente>
            </div>
          </div>
          <Fuente>frases del mapa de diagnóstico (base de conocimiento, línea 127).</Fuente>
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
              Dato de laboratorio de la ficha del fabricante. Ya instalada puede cambiar según el cristal.
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
                <strong>+{googleProfile.count}</strong>
                <span>reseñas en Google, al 15 de octubre de 2026.</span>
              </div>
              <p><a href={perfilGoogle}>Ver las reseñas en Google</a></p>
            </div>
          </div>
          <div className={styles.reviews}>
            {reseñasElegidas.map((r) => (
              <figure className={styles.review} key={r.author}>
                <blockquote>«{r.excerpt}»</blockquote>
                <figcaption>{r.author} · reseña en Google</figcaption>
              </figure>
            ))}
          </div>
          <Pendiente>Fer confirma el permiso de estas 3 personas para usar su nombre y su reseña (son públicas en Google y ya salen en la web actual).</Pendiente>
          <Fuente>aeropuerto: Fer, 19 nov 2026, y texto de la web actual; reseñas: perfil de Google (content/google-reviews.json); conteo: public-facts.ts.</Fuente>
        </div>
      </section>

      {/* 6. QUIÉNES SOMOS */}
      <section className={styles.sectionAlt} aria-labelledby="nosotros-titulo">
        <div className={`${styles.shell} ${styles.aboutGrid}`}>
          <div>
            <p className={styles.kicker}>Quiénes somos</p>
            <h2 id="nosotros-titulo">Fernando Chalita, fundador y director.</h2>
            <Pendiente>por qué empezó Fernando (una o dos frases suyas).</Pendiente>
            <Pendiente>fotos reales del equipo y del taller.</Pendiente>
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
          <Fuente>base de conocimiento §1 y §2 ({addressLine}).</Fuente>
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
            <p>En Jalisco es común ver el parabrisas con película clara (75 o 70) y los laterales en 35. Es costumbre, no una regla.</p>
            <p>El tono de cada cristal lo platicamos contigo; en parabrisas el más común es el IR75.</p>
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
              <span className={styles.from}>Desde $3,500</span>
              <p>Laterales y medallón de un auto compacto. Parabrisas desde $1,500.</p>
              <p className={styles.small}>
                Precio en efectivo. Con tarjeta o transferencia se suma el IVA (16%). Hasta 3 meses sin intereses (6 en promociones); los meses sin intereses no se combinan con descuentos.
              </p>
            </div>
            <div className={styles.priceBlock}>
              <h3><Icon name="home" size={22} /> Casa y negocio</h3>
              <p>Nanocerámica para casa y negocio: precio por m² con IVA incluido.</p>
              <Pendiente>Fer confirma la cifra con IVA (tarifa de lista $850/m² + IVA).</Pendiente>
              <p className={styles.small}>Mínimo por proyecto: $1,500.</p>
            </div>
          </div>

          <h3 style={{ marginTop: "2.5rem" }}>Garantía de la película</h3>
          <ul className={styles.warranty}>
            <li><span>Nanocerámica, auto y casa</span><strong>10 años</strong></li>
            <li><span>Película instalada por fuera del cristal</span><strong>1 año</strong></li>
            <li><span>Plata Reflecta</span><strong>5 o 10 años según la línea</strong></li>
          </ul>
          <p style={{ marginTop: "1rem" }}>La instalación se cubre en el certificado de garantía HIGHTECH que te entregamos.</p>
          <Pendiente>póliza escrita revisada por abogado.</Pendiente>
          <Fuente>tarifa CHICO (precios_auto_live_20261109.json); reglas de pago de Fer; mínimo: config minimo_pedido; garantías: base de conocimiento §6 y brief.</Fuente>
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
              <summary>¿Quién fabrica la película?</summary>
              <p>Son películas Hightech, línea IR nanocerámica. High Tech Polarizados es distribuidor en México de Hightech y de 3M.</p>
            </details>
          </div>
          <Fuente>base de conocimiento §7 y §9; domicilio: texto de la web actual (public-facts.ts).</Fuente>
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
            <p className={styles.ctaNote} style={{ color: "#fff" }}>Te contestamos el mismo día, de lunes a sábado.</p>
          </div>
        </div>
      </section>

      <MobileBar message={mensaje} />
    </div>
  );
}
