import React, { useEffect, useState } from "react";

import Card from "./Card";

import Timer from "./Timer";
import cardImages from "./CardImages";
function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  const shuffledCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setResetTimer((prev) => !prev);
  };
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    console.log(card);
  };
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffledCards();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">
        Card Matching Game
      </h1>
      <Timer reset={resetTimer} />
      <button
        onClick={shuffledCards}
        className="bg-orange-500 p-4  rounded-md text-white "
      >
        New Game
      </button>
      <div className="grid grid-cols-4 grid-rows-3 w-fit gap-3 ">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          );
        })}
      </div>

      <p className="border-2 border-orange-500 p-3 font-bold rounded-lg  text-2xl ">
        Turns:{turns}
      </p>
    </div>
  );
}

export default App;
