import { createHash } from 'node:crypto';
import { readFile } from 'fs/promises';
import { getAbsolutePath } from '../general/absolutePath.js';
import { access } from 'node:fs/promises';

const calculateHash = async (args) => {
  if (args.length) {
    const pathToFile = args[0];
    const absolutePathToFile = getAbsolutePath(pathToFile);

    try {
      await access(absolutePathToFile);
    } catch {
      throw new Error('Error: Operation failed. The argument is not a valid path');
    }
    try {
      const content = await readFile(absolutePathToFile);
      const hash = createHash('sha256').update(content).digest('hex');
      console.log(hash);
    } catch {
      throw new Error('Error: Operation failed');
    }
  } else {
    throw new Error('Error: Invalid input. Destination path is not provided');
  }
};

export { calculateHash };
