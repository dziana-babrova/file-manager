import { access } from 'fs/promises';
import { getPathArgs } from '../general/pathArgs.js';
import { handleErrors } from '../general/handleErrors.js';
import { chdir } from 'process';

const goTo = async (args) => {
  const performOperation = async () => {
    const [source] = await getPathArgs(args.slice(0, 1));
    await access(source);
    chdir(source);
  }

  await handleErrors(args, 1, performOperation);
}

export { goTo };
