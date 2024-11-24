import React from 'react';

function Controls({ onIncrement, onDecrement }) {
  return (
    <div className="counterControl">
      <button type="button" onClick={onIncrement}>
        Збільшити на 1
      </button>
      <button type="button" onClick={onDecrement}>
        Зменшити на 1
      </button>
    </div>
  );
}

export { Controls };
