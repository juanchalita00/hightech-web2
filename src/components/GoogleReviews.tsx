import { getGoogleReviews } from "@/lib/google-reviews";
import { truth } from "@/lib/truth";

const profileUrl = truth.contact.social.googleMaps;

export function GoogleReviews() {
  const reviews = getGoogleReviews();
  return (
    <section className="section google-reviews" id="resenas-google" aria-labelledby="resenas-google-titulo">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div>
            <p className="eyebrow">Reseñas en Google</p>
            <h2 id="resenas-google-titulo">El perfil de Google reúne las reseñas del negocio.</h2>
          </div>
          <p>Si ya trabajaste con HIGHTECH, la reseña se deja en Google. Aquí no publicamos calificaciones ni citas que no estén cargadas desde ese perfil.</p>
        </div>
        {reviews.length ? (
          <div className="review-grid">
            {reviews.map((review) => (
              <blockquote key={`${review.author}-${review.publishedAt}`}>
                <p>“{review.quote}”</p>
                <footer>
                  <strong>{review.author}</strong>
                  <span>{review.publishedAt}{review.rating ? ` · ${review.rating} de 5` : ""}</span>
                  <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer">Ver en Google</a>
                </footer>
              </blockquote>
            ))}
          </div>
        ) : null}
        <div className="google-reviews-actions">
          <a className="button button-primary" href={profileUrl} target="_blank" rel="noopener noreferrer">Déjanos tu reseña</a>
          <a className="button button-secondary" href={profileUrl} target="_blank" rel="noopener noreferrer">Ver el perfil en Google</a>
        </div>
      </div>
    </section>
  );
}
