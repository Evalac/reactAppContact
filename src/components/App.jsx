import users from '../user.json';
import { Profile } from './Profile';
console.log(users);

export const App = () => {
  return (
    <>
      <Profile user={users} />
    </>
  );
};
