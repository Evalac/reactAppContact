import { Component } from 'react';

import users from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import { Profile } from '../Profile/Profile';
import { Statistic } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { Container } from './App.styled';

import { Counter } from '../Counter';
import { Dropdown } from '../Dropdown';
import { ColorPicker } from 'components/ColorPicker/ColorPicker';

import { TodoList } from '../TodoList';
import initialTodos from '../../todos.json';

const colorOptions = [
  { label: 'red', color: '#f44336' },
  { label: 'blue', color: '#2196f3' },
  { label: 'green', color: '#4caf50' },
  { label: 'yellow', color: '#ffeb3b' },
  { label: 'orange', color: '#ff9800' },
  { label: 'purple', color: '#9c27b0' },
  { label: 'pink', color: '#e91e63' },
  { label: 'teal', color: '#009688' },
];

export class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;

    const allTodos = todos.length;
    const toDoComleted = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        <Profile
          username={users.username}
          tag={users.tag}
          location={users.location}
          avatar={users.avatar}
          stats={users.stats}
        />
        <Statistic title={`Upload stats`} stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
        <Container />
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorOptions} />
        <div>
          <p>Кількість ToDo: {allTodos}</p>
          <p>Кількість виконаних ToDo: {toDoComleted}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
