import React, { Component } from 'react';
import css from './ColorPicker.module.css';

const ColorPicker = ({ options }) => (
  <div className={css.ColorPicker}>
    <h2 className={css.ColorPicker__title}>ColorPicker</h2>
    <div className={css.ColorPicker__container}>
      {options.map(({ label, color }) => (
        <span
          key={label}
          className={css.ColorPicker__option}
          style={{ backgroundColor: color }}
        ></span>
      ))}
    </div>
  </div>
);

export { ColorPicker };
