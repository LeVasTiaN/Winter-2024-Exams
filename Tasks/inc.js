// Increment all numbers in dictionary
'use strict';

const incNumbers = (object) => {
  for (const key in object) {
    if ((typeof object[key]) === 'number')
      object[key]++;
  }
  return object;
}

module.exports = incNumbers;
