import { cwd } from 'process';
import { isAbsolute } from 'path';
import path from 'path';

const getAbsolutePath = (destination) => {
  const currentDirectory = cwd();
  const absoluteDestination = isAbsolute(destination)
    ? path.resolve(destination)
    : path.resolve(currentDirectory, destination);
  return absoluteDestination;
};

export { getAbsolutePath };