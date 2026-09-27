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
          <div className="glass-panel"><span>VLT</span><strong>75 → 3%</strong></div>
          <div className="glass-panel"><span>UV</span><strong>99%</strong></div>
          <div className="glass-panel"><span>TSER</span><strong>59 → 96%</strong></div>
        </div>
      </div>
    </section>
  );
}
