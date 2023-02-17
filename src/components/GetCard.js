import { CardDeck } from "./CardDeck";

function getRandom(max) {
  return Math.floor(Math.random() * max);
}
function getCard() {
  const randomIndex = getRandom(CardDeck.length);
  return CardDeck[randomIndex];
}

export { getCard };
