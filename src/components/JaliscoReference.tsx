import Link from "next/link";
import { truth } from "@/lib/truth";
import { Icon } from "@/components/Icon";

export function JaliscoReference() {
  const ref = truth.jaliscoAutomotive.operationalReference;
  return (
    <div className="jalisco-reference">
      <div className="jalisco-reference-copy">
        <p className="eyebrow eyebrow-light">Referencia práctica en Jalisco</p>
        <h2>La norma publicada y la referencia que nos han dado en Tránsito se explican por separado.</h2>
        <p>En consultas directas de HIGHTECH con personal de Tránsito de Jalisco nos han indicado como referencia máxima <strong>{ref.windshield} en parabrisas</strong>, <strong>{ref.frontSide} en piloto y copiloto</strong> y <strong>{ref.rearSideAndBack} en laterales traseros y medallón</strong>.</p>
        <p className="jalisco-caveat">La normativa publicada que hemos revisado no desarrolla esa misma tabla de porcentajes con igual claridad. Por eso la comunicamos como referencia práctica proporcionada por Tránsito, no como transcripción literal de la Ley ni como garantía de ausencia de sanción.</p>
        <Link href="/guias/polarizado-automotriz-jalisco/" className="button button-inverse">Ver explicación completa <Icon name="arrow" size={17}/></Link>
      </div>
      <div className="jalisco-reference-values" aria-label="Referencia práctica de tonos en Jalisco">
        <div><span>Parabrisas</span><strong>{ref.windshield}</strong><small>referencia práctica</small></div>
        <div><span>Piloto / copiloto</span><strong>{ref.frontSide}</strong><small>referencia práctica</small></div>
        <div><span>Parte trasera</span><strong>{ref.rearSideAndBack}</strong><small>referencia práctica</small></div>
      </div>
    </div>
  );
}
