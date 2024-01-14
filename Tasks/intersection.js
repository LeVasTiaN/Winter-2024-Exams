// Find an intersection of two dictionaries
'use strict';

const intersection = (firstObject, secondObject) => {
  const keys = Object.keys(firstObject);
  for (const attribute of keys) {
    if (firstObject[attribute] === secondObject[attribute])
      secondObject[attribute] = firstObject[attribute];
    else
      delete firstObject[attribute];
  }
  return firstObject;
};

module.exports = intersection;
