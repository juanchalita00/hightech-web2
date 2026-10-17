"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { galleryCategories, galleryCategoryLabels, type GalleryCategory, type GalleryItem } from "@/lib/gallery";

const filters = ["todas", ...galleryCategories] as const;
type Filter = (typeof filters)[number];

export function GalleryBrowser({ items }: { items: readonly GalleryItem[] }) {
  const [filter, setFilter] = useState<Filter>("todas");
  const visible = useMemo(
    () => items.filter((item) => filter === "todas" || item.category === filter),
    [filter, items],
  );
  const label = filter === "todas" ? "esta selección" : galleryCategoryLabels[filter as GalleryCategory].toLowerCase();

  return (
    <div>
      <div className="gallery-filters" role="toolbar" aria-label="Filtrar galería">
        {filters.map((option) => (
          <button key={option} type="button" aria-pressed={filter === option} className={filter === option ? "is-active" : undefined} onClick={() => setFilter(option)}>
            {option === "todas" ? "Todas" : galleryCategoryLabels[option]}
          </button>
        ))}
      </div>
      {visible.length ? (
        <ul className="gallery-grid">
          {visible.map((item) => (
            <li key={item.id}>
              <figure>
                <div className="gallery-media">
                  <Image src={item.src} alt={item.alt} width={1200} height={800} />
                </div>
                <figcaption>
                  <span>{galleryCategoryLabels[item.category]}</span>
                  <strong>{item.title}</strong>
                  <p>{item.caption}</p>
                  <small>{item.location}</small>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      ) : (
        <div className="gallery-empty">
          <h2>Todavía no hay fotos de {label}.</h2>
          <p>Cuando haya una instalación que se pueda mostrar, va a aparecer aquí. Mientras tanto puedes contarnos tu proyecto y te orientamos con lo que sí aplica a tu cristal.</p>
        </div>
      )}
    </div>
  );
}
