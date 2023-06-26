import { getAbsolutePath } from './absolutePath.js';
import { access } from 'fs/promises';

const getPathArgs = async (args) => {
  try {
    const paths = args.map(async (item) => {
      const absolutePath = getAbsolutePath(item);
      await access(absolutePath);
      return absolutePath;
    })
    const result = await Promise.all(paths);
    return result;
  } catch {
    throw new Error('Error: Operation failed. The arguments are not valid paths');
  }
};

export { getPathArgs };