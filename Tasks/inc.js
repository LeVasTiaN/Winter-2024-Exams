// Increment all numbers in dictionary

const incNumbers = (object, ...restVariables) => {
  for (const value in object)
    if ((typeof object[value]) === 'number')
      object[value]++;
  return object;
};

module.exports = incNumbers;
