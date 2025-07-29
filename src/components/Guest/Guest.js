import React from 'react';
import { range } from '../../utils';

function Guest({ guess }) {
  return <p className="guess">
  {range(5).map((num) => (
    <span key={num} className="cell">
      {guess ? guess.value[num] : undefined}
    </span>
  ))}
</p>;
}

export default Guest;
