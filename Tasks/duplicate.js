// Return an array without duplicates
'use strict';

const duplicate = (value, N) => {
  if (N <= 0)
    return [];
  return Array.from({length: N}).fill(value);
}

module.exports = duplicate;
