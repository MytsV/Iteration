'use strict';

const sum = (...args) => {
  let sum = 0;
  while (args.length > 0) {
    sum += args.pop();
  }
  return sum;
};

module.exports = { sum };
