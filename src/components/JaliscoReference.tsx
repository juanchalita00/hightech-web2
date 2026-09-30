import Link from "next/link";
import { Icon } from "@/components/Icon";

export function JaliscoReference() {
  return (
    <div className="jalisco-reference">
      <div className="jalisco-reference-copy">
        <p className="eyebrow eyebrow-light">Referencia normativa en Jalisco</p>
        <h2>Antes de elegir tono, separa la norma de los porcentajes comerciales.</h2>
        <p>La normativa publicada no establece una tabla general 75 / 35 / 20.</p>
        <Link href="/guias/polarizado-automotriz-jalisco/" className="button button-inverse">Ver explicación completa <Icon name="arrow" size={17}/></Link>
      </div>
      <div className="jalisco-reference-values" aria-label="Resumen de la normativa publicada en Jalisco">
        <div><span>Parabrisas</span><p>La norma contiene una prohibición expresa al polarizado.</p></div>
        <div><span>Laterales y medallón</span><p>Deben permitir visibilidad hacia el interior.</p></div>
        <div><span>Porcentajes VLT</span><p>La norma revisada no publica una tabla estatal por zona.</p></div>
      </div>
    </div>
  );
}
