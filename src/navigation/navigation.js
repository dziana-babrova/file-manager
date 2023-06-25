import { chdir, cwd } from 'process';
import path, { isAbsolute } from 'path';
import { access, readdir, stat } from 'fs/promises';
import { getAbsolutePath } from '../general/absolutePath.js';

const displayCurrentDirectory = () => {
  const currentDirectory = cwd();
  console.log(`You are currently in ${currentDirectory}`);
};

const goUp = () => {
  const currentDirectory = cwd();
  const destinationDirectory = path.resolve(currentDirectory, '../');
  chdir(destinationDirectory);
}

const goTo = async (input) => {
  if (input.length) {
    const destination = input[0];
    const absoluteDestination = getAbsolutePath(destination);

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

const list = async () => {
  try {
    const currentDirectory = cwd();
    const files = await readdir(currentDirectory);
    const table = files.map(async (file) => {
      const stats = await stat(path.resolve(currentDirectory, file));
      const type = stats.isDirectory() ? 'Directory' : 'File';
      return {
        Name: file,
        Type: type,
      };
    });
    const result = await Promise.all(table);
    const sortedResult = [
      ...result.filter((file) => file.Type === 'Directory').sort((a, b) => a - b),
      ...result.filter((file) => file.Type === 'File').sort((a, b) => a - b),
    ];
    console.table(sortedResult);
  } catch {
    throw new Error('Error: Operation failed');
  }
}

export { displayCurrentDirectory, goUp, goTo, list };
