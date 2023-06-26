import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { getPathArgs } from '../general/pathArgs.js';
import { handleErrors } from '../general/handleErrors.js';
import path, { basename } from 'path';

const copyFile = async (args) => {
  const performOperation = async () => {
    const [source, destination] = await getPathArgs(args.slice(0, 2));
    const fileName = basename(source);
    const destinationWithFilename = path.resolve(destination, fileName);
    const readableStream = createReadStream(source);
    const writableStream = createWriteStream(destinationWithFilename);
    await pipeline(readableStream, writableStream);
  };

  await handleErrors(args, 2, performOperation);
};

export { copyFile };
