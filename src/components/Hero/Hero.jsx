import "./Hero.css";

export default function Hero({ firma }) {
  const idz = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const ograniczony = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: ograniczony ? "auto" : "smooth", block: "start" });
  };

  return (
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
          <a className="btn main" href={`tel:${firma.telefon.replace(/\s/g, "")}`}>Zadzwoń: {firma.telefon}</a>
          <a className="btn ghost" href="#kontakt" onClick={(e) => idz(e, "kontakt")}>Skontaktuj się z nami</a>
        </div>
      </div>
      <aside className="plate" aria-label="Godziny otwarcia">
        <h3>Zajrzyj do nas</h3>
        <ul>
          {firma.godziny.map(([d, g]) => (
            <li key={d}>{d}<span>{g}</span></li>
          ))}
        </ul>
      </aside>
    </header>
  );
}
