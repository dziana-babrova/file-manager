import { chdir, cwd } from 'process';
import path from 'path';

const goUp = () => {
  const currentDirectory = cwd();
  const destinationDirectory = path.resolve(currentDirectory, '../');
  chdir(destinationDirectory);
};

export { goUp };
