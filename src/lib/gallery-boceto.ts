/**
 * Boceto de «Galería de proyectos terminados» (Fer, 23 nov 2026, 11:41).
 * Regla: tipo, película y tono solo si están confirmados en el repo
 * (content/gallery.json, content/projects.json, nombre de archivo con tono, o comentario con fuente).
 * Si falta algo, se muestra «pendiente». Sin caras. Detalle en /workspace/hightech-web-mejora/GALERIA-PROPUESTA.md.
 */
export type GalleryType = "Casa" | "Negocio" | "Auto" | null;

export type BocetoGalleryItem = {
  id: string;
  src: string;
  alt: string;
  type: GalleryType;
  film: string | null;
  tone: string | null;
  place: string | null;
  source: string;
};

export const bocetoGallery: BocetoGalleryItem[] = [
  {
    id: "casa-ir50",
    src: "/boceto/casa-ir50.webp",
    alt: "Interior de una casa con película Línea IR tono IR50 en las ventanas, junto a plantas.",
    type: "Casa",
    film: "Línea IR",
    tone: "IR50",
    place: null,
    source: "Drive DIGITAL INSIGHT/Casas/IR50 (FUENTES-BOCETO.md); commit 495ef6d.",
  },
  {
    id: "residencial-fachada-casa",
    src: "/images/galeria/residencial-fachada-casa-800.webp",
    alt: "Fachada de una casa con ventanales.",
    type: "Casa",
    film: null,
    tone: null,
    place: null,
    source: "content/gallery.json (category residencial); commit 69173c7, fotos reales del Drive.",
  },
  {
    id: "residencial-atardecer-ventanal",
    src: "/images/galeria/residencial-atardecer-ventanal-800.webp",
    alt: "Ventanal de una casa al atardecer, con vista a la ciudad.",
    type: "Casa",
    film: null,
    tone: null,
    place: null,
    source: "content/gallery.json (category residencial); commit 69173c7.",
  },
  {
    id: "nano-ir75-local",
    src: "/images/nanoceramica/nano-proyecto-ir75-local.webp",
    alt: "Fachada de un local comercial con cristal de tono azulado por la película Línea IR tono IR75.",
    type: "Negocio",
    film: "Línea IR",
    tone: "IR75",
    place: null,
    source: "Ficha de tono IR75 ([tone]/page.tsx: «Proyecto real · tono 75 · local comercial»); commit 7232734.",
  },
  {
    id: "nano-ir5-tesla",
    src: "/images/nanoceramica/nano-proyecto-ir5-tesla.webp",
    alt: "Exterior de la agencia Tesla en Guadalajara con película Línea IR tono IR5.",
    type: "Negocio",
    film: "Línea IR",
    tone: "IR5",
    place: "Agencia Tesla",
    source: "Ficha de tono IR5 ([tone]/page.tsx: «Proyecto real · tono 5 · Agencia Tesla»); commit 3656e24. Tesla autorizado por Fer, 23 nov 2026, 11:37.",
  },
  {
    id: "comercial-terraza-fachada",
    src: "/images/galeria/comercial-terraza-fachada-800.webp",
    alt: "Fachada de cristal con terraza en un inmueble comercial.",
    type: "Negocio",
    film: null,
    tone: null,
    place: null,
    source: "content/gallery.json (category comercial); commit 69173c7.",
  },
  {
    id: "comercial-oficina",
    src: "/images/projects/commercial-office.webp",
    alt: "Oficina con divisiones de cristal y ventanales.",
    type: "Negocio",
    film: null,
    tone: null,
    place: null,
    source: "content/gallery.json (category comercial); commit cadeafe.",
  },
  {
    id: "comercial-aeropuerto",
    src: "/images/projects/airport-authority.webp",
    alt: "Pasillo de cristal junto a la plataforma del Aeropuerto Internacional de Guadalajara, al atardecer.",
    type: "Negocio",
    film: "Línea IR",
    tone: null,
    place: "Aeropuerto Internacional de Guadalajara",
    source: "content/projects.json PROJ-AIRPORT-001 (productId NANOCERAMICA, tone null) y gallery.json; commit cadeafe.",
  },
  {
    id: "auto-sedan-rojo",
    src: "/images/galeria/auto-sedan-rojo-lateral-1-800.webp",
    alt: "Sedán rojo con película en los cristales laterales.",
    type: "Auto",
    film: null,
    tone: null,
    place: null,
    source: "content/gallery.json (category automotriz); commit 69173c7.",
  },
  {
    id: "auto-suv-azul",
    src: "/images/galeria/auto-suv-azul-lateral-1-800.webp",
    alt: "SUV azul con película en las ventanas laterales.",
    type: "Auto",
    film: null,
    tone: null,
    place: null,
    source: "content/gallery.json (category automotriz).",
  },
  {
    id: "nano-ir50-torre",
    src: "/images/nanoceramica/nano-proyecto-ir50-torre-v3.webp",
    alt: "Edificio de varios pisos con película Línea IR tono IR50.",
    type: null,
    film: "Línea IR",
    tone: "IR50",
    place: null,
    source: "Foto de la ficha IR50; commit bbd4918 (carpeta IR50 del Drive). No dice si es casa o negocio.",
  },
  {
    id: "nano-ir35",
    src: "/images/nanoceramica/nano-proyecto-ir35-v2.webp",
    alt: "Fachada con ventanal vertical y película Línea IR tono IR35.",
    type: null,
    film: "Línea IR",
    tone: "IR35",
    place: null,
    source: "Foto de la ficha IR35; commit bbd4918 (carpeta IR35 del Drive). No dice si es casa o negocio.",
  },
  {
    id: "nano-ir15",
    src: "/images/nanoceramica/nano-proyecto-ir15.webp",
    alt: "Fachada de una casa con balcón y ventanas con película Línea IR.",
    type: null,
    film: "Línea IR",
    tone: null,
    place: null,
    source: "Archivo nano-proyecto-ir15, pero commit bbd4918 dice que salió de la carpeta «IR20» del Drive (nombre viejo). Tono por confirmar.",
  },
];

export const galleryGroups: { key: string; label: string; type: GalleryType }[] = [
  { key: "casa", label: "Casa", type: "Casa" },
  { key: "negocio", label: "Negocio", type: "Negocio" },
  { key: "auto", label: "Auto", type: "Auto" },
  { key: "por-confirmar", label: "Tipo por confirmar", type: null },
];
