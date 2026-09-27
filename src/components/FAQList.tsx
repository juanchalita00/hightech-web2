type Item = { question: string; answer: React.ReactNode };
type Props = { items: readonly Item[] };

export function FAQList({ items }: Props) {
  return <div className="faq-list">{items.map((item) => (
    <details key={item.question} className="faq-item">
      <summary>{item.question}<span aria-hidden="true">+</span></summary>
      <div className="faq-answer">{item.answer}</div>
    </details>
  ))}</div>;
}
