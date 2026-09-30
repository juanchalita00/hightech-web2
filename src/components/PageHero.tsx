type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="hero section">
      <div className="container hero-grid">
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          <p className="lede">{description}</p>
          {children && <div className="hero-actions">{children}</div>}
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="glass-panel"><span>Objetivo</span><strong>Qué quieres resolver</strong></div>
          <div className="glass-panel"><span>Contexto</span><strong>Dónde se va a instalar</strong></div>
          <div className="glass-panel"><span>Solución</span><strong>Qué aplicación tiene sentido</strong></div>
        </div>
      </div>
    </section>
  );
}
