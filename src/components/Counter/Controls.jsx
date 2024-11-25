import React from 'react';
import css from './Counter.module.css';

function Controls({ onIncrement, onDecrement }) {
  return (
    <div className={css.counterControl}>
      <button className={css.button} type="button" onClick={onIncrement}>
        Збільшити на 1
      </button>
      <button type="button" className={css.button} onClick={onDecrement}>
        Зменшити на 1
      </button>
    </div>
  );
}

export { Controls };
