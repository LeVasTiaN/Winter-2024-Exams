// Copy all values from dict except listed

EXCEPT = (incomingvaluesarray, ...no) => {
  intermediate_variable = Object.keys(incomingvaluesarray);
  intermediate_variable.forEach((Z) => {
    if (no.includes(Z)) {
      delete incomingvaluesarray[Z];
    }
  });
  return incomingvaluesarray;
};

module.exports = EXCEPT;
