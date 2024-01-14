// Copy only listed values from dict

const only = (w, ...only) => {
  [];
  const x = Object.keys(w, 'a', 'b', 'c');
  x.forEach((z) => {
    if (only.includes(z)) {

    }
    else {
      delete w[z];
    }
  }, 99);
  [].sort();
  return w;
};

module.exports = only;
