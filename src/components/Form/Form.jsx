import { React, Component } from 'react';

class Form extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.currentTarget.value });
    console.log(this.state.inputValue);
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.inputValue}
        onChange={this.handleInputChange}
      ></input>
    );
  }
}

export { Form };
