// Split an array into two parts
'use strict';

const split_Array = (index, array) => {
  return [array.slice(0, index), array.slice(index)];
};

module.exports = split_Array;
