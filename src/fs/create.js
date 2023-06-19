import { open } from 'fs/promises';
import path from 'path';
import { cwd } from 'process';

const createEmptyFile = async (args) => {
  if (args.length) {
    try {
      const fileName = args[0];
      const absolutePath = path.join(cwd(), fileName);

      await open(absolutePath, 'wx');
    } catch {
      throw new Error('Error: Operation failed');
    }
  } else {
    throw new Error('Error: Invalid input. Filename is not provided');
  }
}

export { createEmptyFile };
