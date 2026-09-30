import Card from "../Card/Card";

export default function ShopSection({ sklep }) {
  return (
    <section id="sklep">
      <div className="wrap">
        <h2>Nasza oferta</h2>
        <p className="lead">
          Dysponujemy bogatym asortymentem produktów dla domu, warsztatu i pojazdu.
          Z pasją i wieloletnim doświadczeniem służę fachową pomocą w wyborze odpowiednich artykułów.
          Każdy klient ma u nas czas i uwagę — zapraszam serdecznie!
        </p>
        <div className="cols">
          {sklep.map((x) => (
            <Card key={x.t} emoji={x.emoji} title={x.t} description={x.d} />
          ))}
        </div>
      </div>
    </section>
  );
}
