// Copy all values from dict except listed

const except = (object, ...except) => {
  for (const key of Object.keys(object))
    if (except.includes(key))
      delete object[key];
  return object;
}

module.exports = except;
