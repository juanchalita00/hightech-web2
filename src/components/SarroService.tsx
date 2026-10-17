import { HightechTip } from "@/components/HightechTip";

export function SarroService() {
  return (
    <section className="section" id="sarro">
      <div className="container sarro-layout">
        <div className="sarro-main">
          <p className="eyebrow">Vidrios con sarro</p>
          <h2>¿Tu vidrio tiene sarro?</h2>
          <p>
            Contamos con equipo especializado para retirarlo y proteger tu vidrio; te cotizamos según tu proyecto.
          </p>
        </div>
        <HightechTip>
          Primero descontaminamos el vidrio para dejarlo limpio. Después colocamos una película de seguridad y encima un recubrimiento
          cerámico hidrofóbico que repele el agua. Funciona como la mica de tu celular: si con el tiempo el sarro regresa, se cambia la
          película y tu vidrio queda intacto.
        </HightechTip>
        <ul className="sarro-uses sarro-uses-row">
          <li>Canceles de baño</li>
          <li>Fachadas donde el agua deja marca</li>
          <li>Ventanas junto a alberca o riego</li>
        </ul>
      </div>
    </section>
  );
}
