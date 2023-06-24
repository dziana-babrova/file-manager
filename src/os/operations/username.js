import { userInfo } from 'os';

const getUsername = () => {
  const username = userInfo().username;
  console.log(username);
};

export { getUsername };
