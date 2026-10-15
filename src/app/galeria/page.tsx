import type { Metadata } from "next";
import Link from "next/link";
import { GalleryBrowser } from "@/components/GalleryBrowser";
import { getGalleryItems } from "@/lib/gallery";

export const metadata: Metadata = {
  alternates: { canonical: "/galeria/" },
  title: { absolute: "Galería de proyectos de polarizado | HIGHTECH Polarizados" },
  description: "Fotos de instalaciones residenciales, comerciales y automotrices de HIGHTECH Polarizados en Zapopan y la zona metropolitana de Guadalajara.",
};

export default function GalleryPage() {
  const items = getGalleryItems();
  return (
    <>
      <section className="section gallery-hero">
        <div className="container">
          <p className="eyebrow">Proyectos</p>
          <h1>Galería de instalaciones.</h1>
          <p className="gallery-lede">Trabajos residenciales, comerciales y automotrices. Cada foto corresponde a un archivo real del sitio; si una categoría todavía no tiene imágenes, lo decimos.</p>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <GalleryBrowser items={items} />
          <p className="gallery-next"><Link className="button button-primary" href="/contacto/#cotizar">Cotizar un proyecto parecido</Link></p>
        </div>
      </section>
    </>
  );
}
