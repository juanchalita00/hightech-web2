import Link from "next/link";
import type { LegalDraftDocument } from "@/lib/legal-drafts";

export function LegalDraft({ document }: { document: LegalDraftDocument }) {
  return (
    <article className="legal-draft">
      <header className="section legal-draft-hero">
        <div className="container legal-draft-header">
          <p className="eyebrow">{document.eyebrow}</p>
          <h1>{document.title}</h1>
          <p>{document.summary}</p>
          <p className="legal-draft-note">No está en el menú ni en el índice de búsqueda. No sustituye la revisión de un abogado.</p>
        </div>
      </header>
      <div className="section">
        <div className="container legal-draft-layout">
          <nav aria-label="Secciones del borrador">
            {document.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.heading}</a>)}
          </nav>
          <div>
            {document.sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            <p className="legal-draft-back"><Link href="/contacto/#cotizar">Volver a la cotización</Link></p>
          </div>
        </div>
      </div>
    </article>
  );
}
