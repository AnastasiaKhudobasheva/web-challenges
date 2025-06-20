import "./Card.css";

export default function Card({ name, color }) {
  return <div className={`card--${color}`}>{name}</div>;
}
