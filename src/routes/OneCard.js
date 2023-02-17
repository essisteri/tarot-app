import { useState } from "react";
//import "../App.css";
import Card from "../components/Card";
import { CardDeck } from "../components/CardDeck";

function OneCard() {
  const [card, setCard] = useState("");
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [flipped, setFlipped] = useState(false);

  const shuffleCards = () => {
    const randomIndex = Math.floor(Math.random() * Math.floor(CardDeck.length));
    setCard(CardDeck[randomIndex].src);
    setText(CardDeck[randomIndex].text);
    setName(CardDeck[randomIndex].name);
    console.log(name);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="App">
      <h1>Nosta tarot-kortti</h1>
      <div className="card-table">
        <button onClick={refreshPage}>Sekoita pakka</button>
        <br />
        <br />

        <Card
          card={card}
          setCard={setCard}
          setFlipped={setFlipped}
          flipped={flipped}
          shuffleCards={shuffleCards}
          text={text}
          name={name}
        />
      </div>
    </div>
  );
}

export default OneCard;
