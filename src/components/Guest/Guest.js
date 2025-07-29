import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guest({ guess, answer }) {
  const checkedGuess = guess ? checkGuess(guess.value, answer) : undefined;
  console.log({ checkedGuess });

  return (
    <p className="guess">
      {range(5).map((num) =>
        checkedGuess ? (
          <span key={num} className={`cell ${checkedGuess[num].status}`}>
            {checkedGuess[num].letter}
          </span>
        ) : (
          <span key={num} className="cell" />
        )
      )}
    </p>
  );
}

export default Guest;
