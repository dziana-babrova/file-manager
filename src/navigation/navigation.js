import { chdir, cwd } from 'process';
import path, { isAbsolute } from 'path';
import { access } from 'fs/promises';

const displayCurrentDirectory = () => {
  const currentDirectory = cwd();
  console.log(`You are currently in ${currentDirectory}`);
};

const goUp = () => {
  const currentDirectory = cwd();
  const destinationDirectory = path.join(currentDirectory, '../');
  chdir(destinationDirectory);
}

const goTo = async (input) => {
  if (input.length) {
    const currentDirectory = cwd();
    const destination = input[0];
    const absoluteDestination = isAbsolute(destination)
      ? destination
      : path.join(currentDirectory, destination);
    console.log(absoluteDestination);
    try {
      await access(absoluteDestination);
    } catch {
      throw new Error('Error: Operation failed. The argument is not a valid path');
    }
    try {
      chdir(absoluteDestination);
    } catch {
      throw new Error('Error: Operation failed');
    }
  } else {
    throw new Error('Error: Invalid input. Destination path is not provided');
  }
}

export { displayCurrentDirectory, goUp, goTo };
