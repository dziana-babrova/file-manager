import { cwd } from 'process';
import { isAbsolute } from 'path';
import path from 'path';

const getAbsolutePath = (destination) => {
  const currentDirectory = cwd();
  const absoluteDestination = isAbsolute(destination)
    ? destination
    : path.join(currentDirectory, destination);
  return absoluteDestination;
};

export { getAbsolutePath };