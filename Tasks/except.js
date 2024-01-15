// Copy all values from dict except listed
'use strict';

const except = (object, ...except) => {
  const keys = Object.keys(object);
  for (const key of keys)
    if (except.includes(key))
      delete object[key];
  return object;
}

module.exports = except;
