import "./Layout.css";

export default function TopBar({ firma }) {
  const idz = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const ograniczony = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: ograniczony ? "auto" : "smooth", block: "start" });
  };

  return (
    <div className="topbar">
      <div className="wrap">
        <nav className="nav" aria-label="Główna nawigacja">
          <div className="nav-brand">
            <strong>{firma.podtytul}</strong>
            <span>{firma.nazwa}</span>
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
  );
}
