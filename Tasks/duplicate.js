// Return an array without duplicates
'use strict';

const duplicate = (value, number) => {
  if (number <= 0)
    return [];
  return Array(number).fill(value);
}

module.exports = duplicate;
