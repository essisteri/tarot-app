import "../src/App.css";
import { CardDeck } from "../components/CardDeck";

function Meanings() {
  const onClick = () => {};
  return (
    <div className="card-grid">
      {CardDeck.map((card) => (
        <>
          <img src={card.src} alt={card.text} onClick={onClick} />
        </>
      ))}
    </div>
  );
}

export default Meanings;
