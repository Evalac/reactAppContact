import React, { Component } from 'react';
import css from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };
  //   show = () => {
  //     this.setState({ visible: true });
  //   };
  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    return (
      <div className={css.Dropdown}>
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
          //   onMouseOver={this.toggle} щоб подія спрацювувала на ховер
        >
          {this.state.visible ? 'Hide' : 'Show'}
        </button>
        {/* <button type="button" className="Dropdown__toggle" onClick={this.hide}>
          Сховати{' '}
        </button> */}
        {this.state.visible && (
          <div className={css.Dropdown__menu}>Випадаюче меню</div>
        )}
      </div>
    );
  }
}

export { Dropdown };
