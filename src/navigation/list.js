import { cwd } from 'process';
import path from 'path';
import { readdir, stat } from 'fs/promises';

const list = async () => {
  try {
    const currentDirectory = cwd();
    const files = await readdir(currentDirectory);
    const table = files.map(async (file) => {
      const stats = await stat(path.resolve(currentDirectory, file));
      const type = stats.isDirectory() ? 'Directory' : stats.isFile() ? 'File' : 'Other type';
      return {
        Name: file,
        Type: type,
      };
    });
    const result = await Promise.all(table);
    const sortedResult = [
      ...result.filter((file) => file.Type === 'Directory').sort((a, b) => a - b),
      ...result.filter((file) => file.Type === 'File').sort((a, b) => a - b),
    ];
    console.table(sortedResult);
  } catch {
    throw new Error('Error: Operation failed');
  }
};

export { list };
