import "./Card.css";

export default function Card({ emoji, title, description }) {
  return (
    <div className="card">
      <div className="card-icon">{emoji}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
