import Link from "next/link";
import { Icon } from "@/components/Icon";
import { automotiveReference } from "@/lib/automotive-reference";

export function JaliscoReference() {
  return (
    <div className="jalisco-reference">
      <div className="jalisco-reference-copy">
        <p className="eyebrow eyebrow-light">Automotriz</p>
        <h2>{automotiveReference.lead}</h2>
        <p>{automotiveReference.reference}</p>
        <p>{automotiveReference.windshield} {automotiveReference.disclaimer}</p>
        <Link href="/guias/polarizado-automotriz-jalisco/" className="button button-inverse">Ver la referencia completa <Icon name="arrow" size={17}/></Link>
      </div>
      <div className="jalisco-reference-values" aria-label="Referencia de uso común">
        <div><span>Laterales y medallón</span><p>35%, como referencia de uso común.</p></div>
        <div><span>Parabrisas</span><p>75%, como referencia de uso común. La ley técnicamente no establece nada en esta zona.</p></div>
        <div><span>Decisión</span><p>No es información oficial ni asesoría legal. El cliente decide y asume la responsabilidad.</p></div>
      </div>
    </div>
  );
}
