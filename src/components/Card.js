import "./Card.css";

export default function Card({
  card,
  shuffleCards,
  flipped,
  setFlipped,
  text,
  name,
}) {
  const handleClick = () => {
    shuffleCards();
    setFlipped(true);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card} alt="card front" />

        <img
          className="back"
          src="https://essisteri.github.io/tarot-app/img/back.png?raw=true"
          onClick={handleClick}
          alt="cover"
        />
      </div>
      <div>{name}</div>
      <div className="text">{text}</div>
    </div>
  );
}
