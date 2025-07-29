import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guest from '../Guest/Guest';

function GuestList({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guest guess={guesses[num]} key={num} answer={answer} />
      ))}
    </div>
  );
}

export default GuestList;
