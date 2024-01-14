// Sum all numbers from an array
'use strict';

const sumFunction = (s) => {
  let sum = 0;
  for (const index of s)
    if (typeof index === 'number')
      sum += index;
  return sum;
}

module.exports = sumFunction;
