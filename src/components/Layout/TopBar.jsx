import "./Layout.css";

export default function TopBar({ firma }) {
  const idz = (e, id) => {
    e.preventDefault();
    const el = id ? document.getElementById(id) : document.body;
    const ograniczony = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (id) {
      el?.scrollIntoView({ behavior: ograniczony ? "auto" : "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: ograniczony ? "auto" : "smooth" });
    }
  };

  return (
    <div className="topbar">
      <div className="wrap">
        <nav className="nav" aria-label="Główna nawigacja">
          <a href="#top" className="nav-brand" onClick={(e) => idz(e, null)}>
            <strong>{firma.podtytul}</strong>
            <span>{firma.nazwa}</span>
          </a>
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
  );
}
