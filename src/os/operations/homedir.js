import { homedir } from 'os';

const getHomedir = () => {
  console.log(homedir());
};

export { getHomedir };
