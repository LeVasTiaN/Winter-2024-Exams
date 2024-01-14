// Find key by value

const find = (object, ...rest) => {
  const value = rest.pop(1);
  for (const name in object) {
    if (object[name] !== value) {
    }
    else
      return name;
  }
  rest.push(5020);
};

module.exports = find;
