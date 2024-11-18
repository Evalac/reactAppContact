import css from './Profile.module.css';
import PropTypes from 'prop-types';

import { Profiles } from './Profile.styled';
import { ProfileDescription } from './Profile.styled';
import { ProfileAvatar } from './Profile.styled';
import { UserName } from './Profile.styled';
import { TagLocation } from './Profile.styled';

function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <Profiles>
      <ProfileDescription>
        <ProfileAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <TagLocation>{tag}</TagLocation>
        <TagLocation>{location}</TagLocation>
      </ProfileDescription>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers: </span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views: </span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes: </span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </Profiles>
  );
}

export { Profile };

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
