import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationFinalCTA } from "@/components/ApplicationFinalCTA";
import { Icon } from "@/components/Icon";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import styles from "./servicios.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/servicios/" },
  title: { absolute: "Soluciones para cristales | HIGHTECH Polarizados" },
  description: "Encuentra soluciones para reducir calor y deslumbramiento, mejorar privacidad, protección UV o seguridad en cristales residenciales, comerciales y automotrices.",
};

type IconName = Parameters<typeof Icon>[0]["name"];

const needs: readonly { icon: IconName; title: string; text: string; cta: string; href: string }[] = [
  { icon: "sun", title: "Entra demasiado calor", text: "Si el sol calienta tus ventanas y el espacio se vuelve incómodo, primero hay que revisar control solar, exposición y cuánta luz quieres conservar.", cta: "Ver cómo reducir el calor", href: "/guias/reducir-calor-ventanas/" },
  { icon: "glare", title: "Hay demasiada luz o reflejos", text: "Para pantallas, áreas de trabajo o espacios con exceso de luz, podemos reducir deslumbramiento sin oscurecer más de lo necesario.", cta: "Revisar opciones de luz", href: "/peliculas/nanoceramica/" },
  { icon: "privacy", title: "Quiero que se vea menos hacia adentro", text: "La privacidad depende del nivel de luz, el tono y el momento del día. Te ayudamos a elegir cuánto quieres limitar la vista sin prometer un efecto que no existe.", cta: "Encontrar privacidad", href: "/peliculas/privacidad/" },
  { icon: "uv", title: "Quiero proteger interiores del sol", text: "Los rayos UV contribuyen al deterioro de superficies, muebles y materiales. La protección UV se evalúa por separado de qué tan oscura se ve una película.", cta: "Entender protección UV", href: "/guias/proteccion-uv-ventanas/" },
  { icon: "shield", title: "Quiero reforzar el comportamiento del cristal", text: "Una película de seguridad puede ayudar a mantener unidos los fragmentos cuando el cristal se rompe. La solución correcta depende del objetivo y del sistema completo.", cta: "Ver soluciones de seguridad", href: "/peliculas/seguridad/" },
  { icon: "car", title: "Quiero polarizar mi vehículo", text: "Comparamos claridad, apariencia, privacidad y uso nocturno antes de elegir el tono adecuado para los cristales que quieres trabajar.", cta: "Ver línea automotriz", href: "/automotriz/" },
];

const places: readonly { icon: IconName; label: string; title: string; text: string; cta: string; href: string }[] = [
  { icon: "home", label: "Residencial", title: "Casa o departamento", text: "Confort, luz, privacidad y control solar adaptados a cada espacio de la vivienda.", cta: "Ver residencial", href: "/residencial/" },
  { icon: "building", label: "Comercial", title: "Oficina, local o fachada", text: "Proyectos donde también importan operación, acceso, cantidad de cristal y necesidades distintas por zona.", cta: "Ver comercial", href: "/comercial/" },
  { icon: "car", label: "Automotriz", title: "Vehículo", text: "Selección de tono y alcance de instalación según claridad, apariencia, privacidad y uso.", cta: "Ver automotriz", href: "/automotriz/" },
];

const steps = [
  { title: "Nos cuentas qué quieres resolver", text: "Puede ser calor, exceso de luz, privacidad, seguridad o simplemente una duda sobre qué opción tiene sentido." },
  { title: "Aterrizamos la solución", text: "Revisamos el uso del espacio, la luz que quieres conservar y la información necesaria para recomendar una película o tono." },
  { title: "Cotizamos el alcance", text: "Con las medidas, la ubicación y la solución definida podemos preparar la propuesta correspondiente." },
] as const;

