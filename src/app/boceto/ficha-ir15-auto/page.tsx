import type { Metadata } from "next";
import { getNanoProduct, type NanoProduct } from "@/lib/truth";
import { BocetoBanner, CotizaWhatsApp, MobileBar, Pendiente, leyes, mensajes } from "../_components/Boceto";
import styles from "../boceto.module.css";

export const metadata: Metadata = {
  title: { absolute: "BOCETO ficha IR15 auto | High Tech Polarizados México" },
  description: "Boceto de ficha de producto para revisión interna. No es la web publicada.",
  robots: { index: false, follow: false },
};

const mensaje = mensajes.fichaIr15Auto;

function product(id: string): NanoProduct {
  const found = getNanoProduct(id);
  if (!found) throw new Error(`Falta ${id} en publication-truth.json`);
  return found;
}

const ir15 = product("IR15");
const comparar = [product("IR35"), ir15, product("IR5")];

/** Esquema de tonos: gris por CSS según la luz que deja pasar. No es foto. */
const escala = ["IR75", "IR50", "IR35", "IR15", "IR5"].map((id) => {
  const p = product(id);
  const lightness = Math.round(14 + p.vlt * 0.8);
  return { id: p.id, vlt: p.vlt, color: `hsl(210 8% ${lightness}%)` };
});

