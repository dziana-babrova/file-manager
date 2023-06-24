import { getCpusInfo } from './operations/cpus.js';
import { getEOL } from './operations/eol.js';

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
