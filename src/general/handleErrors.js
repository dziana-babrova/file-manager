const handleErrors = async (args, argsNumber, performOperation) => {
    if (args.length >= argsNumber) {
    try {
      await performOperation();
    } catch(e) {
      throw new Error('Error: Operation failed');
    }
  } else {
    throw new Error('Error: Invalid input');
  }
}

export { handleErrors };
