// Copy all values from dict except listed

const except = (object, ...except) => {
  const keys = Object.keys(object);
  keys.forEach((key) => {
    if (except.includes(key))
      delete object[key];
  });
  return object;
};

module.exports = except;
