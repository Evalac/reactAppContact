import users from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import { Profile } from '../Profile/Profile';
import { Statistic } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { Container } from './App.styled';

import { Counter } from 'components/Counter/Counter';

export const App = () => {
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
      <Counter />
    </>
  );
};
