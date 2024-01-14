// Count words in a string
'use strict';

const words = (string) => {
  return string.split(' ').filter(Boolean).length;
};

module.exports = words;
