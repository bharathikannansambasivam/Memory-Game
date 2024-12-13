import React from "react";
import cover from "./images/cover.png";

function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card    rounded-md border-orange-700">
      <div className={flipped ? "flipped" : ""}>
        <img
          className=" card front h-32 w-32  rounded-md border "
          src={card.src}
          alt="card front"
        />
        <img
          className="back h-32 w-32 rounded-md border "
          src={cover}
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}

export default Card;
