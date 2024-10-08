import users from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import { Profile } from './Profile/Profile';
import { Statistic } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

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
    </>
  );
};
