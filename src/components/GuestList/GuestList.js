import React from 'react';

function GuestList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <p className="guess" key={guess.id}>
          {guess.value.split('').map((letter, index) => (
            <span key={index} className="cell">
              {letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuestList;
