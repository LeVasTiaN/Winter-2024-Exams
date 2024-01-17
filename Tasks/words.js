// Count words in a string
'use strict';

const words = (string) => string.split(' ').filter(Boolean).length;

module.exports = words;
