import "./Layout.css";

export default function Footer({ firma }) {
  return (
    <footer>
      <div className="wrap">© {new Date().getFullYear()} {firma.nazwa} — {firma.podtytul}</div>
    </footer>
  );
}
