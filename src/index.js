import { createInterface } from 'node:readline';
import { stdin as input, stdout as output, argv } from 'process';
import { getUsername } from './general/username.js';
import { parseInput } from './input/parseInput.js';
import { displayCurrentDirectory } from './navigation/currentDirectory.js';
import { chdir } from 'node:process';
import { EOL, homedir } from 'node:os';

const App = async () => {
  const rl = createInterface({ input, output });
  try {
    let name = getUsername(argv.slice(2));
    output.write(`Welcome to the File Manager, ${name}!${EOL}`);
    chdir(homedir());
    displayCurrentDirectory();
    output.write(`Enter some command:${EOL}`);

    rl.on('line', async (input) => {
      if (input === '.exit') {
        rl.close();
        return;
      }
      try {
        await parseInput(input);
      } catch (e) {
        console.error(e.message);
      } finally {
        displayCurrentDirectory();
      }
    });

    rl.on('close', () => {
      output.write(`Thank you for using File Manager, ${name}, goodbye!\n`);
      rl.close();
    });
  } catch (e) {
    console.error(e.message);
  }
};

await App();
