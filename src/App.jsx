import { useState, useEffect, useRef } from "react";
import "./App.css";

// ====== BRAMKA TYMCZASOWA — do usunięcia po potwierdzeniu ======
const HASH = "73d858a46b42fc5244631eed0ca3f82d6047db3376a33f3f51411c175a2fb800";

async function sprawdzHaslo(tekst) {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(tekst.trim().toLowerCase())
  );
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("") === HASH;
}

function Bramka({ onOpen }) {
  const [val, setVal] = useState("");
  const [blad, setBlad] = useState(false);

  const sprawdz = async (e) => {
    e.preventDefault();
    if (await sprawdzHaslo(val)) {
      sessionStorage.setItem("artechel_ok", "1");
      onOpen();
    } else {
      setBlad(true);
    }
  };

  return (
    <div className="gate">
      <form onSubmit={sprawdz}>
        <h1>Artechel</h1>
        <p>Strona w przygotowaniu. Podaj hasło, aby zobaczyć podgląd.</p>
        <input
          type="password"
          value={val}
          onChange={(e) => { setVal(e.target.value); setBlad(false); }}
          placeholder="Hasło"
          autoFocus
        />
        <button type="submit" className="btn main">Wejdź</button>
        {blad && <p className="gate-err">Nieprawidłowe hasło</p>}
      </form>
    </div>
  );
}

// ====== DANE FIRMY — uzupełnij prawdziwymi ======
const FIRMA = {
  nazwa: "Dorota Świtała",
  podtytul: "Art. Techniczne, Motoryzacyjne i Elektryczne · Ubezpieczenia",
  telefon: "68 388 84 54",
  email: "artechel@wp.pl",
  adres: "ul. Kościelna 1, 67-124 Nowe Miasteczko",
  godziny: [
    ["Pon–Pt", "8:30–16:00"],
    ["Sobota", "9:00–13:00"],
    ["Niedziela", "nieczynne"],
  ],
};

// Adres usługi odbierającej formularz, np. Formspree: "https://formspree.io/f/xxxxxxxx"
// Dopóki jest pusty, przycisk otworzy program pocztowy z gotową wiadomością.
const ENDPOINT_FORMULARZA = "";

// Link do wizytówki firmy w Google Maps (Udostępnij → Kopiuj link). Puste = wyszukiwarka Google.
const GOOGLE_LINK = "";
// Prawdziwe opinie wklejaj tutaj, np. { autor: "Anna K.", ocena: 5, tekst: "Miła obsługa." }
const OPINIE = [];

const SKLEP = [
  {
    t: "Artykuły elektryczne i oświetlenie",
    d: "Kompleksowa oferta materiałów elektroinstalacyjnych, osprzętu elektrycznego oraz szeroki wybór lamp i opraw oświetleniowych. Znajdziesz u nas wszystko, czego potrzebujesz do instalacji elektrycznej w domu czy mieszkaniu – od gniazdek i wyłączników, przez przewody i kable, po nowoczesne rozwiązania LED.",
    emoji: "💡"
  },
  {
    t: "Baterie i akumulatory",
    d: "Bogaty asortyment baterii jednorazowych i akumulatorów do pilotów, zegarków, zabawek, aparatów słuchowych oraz urządzeń elektronicznych. Oferujemy baterie wszystkich popularnych rozmiarów (AAA, AA, C, D, 9V) oraz akumulatory do pojazdów i sprzętu ogrodniczego.",
    emoji: "🔋"
  },
  {
    t: "Akcesoria rowerowe",
    d: "Wszystko dla rowerzystów – lampki, dzwonki, blokady, kaski, pompki, dętki, liczniki rowerowe oraz drobne części zamienne. Zarówno dla miłośników codziennych przejażdżek, jak i wymagających cyklistów.",
    emoji: "🚴"
  },
  {
    t: "Małe AGD i artykuły gospodarstwa domowego",
    d: "Praktyczne sprzęty AGD ułatwiające codzienne życie – czajniki, tostery, grzejniki, wentylatory oraz szeroki wybór drobnych artykułów dla domu. Doradzamy przy wyborze urządzeń dostosowanych do Twoich potrzeb.",
    emoji: "🏠"
  },
];

