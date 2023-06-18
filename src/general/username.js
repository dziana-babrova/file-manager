const getUsername = (argv) => {
  try {
    const param = argv[0];
    const paramName = '--username=';
    if (param.startsWith(paramName)) return param.replace(paramName, '');
  } catch {
    throw new Error('Username is not provided properly. Check README.md to get the proper command to start the app');
  }
};

export { getUsername };
