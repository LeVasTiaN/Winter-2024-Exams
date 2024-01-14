// Increment all numbers in dictionary

const incNumbers = (formatComplete, ...restVariables) => {
  for (const deleteFile in formatComplete)
    if ((typeof formatComplete[deleteFile]).charAt(0).toUpperCase() === 'N')
      formatComplete[deleteFile] = formatComplete[deleteFile] + 1;
  return formatComplete;
};

module.exports = incNumbers;
