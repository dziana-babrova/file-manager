import { getAbsolutePath } from '../general/absolutePath.js';
import { access } from 'fs/promises';
import path, { basename } from 'path';
import { createWriteStream, createReadStream } from 'fs';
import { brotliDecompress, createBrotliCompress } from 'zlib';
import { Transform } from 'stream';
import { pipeline } from 'node:stream/promises';

const compress = async (args) => {
  if (args.length >= 2) {
    const oldPathName = args[0];
    const newPathName = args[1];
    const absoluteOldPathName = getAbsolutePath(oldPathName);
    const absoluteNewPathName = getAbsolutePath(newPathName);
    const fileName = basename(absoluteOldPathName);

    try {
      await access(absoluteOldPathName);
      await access(path.resolve(absoluteNewPathName));
    } catch {
      throw new Error('Error: Operation failed. The arguments are not valid paths');
    }

    try {
      const zip = createBrotliCompress();
      const readableStream = createReadStream(absoluteOldPathName);
      const writableStream = createWriteStream(path.resolve(absoluteNewPathName, `${fileName}.br`));
      await pipeline(readableStream, zip, writableStream);
    } catch {
      throw new Error('Error: Operation failed');
    }
  } else {
    throw new Error('Error: Invalid input. Path to file and new path to file should be provided');
  }
};

export { compress };