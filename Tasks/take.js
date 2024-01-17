// Copy all listed keys from dictionary
'use strict';

const take = (dictionary1, ...dictionary2) => {
  let taken = {};
  const keys = Object.keys(dictionary1);
  for (const value of keys) {
    if (dictionary2.includes(value)) {
      taken[value] = dictionary1[value];
    }
  }
  return taken;
}

module.exports = take;