import { SimpleExample } from "@/components/SimpleExample";

export function SarroService() {
  return (
    <section className="section" id="sarro">
      <div className="container sarro-grid">
        <div>
          <p className="eyebrow">Vidrios con sarro</p>
          <h2>Restauración y protección de vidrios con sarro.</h2>
          <p>
            No es una limpieza. Primero se descontamina el cristal. Después se instala una película de seguridad que se puede reemplazar
            y un recubrimiento cerámico que repele el agua. Si el sarro regresa, se cambia la película y el vidrio sigue intacto.
          </p>
          <SimpleExample>
            Es el mismo principio que un protector de pantalla en el teléfono: el golpe o la mancha se quedan en la capa de afuera,
            y el cristal de abajo no se lija ni se raya para quitarla.
          </SimpleExample>
        </div>
        <ul className="sarro-uses">
          <li>Canceles de baño</li>
          <li>Fachadas donde el agua deja marca</li>
          <li>Ventanas junto a alberca o riego</li>
        </ul>
      </div>
    </section>
  );
}
