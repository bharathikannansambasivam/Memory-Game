import React, { useEffect, useState } from "react";
import clock from "./images/clock.gif";
function Timer({ reset }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    setTimer(30);
  }, [reset]);

  console.log(timer);
  useEffect(() => {
    if (timer > 0) {
      const interval = setTimeout(() => setTimer((prev) => prev - 1), 1000);
      return () => clearTimeout(interval);
    }
  }, [timer]);

  return (
    <div>
      <p
        className={`text-2xl font-bold ${
          timer === 0 ? "text-red-600 animate-pulse" : "text-gray-800"
        }`}
      >
        {timer === 0 ? (
          <div className="flex text-center  items-center">
            <img className="h-12" src={clock} alt="" />
            <p>Time's Up!</p>
          </div>
        ) : (
          timer
        )}
      </p>
    </div>
  );
}

export default Timer;
