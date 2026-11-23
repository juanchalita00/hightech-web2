import Link from "next/link";
import { Icon } from "@/components/Icon";

/** Enlaces a las páginas locales. El título «Atendemos en Zapopan y Guadalajara» lo pone quien lo usa. */
export function ServiceAreaLinks() {
  return (
    <ul className="service-area-links">
      <li>
        <Link href="/zapopan/">Polarizado en Zapopan <Icon name="arrow" size={16} /></Link>
      </li>
      <li>
        <Link href="/guadalajara/">Polarizado en Guadalajara <Icon name="arrow" size={16} /></Link>
      </li>
    </ul>
  );
}
