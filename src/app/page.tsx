import type { Metadata } from "next";
import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { Icon } from "@/components/Icon";
import { JourneyCards } from "@/components/JourneyCards";
import { NanoSpectrum } from "@/components/NanoSpectrum";
import { ProblemGrid } from "@/components/ProblemGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

export const metadata: Metadata = { title: "HIGHTECH Polarizados", description: "Soluciones profesionales para cristales residenciales, comerciales y automotrices.", alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="trust-strip" aria-label="Qué define la recomendación HIGHTECH">
        <div className="container trust-strip-inner">
          <span><Icon name="glass" size={19}/> Cristal y aplicación</span>
          <i aria-hidden="true" />
          <span><Icon name="sun" size={19}/> Control solar</span>
          <i aria-hidden="true" />
          <span><Icon name="privacy" size={19}/> Luz y privacidad</span>
          <i aria-hidden="true" />
          <span><Icon name="shield" size={19}/> Límites explicados</span>
        </div>
      </section>

      <section className="section section-problems">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <p className="eyebrow">Empieza por el problema</p>
              <h2>No necesitas saber qué película comprar.</h2>
            </div>
            <p>La recomendación cambia según lo que quieras resolver, la cantidad de luz que quieras conservar y las condiciones reales del cristal.</p>
          </div>
          <ProblemGrid />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading section-heading-on-dark">
            <p className="eyebrow eyebrow-light">Tres formas de trabajar con HIGHTECH</p>
            <h2>Casa, empresa o vehículo. Cada proyecto pide una lógica distinta.</h2>
          </div>
          <JourneyCards />
        </div>
      </section>

      <section className="section section-nano">
        <div className="container nano-layout">
          <div className="nano-copy">
            <p className="eyebrow">Nanocerámica HIGHTECH</p>
            <h2>El tono cambia la luz. La ficha cambia el contexto.</h2>
            <p className="lede-small">Nuestra gama activa va desde IR75, pensada para conservar mucha claridad, hasta IR5, la opción más oscura. Todos los datos se muestran como especificaciones de ficha, no como promesas universales de temperatura.</p>
            <div className="nano-facts">
              <div><strong>99%</strong><span>rechazo UV</span></div>
              <div><strong>95%</strong><span>IR a 950 nm</span></div>
              <div><strong>5</strong><span>tonos activos</span></div>
            </div>
            <Link href="/peliculas/nanoceramica/" className="text-link text-link-strong">Entender la gama completa <Icon name="arrow" size={18}/></Link>
          </div>
          <NanoSpectrum />
        </div>
      </section>

      <section className="section section-method">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <p className="eyebrow">Método HIGHTECH</p>
              <h2>Primero entendemos. Después recomendamos.</h2>
            </div>
            <p>El objetivo es que la solución corresponda al problema real y que sepas qué esperar antes de instalar.</p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="section section-proof">
        <div className="container proof-layout">
          <div className="proof-panel">
            <p className="eyebrow eyebrow-light">Información técnica sin humo</p>
            <h2>Un porcentaje aislado no cuenta toda la historia.</h2>
            <p>Por eso distinguimos VLT, rechazo UV, rechazo infrarrojo medido a 950 nm y TSER. También explicamos cuándo la privacidad cambia de noche o cuándo una aplicación requiere revisar compatibilidad.</p>
            <Link className="button button-inverse" href="/guias/">Explorar guías técnicas <Icon name="arrow" size={18}/></Link>
          </div>
          <div className="proof-list">
            <article>
              <span>01</span>
              <div><h3>Datos de ficha</h3><p>La gama nano tiene valores técnicos mapeados y una fuente identificada por tono.</p></div>
            </article>
            <article>
              <span>02</span>
              <div><h3>Contexto antes que slogans</h3><p>95% de rechazo IR a 950 nm no se convierte en “95% menos calor”.</p></div>
            </article>
            <article>
              <span>03</span>
              <div><h3>Limitaciones visibles</h3><p>Privacidad, compatibilidad y legalidad se explican donde realmente afectan la decisión.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta-card">
          <div>
            <p className="eyebrow eyebrow-light">¿Qué quieres resolver?</p>
            <h2>Cuéntanos el espacio o el vehículo. Nosotros te ayudamos a aterrizar la solución.</h2>
          </div>
          <div className="final-cta-actions">
            <WhatsAppCTA label="Abrir WhatsApp" context={{ sourcePage: "/" }} position="FINAL_CTA" className="button-light" />
            <Link href="/contacto/" className="button button-ghost-light">Ver formas de contacto</Link>
          </div>
        </div>
      </section>
    </>
  );
}
