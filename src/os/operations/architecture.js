import { arch } from 'process';

const getArchitecture = () => {
  console.log(arch);
};

export { getArchitecture };