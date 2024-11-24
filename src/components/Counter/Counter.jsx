import { Component } from 'react';
import css from './Counter.module.css';

class Counter extends Component {
  state = {
    value: 0,
    a: 1,
    b: 2,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div className={css.counter}>
        <span className="counterValue">{this.state.value}</span>
        <div className="counterControl">
          <button type="button" onClick={this.handleIncrement}>
            Збільшити на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Зменшити на 1
          </button>
        </div>
      </div>
    );
  }
}
export { Counter };
