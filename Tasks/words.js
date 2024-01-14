// Count words in a string

const words = (string) => {
  let number_of_words_in_s = 0;
  let flag = false;
  for (const character of string) {
    if (!flag) {
      if (character === ' ') {
        if (flag === true)
          flag = false;
      }
      else {
        if (flag === false)
          flag = true;
        number_of_words_in_s++;
      }
    }
    else {
      if (character === ' ') {
        if (flag === true)
          flag = false;
      }
    }
  }
  return number_of_words_in_s;
};

module.exports = words;
