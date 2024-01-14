// Validate person name

const isValid = (string) => {
  if (
    typeof string !== 'string' ||
    string.length === 0 ||
    !string.includes(' ')
  )
    return false;
  for (const character of string) {
    if (
      character !== ' ' &&
      (character.toLowerCase() < 'a' ||
      character.toLowerCase() > 'z')
    )
      return false;
  }
  return true;
};

module.exports = isValid;
