import React, { useState } from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function TextInput({ guesses, setGuesses, status, setStatus, answer }) {
  const [guess, setGuess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const nextGuesses = [...guesses, { id: crypto.randomUUID(), value: guess }];
    if (nextGuesses.length <= NUM_OF_GUESSES_ALLOWED) {
      setGuesses(nextGuesses);
    }
    if (guess.toUpperCase() == answer.toUpperCase()) {
      setStatus('won');
    }
    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED && guess !== answer) {
      setStatus('lost');
    }
    setGuess('');
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern="[A-Z]{5}"
        minLength={5}
        maxLength={5}
        title="Please enter a word of 5 letters"
        required
        disabled={status != 'playing'}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default TextInput;
