import { getCpusInfo } from './operations/cpus.js';
import { getEOL } from './operations/eol.js';
import { getHomedir } from './operations/homedir.js';

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
      break;
    case '--architecture':
      break;
    default:
      throw new Error('Error: Invalid input. Unknown os operation');
  }
}

export { parseOsOperation };
