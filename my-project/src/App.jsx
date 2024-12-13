import React, { useState } from "react";
import boat from "./images/boat.png";
import sun from "./images/sun.png";
import juk from "./images/juk.png";
import seal from "./images/seal.png";
import bird from "./images/bird.png";
import duck from "./images/duck.png";
import Card from "./Card";

const cardImages = [
  { src: boat },
  { src: sun },
  { src: juk },
  { src: seal },
  { src: bird },
  { src: duck },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffledCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(
      () => Math.random() - 0.5
    );
    setCards(shuffledCards);
    setTurns(0);
  };
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  return (
    <div className="">
      <h1>App</h1>
      <button
        onClick={shuffledCards}
        className="bg-orange-500 p-4  rounded-md text-white "
      >
        New Game
      </button>
      <div className="grid grid-cols-4 grid-rows-3 w-fit ">
        {cards.map((card) => {
          return <Card card={card} handleChoice={handleChoice} />;
        })}
      </div>
    </div>
  );
}

export default App;
