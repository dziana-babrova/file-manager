import path, { basename } from 'path';
import { createWriteStream, createReadStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'node:stream/promises';
import { handleErrors } from '../general/handleErrors.js';
import { getPathArgs } from '../general/pathArgs.js';

const decompress = async (args) => {
  const performOperation = async () => {
    const [source, destination] = await getPathArgs(args.slice(0, 2));
    const fileName = basename(source);
    const destinationWithFilename = path.resolve(destination, fileName.replace('.br', ''));
    const unzip = createBrotliDecompress();
    const readableStream = createReadStream(source);
    const writableStream = createWriteStream(destinationWithFilename);
    await pipeline(readableStream, unzip, writableStream);
  }

  await handleErrors(args, 2, performOperation);
};

export { decompress };
