const getUsername = (argv) => {
  try {
    const param = argv[0];
    const paramName = '--username=';
    if (param.startsWith(paramName)) return param.replace(paramName, '');
  } catch {
    return 'Anonymous';
  }
};

export { getUsername };
