
const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  //check short array
  if (array.length < 3) {
    return [];
  }
  let newArray = [];
  let index = Math.trunc(array.length / 2);
  if (array.length % 2 !== 0) {
    newArray.push(array[index]);
    return newArray;
  }
  newArray.push(array[index - 1], array[index]);
  return newArray;
};

module.exports = middle;

