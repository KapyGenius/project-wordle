import React, { useState } from 'react';

function TextInput() {
  const [guess, setGuess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
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
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default TextInput;
