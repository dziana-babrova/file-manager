import { getAbsolutePath } from '../general/absolutePath.js';
import path, { basename } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { access } from 'fs/promises';

const copyFile = async(args) => {
  if (args.length >= 2) {
    const oldPathName = args[0];
    const newPathName = args[1];
    const absoluteOldPathName = getAbsolutePath(oldPathName);
    const absoluteNewPathName = getAbsolutePath(newPathName);
    const fileName = basename(absoluteOldPathName);

    try {
      await access(absoluteOldPathName);
      await access(path.join(absoluteNewPathName));
    } catch {
      throw new Error('Error: Operation failed. The arguments are not valid paths');
    }

    try {
      const readableStream = createReadStream(absoluteOldPathName);
      const writableStream = createWriteStream(path.join(absoluteNewPathName, fileName));
      await pipeline(readableStream, writableStream);
    } catch {
      throw new Error('Error: Operation failed');
    }

  } else {
    throw new Error('Error: Invalid input. Path to file and new path to file should be provided');
  }

};

export { copyFile };
