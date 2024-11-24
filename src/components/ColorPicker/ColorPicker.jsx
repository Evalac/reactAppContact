import React, { Component } from 'react';
import css from './ColorPicker.module.css';

const ColorPicker = ({ options }) => (
  <div className="ColorPicker">
    <h2 className="ColorPicker__title">ColorPicker</h2>
    <div>
      {options.map(({ label, color }) => (
        <span
          key={label}
          className="ColorPicker__option"
          style={{ backgroundColor: color }}
        ></span>
      ))}
    </div>
  </div>
);

export { ColorPicker };
