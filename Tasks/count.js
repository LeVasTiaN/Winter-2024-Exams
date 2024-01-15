'use strict';

const count = (obj) => {
  let sum = 0;
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === 'number')
      sum += obj[key];
  }
  return sum;
}

module.exports = count;