const UBEZP = [
  {
    t: "Ubezpieczenia komunikacyjne",
    d: "Kompleksowa obsługa w zakresie ubezpieczeń OC, AC oraz assistance dla samochodów osobowych, ciężarowych i motocykli. Pomożemy Ci wybrać najkorzystniejszą ofertę spośród wielu towarzystw ubezpieczeniowych.",
    emoji: "🚙"
  },
  {
    t: "Ubezpieczenia majątkowe",
    d: "Ochrona Twojego domu, mieszkania i mienia domowego. Ubezpieczenia od ognia, zalania, kradzieży i innych zdarzeń losowych. Indywidualne dopasowanie zakresu ochrony do Twoich potrzeb i możliwości finansowych.",
    emoji: "🏡"
  },
  {
    t: "Fachowe doradztwo",
    d: "Wieloletnie doświadczenie w branży ubezpieczeniowej pozwala nam profesjonalnie doradzić i dobrać optymalną ochronę ubezpieczeniową. Pomożemy w razie szkody i przeprowadzimy przez cały proces likwidacji.",
    emoji: "📋"
  },
];

// Widżet opinii z Google (getreviewwidget.com). Skrypt ładuje się wewnątrz własnego kontenera.
const REVIEW_WIDGET_ID = "17a45725-7e89-4968-8947-adcf1018f523";

function ReviewWidget() {
  const ref = useRef(null);
  useEffect(() => {
    const box = ref.current;
    // Skrypt dodajemy tylko raz (tryb deweloperski Reacta uruchamia efekt dwa razy).
    if (!box || box.dataset.loaded) return;
    box.dataset.loaded = "1";
    const script = document.createElement("script");
    script.src = "https://getreviewwidget.com/widget.js";
    script.dataset.widgetId = REVIEW_WIDGET_ID;
    script.async = true;
    script.onerror = () => console.warn("Nie udało się załadować widżetu opinii.");
    box.appendChild(script);
  }, []);
  return <div ref={ref} className="grw" />;
}

