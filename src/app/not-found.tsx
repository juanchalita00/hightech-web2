import Link from "next/link";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "40rem" }}>
        <p className="eyebrow">404</p>
        <h1>Esta página no está.</h1>
        <p>El enlace pudo cambiar. Puedes volver al inicio, ver polarizado para auto o escribirnos.</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/contacto/#cotizar">Cotizar</Link>
          <WhatsAppCTA label="WhatsApp" context={{ sourcePage: "/404/" }} position="NOT_FOUND" className="button-secondary" />
        </div>
        <p>
          <Link href="/">Inicio</Link>
          {" · "}
          <Link href="/galeria/">Galería</Link>
          {" · "}
          <Link href="/automotriz/">Auto</Link>
          {" · "}
          <Link href="/guias/">Guías</Link>
        </p>
      </div>
    </section>
  );
}
