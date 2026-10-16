import { SimpleExample } from "@/components/SimpleExample";

const panes = [
  {
    place: "Ventanas delanteras",
    tone: "Solo 75",
    detail: "El tono más claro. Deja pasar mucha luz y se ve hacia el interior.",
  },
  {
    place: "Traseras y medallón",
    tone: "35 o más claro",
    detail: "35, 50 o 75. El 15 y el 5 no van en el auto: son para casa y negocio.",
  },
  {
    place: "Parabrisas",
    tone: "Sin película",
    detail: "No instalamos polarizado en el parabrisas.",
  },
] as const;

export function JaliscoLaw() {
  return (
    <section className="section jalisco-law" id="lo-que-dice-la-ley">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div>
            <p className="eyebrow">Jalisco · vigente 2026</p>
            <h2>Qué tono va en cada cristal del auto.</h2>
          </div>
          <p>
            La Secretaría de Movilidad de Jalisco explica el polarizado como qué tan oscuro se ve el cristal.
            En el taller hablamos al revés: el número es la luz que deja pasar. Un número más alto es más claro.
          </p>
        </div>
        <div className="jalisco-law-grid">
          {panes.map((pane) => (
            <article key={pane.place}>
              <span>{pane.place}</span>
              <strong>{pane.tone}</strong>
              <p>{pane.detail}</p>
            </article>
          ))}
        </div>
        <SimpleExample>
          Una persiana abierta al 75% deja entrar casi toda la luz. Abierta al 35%, entra menos.
          Por eso 75 es el tono claro de las ventanas delanteras, y 35 ya se ve más oscuro.
        </SimpleExample>
        <p className="jalisco-law-note">
          También piden que se pueda ver hacia el interior. El entintado que trae el auto de fábrica sí se permite,
          porque no pasa de ese nivel de oscuridad. Fuente: infografía de la Secretaría de Movilidad de Jalisco, vigente 2026.
        </p>
      </div>
    </section>
  );
}
