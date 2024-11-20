import users from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import { Profile } from '../Profile/Profile';
import { Statistic } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { Container } from './App.styled';

import React, { Component } from 'react';

// ✅ Добре
class Counter extends Component {
  /* ... */

  handleIncrement = evt => {
    console.log('Increment button was clicked!', evt); // працює
    console.log('this.props: ', this.props); // працює
  };

  handleDecrement = evt => {
    console.log('Decrement button was clicked!', evt); // працює
    console.log('this.props: ', this.props); // працює
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>

        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

export const App = () => {
  return (
    <>
      <Counter step={5} />
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
    </>
  );
};
