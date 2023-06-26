import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { rm } from 'fs/promises';
import { handleErrors } from '../general/handleErrors.js';
import path, { basename } from 'path';
import { getPathArgs } from '../general/pathArgs.js';

const moveFile = async (args) => {
  const performOperation = async () => {
    const [source, destination] = await getPathArgs(args.slice(0, 2));
    const fileName = basename(source);
    const destinationWithFilename = path.resolve(destination, fileName);
    const readableStream = createReadStream(source);
    const writableStream = createWriteStream(destinationWithFilename);
    writableStream.on('close', async () => {
      await rm(source);
    });
    await pipeline(readableStream, writableStream);
  }

  await handleErrors(args, 2, performOperation);
};

export { moveFile };
