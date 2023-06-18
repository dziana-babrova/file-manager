import { stdin, stdout, argv } from 'process';
import { displayGreeting } from './general/greeting.js';
import { getUsername } from './general/username.js';

const App = () => {
  try {
    let name = getUsername(argv.slice(2));
    displayGreeting(name);

    stdin.on('data', (data) => {
      data = data.toString().toUpperCase();
      stdout.write(data + '\n');
    });
  } catch(e) {
    console.error(e.message);
  }
}

App();