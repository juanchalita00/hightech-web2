import type { Metadata } from "next";
import { addressLine, brandName, hoursLabel, phoneDisplay } from "@/lib/public-facts";
import { truth } from "@/lib/truth";

export const metadata: Metadata = {
  alternates: { canonical: "/legal/aviso-de-privacidad/" },
  title: { absolute: "Aviso de privacidad | HIGHTECH Polarizados" },
  description: "Aviso de privacidad de HIGHTECH Polarizados para los datos del formulario de cotización y de WhatsApp.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <section className="section">
      <div className="container" style={{ display: "grid", gap: "1rem", maxWidth: "46rem" }}>
        <p className="eyebrow">Aviso de privacidad</p>
        <h1>Cómo usamos tus datos.</h1>
        <p>
          {brandName} es el responsable. Estamos en {addressLine} Teléfono {phoneDisplay}. Correo {truth.contact.emailSales}. {hoursLabel}
        </p>
        <h2>Qué datos pedimos</h2>
        <p>Nombre, ciudad, teléfono o WhatsApp, correo si lo dejas, y lo que nos cuentes del cristal o del auto para cotizar. No pedimos datos bancarios en el sitio.</p>
        <h2>Para qué</h2>
        <p>Para contestarte, armar la cotización e instalar si el trabajo se confirma. La base es tu solicitud y la relación que nace de ella, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.</p>
        <h2>Con quién se comparten</h2>
        <p>Con quien nos ayuda a operar el correo, el sitio y WhatsApp, solo para esa tarea. No vendemos listas de contactos.</p>
        <h2>Cuánto tiempo</h2>
        <p>El tiempo de la cotización y, si hay trabajo, el de la garantía. Después se borran o se guardan solo si una ley lo pide.</p>
        <h2>Tus derechos</h2>
        <p>
          Puedes pedir acceso, corrección, cancelación u oponerte al uso, escribiendo a {truth.contact.emailSales}. También puedes limitar el uso de cookies de medición desde el aviso del sitio.
        </p>
      </div>
    </section>
  );
}
