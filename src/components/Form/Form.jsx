import { React, Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    nickName: '',
    experience: 'middle',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onDataSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', nickName: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Імʼя:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          NickName:{' '}
          <input
            type="text"
            name="nickName"
            value={this.state.nickName}
            onChange={this.handleChange}
          />
        </label>
        <p>Ваш рівень:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>

        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export { Form };
