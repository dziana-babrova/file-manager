import { createReadStream } from 'fs';
import { stdout } from 'process';
import { getPathArgs } from '../general/pathArgs.js';
import { handleErrors } from '../general/handleErrors.js';
import { EOL } from 'os';

const readFile = async (args) => {
  const performOperation = async () => {
    const [source] = await getPathArgs(args.slice(0, 1));
    const stream = createReadStream(source);
    stream.on('close', () => {
      stdout.write(EOL);
    });
    stream.pipe(stdout);
  }

  await handleErrors(args, 1, performOperation);
};

export { readFile };