const layers = [
  { label: "Necesidad", text: "Calor, luz, privacidad, UV o seguridad" },
  { label: "Espacio", text: "Casa, empresa o vehículo" },
  { label: "Solución", text: "Película y tono según tu caso" },
] as const;

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <p className="eyebrow">Soluciones por necesidad</p>
            <h1 className={styles.heroTitle}>Empieza por lo que quieres cambiar en tus cristales.</h1>
            <p className={styles.heroLede}>Calor, exceso de luz, privacidad, protección UV, seguridad o una solución para tu vehículo. No necesitas saber qué película elegir para empezar.</p>
            <div className={styles.heroActions}>
              <a className="button button-primary" href="#necesidades">Encontrar mi solución <Icon name="arrow" size={18} /></a>
              <WhatsAppCTA label="Hablar con HIGHTECH" context={{ sourcePage: "/servicios/" }} position="HERO" className={styles.whatsSecondary} />
            </div>
          </div>
          <div className={styles.heroVisual} aria-hidden="true">
            {layers.map((layer, index) => (
              <div className={styles.layer} key={layer.label}>
                <span className={styles.layerIndex}>0{index + 1}</span>
                <strong>{layer.label}</strong>
                <small>{layer.text}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.needsSection}`} id="necesidades">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><p className="eyebrow">¿Qué quieres resolver?</p><h2>Empieza por el problema, no por la película.</h2></div>
            <p>La misma película no resuelve todos los espacios de la misma manera. Elige la situación que más se parece a lo que estás viviendo y te mostramos qué conviene revisar.</p>
          </div>
          <div className={styles.needsGrid}>
            {needs.map((need, index) => (
              <Link className={styles.needCard} href={need.href} key={need.title}>
                <div className={styles.needHead}><span className={styles.needIcon}><Icon name={need.icon} size={22} /></span><span className={styles.needIndex}>0{index + 1}</span></div>
                <h3>{need.title}</h3>
                <p>{need.text}</p>
                <span className={styles.needCta}>{need.cta} <Icon name="arrow" size={17} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`section section-dark ${styles.placesSection}`}>
        <div className="container">
          <div className="section-heading section-heading-split section-heading-on-dark">
            <div><p className="eyebrow eyebrow-light">¿Dónde lo necesitas?</p><h2>Casa, empresa o vehículo. No se especifican igual.</h2></div>
            <p className={styles.darkLede}>El mismo objetivo puede requerir decisiones distintas según el espacio, la cantidad de cristal, el acceso, la iluminación y la forma en que se utiliza.</p>
          </div>
          <div className={styles.placesGrid}>
            {places.map((place) => (
              <Link className={styles.placeCard} href={place.href} key={place.href}>
                <span className={styles.placeIcon}><Icon name={place.icon} size={22} /></span>
                <p className={styles.placeLabel}>{place.label}</p>
                <h3>{place.title}</h3>
                <p>{place.text}</p>
                <span className={styles.placeCta}>{place.cta} <Icon name="arrow" size={17} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.stepsSection}`}>
        <div className="container">
          <div className="section-heading"><p className="eyebrow">Cómo trabajamos</p><h2>No tienes que llegar con la solución resuelta.</h2></div>
          <ol className={styles.steps}>
            {steps.map((step, index) => (
              <li key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.bridgeSection}>
        <div className={`container ${styles.bridge}`}>
          <div>
            <p className="eyebrow">Si quieres entender antes de decidir</p>
            <h2>También puedes profundizar en la parte técnica.</h2>
          </div>
          <div>
            <p>VLT, UV, rechazo infrarrojo, TSER, privacidad de noche y estrés térmico responden preguntas distintas. Las guías están para ayudarte a comparar sin convertir un porcentaje aislado en una promesa.</p>
            <div className={styles.bridgeLinks}>
              <Link className="text-link" href="/guias/">Explorar guías <Icon name="arrow" size={17} /></Link>
              <Link className="text-link" href="/peliculas/">Comparar películas <Icon name="arrow" size={17} /></Link>
            </div>
          </div>
        </div>
      </section>

      <ApplicationFinalCTA eyebrow="Tu necesidad primero" title="Cuéntanos qué quieres resolver y te ayudamos a convertirlo en una solución concreta." ctaLabel="Hablar por WhatsApp" context={{ sourcePage: "/servicios/" }} secondaryHref="/contacto/" secondaryLabel="Ver formas de contacto" />
    </div>
  );
}
