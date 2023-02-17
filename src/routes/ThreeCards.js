import { useState, useEffect } from "react";
import "../src/App.css";
import Card from "../components/Card";
import { CardDeck } from "../components/CardDeck";

function ThreeCards() {
  const [card, setCard] = useState("");
  const [cardTwo, setCardTwo] = useState("");
  const [text, setText] = useState("");
  const [textTwo, setTextTwo] = useState("");
  const [flipped, setFlipped] = useState(false);
  const [flippedTwo, setFlippedTwo] = useState(false);
  let randomIndex2;

  const shuffleCards = () => {
    const randomIndex = Math.floor(Math.random() * Math.floor(CardDeck.length));
    setCard(CardDeck[randomIndex].src);
    setText(CardDeck[randomIndex].text);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="App">
      <h1>Nosta tarot-kortti</h1>
      <button onClick={refreshPage}>Sekoita pakka</button>
      <div className="card-grid">
        <Card
          card={card}
          setFlipped={setFlipped}
          flipped={flipped}
          shuffleCards={shuffleCards}
        />
        <Card
          card={card}
          setFlipped={setFlipped}
          flipped={flippedTwo}
          shuffleCards={shuffleCards}
        />
        <Card
          card={card}
          setFlipped={setFlipped}
          flipped={flippedTwo}
          shuffleCards={shuffleCards}
        />
      </div>
    </div>
  );
}

export default ThreeCards;
