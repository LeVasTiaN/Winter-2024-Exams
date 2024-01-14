// Split an array into two parts
'use strict';

const split_Array = (index, array) => {
  const begin = array.slice(0, index);
  const end = array.slice(index);
  return [begin, end];
};

module.exports = split_Array;
