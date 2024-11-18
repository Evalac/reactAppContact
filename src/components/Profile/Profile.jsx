import PropTypes from 'prop-types';

import { Profiles } from './Profile.styled';
import { ProfileDescription } from './Profile.styled';
import { ProfileAvatar } from './Profile.styled';
import { UserName } from './Profile.styled';
import { TagLocation } from './Profile.styled';
import { Stats } from './Profile.styled';
import { ListElement } from './Profile.styled';
import { FolowersTitle } from './Profile.styled';
import { FolowersQuantyty } from './Profile.styled';

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

      <Stats>
        <ListElement>
          <FolowersTitle>Followers: </FolowersTitle>
          <FolowersQuantyty>{followers}</FolowersQuantyty>
        </ListElement>
        <ListElement>
          <FolowersTitle>Views: </FolowersTitle>
          <FolowersQuantyty>{views}</FolowersQuantyty>
        </ListElement>
        <ListElement>
          <FolowersTitle>Likes: </FolowersTitle>
          <FolowersQuantyty>{likes}</FolowersQuantyty>
        </ListElement>
      </Stats>
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
