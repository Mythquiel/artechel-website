import { useState } from "react";
import "./Gate.css";

// ====== BRAMKA TYMCZASOWA — do usunięcia po potwierdzeniu ======
const HASH = "73d858a46b42fc5244631eed0ca3f82d6047db3376a33f3f51411c175a2fb800";

async function sprawdzHaslo(tekst) {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(tekst.trim().toLowerCase())
  );
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("") === HASH;
}

export default function Gate({ onOpen }) {
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
