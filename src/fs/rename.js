import { getAbsolutePath } from '../general/absolutePath.js';
import { access, rename } from 'fs/promises';
import path from 'path';

const renameFile = async (args) => {
  if (args.length >= 2) {
    const pathName = args[0];
    const absolutePathName = getAbsolutePath(pathName);
    const newName = args[1];
    const newAbsolutePathName = path.resolve(absolutePathName, '../', newName);

    try {
      await access(absolutePathName);
    } catch {
      throw new Error('Error: Operation failed. The first argument is not a valid path');
    }

    try {
      rename(absolutePathName, newAbsolutePathName);
    } catch {
      throw new Error('Error: Operation failed');
    }
  } else {
    throw new Error('Error: Invalid input. Path to file and new name should be provided');
  }
};

export { renameFile };
