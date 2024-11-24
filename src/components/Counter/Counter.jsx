import { Component } from 'react';
import React from 'react';
import css from './Counter.module.css';

import { Controls } from './Controls';
import { Value } from './Value';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  }; // статичне початкове значення, якщо його не вказати в пропах або воно не прийшло в проп то буде помилка

  state = {
    value: this.props.initialValue, // це треба щоб з пропів брало значення
  };

  handleIncrement = () => {
    // this.setState({value:15}) це якщо треба змінити стан не залежно від минолого стану
    this.setState(prevState => ({
      // а так змінюється стан якщо він залежить від минулого стану
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <div className={css.counter}>
        <Value onValue={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
export { Counter };
