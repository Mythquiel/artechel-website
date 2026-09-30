import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./ContactSection.css";

export default function ContactSection({ firma, endpoint }) {
  const [copied, setCopied] = useState(false);

  const kopiuj = async () => {
    try {
      await navigator.clipboard.writeText(firma.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {}
  };

  const mapaSrc = `https://www.google.com/maps?q=${encodeURIComponent(firma.adres)}&output=embed`;
  const trasaLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(firma.adres)}`;

  return (
    <section id="kontakt">
      <div className="wrap contact">
        <div>
          <h2>Kontakt</h2>
          <dl>
            <dt>Telefon</dt>
            <dd><a href={`tel:${firma.telefon.replace(/\s/g, "")}`}>{firma.telefon}</a></dd>
            <dt>E-mail</dt>
            <dd className="email-row">
              <a href={`mailto:${firma.email}`}>{firma.email}</a>
              <button onClick={kopiuj} className="copy-btn" aria-label="Kopiuj adres e-mail">
                {copied ? "✓ Skopiowano" : "📋 Kopiuj"}
              </button>
            </dd>
            <dt>Adres</dt>
            <dd>{firma.adres}</dd>
          </dl>
        </div>
        <div>
          <h3 style={{ marginBottom: 12 }}>Godziny otwarcia</h3>
          <table className="hours">
            <tbody>
              {firma.godziny.map(([d, g]) => (
                <tr key={d}><td>{d}</td><td>{g}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="map">
          <iframe
            title={`Mapa: ${firma.adres}`}
            src={mapaSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <p><a href={trasaLink} target="_blank" rel="noopener noreferrer">Wyznacz trasę dojazdu w Google Maps</a></p>
        </div>
        <ContactForm firma={firma} endpoint={endpoint} />
      </div>
    </section>
  );
}
