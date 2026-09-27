import { truth } from "@/lib/truth";

export function NanoTable() {
  return (
    <div className="table-wrap" tabIndex={0} aria-label="Comparador de películas nanocerámicas">
      <table>
        <thead>
          <tr><th>Película</th><th>VLT</th><th>UV</th><th>IR</th><th>TSER</th></tr>
        </thead>
        <tbody>
          {truth.nano.map((film) => (
            <tr key={film.id}>
              <th scope="row">{film.id}</th>
              <td>{film.vlt}%</td>
              <td>{film.uv}%</td>
              <td>{film.infraredRejection}% a {film.infraredWavelengthNm} nm</td>
              <td>{film.tser}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="fine-print">Los valores son especificaciones de ficha. 95% a 950 nm no significa 95% menos calor interior.</p>
    </div>
  );
}
