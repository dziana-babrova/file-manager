import { getArchitecture } from './operations/architecture.js';
import { getCpusInfo } from './operations/cpus.js';
import { getEOL } from './operations/eol.js';
import { getHomedir } from './operations/homedir.js';
import { getUsername } from './operations/username.js';

const parseOsOperation = async (args) => {
  const type = args[0];
  switch (type) {
    case '--EOL':
      getEOL();
      break;
    case '--cpus':
      getCpusInfo();
      break;
    case '--homedir':
      getHomedir();
      break;
    case '--username':
      getUsername();
      break;
    case '--architecture':
      getArchitecture();
      break;
    default:
      throw new Error('Error: Invalid input. Unknown os operation');
  }
}

export { parseOsOperation };
