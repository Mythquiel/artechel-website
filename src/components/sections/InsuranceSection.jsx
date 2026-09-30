import Card from "../Card/Card";
import "./InsuranceSection.css";

export default function InsuranceSection({ ubezpieczenia }) {
  return (
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
          {ubezpieczenia.map((x) => (
            <Card key={x.t} emoji={x.emoji} title={x.t} description={x.d} />
          ))}
        </div>
      </div>
    </section>
  );
}
