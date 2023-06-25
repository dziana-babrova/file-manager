import { createInterface } from 'node:readline';
import { stdin as input, stdout as output, argv } from 'process';
import { getUsername } from './general/username.js';
import { parseInput } from './input/parseInput.js';
import { displayCurrentDirectory } from './navigation/navigation.js';
import { chdir } from 'node:process';
import { homedir } from 'node:os';

const App = async () => {
  const rl = createInterface({ input, output });
  try {
    let name = getUsername(argv.slice(2));
    output.write(`Welcome to the File Manager, ${name}!\n`);
    chdir(homedir());
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
    // rl.close();
  }
};

await App();
