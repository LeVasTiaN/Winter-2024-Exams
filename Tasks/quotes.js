// Change double quotation to open or close quotation


const quotes = (s) => {
  let res = [];
  let open = false;
  for (const c of s) {
    if (c === '"') {
      if (!open) {
        res.push('«');
        open = true;
      }
      else {
        res.push('»');
        open = false;
      }
    }
    else if (c !== '"')
      res.push(c);
  }
  return res.join('');
};

module.exports = quotes;
