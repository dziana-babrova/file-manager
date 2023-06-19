import { access } from 'fs/promises';
import { createReadStream } from 'fs';
import { getAbsolutePath } from '../general/absolutePath.js';
import { stdout } from 'process';

const readFile = async (args) => {
  if (args.length) {
    const destination = args[0];
    const absoluteDestination = getAbsolutePath(destination);

    try {
      await access(absoluteDestination);
    } catch {
      throw new Error('Error: Operation failed. The argument is not a valid path');
    }
    try {
      const stream = createReadStream(absoluteDestination);
      stream.on('close', () => {
        stdout.write('\n');
      })
      stream.pipe(stdout);
    } catch {
      throw new Error('Error: Operation failed');
    }
  } else {
    throw new Error('Error: Invalid input. Destination path is not provided');
  }
};

export { readFile };