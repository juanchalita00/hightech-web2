import type { Metadata } from "next";
import Image from "next/image";
import { bocetoGallery, galleryGroups, type BocetoGalleryItem } from "@/lib/gallery-boceto";
import { BocetoBanner } from "../_components/Boceto";
import styles from "../boceto.module.css";

export const metadata: Metadata = {
  title: { absolute: "BOCETO galería | High Tech Polarizados México" },
  description: "Boceto de galería de proyectos terminados para revisión interna. No es la web publicada.",
  robots: { index: false, follow: false },
};

function filmLine(item: BocetoGalleryItem) {
  if (!item.film && !item.tone) return "Película y tono: pendiente";
  const film = item.film ?? "Película: pendiente";
  const tone = item.tone ? `tono ${item.tone}` : "tono: pendiente";
  return `${film} · ${tone}`;
}

export default function Page() {
  return (
    <div className={styles.page}>
      <BocetoBanner />
      <section className={styles.section} aria-labelledby="galeria-titulo">
        <div className={styles.shell}>
          <p className={styles.kicker}>Galería</p>
          <h1 id="galeria-titulo">Proyectos terminados</h1>
          <p className={styles.scaleLead}>Fotos reales de casas, negocios y autos. Si sabemos la película y el tono, aquí lo ves.</p>
          <nav className={styles.galleryFilters} aria-label="Filtrar por tipo">
            {galleryGroups.map((g) => (
              <a key={g.key} href={`#${g.key}`}>{g.label}</a>
            ))}
          </nav>
          {galleryGroups.map((group) => {
            const items = bocetoGallery.filter((item) => item.type === group.type);
            if (!items.length) return null;
            return (
              <section key={group.key} id={group.key} className={styles.galleryGroup} aria-labelledby={`${group.key}-titulo`}>
                <h2 id={`${group.key}-titulo`}>{group.label}</h2>
                <ul className={styles.workPhotos}>
                  {items.map((item) => (
                    <li key={item.id}>
                      <figure>
                        <div className={styles.photo}>
                          <Image src={item.src} alt={item.alt} fill sizes="(min-width: 800px) 22rem, 46vw" />
                        </div>
                        <figcaption>
                          <strong>{item.type ?? "Tipo: pendiente"}{item.place ? ` · ${item.place}` : ""}</strong>
                          <span className={item.film && item.tone ? undefined : styles.galleryPending}>{filmLine(item)}</span>
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </section>
    </div>
  );
}
