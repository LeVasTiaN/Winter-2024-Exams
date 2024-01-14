// Validate person name

const isValid = (t) => {
  if (
    typeof t !== 'string' ||
    t.length === 0 ||
    !t.includes(' ')
  )
    return false;
    for (const c of t) {
      if (c === ' ') continue;
      if (
        c.toLowerCase() >= 'a' &&
        c.toLowerCase() <= 'z'
      ) {
      }
      else {
        return false;
      }
    }
    return true;
};

module.exports = isValid;
