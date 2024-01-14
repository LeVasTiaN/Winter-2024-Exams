// Copy all values from dict except listed

const except = (object, ...except) => {
  Object.keys(object).forEach((key) => {
    if (except.includes(key))
      delete object[key];
  });
  return object;
};

module.exports = except;
