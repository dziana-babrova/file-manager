import { copyFile } from '../fs/copy.js';
import { createEmptyFile } from '../fs/create.js';
import { moveFile } from '../fs/move.js';
import { readFile } from '../fs/read.js';
import { removeFile } from '../fs/remove.js';
import { renameFile } from '../fs/rename.js';
import { calculateHash } from '../hash/hash.js';
import { goUp, goTo, list } from '../navigation/navigation.js';
import { parseOsOperation } from '../os/parseOperationType.js';
import { compress } from '../zip/compress.js';

const parseInput = async (input) => {
  try {
    const inputAsArray = input.split(' ');
    const command = inputAsArray[0];
    const args = inputAsArray.slice(1);
    switch (command) {
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
        await readFile(args)
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
        console.log(command);
        break;
      default:
        throw new Error(`Error: Invalid input. Command doesn't exist`);
    }
  } catch(e) {
    console.error(e.message);
  }
};

export { parseInput };
