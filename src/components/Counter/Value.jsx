import React from 'react';
import css from './Counter.module.css';

function Value({ onValue }) {
  return <span className={css.counterValue}>{onValue}</span>;
}

export { Value };
