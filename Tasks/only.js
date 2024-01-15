// Copy only listed values from dict
'use strict';

const only = (dictionary, ...select) => {
  const keys = Object.keys(dictionary);
  for (const key of keys)
    if (!select.includes(key))
      delete dictionary[key];
  return dictionary;
}

module.exports = only;
