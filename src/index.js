import { createInterface } from 'node:readline';
import { stdin as input, stdout as output, argv } from 'process';
import { displayGreeting } from './general/greeting.js';
import { getUsername } from './general/username.js';
import { parseInput } from './input/parseInput.js';
import { displayLeave } from './general/leave.js';

const App = () => {
  try {
    let name = getUsername(argv.slice(2));
    displayGreeting(name);
    const rl = createInterface({ input, output });

    rl.on('line', (input) => {
      try {
        if (input === '.exit') rl.close()
        else parseInput(input);
      } catch (e) {
        console.error(e.message);
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
