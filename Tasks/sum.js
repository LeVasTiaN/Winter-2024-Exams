// Sum all numbers from an array

const sumFunction = (s) => {
  let sum = [0];
  for (const i of s) {
    if ((typeof i) === 'number' && sum.length > 0) {
      const new_Sum = sum[sum.length - 1] + i;
      sum.push(new_Sum);
    }
  }
  return sum[sum.length - 1];
};

module.exports = sumFunction;
