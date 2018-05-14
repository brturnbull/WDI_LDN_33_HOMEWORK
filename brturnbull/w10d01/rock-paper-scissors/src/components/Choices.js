import React from 'react';


const Choices = ({ choice, reset }) => {
  return (
    <div>
      <button className="button" value="Rock" onClick={choice}>Rock</button>
      {' '}
      <button className="button" value="Paper" onClick={choice}>Paper</button>
      {' '}
      <button className="button" value="Scissors" onClick={choice}>Scissors</button>
      {' '}
      <button className="button" onClick={reset}>Reset Game</button>
    </div>
  );

};

export default Choices;
