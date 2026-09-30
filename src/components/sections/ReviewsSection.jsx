import { useState, useEffect } from "react";
import ReviewWidget from "../ReviewWidget/ReviewWidget";
import "./ReviewsSection.css";

export default function ReviewsSection({ googleLink, opinie, widgetId }) {
  const [idx, setIdx] = useState(0);
  const [pauza, setPauza] = useState(false);

  const nastepna = () => setIdx((i) => (i + 1) % opinie.length);
  const poprzednia = () => setIdx((i) => (i - 1 + opinie.length) % opinie.length);

  useEffect(() => {
    if (opinie.length < 2 || pauza) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % opinie.length), 7000);
    return () => clearInterval(t);
  }, [pauza, opinie.length]);

  const linkGoogle =
    googleLink ||
    "https://www.google.com/search?q=" + encodeURIComponent("Artechel Nowe Miasteczko opinie");

  return (
    <section id="opinie">
      <div className="wrap">
        <h2>Opinie klientów</h2>
        <p className="lead">Cieszymy się z każdej dobrej opinii. Zajrzyj, co piszą o nas w Google, albo dodaj własną.</p>
        <div className="reviews-header">
          <a className="btn main" href={linkGoogle} target="_blank" rel="noopener noreferrer">⭐ Zobacz opinie w Google</a>
        </div>
        {opinie.length > 0 && (
          <div
            className="slider"
            role="region"
            aria-roledescription="karuzela"
            aria-label="Opinie klientów"
            onMouseEnter={() => setPauza(true)}
            onMouseLeave={() => setPauza(false)}
            onFocus={() => setPauza(true)}
            onBlur={() => setPauza(false)}
          >
            <div className="viewport">
              <div className="track" style={{ transform: `translateX(-${idx * 100}%)` }}>
                {opinie.map((o, i) => (
                  <blockquote className="slide" key={i} aria-hidden={i !== idx}>
                    <div className="stars" aria-label={`Ocena ${o.ocena} na 5`}>{"★".repeat(o.ocena)}</div>
                    <p>{o.tekst}</p>
                    <cite>{o.autor}</cite>
                  </blockquote>
                ))}
              </div>
            </div>
            {opinie.length > 1 && (
              <div className="ctrl">
                <button onClick={poprzednia} aria-label="Poprzednia opinia">‹</button>
                <div className="dots">
                  {opinie.map((_, i) => (
                    <button key={i} onClick={() => setIdx(i)} aria-label={`Opinia ${i + 1}`} aria-current={i === idx} />
                  ))}
                </div>
                <button onClick={nastepna} aria-label="Następna opinia">›</button>
              </div>
            )}
          </div>
        )}
        <ReviewWidget widgetId={widgetId} />
      </div>
    </section>
  );
}
