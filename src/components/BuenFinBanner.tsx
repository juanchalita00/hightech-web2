import Link from "next/link";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import styles from "./BuenFinBanner.module.css";

/**
 * Para apagar la franja: poner BUEN_FIN_BANNER_ENABLED en false,
 * o dejar que expire sola el 1 de diciembre de 2026 00:00 (America/Mexico_City).
 */
export const BUEN_FIN_BANNER_ENABLED = true;
export const BUEN_FIN_BANNER_EXPIRES_AT = "2026-12-01T00:00:00-06:00";

const whatsappContext = { sourcePage: "/", product: "la promoción del Buen Fin" };

export function isBuenFinBannerActive(now: Date = new Date()): boolean {
  if (!BUEN_FIN_BANNER_ENABLED) return false;
  return now.getTime() < new Date(BUEN_FIN_BANNER_EXPIRES_AT).getTime();
}

export function BuenFinBanner() {
  if (!isBuenFinBannerActive()) return null;

  return (
    <aside className={styles.banner} aria-label="Promoción Buen Fin">
      <div className={styles.inner}>
        <p className={styles.text}>
          <strong>Buen Fin:</strong> 15% menos agendando antes del 17 de noviembre. Instalas cuando quieras, hasta el 30.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/contacto/#cotizar">Cotizar</Link>
          <WhatsAppCTA
            label="WhatsApp"
            context={whatsappContext}
            position="BUEN_FIN_BANNER"
            appearance="plain"
            className={styles.secondary}
          />
        </div>
      </div>
    </aside>
  );
}
