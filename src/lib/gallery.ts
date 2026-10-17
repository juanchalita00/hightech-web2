import galleryData from "../../content/gallery.json";

export const galleryCategories = ["residencial", "comercial", "automotriz"] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  category: GalleryCategory;
  location: string;
};

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  residencial: "Residencial",
  comercial: "Comercial",
  automotriz: "Automotriz",
};

export function getGalleryItems(): GalleryItem[] {
  return galleryData.items.filter((item): item is GalleryItem =>
    galleryCategories.includes(item.category as GalleryCategory),
  );
}
