
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

// FUNCTION IMPLEMENTATION

const without = function(array1, array2) {
  let newArray = [];
  for (const array of array1) {
    let index = 0;
    array2.forEach(element => {
      if (element === array) {
        index = 1;
      }
    });
    if (index === 0) {
      newArray.push(array);
    }
  }
  return newArray;
}
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []); // => should PASS
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []); // => true
assertArraysEqual(without([1, 2, 3], [3, 2, 1]), []); // => false

assertArraysEqual(without(["1", "2", "3"], ["1", "2", "3"]), []); // => true
assertArraysEqual(without(["1", "2", "3"], ["1", "2", 3]), [ '2']); // => false

// TEST CODE
