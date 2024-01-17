// Change double quotation to open or close quotation
'use strict';


const quotes = (string) => {
  let result = [];
  let flag = false;
  for (const character of string) {
    if (character === '"') {
      result.push(flag ? '»' : '«');
      flag = !flag;
    }
    else {
      result.push(character);
    }
  }
  return result.join('');
}

module.exports = quotes;
