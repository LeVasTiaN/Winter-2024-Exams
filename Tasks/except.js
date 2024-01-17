// Copy all values from dict except listed
'use strict';

const except = (object, ...except) => {
  let newObject = object;
  const keys = Object.keys(newObject);
  for (const key of keys) {
    if (except.includes(key)) {
      delete newObject[key];
    }
  }
  return newObject;
}

module.exports = except;
