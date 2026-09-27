import { Icon } from "@/components/Icon";

type IconName = Parameters<typeof Icon>[0]["name"];
type Item = { icon: IconName; title: string; text: string; note?: string };
type Props = { items: readonly Item[] };

export function DecisionCards({ items }: Props) {
  return (
    <div className="decision-grid">
      {items.map((item, index) => (
        <article className="decision-card" key={item.title}>
          <div className="decision-card-head"><span className="decision-icon"><Icon name={item.icon} size={21}/></span><span className="decision-index">0{index + 1}</span></div>
          <h3>{item.title}</h3><p>{item.text}</p>{item.note ? <small>{item.note}</small> : null}
        </article>
      ))}
    </div>
  );
}
