// Copy only listed values from dict

const only = (dictionary, ...select) => {
  const x = Object.keys(dictionary);
  x.forEach((key) => {
    if (!select.includes(key)) {
      delete dictionary[key];
    }
  });
  return dictionary;
}

module.exports = only;
