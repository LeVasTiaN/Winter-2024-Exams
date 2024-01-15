// Copy all listed keys from dictionary
'use strict';

const take = (dictionary1, ...dictionary2) => {
  const keys = Object.keys(dictionary1);
  for (const value of keys) {
    if (!dictionary2.includes(value)) {
      delete dictionary1[value];
    }
  }
  return dictionary1;
}

module.exports = take;
