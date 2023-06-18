import { cwd } from 'process'

const displayCurrentDirectory = () => {
  const currentDirectory = cwd();
  console.log(`You are currently in ${currentDirectory}`);
};

export { displayCurrentDirectory };
