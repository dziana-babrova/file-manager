import path, { basename } from 'path';
import { createWriteStream, createReadStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'node:stream/promises';
import { getPathArgs } from '../general/pathArgs.js';
import { handleErrors } from '../general/handleErrors.js';

const compress = async (args) => {
  const performOperation = async () => {
    const [source, destination] = await getPathArgs(args.slice(0, 2));
    const fileName = basename(source);
    const destinationWithFilename = path.resolve(destination, `${fileName}.br`);
    const zip = createBrotliCompress();
    const readableStream = createReadStream(source);
    const writableStream = createWriteStream(destinationWithFilename);
    await pipeline(readableStream, zip, writableStream);
  }

  await handleErrors(args, 2, performOperation);
};

export { compress };