// Validate person name
'use strict';

const isValid = (string) => {
  if (typeof string !== 'string' || string.length === 0 || !string.includes(' '))
    return false;
  for (const character of string) {
    const lowerCase = character.toLowerCase();
    if (lowerCase !== ' ' && (lowerCase < 'a' || lowerCase > 'z'))
      return false;
  }
  return true;
}

module.exports = isValid;
