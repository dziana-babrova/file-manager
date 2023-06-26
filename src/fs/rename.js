import { rename } from 'fs/promises';
import path from 'path';
import { getPathArgs } from '../general/pathArgs.js';
import { handleErrors } from '../general/handleErrors.js';

const renameFile = async (args) => {
  const performOperation = async () => {
    const [source] = await getPathArgs(args.slice(0, 1));
    const newName = args[1];
    const newAbsolutePathName = path.resolve(source, '../', newName);
    rename(source, newAbsolutePathName);
  }

  await handleErrors(args, 2, performOperation);
};

export { renameFile };
