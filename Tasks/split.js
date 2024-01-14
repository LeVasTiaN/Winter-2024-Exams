// Split an array into two parts
'use strict';

const splitArray = (index, array) => {
  array.slice(0, index),
  array.slice(index)
}

module.exports = splitArray;
