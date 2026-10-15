"use client";

import { useEffect, useRef, useState } from "react";
import { getGoogleReviews, type GoogleReview } from "@/lib/google-reviews";
import { truth } from "@/lib/truth";

const profileUrl = truth.contact.social.googleMaps;

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

function ReviewQuote({ quote }: { quote: string }) {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;
    const measure = () => {
      const mobile = window.matchMedia("(max-width: 759px)").matches;
      if (!mobile) {
        setOverflows(false);
        return;
      }
      const wasClamped = element.classList.contains("is-clamped");
      if (!wasClamped) element.classList.add("is-clamped");
      const overflow = element.scrollHeight > element.clientHeight + 1;
      if (!wasClamped) element.classList.remove("is-clamped");
      setOverflows(overflow);
    };
    measure();
    const frame = window.requestAnimationFrame(measure);
    const fonts = document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
      void fonts;
    };
  }, [quote]);

  return (
    <>
      <blockquote>
        <p ref={textRef} className={expanded ? undefined : "is-clamped"}>{quote}</p>
      </blockquote>
      {overflows ? (
        <button type="button" className="google-review-more" aria-expanded={expanded} onClick={() => setExpanded((current) => !current)}>
          {expanded ? "Leer menos" : "Leer más"}
        </button>
      ) : null}
    </>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <article className="google-review-card">
      <header>
        <strong>{review.author}</strong>
        {typeof review.rating === "number" ? <Stars rating={review.rating} /> : null}
      </header>
      <ReviewQuote quote={review.quote} />
      <footer>
        <span>Reseña de Google</span>
        <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer">Ver en Google</a>
      </footer>
    </article>
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
            {reviews.map((review) => <ReviewCard key={review.author} review={review} />)}
          </div>
        ) : null}
        <div className="google-reviews-actions">
          <a className="button button-primary" href={profileUrl} target="_blank" rel="noopener noreferrer">Ver más opiniones en Google</a>
        </div>
      </div>
    </section>
  );
}
