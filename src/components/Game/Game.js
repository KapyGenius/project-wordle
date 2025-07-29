import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import TextInput from '../TextInput/TextInput';
import GuestList from '../GuestList/GuestList';
import FinalResult from '../FinalResult/FinalResult';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <>
      <GuestList guesses={guesses} answer={answer} />
      <TextInput guesses={guesses} setGuesses={setGuesses} gameOver={gameOver} setGameOver={setGameOver} answer={answer} setSuccess={setSuccess}  />
      {gameOver && <FinalResult success={success} numOfGuesses={guesses.length} answer={answer} />}
    </>
  );
}

export default Game;
