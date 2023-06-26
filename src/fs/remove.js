import { rm } from 'fs/promises';
import { handleErrors } from '../general/handleErrors.js';
import { getPathArgs } from '../general/pathArgs.js';

const removeFile = async (args) => {
  const performOperation = async () => {
    const [source] = await getPathArgs(args.slice(0, 1));
    await rm(source);
  }

  await handleErrors(args, 1, performOperation);
};

export { removeFile };
