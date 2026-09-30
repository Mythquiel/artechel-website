import "./AboutSection.css";

export default function AboutSection() {
  return (
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
  );
}
