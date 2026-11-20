import type { ReactNode } from "react";

type Row = { label: string; price: string; note?: string; vat?: boolean };

export function PriceBlock({ rows, footnote, title = "Precios de referencia" }: { rows: readonly Row[]; footnote?: ReactNode; title?: string }) {
  return (
    <section className="price-block" aria-label={title}>
      <p className="eyebrow">{title}</p>
      <ul>
        {rows.map((row) => (
          <li key={row.label}>
            <span>{row.label}</span>
            <strong>{row.price}{row.vat ? <> <span className="price-vat">+ IVA</span></> : null}</strong>
            {row.note ? <small>{row.note}</small> : null}
          </li>
        ))}
      </ul>
      {footnote ? <p className="price-block-note">{footnote}</p> : null}
    </section>
  );
}
