const takeUntil = function(array, callback) {
  const array1 = [];
  for (const value of array) {
    if (callback(value)) {
      return array1;
    }
    array1.push(value);
  }
  return array1;
};

const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const callback = (x => x < 0);

const data1 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const callback1 = (x => x === ',');

// test function
const assertArraysEqual = function(array1, array2) {
  const inspect = require('util').inspect;
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

assertArraysEqual(takeUntil(data, callback), [1, 2, 5, 7, 2]); // => should PASS
assertArraysEqual(takeUntil(data1, callback1), ["I've", "been", "to", "Hollywood"]); // => true