export default function BocetoFichaIr15AutoPage() {
  return (
    <div className={styles.page}>
      <BocetoBanner />

      {/* HERO */}
      <section className={styles.fichaHero} aria-labelledby="ficha-titulo">
        <div className={`${styles.shell} ${styles.fichaHeroGrid}`}>
          <div>
            <span className={styles.sunRule} aria-hidden="true" />
            <h1 id="ficha-titulo">
              <span className={styles.toneName}>IR15</span>
              <span className={styles.toneSub}>Película IR15 Hightech, línea IR nanocerámica, para auto</span>
            </h1>
            <p className={styles.lead}>Para los cristales traseros de tu auto: se ve oscuro, de día cuesta ver hacia adentro y entra menos calor.</p>
            <p className={styles.brandLine}>Instalamos películas Hightech, nuestra marca.</p>
            <div className={styles.ctaRow}>
              <CotizaWhatsApp message={mensaje} />
            </div>
          </div>
          <div className={styles.heroStat}>
            <p className={styles.bigFigure}>
              <span className={styles.bigNumber}>{ir15.tser}%</span>
              <span className={styles.bigCaption}>Bloquea hasta {ir15.tser}% del calor.</span>
            </p>
            <p className={styles.context}>
              De toda la energía del sol que llega al cristal, la película rechaza hasta {ir15.tser}%, según la ficha técnica. Es un dato de laboratorio: en tu auto puede variar según el cristal. No es una promesa de grados.
            </p>
          </div>
        </div>
      </section>

      {/* DATOS. Números: ficha SRC-TECH-SEP19 (SoT v0.19 §7). Grosor: no se publica. */}
      <section className={styles.sectionAlt} aria-labelledby="datos-titulo">
        <div className={styles.shell}>
          <p className={styles.kicker}>Los números</p>
          <h2 id="datos-titulo">Qué hace el IR15.</h2>
          <dl className={styles.specs}>
            <div className={styles.spec}>
              <dt><span>{ir15.tser}%</span>del calor bloqueado</dt>
              <dd>Es el TSER de la ficha: de toda la energía del sol que llega al cristal, cuánta rechaza la película.</dd>
            </div>
            <div className={styles.spec}>
              <dt><span>{ir15.vlt}%</span>de la luz pasa</dt>
              <dd>De cada 100 partes de luz, pasan {ir15.vlt}. Por eso se ve oscuro y de día cuesta ver hacia adentro.</dd>
            </div>
            <div className={styles.spec}>
              <dt><span>{ir15.uv}%</span>de los rayos UV bloqueados</dt>
              <dd>Igual que en todos los tonos de la gama, del más claro al más oscuro.</dd>
            </div>
            <div className={styles.spec}>
              <dt><span>{ir15.infraredRejection}%</span>de rechazo infrarrojo, medido a {ir15.infraredWavelengthNm} nm</dt>
              <dd>
                Es una medida en un solo punto del infrarrojo ({ir15.infraredWavelengthNm} nanómetros), no en toda la banda. Por eso no mide el calor total: el número del calor es el de arriba, {ir15.tser}%.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* COMPARA. VLT y TSER: ficha SRC-TECH-SEP19 (SoT v0.19 §7). */}
      <section className={styles.section} aria-labelledby="compara-titulo">
        <div className={styles.shell}>
          <p className={styles.kicker}>Compárala</p>
          <h2 id="compara-titulo">Lo que cuenta es el calor que bloquea, no solo el tono.</h2>
          <p className={styles.lead}>Mira el número del calor, no solo el tono.</p>
          <div className={styles.compare}>
            {comparar.map((p) => (
              <div className={`${styles.compareCol} ${p.id === "IR15" ? styles.current : ""}`} key={p.id}>
                <h3>
                  {p.id}
                  {p.id === "IR15" ? <small>Esta película</small> : null}
                </h3>
                <dl>
                  <div><dt>Luz que pasa</dt><dd>{p.vlt}%</dd></div>
                  <div><dt>Calor bloqueado</dt><dd>{p.tser}%</dd></div>
                  <div><dt>UV bloqueado</dt><dd>{p.uv}%</dd></div>
                </dl>
              </div>
            ))}
          </div>
          <div className={styles.tip}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/boceto/glazy-profe-tips.svg" alt="" width={72} height={72} />
            <p>Lo que cuenta es el calor que bloquea, no solo el tono: mira el número del calor.</p>
          </div>
        </div>
      </section>

      {/* ESQUEMA DE TONOS */}
      <section className={styles.sectionAlt} aria-labelledby="tonos-titulo">
        <div className={`${styles.shell} ${styles.narrow}`}>
          <p className={styles.kicker}>Qué tan oscuro se ve</p>
          <h2 id="tonos-titulo">Los cinco tonos, del más claro al más oscuro.</h2>
          <ul className={styles.toneScale}>
            {escala.map((t) => (
              <li key={t.id} className={t.id === "IR15" ? styles.currentTone : undefined}>
                <span className={styles.swatch} style={{ background: t.color }} aria-hidden="true" />
                <span className={styles.toneLabel}>
                  <strong>{t.id}</strong> deja pasar {t.vlt}% de la luz{t.id === "IR15" ? " · esta película" : ""}
                </span>
              </li>
            ))}
          </ul>
          <span className={styles.schemeTag}>Esquema, no es foto</span>
          <Pendiente>foto real del IR15 instalado en un auto.</Pendiente>
        </div>
      </section>

      {/* PARA QUIÉN. Tono 15: base de conocimiento §4. Norma: PDF del Congreso de Jalisco, Reglamento art. 59 fr. VIII y Ley art. 360 fr. IX. */}
      <section className={styles.section} aria-labelledby="quien-titulo">
        <div className={styles.shell}>
          <p className={styles.kicker}>¿Es para ti?</p>
          <h2 id="quien-titulo">Dónde sí y dónde no.</h2>
          <div className={styles.fitGrid}>
            <div>
              <h3>Sí, si quieres</h3>
              <ul>
                <li>Un tono oscuro en los cristales traseros.</li>
                <li>Más privacidad de día: desde afuera cuesta ver hacia adentro.</li>
              </ul>
            </div>
            <div>
              <h3>Mejor otro tono</h3>
              <ul>
                <li>Si quieres ver bien hacia afuera de noche sin luz adentro.</li>
              </ul>
            </div>
          </div>
          <div className={styles.lawNote} style={{ marginTop: "1.5rem" }}>
            <p>«Parabrisas, medallones y vidrios en buen estado que permitan la visibilidad hacia el interior del vehículo; bajo ninguna circunstancia el parabrisas estará polarizado;»</p>
            <p>«Usar cristales polarizados u otros elementos que impidan totalmente la visibilidad hacia el interior del vehículo, o polarizado de cualquier intensidad en el parabrisas del vehículo;»</p>
            <p className={styles.lawCite}><a href={leyes.reglamento}>Reglamento art. 59 fr. VIII</a> / <a href={leyes.ley}>Ley art. 360 fr. IX</a></p>
          </div>
          <p>En el parabrisas lo más común es el IR75. Si quieres privacidad, en High Tech recomendamos máximo IR35, para que te sientas cómodo y conserves la visibilidad. Es lo que suele hacerse.</p>
        </div>
      </section>

      {/* GARANTÍA Y CUIDADOS. Garantía de la película: Fer, 20 nov 2026. Cuidados: Fer, 26 oct 2026 (base §6). */}
      <section className={styles.sectionAlt} aria-labelledby="garantia-titulo">
        <div className={styles.shell}>
          <div className={styles.fitGrid}>
            <div>
              <p className={styles.kicker}>Garantía</p>
              <h2 id="garantia-titulo">10 años en la película nanocerámica interior.</h2>
            </div>
            <div>
              <p className={styles.kicker}>Después de instalar</p>
              <h2>Cuidados.</h2>
              <ol className={styles.care}>
                <li><span>No bajes los vidrios en 48 horas.</span></li>
                <li><span>Deja el desempañador trasero apagado 3 días.</span></li>
                <li><span>Las burbujitas de agua se van solas en 15 a 30 días. No las piques.</span></li>
                <li><span>Limpia con paño suave, sin amoníaco.</span></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* PRECIO. Auto: Fer, 19–20 nov 2026 (piso $4,000 y parabrisas $1,500 en efectivo, sin IVA; con tarjeta o transferencia se suma IVA; todos los métodos, hasta 3 MSI). */}
      <section className={styles.section} aria-labelledby="precio-titulo" id="precio">
        <div className={styles.shell}>
          <p className={styles.kicker}>Precio</p>
          <h2 id="precio-titulo">Cuánto cuesta en tu auto.</h2>
          <div className={styles.priceBlock}>
            <span className={styles.from}>Desde $4,000</span>
            <p>Película IR nanocerámica Hightech. Laterales y medallón. Parabrisas desde $1,500.</p>
            <p className={styles.small}>Con tarjeta o transferencia se suma IVA.</p>
            <p className={styles.small}>Aceptamos todos los métodos de pago. Hasta 3 meses sin intereses.</p>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className={`${styles.sectionDark} ${styles.closing}`} aria-labelledby="cierre-ficha-titulo">
        <div className={styles.shell}>
          <span className={styles.sunRule} aria-hidden="true" />
          <h2 id="cierre-ficha-titulo">Dinos tu auto y te pasamos el precio.</h2>
          <p>Marca, modelo y año. Con eso cotizamos.</p>
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
