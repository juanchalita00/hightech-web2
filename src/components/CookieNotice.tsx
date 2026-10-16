"use client";

import { useEffect, useState } from "react";

const key = "hightech-cookies";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!localStorage.getItem(key));
  }, []);

  useEffect(() => {
    // Avisa al CSS para subir el botón de WhatsApp mientras el aviso está abierto.
    document.documentElement.toggleAttribute("data-cookie-banner", visible);
    return () => document.documentElement.removeAttribute("data-cookie-banner");
  }, [visible]);

  function choose(value: "accepted" | "rejected") {
    localStorage.setItem(key, value);
    setVisible(false);
    window.dispatchEvent(new Event("hightech:cookies"));
  }

  if (!visible) return null;

  return (
    <div className="cookie-notice" role="dialog" aria-label="Aviso de cookies">
      <p>
        Medimos visitas solo si lo aceptas. <a href="/legal/aviso-de-privacidad/">Aviso de privacidad</a>.
      </p>
      <div className="cookie-actions">
        <button type="button" className="cookie-reject" onClick={() => choose("rejected")}>Rechazar</button>
        <button type="button" className="cookie-accept" onClick={() => choose("accepted")}>Aceptar</button>
      </div>
    </div>
  );
}
