import React, { Component } from 'react';
import css from './ColorPicker.module.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 6,
  };

  activeColor(index) {
    const optionClasses = [css.ColorPicker__option];

    if (this.state.activeOptionIdx === index) {
      optionClasses.push(css.ColorPicker__option__active);
    }
    return optionClasses.join(' ');
  }

  changeColor(index) {
    this.setState({ activeOptionIdx: index });
  }

  render() {
    const { label } = this.props.options[this.state.activeOptionIdx];
    return (
      <div className={css.ColorPicker}>
        <h2 className={css.ColorPicker__title}>ColorPicker</h2>
        <p>Колір: {label}</p>
        <div className={css.ColorPicker__container}>
          {this.props.options.map(({ label, color }, index) => (
            <button
              type="button"
              key={label}
              className={this.activeColor(index)}
              style={{ backgroundColor: color }}
              onClick={() => {
                this.changeColor(index);
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export { ColorPicker };
