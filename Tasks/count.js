'use strict';

const count = (obj) => {
  let sum = 0;
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === 'number')
      sum += obj[key];
  };
  return sum;
};

module.exports = count;
