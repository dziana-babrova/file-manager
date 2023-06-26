import { writeFile } from 'fs/promises';
import path from 'path';
import { cwd } from 'process';
import { handleErrors } from '../general/handleErrors.js';

const createEmptyFile = async (args) => {
  const performOperation = async () => {
    const fileName = args[0];
    const absolutePath = path.resolve(cwd(), fileName);
    await writeFile(absolutePath, '', { flag: 'wx' });
  }
  await handleErrors(args, 1, performOperation);
}

export { createEmptyFile };
