import { FriendListItem } from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';

function FriendList({ friends }) {
  console.log(friends);

  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

export { FriendList };
