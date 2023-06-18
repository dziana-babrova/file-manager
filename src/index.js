import { createInterface } from 'node:readline';
import { stdin as input, stdout as output, argv, cwd } from 'process';
import { displayGreeting } from './general/greeting.js';
import { getUsername } from './general/username.js';
import { parseInput } from './input/parseInput.js';
import { displayLeave } from './general/leave.js';
import { displayCurrentDirectory } from './navigation/currentDirectory.js';

const App = () => {
  try {
    let name = getUsername(argv.slice(2));
    displayGreeting(name);
    displayCurrentDirectory();

    const rl = createInterface({ input, output });

    rl.on('line', (input) => {
      try {
        if (input === '.exit') rl.close()
        else {
          parseInput(input);
        };
      } catch (e) {
        console.error(e.message);
      } finally {
        displayCurrentDirectory();
      }
    })
    rl.on('close', () => {
      displayLeave(name);
    })
  } catch (e) {
    console.error(e.message);
  }
};

App();
