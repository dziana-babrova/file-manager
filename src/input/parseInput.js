import { copyFile } from '../fs/copy.js';
import { createEmptyFile } from '../fs/create.js';
import { readFile } from '../fs/read.js';
import { renameFile } from '../fs/rename.js';
import { goUp, goTo, list } from '../navigation/navigation.js';

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
        console.log(command);
        break;
      case 'rm':
        console.log(command);
        break;
      case 'os':
        console.log(command);
        break;
      case 'hash':
        console.log(command);
        break;
      case 'compress':
        console.log(command);
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
