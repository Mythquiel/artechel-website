import { useForm } from "@formspree/react";
import "./ContactForm.css";

export default function ContactForm({ firma, endpoint }) {
  // Wyciągamy ID formularza z endpoint URL (np. "mljdvppe" z "https://formspree.io/f/mljdvppe")
  const formId = endpoint ? endpoint.split("/f/")[1] : null;
  const [state, handleSubmit] = useForm(formId || "");

  // Fallback do mailto jeśli brak endpoint
  if (!endpoint) {
    return (
      <div className="msg" role="form" aria-label="Formularz kontaktowy">
        <h3>Napisz do nas</h3>
        <p>Wyślij wiadomość, a odpowiemy najszybciej, jak to możliwe.</p>
        <a className="btn main" href={`mailto:${firma.email}`}>
          Napisz e-mail
        </a>
      </div>
    );
  }

  return (
    <div className="msg" role="form" aria-label="Formularz kontaktowy">
      <h3>Napisz do nas</h3>
      <p>Wyślij wiadomość, a odpowiemy najszybciej, jak to możliwe.</p>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div>
            <label htmlFor="name">Imię i nazwisko</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              disabled={state.submitting}
            />
          </div>
          <div>
            <label htmlFor="email">Adres e-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              disabled={state.submitting}
            />
          </div>
        </div>
        <label htmlFor="message" style={{ marginTop: 16 }}>Wiadomość</label>
        <textarea
          id="message"
          name="message"
          required
          disabled={state.submitting}
        />
        <input className="hp" tabIndex={-1} aria-hidden="true" autoComplete="off" name="_gotcha" />
        <button className="btn main" type="submit" disabled={state.submitting}>
          {state.submitting ? "Wysyłanie…" : "Wyślij wiadomość"}
        </button>
        {state.errors && state.errors.length > 0 && (
          <div className="status err" role="alert">
            Nie udało się wysłać wiadomości. Spróbuj ponownie lub zadzwoń: {firma.telefon}.
          </div>
        )}
        {state.succeeded && (
          <div className="status ok" role="status">
            Dziękujemy, wiadomość została wysłana.
          </div>
        )}
      </form>
    </div>
  );
}
