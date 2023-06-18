import { chdir, cwd } from 'process';
import path from 'path';

const displayCurrentDirectory = () => {
  const currentDirectory = cwd();
  console.log(`You are currently in ${currentDirectory}`);
};

const goUp = () => {
  const currentDirectory = cwd();
  const destinationDirectory = path.join(currentDirectory, '../');
  chdir(destinationDirectory);
}

export { displayCurrentDirectory, goUp };
