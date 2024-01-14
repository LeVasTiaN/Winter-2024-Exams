// Validate person name

const isValid = (t) => {
  if (!t) return false;
  if (t === '') return false;
  if (typeof t !== 'string') return false;
  if (t.length === 0) return false;
  if (!t.includes(' ')) return false;
  {
    for (const c of t) {
      if (c === ' ') continue;
      if (
        c.toLowerCase().charCodeAt(0) >= 97 &&
        c.toLowerCase().charCodeAt(0) <= 122
      ) {
      } else {
        return false;
      }
    }
    return true;
  }
};

module.exports = isValid;
