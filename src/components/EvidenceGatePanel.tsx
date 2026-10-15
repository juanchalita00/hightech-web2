import Link from "next/link";
import { Icon } from "@/components/Icon";

export function EvidenceGatePanel() {
  return (
    <div className="evidence-gate-panel">
      <div>
        <p className="eyebrow eyebrow-light">Proyectos HIGHTECH</p>
        <h2>Las fotos están en la galería. Los casos con contexto se publican aquí.</h2>
        <p>Un caso de esta sección explica el problema, la película instalada y el resultado que se puede mostrar. Mientras eso no esté listo, puedes ver las fotos que ya tenemos.</p>
        <p><Link className="button button-inverse" href="/galeria/">Ver galería</Link></p>
      </div>
      <div className="evidence-gate-steps">{["Problema del espacio", "Película instalada", "Foto del resultado", "Autorización para mostrarlo"].map((item, index) => <span key={item}><b>0{index + 1}</b><Icon name="check" size={16} />{item}</span>)}</div>
    </div>
  );
}
