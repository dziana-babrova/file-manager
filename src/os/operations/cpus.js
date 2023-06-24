import { cpus } from 'os';

const getCpusInfo = () => {
  const info = cpus();
  const cpusNumber = info.length;
  const cpusInfo = info.reduce((acc, curr) => {
    acc.push({ model: curr.model, 'clock rate': `${curr.speed / 1000}GHz` });
    return acc;
  }, [])
  const result = {
    'overall amount of CPUS': cpusNumber,
    cpus: cpusInfo,
  }
  console.log(result);
};

getCpusInfo();

export { getCpusInfo };
