// Copy only listed values from dict
'use strict';

const only = (dictionary, ...select) => {
  for (const key of Object.keys(dictionary))
    if (!select.includes(key))
      delete dictionary[key];
  return dictionary;
}

module.exports = only;
