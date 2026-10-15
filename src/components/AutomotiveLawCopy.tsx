import Link from "next/link";
import { Icon } from "@/components/Icon";
import { automotiveLaw, automotiveQuotes } from "@/lib/automotive-reference";

const tones = [
  { icon: "car" as const, label: automotiveLaw.sideLabel, value: automotiveLaw.sideValue },
  { icon: "glass" as const, label: automotiveLaw.windshieldLabel, value: automotiveLaw.windshieldValue },
];

export function AutomotiveLawCopy({ links = false, eyebrow = false }: { links?: false | "site" | "blog"; eyebrow?: boolean }) {
  return (
    <div className="auto-law" id="lo-que-dice-la-ley">
      <div className="auto-law-block">
        {eyebrow ? <p className="eyebrow">Automotriz · Jalisco</p> : null}
        <h2>{automotiveLaw.practiceTitle}</h2>
        <p className="auto-law-intro">{automotiveLaw.practice}</p>
        <div className="auto-law-tones" aria-label="Lo que la mayoría suele instalar">
          {tones.map((tone) => (
            <article className="auto-law-tone" key={tone.label}>
              <span className="decision-icon"><Icon name={tone.icon} size={21} /></span>
              <strong>{tone.value}</strong>
              <h3>{tone.label}</h3>
            </article>
          ))}
        </div>
      </div>

      <aside className="auto-law-callout">
        <span className="decision-icon"><Icon name="shield" size={21} /></span>
        <div>
          <strong>{automotiveLaw.disclaimerTitle}</strong>
          <p>{automotiveLaw.disclaimer}</p>
        </div>
      </aside>

      <div className="auto-law-block">
        <h2>{automotiveLaw.lawTitle}</h2>
        <p className="auto-law-intro">{automotiveLaw.lawIntro}</p>
        <div className="auto-law-accordion">
          <div className="faq-list">
            {automotiveQuotes.map((quote) => (
              <details key={quote.id} className="faq-item">
                <summary>
                  <div className="auto-law-summary"><strong>{quote.summary}</strong><small>{quote.hint}</small></div>
                  <span aria-hidden="true">+</span>
                </summary>
                <div className="faq-answer">
                  <blockquote className="auto-law-quote">
                    {quote.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </blockquote>
                  <p className="auto-law-cite">{quote.citation}</p>
                  <p className="auto-law-cite"><a href={quote.sourceUrl} target="_blank" rel="noopener noreferrer">{quote.sourceLabel} <Icon name="arrow" size={15} /></a></p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {links === "site" ? (
        <p className="auto-law-links">
          <Link href="/guias/polarizado-automotriz-jalisco/">Leer la guía</Link>
          <Link href="/blog/mitos-de-porcentajes-en-el-auto/">Mitos de los porcentajes</Link>
        </p>
      ) : null}
      {links === "blog" ? (
        <p className="auto-law-links">
          <Link href="/automotriz/#lo-que-dice-la-ley">Verlo en automotriz</Link>
          <Link href="/guias/polarizado-automotriz-jalisco/">Leer la guía</Link>
        </p>
      ) : null}
    </div>
  );
}
