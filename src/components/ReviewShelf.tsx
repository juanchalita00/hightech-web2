import { getPublicReviews } from "@/lib/reviews";

export function ReviewShelf(){
  const reviews=getPublicReviews();
  if (!reviews.length) return null;
  return <section className="section section-alt"><div className="container"><div className="section-heading"><p className="eyebrow">Opiniones verificadas</p><h2>Experiencias publicadas desde una fuente identificada.</h2></div><div className="review-grid">{reviews.map(review=><blockquote key={review.reviewId}><p>“{review.quote}”</p><footer><strong>{review.displayName}</strong><span>{review.source}</span></footer></blockquote>)}</div></div></section>
}