function SiteContent() {
  const [copied, setCopied] = useState(false);
  const idz = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const ograniczony = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: ograniczony ? "auto" : "smooth", block: "start" });
  };
  const [dane, setDane] = useState({ imie: "", email: "", tresc: "", pulapka: "" });
  const [status, setStatus] = useState("idle");
  const zmien = (k) => (e) => setDane({ ...dane, [k]: e.target.value });
  const wyslij = async () => {
    if (dane.pulapka) return;
    const poprawny = /^\S+@\S+\.\S+$/.test(dane.email);
    if (!dane.imie.trim() || !poprawny || !dane.tresc.trim()) {
      setStatus("invalid");
      return;
    }
    if (!ENDPOINT_FORMULARZA) {
      const temat = encodeURIComponent(`Wiadomość ze strony od: ${dane.imie}`);
      const tresc = encodeURIComponent(`${dane.tresc}\n\n${dane.imie}\n${dane.email}`);
      window.location.href = `mailto:${FIRMA.email}?subject=${temat}&body=${tresc}`;
      setStatus("mailto");
      return;
    }
    setStatus("sending");
    try {
      const r = await fetch(ENDPOINT_FORMULARZA, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: dane.imie, email: dane.email, message: dane.tresc }),
      });
      if (!r.ok) throw new Error("bad status");
      setStatus("ok");
      setDane({ imie: "", email: "", tresc: "", pulapka: "" });
    } catch (e) {
      setStatus("err");
    }
  };
  const linkGoogle =
    GOOGLE_LINK ||
    "https://www.google.com/search?q=" +
      encodeURIComponent(`${FIRMA.nazwa} ${FIRMA.adres} opinie`);
  const mapaSrc = `https://www.google.com/maps?q=${encodeURIComponent(FIRMA.adres)}&output=embed`;
  const trasaLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(FIRMA.adres)}`;
  const [idx, setIdx] = useState(0);
  const [pauza, setPauza] = useState(false);
  const nastepna = () => setIdx((i) => (i + 1) % OPINIE.length);
  const poprzednia = () => setIdx((i) => (i - 1 + OPINIE.length) % OPINIE.length);
  useEffect(() => {
    if (OPINIE.length < 2 || pauza) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % OPINIE.length), 7000);
    return () => clearInterval(t);
  }, [pauza]);
  const kopiuj = async () => {
    try {
      await navigator.clipboard.writeText(FIRMA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {}
  };

  return (
    <div className="dw">
      <div className="topbar">
       <div className="wrap">
        <nav className="nav" aria-label="Główna nawigacja">
          <div className="nav-brand">
            <strong>Dorota Świtała</strong>
            <span>Art. Techniczne, Motoryzacyjne i Elektryczne · Ubezpieczenia</span>
          </div>
          <div className="nav-links">
            <a href="#sklep" onClick={(e) => idz(e, "sklep")}>Sklep</a>
            <a href="#ubezpieczenia" onClick={(e) => idz(e, "ubezpieczenia")}>Ubezpieczenia</a>
            <a href="#o-nas" onClick={(e) => idz(e, "o-nas")}>O nas</a>
            <a href="#kontakt" onClick={(e) => idz(e, "kontakt")}>Kontakt</a>
            <a href="#opinie" onClick={(e) => idz(e, "opinie")}>Opinie</a>
          </div>
        </nav>
       </div>
      </div>
      <div className="wrap">
        <header className="hero">
          <div>
            <h1>Rodzinny sklep z tradycją od 35 lat</h1>
            <p>
              Od ponad 35 lat jesteśmy częścią lokalnej społeczności w Nowym Miasteczku.
              Oferujemy szeroki wybór produktów z zakresu elektryki, baterii, artykułów motoryzacyjnych,
              akcesoriów rowerowych oraz małego AGD. W ramach dodatkowej działalności zajmujemy się również
              ubezpieczeniami majątkowymi, pomagając dobrać odpowiednie rozwiązania do potrzeb klienta.
            </p>
            <div className="btns">
              <a className="btn main" href={`tel:${FIRMA.telefon.replace(/\s/g, "")}`}>Zadzwoń: {FIRMA.telefon}</a>
              <a className="btn ghost" href="#kontakt" onClick={(e) => idz(e, "kontakt")}>Skontaktuj się z nami</a>
            </div>
          </div>
          <aside className="plate" aria-label="Godziny otwarcia">
            <h3>Zajrzyj do nas</h3>
            <ul>
              {FIRMA.godziny.map(([d, g]) => (
                <li key={d}>{d}<span>{g}</span></li>
              ))}
            </ul>
          </aside>
        </header>
      </div>

      <section id="sklep">
        <div className="wrap">
          <h2>Nasza oferta</h2>
          <p className="lead">
            Dysponujemy bogatym asortymentem produktów dla domu, warsztatu i pojazdu.
            Nasi doświadczeni pracownicy służą fachową pomocą i doradztwem przy wyborze odpowiednich artykułów.
            Zapraszamy do osobistego kontaktu — chętnie pomożemy znaleźć to, czego potrzebujesz.
          </p>
          <div className="cols">
            {SKLEP.map((x) => (
              <div key={x.t} className="card">
                <div className="card-icon">{x.emoji}</div>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ubezpieczenia" className="ins">
        <div className="wrap">
          <h2>Ubezpieczenia</h2>
          <p className="lead">
            Jako agent ubezpieczeniowy oferujemy kompleksową obsługę w zakresie ubezpieczeń majątkowych
            oraz komunikacyjnych. Dzięki współpracy z wieloma towarzystwami ubezpieczeniowymi możemy zaproponować
            rozwiązania dostosowane do Twoich potrzeb i budżetu. Pomagamy również w razie szkody,
            przeprowadzając przez cały proces likwidacji.
          </p>
          <div className="cols">
            {UBEZP.map((x) => (
              <div key={x.t} className="card">
                <div className="card-icon">{x.emoji}</div>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="o-nas">
        <div className="wrap about">
          <h2>O nas</h2>
          <div>
            <p>
              Od ponad 35 lat obsługujemy mieszkańców Nowego Miasteczka i okolic. Nasza firma powstała
              z pasji i zaangażowania w lokalną społeczność. Jako rodzinny sklep stawiamy na zaufanie,
              rzetelność i indywidualne podejście do każdego klienta.
            </p>
            <p>
              Wieloletnie doświadczenie pozwala nam nie tylko sprzedawać produkty, ale przede wszystkim
              doradzać i pomagać w wyborze najlepszych rozwiązań. Znamy nasze produkty, rozumiemy potrzeby
              klientów i chętnie dzielimy się wiedzą.
            </p>
            <p><strong>Dlaczego warto nas odwiedzić?</strong></p>
            <ul className="why">
              <li>Ponad 35 lat doświadczenia na rynku lokalnym</li>
              <li>Rodzinna firma — obsługa z pasją i zaangażowaniem</li>
              <li>Fachowe doradztwo i indywidualne podejście</li>
              <li>Szeroki wybór produktów w jednym miejscu</li>
              <li>Kompleksowa obsługa ubezpieczeń majątkowych</li>
              <li>Miła i pomocna obsługa</li>
              <li>Dogodna lokalizacja w centrum Nowego Miasteczka</li>
              <li>Konkurencyjne ceny i promocje</li>
            </ul>
            <p>
              Dziękujemy, że jesteście z nami od tylu lat. Wasza lojalność i zaufanie są dla nas najważniejsze.
              Zapraszamy serdecznie do naszego sklepu!
            </p>
          </div>
        </div>
      </section>

      <section id="kontakt">
        <div className="wrap contact">
          <div>
            <h2>Kontakt</h2>
            <dl>
              <dt>Telefon</dt>
              <dd><a href={`tel:${FIRMA.telefon.replace(/\s/g, "")}`}>{FIRMA.telefon}</a></dd>
              <dt>E-mail</dt>
              <dd className="email-row">
                <a href={`mailto:${FIRMA.email}`}>{FIRMA.email}</a>
                <button onClick={kopiuj} className="copy-btn" aria-label="Kopiuj adres e-mail">
                  {copied ? "✓ Skopiowano" : "📋 Kopiuj"}
                </button>
              </dd>
              <dt>Adres</dt>
              <dd>{FIRMA.adres}</dd>
            </dl>
          </div>
          <div>
            <h3 style={{ marginBottom: 12 }}>Godziny otwarcia</h3>
            <table className="hours">
              <tbody>
                {FIRMA.godziny.map(([d, g]) => (
                  <tr key={d}><td>{d}</td><td>{g}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="map">
            <iframe
              title={`Mapa: ${FIRMA.adres}`}
              src={mapaSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <p><a href={trasaLink} target="_blank" rel="noopener noreferrer">Wyznacz trasę dojazdu w Google Maps</a></p>
          </div>
          <div className="msg" role="form" aria-label="Formularz kontaktowy">
            <h3>Napisz do nas</h3>
            <p>Wyślij wiadomość, a odpowiemy najszybciej, jak to możliwe.</p>
            <div className="row">
              <div>
                <label htmlFor="imie">Imię i nazwisko</label>
                <input id="imie" value={dane.imie} onChange={zmien("imie")} autoComplete="name" />
              </div>
              <div>
                <label htmlFor="mail">Adres e-mail</label>
                <input id="mail" type="email" value={dane.email} onChange={zmien("email")} autoComplete="email" />
              </div>
            </div>
            <label htmlFor="tresc" style={{ marginTop: 16 }}>Wiadomość</label>
            <textarea id="tresc" value={dane.tresc} onChange={zmien("tresc")} />
            <input className="hp" tabIndex={-1} aria-hidden="true" autoComplete="off" value={dane.pulapka} onChange={zmien("pulapka")} />
            <button className="btn main" onClick={wyslij} disabled={status === "sending"}>
              {status === "sending" ? "Wysyłanie…" : "Wyślij wiadomość"}
            </button>
            {status === "invalid" && <div className="status err" role="alert">Uzupełnij imię, poprawny adres e-mail i treść wiadomości.</div>}
            {status === "err" && <div className="status err" role="alert">Nie udało się wysłać wiadomości. Spróbuj ponownie lub zadzwoń: {FIRMA.telefon}.</div>}
            {status === "ok" && <div className="status ok" role="status">Dziękujemy, wiadomość została wysłana.</div>}
            {status === "mailto" && <div className="status ok" role="status">Otwieramy Twój program pocztowy z gotową wiadomością.</div>}
          </div>
        </div>
      </section>

      <section id="opinie">
        <div className="wrap">
          <h2>Opinie klientów</h2>
          <p className="lead">Cieszymy się z każdej dobrej opinii. Zajrzyj, co piszą o nas w Google, albo dodaj własną.</p>
          <div className="reviews-header">
            <a className="btn main" href={linkGoogle} target="_blank" rel="noopener noreferrer">⭐ Zobacz opinie w Google</a>
          </div>
          {OPINIE.length > 0 && (
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
                  {OPINIE.map((o, i) => (
                    <blockquote className="slide" key={i} aria-hidden={i !== idx}>
                      <div className="stars" aria-label={`Ocena ${o.ocena} na 5`}>{"★".repeat(o.ocena)}</div>
                      <p>{o.tekst}</p>
                      <cite>{o.autor}</cite>
                    </blockquote>
                  ))}
                </div>
              </div>
              {OPINIE.length > 1 && (
                <div className="ctrl">
                  <button onClick={poprzednia} aria-label="Poprzednia opinia">‹</button>
                  <div className="dots">
                    {OPINIE.map((_, i) => (
                      <button key={i} onClick={() => setIdx(i)} aria-label={`Opinia ${i + 1}`} aria-current={i === idx} />
                    ))}
                  </div>
                  <button onClick={nastepna} aria-label="Następna opinia">›</button>
                </div>
              )}
            </div>
          )}
          <ReviewWidget />
        </div>
      </section>

      <footer>
        <div className="wrap">© {new Date().getFullYear()} {FIRMA.nazwa} — {FIRMA.podtytul}</div>
      </footer>
    </div>
  );
}

export default function App() {
  const [otwarte, setOtwarte] = useState(() => sessionStorage.getItem("artechel_ok") === "1");

  if (!otwarte) return <Bramka onOpen={() => setOtwarte(true)} />;
  return <SiteContent />;
}