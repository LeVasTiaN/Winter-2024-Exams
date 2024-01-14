// Return an array without duplicates

const duplicate = (value, N) => {
  if (N <= 0)
    return [];
  else {
    let result = [];
    for (let index = 0; index < N; index++) {
      result[index] = value;
    }
    return result;
  }
};

module.exports = duplicate;
