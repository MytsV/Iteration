'use strict';

const ages = (persons) => {
  const ages = {};
  for (const key in persons) {
    const data = persons[key];
    const age = data.died - data.born;
    ages[key] = age;
  }
  return ages;
};

module.exports = { ages };
