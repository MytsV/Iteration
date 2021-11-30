'use strict';

const sum = (...args) => {
  let sum = 0;
  if (args.length !== 0) {
    do {
      sum += args.pop();
    } while (args.length > 0);
  }
  return sum;
};

module.exports = { sum };
