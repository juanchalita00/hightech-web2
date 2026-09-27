type Metric = {
  metric: string;
  label: string;
  meaning: string;
  caution?: string;
};

type Props = { items: readonly Metric[] };

export function MetricExplainer({ items }: Props) {
  return (
    <div className="metric-explainer-grid">
      {items.map((item) => (
        <article className="metric-explainer-card" key={item.metric}>
          <span className="metric-code">{item.metric}</span>
          <h3>{item.label}</h3>
          <p>{item.meaning}</p>
          {item.caution ? <small>{item.caution}</small> : null}
        </article>
      ))}
    </div>
  );
}
