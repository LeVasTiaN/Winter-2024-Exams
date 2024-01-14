// Copy only listed values from dict

const only = (w, ...only) => {
  const x = Object.keys(w);
  x.forEach((z) => {
    if (!only.includes(z)) {
      delete w[z];
    }
  });
  return w;
}

module.exports = only;
