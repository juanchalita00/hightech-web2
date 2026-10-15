import { getGoogleReviews } from "@/lib/google-reviews";
import { truth } from "@/lib/truth";

const profileUrl = truth.contact.social.googleMaps;
const reviewUrl = truth.contact.reviewUrl;

function Stars({ rating }: { rating: number }) {
  return (
    <span className="google-review-stars" role="img" aria-label={`${rating} de 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 20 20" aria-hidden="true" className={index < rating ? "is-on" : undefined}>
          <path d="M10 1.7 12.35 6.9l5.65.5-4.28 3.72 1.32 5.48L10 13.9l-5.04 2.7 1.32-5.48L2 7.4l5.65-.5L10 1.7Z" />
        </svg>
      ))}
    </span>
  );
}

export function GoogleReviews() {
  const reviews = getGoogleReviews();
  return (
    <section className="section section-alt google-reviews" id="resenas-google" aria-labelledby="resenas-google-titulo">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div>
            <p className="eyebrow">Opiniones en Google</p>
            <h2 id="resenas-google-titulo">Lo que dicen nuestros clientes</h2>
          </div>
          <p>Muchos de nuestros clientes se han tomado un momento para contar su experiencia en Google Maps, y se los agradecemos de corazón. Estas son algunas de sus opiniones.</p>
        </div>
        {reviews.length ? (
          <div className="google-review-grid">
            {reviews.map((review) => (
              <article key={`${review.author}-${review.publishedAt}`} className="google-review-card">
                <header>
                  <strong>{review.author}</strong>
                  {typeof review.rating === "number" ? <Stars rating={review.rating} /> : null}
                </header>
                <blockquote>
                  <p>{review.quote}</p>
                </blockquote>
                <footer>
                  <span>Reseña de Google</span>
                  <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer">Ver en Google</a>
                </footer>
              </article>
            ))}
          </div>
        ) : null}
        <div className="google-reviews-actions">
          <a className="button button-primary" href={profileUrl} target="_blank" rel="noopener noreferrer">Ver más opiniones en Google</a>
          <a className="button button-secondary" href={reviewUrl} target="_blank" rel="noopener noreferrer">¿Ya trabajamos juntos? Cuéntanos cómo te fue</a>
        </div>
      </div>
    </section>
  );
}
