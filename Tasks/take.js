// Copy all listed keys from dictionary
'use strict';

const take = (dictionary1, ...dictionary2) => {
  for (const value of Object.keys(dictionary1)) {
    if (!dictionary2.includes(value)) {
      delete dictionary1[value];
    }
  }
  return dictionary1;
}

module.exports = take;
