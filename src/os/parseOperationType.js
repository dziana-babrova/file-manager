import { getEOL } from './operations/eol.js';

const parseOsOperation = async (args) => {
  const type = args[0];
  switch (type) {
    case '--EOL':
      getEOL();
      break;
  }
  switch (type) {
    case '--cpus':
      break;
  }
  switch (type) {
    case '--homedir':
      break;
  }
  switch (type) {
    case '--username':
      break;
  }
  switch (type) {
    case '--architecture':
      break;
    default:
      throw new Error('Error: Invalid input. Unknown os operation');
  }
}

export { parseOsOperation };
