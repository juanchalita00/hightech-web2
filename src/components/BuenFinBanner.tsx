import Image from "next/image";
import Link from "next/link";
import { BuenFinWhatsAppLink } from "@/components/BuenFinWhatsAppLink";
import styles from "./BuenFinBanner.module.css";

/**
 * Para apagar la franja: poner BUEN_FIN_BANNER_ENABLED en false,
 * o dejar que expire sola el 1 de diciembre de 2026 00:00 (America/Mexico_City).
 */
export const BUEN_FIN_BANNER_ENABLED = true;
export const BUEN_FIN_BANNER_EXPIRES_AT = "2026-12-01T00:00:00-06:00";

export function isBuenFinBannerActive(now: Date = new Date()): boolean {
  if (!BUEN_FIN_BANNER_ENABLED) return false;
  return now.getTime() < new Date(BUEN_FIN_BANNER_EXPIRES_AT).getTime();
}

export function BuenFinBanner() {
  if (!isBuenFinBannerActive()) return null;

  return (
    <aside className={styles.banner} aria-label="Promoción Buen Fin">
      <div className={styles.inner}>
        <Image
          className={styles.logo}
          src="/images/buen-fin/el-buen-fin-2026-vertical-oscuro.webp"
          alt="El Buen Fin 2026"
          width={256}
          height={256}
        />
        <div className={styles.copy}>
          <p className={styles.text}>
            <strong>Buen Fin:</strong> hasta 15% menos agendando antes del 17 de noviembre. Instalas cuando quieras, hasta el 30.
          </p>
          <span className={styles.hint} aria-hidden="true">Escríbenos →</span>
        </div>
        {/* Solo móvil: el bloque entero es el enlace (overlay), sin botones duplicados. */}
        <BuenFinWhatsAppLink
          className={styles.mobileLink}
          ariaLabel="Buen Fin: hasta 15% menos. Escríbenos por WhatsApp"
        >
          Buen Fin: hasta 15% menos. Escríbenos por WhatsApp
        </BuenFinWhatsAppLink>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/contacto/#cotizar">Cotizar</Link>
          <BuenFinWhatsAppLink className={styles.secondary}>WhatsApp</BuenFinWhatsAppLink>
        </div>
      </div>
    </aside>
  );
}
