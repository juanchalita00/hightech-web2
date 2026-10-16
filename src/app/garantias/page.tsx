import type { Metadata } from "next";
import Link from "next/link";
import { ProductCTA } from "@/components/ProductCTA";
import { SimpleExample } from "@/components/SimpleExample";

export const metadata: Metadata = {
  alternates: { canonical: "/garantias/" },
  title: { absolute: "Garantías de polarizado | HIGHTECH Polarizados" },
  description: "Nanocerámica y automotriz, 10 años. Películas de seguridad, 5 o 10 años según la película. HIGHTECH Polarizados, Zapopan.",
};

const rows = [
  ["Nanocerámica en casa o negocio", "10 años"],
  ["Nanocerámica automotriz", "10 años"],
  ["Película de seguridad", "5 o 10 años, según la película"],
];

export default function Page() {
  return (
    <>
      <section className="section">
        <div className="container" style={{ display: "grid", gap: "1.25rem", maxWidth: "46rem" }}>
          <p className="eyebrow">Garantías</p>
          <h1>Plazos de la película instalada.</h1>
          <p>La garantía cubre la película que instalamos, por el plazo de su línea. El cristal, un golpe o un mal uso quedan fuera.</p>
          <table className="install-times">
            <caption className="sr-only">Plazos de garantía</caption>
            <thead><tr><th>Línea</th><th>Plazo</th></tr></thead>
            <tbody>
              {rows.map(([line, term]) => <tr key={line}><td>{line}</td><td>{term}</td></tr>)}
            </tbody>
          </table>
          <SimpleExample>
            Es como la garantía de un electrodoméstico: cubre el producto por un plazo, no cualquier cosa que le pase en la casa.
          </SimpleExample>
          <p>Película inteligente y otros acabados se confirman en la cotización de ese trabajo. <Link href="/contacto/#cotizar">Cotizar</Link>.</p>
        </div>
      </section>
      <ProductCTA
        title="Si ya tienes una instalación y quieres revisar la garantía, escríbenos."
        text="Con la fecha y una foto del cristal alcanzamos a ubicar el trabajo."
        cta="WhatsApp"
        context={{ sourcePage: "/garantias/" }}
      />
    </>
  );
}
