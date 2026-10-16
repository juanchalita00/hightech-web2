import type { Metadata } from "next";
import Link from "next/link";
import { ProductCTA } from "@/components/ProductCTA";
import { SimpleExample } from "@/components/SimpleExample";

export const metadata: Metadata = {
  alternates: { canonical: "/peliculas/seguridad/industria-bpm/" },
  title: { absolute: "Película de seguridad para plantas y BPM | HIGHTECH Polarizados" },
  description: "En plantas de alimento, bebida y farma, la película de seguridad ayuda a cumplir el punto de control de vidrio que revisan los auditores. No certifica la planta.",
};

const sectors = ["Alimentos", "Bebidas", "Lácteos", "Panificación", "Farmacéutica", "Comedores industriales", "Almacenes"];

export default function Page() {
  return (
    <>
      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1.2rem", maxWidth: "46rem" }}>
          <p className="eyebrow">Industria</p>
          <h1>Un punto más que revisan los auditores: el vidrio.</h1>
          <p>
            En plantas de alimento, bebida y farmacéutica, el vidrio de una ventana, una mirilla o un cancel es un punto de control.
            Si se rompe, los fragmentos no deberían caer sobre el producto o la línea.
          </p>
          <p>
            La película de seguridad retiene esos fragmentos. Ayuda a cumplir ese punto de las buenas prácticas de manufactura y de las auditorías GFSI
            —NOM-251, y esquemas como FSSC 22000, SQF, BRCGS o AIB—. No certifica la planta y no garantiza que una auditoría salga aprobada.
          </p>
          <SimpleExample>
            Es como la tapa de un vaso junto a la línea: no evita que el vaso exista, evita que un trozo caiga en lo que se está preparando.
          </SimpleExample>
          <p>No decimos que el vidrio esté prohibido. Decimos que, donde el cristal se queda, la película es la capa que lo contiene si falla.</p>
          <ul className="sarro-uses">
            {sectors.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p><Link href="/peliculas/seguridad/">Volver a película de seguridad</Link></p>
        </div>
      </section>
      <ProductCTA
        title="Si tienes una auditoría encima, vemos los cristales de la zona de proceso."
        text="La cotización de seguridad no tiene precio de lista: depende del metraje y del espesor."
        cta="WhatsApp"
        context={{ sourcePage: "/peliculas/seguridad/industria-bpm/", product: "Seguridad", businessLine: "commercial", problem: "safety" }}
        secondaryHref="/comercial/"
        secondaryLabel="Ver proyectos de negocio"
      />
    </>
  );
}
