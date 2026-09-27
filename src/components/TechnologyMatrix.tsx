import Link from "next/link";
import { Icon } from "@/components/Icon";

const rows = [
  { href: "/peliculas/nanoceramica/", title: "Nanocerámica", icon: "sun" as const, clarity: "Alta a muy baja, según tono", privacy: "Por tono/contraste", solar: "Datos técnicos mapeados", safety: "No es su función principal", note: "La familia con información técnica más completa." },
  { href: "/peliculas/plata-reflecta/", title: "Plata Reflecta", icon: "privacy" as const, clarity: "Apariencia reflectiva", privacy: "Principalmente diurna", solar: "Sí, por producto", safety: "No es su función principal", note: "Útil cuando la apariencia espejada forma parte de la solución." },
  { href: "/peliculas/seguridad/", title: "Seguridad", icon: "shield" as const, clarity: "Puede ser visualmente clara", privacy: "No necesariamente", solar: "Depende del producto", safety: "Retención de fragmentos", note: "El desempeño frente a intrusión depende del sistema completo." },
  { href: "/peliculas/privacidad/", title: "Privacidad", icon: "privacy" as const, clarity: "Depende de la estrategia", privacy: "Objetivo principal", solar: "Puede coexistir", safety: "No necesariamente", note: "La luz exterior/interior cambia el resultado de algunas soluciones." },
] as const;

export function TechnologyMatrix() {
  return (
    <div className="technology-matrix">
      {rows.map((row) => (
        <Link href={row.href} className="technology-row" key={row.title}>
          <div className="technology-title"><span><Icon name={row.icon} size={21}/></span><strong>{row.title}</strong><small>{row.note}</small></div>
          <dl><div><dt>Claridad</dt><dd>{row.clarity}</dd></div><div><dt>Privacidad</dt><dd>{row.privacy}</dd></div><div><dt>Control solar</dt><dd>{row.solar}</dd></div><div><dt>Seguridad</dt><dd>{row.safety}</dd></div></dl>
          <Icon name="arrow" size={19}/>
        </Link>
      ))}
    </div>
  );
}
