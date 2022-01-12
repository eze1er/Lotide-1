const { isArray } = require('lodash');

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  const inspect = require('util').inspect;
  if ((array1 === undefined) && (array2 === undefined)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`);
    return true;
  }
  // console.log(array1, array2);
  if (array1.length !== array2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(array1)} !== ${inspect(array2)}`);
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(array1)} !== ${inspect(array2)}`);
      return false;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`);
  return true;
};

const newArray = [];
const flatten = function(array, callback) {
  for (let elem of array) {
    if (isArray(elem)) {
      callback(elem);
    } else {
      newArray.push(elem);
    }
  }
  return newArray;
};

const callback = function(arr) {
  for (let elem of arr) {
    if (isArray(elem)) {
      callback(elem);
    } else {
      newArray.push(elem);
    }
  }
};

