type Row = { label: string; price: string; note?: string };

export function PriceBlock({ rows, footnote, title = "Precios de referencia" }: { rows: readonly Row[]; footnote?: string; title?: string }) {
  return (
    <section className="price-block" aria-label={title}>
      <p className="eyebrow">{title}</p>
      <ul>
        {rows.map((row) => (
          <li key={row.label}>
            <span>{row.label}</span>
            <strong>{row.price}</strong>
            {row.note ? <small>{row.note}</small> : null}
          </li>
        ))}
      </ul>
      {footnote ? <p className="price-block-note">{footnote}</p> : null}
    </section>
  );
}
