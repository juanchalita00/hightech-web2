import Link from "next/link";
import { automotiveReference } from "@/lib/automotive-reference";

export function AutomotiveDisclaimer({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={compact ? "auto-disclaimer auto-disclaimer-compact" : "auto-disclaimer"} aria-label="Referencia de porcentajes automotrices">
      <p className="eyebrow">{automotiveReference.title}</p>
      <h2>{automotiveReference.lead}</h2>
      <p>{automotiveReference.reference}</p>
      <p>{automotiveReference.windshield}</p>
      <p className="auto-disclaimer-strong">{automotiveReference.disclaimer}</p>
      {compact ? null : <p className="auto-disclaimer-links"><Link href="/guias/polarizado-automotriz-jalisco/">Leer la referencia completa</Link><Link href="/blog/mitos-de-porcentajes-en-el-auto/">Mitos de los porcentajes</Link></p>}
    </aside>
  );
}
