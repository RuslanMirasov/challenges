import "./Card.css";

export default function Card({ name, className = "" }) {
  return <p className={`card ${className && className}`}>{name}</p>;
}
