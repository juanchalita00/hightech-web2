import { clientTickerNames } from "@/lib/client-proof";
import styles from "./ClientTicker.module.css";

/** Logos reales pendientes de permiso de cada marca. */
export function ClientTicker() {
  const label = `Algunos de nuestros trabajos: ${clientTickerNames.join(", ")}.`;
  return (
    <div className={styles.band} aria-label={label}>
      <div className={styles.viewport}>
        <div className={styles.track}>
          <ul className={styles.list}>
            {clientTickerNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <ul className={`${styles.list} ${styles.listDuplicate}`} aria-hidden="true">
            {clientTickerNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
