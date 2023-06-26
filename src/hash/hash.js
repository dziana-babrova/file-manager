import { createHash } from 'node:crypto';
import { readFile } from 'fs/promises';
import { getPathArgs } from '../general/pathArgs.js';
import { handleErrors } from '../general/handleErrors.js';

const calculateHash = async (args) => {
  const performOperation = async () => {
    const [source] = await getPathArgs(args.slice(0, 1));
    const content = await readFile(source);
    const hash = createHash('sha256').update(content).digest('hex');
    console.log(hash);
  }

  await handleErrors(args, 1, performOperation);
};

export { calculateHash };
