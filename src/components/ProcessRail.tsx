type Step = { number: string; title: string; text: string };
type Props = { steps: readonly Step[] };

export function ProcessRail({ steps }: Props) {
  return <div className="process-rail">{steps.map((step) => (
    <article key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>
  ))}</div>;
}
