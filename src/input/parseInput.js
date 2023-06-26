import { copyFile } from '../fs/copy.js';
import { createEmptyFile } from '../fs/create.js';
import { moveFile } from '../fs/move.js';
import { readFile } from '../fs/read.js';
import { removeFile } from '../fs/remove.js';
import { renameFile } from '../fs/rename.js';
import { calculateHash } from '../hash/hash.js';
import { goTo } from '../navigation/navigate.js';
import { goUp } from '../navigation/up.js';
import { list } from '../navigation/list.js';
import { parseOsOperation } from '../os/parseOperationType.js';
import { compress } from '../zip/compress.js';
import { decompress } from '../zip/decompress.js';

const parseInput = async (input) => {
  const regex = /(['"`][^'"`]+['"`]|\S+)/g;
  const command = [];

  let match;
  while ((match = regex.exec(input)) !== null) {
    command.push(match[1].replace(/^['"`]|['"`]$/g, ''));
  }

  try {
    const type = command[0];
    const args = command.slice(1);
    switch (type) {
      case 'up':
        goUp();
        break;
      case 'cd':
        await goTo(args);
        break;
      case 'ls':
        await list();
        break;
      case 'cat':
        await readFile(args);
        break;
      case 'add':
        await createEmptyFile(args);
        break;
      case 'rn':
        await renameFile(args);
        break;
      case 'cp':
        await copyFile(args);
        break;
      case 'mv':
        await moveFile(args);
        break;
      case 'rm':
        await removeFile(args);
        break;
      case 'os':
        await parseOsOperation(args);
        break;
      case 'hash':
        await calculateHash(args);
        break;
      case 'compress':
        await compress(args);
        break;
      case 'decompress':
        await decompress(args);
        break;
      default:
        throw new Error(`Error: Invalid input. Command doesn't exist`);
    }
  } catch (e) {
    console.error(e.message);
  }
};

export { parseInput };
