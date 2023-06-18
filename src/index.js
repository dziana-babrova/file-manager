import { createInterface } from 'node:readline';
import { stdin as input, stdout as output, argv, cwd } from 'process';
import { getUsername } from './general/username.js';
import { parseInput } from './input/parseInput.js';
import { displayCurrentDirectory } from './navigation/navigation.js';

const App = async () => {
  try {
    const rl = createInterface({ input, output });
    let name = getUsername(argv.slice(2));
    output.write(`Welcome to the File Manager, ${name}!\n`);
    displayCurrentDirectory();

    rl.on('line', async (input) => {
      try {
        if (input === '.exit') rl.close()
        else {
          await parseInput(input);
        };
      } catch (e) {
        console.error(e.message);
      } finally {
        displayCurrentDirectory();
      }
    })
    rl.on('close', () => {
      output.write(`Thank you for using File Manager, ${name}, goodbye!\n`);
    });
  } catch (e) {
    console.error(e.message);
  }
};

await App();
