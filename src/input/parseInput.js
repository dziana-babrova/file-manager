import { goUp, goTo } from '../navigation/navigation.js';

const parseInput = async (input) => {
  try {
  const inputAsArray = input.split(' ');
  const command = inputAsArray[0];
    switch (command) {
      case 'up':
        goUp();
        break;
      case 'cd':
        await goTo(inputAsArray.slice(1));
        break;
      case 'ls':
        console.log(command);
        break;
      case 'cat':
        console.log(command);
        break;
      case 'add':
        console.log(command);
        break;
      case 'rn':
        console.log(command);
        break;
      case 'cp':
        console.log(command);
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
