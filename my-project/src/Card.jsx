import React from "react";
import cover from "./images/cover.png";

function Card({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className="  flex flex-col justify-center items-center">
      <img
        className="h-40 w-40 rounded-md border "
        src={card.src}
        alt="images for Game"
      />
      <img
        className="h-40 w-40 rounded-md border"
        src={cover}
        onClick={handleClick}
        alt="image that covers the card"
      />
    </div>
  );
}

export default Card;
