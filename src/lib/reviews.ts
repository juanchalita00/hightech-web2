import reviewsData from "../../content/reviews.json";
import { release } from "@/lib/truth";

export type ReviewRecord = {
  reviewId: string;
  source: string;
  sourceUrl: string;
  publishedAt: string;
  displayName: string;
  quote: string;
  publicationAllowed: boolean;
};

export function getPublicReviews(): readonly ReviewRecord[] {
  if (!release.routes.reviewsPublic) return [];
  return (reviewsData.items as ReviewRecord[]).filter((review) => review.publicationAllowed);
}
