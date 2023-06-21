import { getAbsolutePath } from '../general/absolutePath.js';
import { rm } from 'fs/promises';

const removeFile = async (args) => {
  if (args.length) {
    try {
      const pathName = args[0];
      const absolutePath = getAbsolutePath(pathName);
      await rm(absolutePath);
    } catch {
      throw new Error('Error: Operation failed');
    }
  } else {
    throw new Error('Error: Invalid input. Path to file is not provided');
  }
};

export { removeFile };
