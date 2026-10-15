import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Esta página no existe.</h1>
        <p>Puedes volver al inicio, ver la galería o pedir una cotización.</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/">Volver al inicio</Link>
          <Link className="button button-secondary" href="/contacto/#cotizar">Solicitar cotización</Link>
        </div>
      </div>
    </section>
  );
}
