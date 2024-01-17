// Increment all numbers in dictionary
'use strict';

const incNumbers = (object) => {
  let newObject = object;
  for (const key in newObject) {
    if (typeof newObject[key] === 'number')
      newObject[key]++;
  }
  return newObject;
}

module.exports = incNumbers;
