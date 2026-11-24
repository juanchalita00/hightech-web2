import Link from "next/link";
import { lineaIrSpecs, lineaIrWarranty } from "@/lib/linea-ir-specs";
import { toneName } from "@/lib/tones";

const rows = [
  { key: "vlt" as const, label: "Luz visible (VLT)" },
  { key: "tser" as const, label: "Energía solar total rechazada (TSER)" },
  { key: "infrared" as const, label: "IR a 950 nm" },
  { key: "uv" as const, label: "UV" },
  { key: "shading" as const, label: "Coeficiente de sombreado" },
];

export function LineaIrSpecsTable() {
  const tones = lineaIrSpecs;

  return (
    <>
      <div className="table-wrap linea-ir-specs-wrap" tabIndex={0} aria-label="Tabla de datos de la Línea IR">
        <table className="linea-ir-specs">
          <caption className="sr-only">
            Datos de ficha de los cinco tonos de la Línea IR: luz visible, energía solar total rechazada, rechazo infrarrojo a 950 nanómetros, rechazo UV, coeficiente de sombreado y garantía.
          </caption>
          <thead>
            <tr>
              <th scope="col">Tono</th>
              {tones.map((tone) => (
                <th scope="col" key={tone.id}>
                  <Link href={`/peliculas/nanoceramica/${tone.id.toLowerCase()}/`}>{toneName(tone.id)}</Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key}>
                <th scope="row">{row.label}</th>
                {tones.map((tone) => <td key={tone.id}>{tone[row.key]}</td>)}
              </tr>
            ))}
            <tr>
              <th scope="row">Garantía de la película</th>
              <td colSpan={tones.length}>{lineaIrWarranty}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul className="linea-ir-specs-cards">
        {tones.map((tone) => (
          <li key={tone.id}>
            <h3>
              <Link href={`/peliculas/nanoceramica/${tone.id.toLowerCase()}/`}>Tono {toneName(tone.id)}</Link>
            </h3>
            <dl>
              {rows.map((row) => (
                <div key={row.key}>
                  <dt>{row.label}</dt>
                  <dd>{tone[row.key]}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
      <p className="linea-ir-warranty">{lineaIrWarranty}</p>
    </>
  );
}
