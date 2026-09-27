import { Icon } from "@/components/Icon";

type Props={candidateCount:number};
export function EvidenceGatePanel({candidateCount}:Props){return <div className="evidence-gate-panel"><div><p className="eyebrow eyebrow-light">Evidence gate</p><h2>Los proyectos reales entran sólo cuando el contexto y el permiso están completos.</h2><p>Hoy hay {candidateCount} caso candidato registrado internamente. No se publica porque todavía faltan datos y autorización suficientes.</p></div><div className="evidence-gate-steps">{["Producto identificado","Contexto real","Resultado demostrable","Permiso de publicación","Revisión de privacidad"].map((item,index)=><span key={item}><b>0{index+1}</b><Icon name="check" size={16}/>{item}</span>)}</div></div>}
