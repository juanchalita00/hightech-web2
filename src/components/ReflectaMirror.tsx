import Image from "next/image";
import { SimpleExample } from "@/components/SimpleExample";

export function ReflectaMirror() {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div>
            <p className="eyebrow eyebrow-light">De día y de noche</p>
            <h2>De día se ve como espejo. De noche, si prendes la luz, se ve hacia adentro.</h2>
          </div>
          <p>No es un espejo de un solo lado. La privacidad sigue a la luz: gana el lado que está más iluminado.</p>
        </div>
        <div className="reflecta-pair">
          <figure className="reflecta-day">
            <div className="reflecta-shot">
              <Image
                src="/images/comparador/fachada-exterior-base.webp"
                alt="Fachada de día con película Plata Reflecta: el cristal refleja el cielo como un espejo."
                width={1600}
                height={900}
              />
              <Image
                className="reflecta-shine"
                src="/images/comparador/reflecta-reflection.webp"
                alt=""
                width={1600}
                height={900}
              />
            </div>
            <figcaption>Día. El cristal refleja el exterior y cuesta ver la sala.</figcaption>
          </figure>
          <figure className="reflecta-night-wash">
            <div className="reflecta-shot">
              <Image
                src="/images/comparador/fachada-exterior-base.webp"
                alt="La misma fachada de noche: con la luz interior encendida, se alcanza a ver hacia adentro."
                width={1600}
                height={900}
              />
            </div>
            <figcaption>Noche, con la luz de la sala encendida. La vista hacia adentro regresa.</figcaption>
          </figure>
        </div>
        <SimpleExample>
          Es como unos lentes de espejo: de día no se ven los ojos. De noche, si hay luz detrás del lente, sí se alcanza a ver.
        </SimpleExample>
      </div>
    </section>
  );
}
