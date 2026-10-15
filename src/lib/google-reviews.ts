import reviewsFile from "../../content/google-reviews.json";

export type GoogleReview = {
  author: string;
  quote: string;
  publishedAt: string;
  sourceUrl: string;
  rating?: number;
};

function isReview(value: unknown): value is GoogleReview {
  if (!value || typeof value !== "object") return false;
  const review = value as Partial<GoogleReview>;
  if (!review.author?.trim() || !review.quote?.trim() || !review.publishedAt?.trim() || !review.sourceUrl?.trim()) return false;
  if (!review.sourceUrl.startsWith("https://www.google.com/maps") && !review.sourceUrl.startsWith("https://maps.google.com/")) return false;
  if (review.rating != null && (typeof review.rating !== "number" || review.rating < 1 || review.rating > 5)) return false;
  return true;
}

/** Reseñas cargadas a mano. Vacío hasta que exista una fuente real. */
export function getGoogleReviews(): GoogleReview[] {
  return (reviewsFile.items as unknown[]).filter(isReview);
}
