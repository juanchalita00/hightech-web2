export function MetricRelation(){
  return <div className="metric-relation" aria-label="Relación conceptual entre VLT, rechazo infrarrojo a 950 nanómetros y TSER">
    <div><strong>VLT</strong><span>Cuánta luz visible atraviesa</span></div>
    <i>≠</i>
    <div><strong>IR @ 950 nm</strong><span>Respuesta en un punto infrarrojo</span></div>
    <i>≠</i>
    <div><strong>TSER</strong><span>Energía solar total rechazada en la ficha</span></div>
  </div>
}
