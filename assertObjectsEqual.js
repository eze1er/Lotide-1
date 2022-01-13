const eqObjects = function(object1, object2) {
  // we put it in array obj1 and obj2 to know the length, the we can check the length for compare
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);
  let index = 0;
  // when the length is not equal, they aren't same
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (const key1 of obj1) {
    if (!Array.isArray(object1[key1])) {
    // when the key value is not array we do this
      if (object1[key1] !== object2[key1]) {
        return false;
      } else {
        index = 1;
      }
    } else {
      // when the key value is array we do this
      if (!eqArrays(object1[key1], object2[key1])) {
        return false;
      } else {
        index = 1;
      }
    }
  }
  if (index === 0) {
    return false;
  } else {
    return true;
  }
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
// function implementation
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // we put it in array obj1 and obj2 to know the length, the we can check the length for compare
  // console.log(`Example label: ${inspect(actual)}`);
  const obj1 = Object.keys(actual);
  const obj2 = Object.keys(expected);
  // let index = 0;
  // when the length is not equal, they aren't same
  if (obj1.length !== obj2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return false;
  }
  for (const key1 of obj1) {
    // when the key value is not array we do this
    if (actual[key1] !== expected[key1]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      return false;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  return true;
    
};
 
// test code
assertObjectsEqual({a: '1', b: '2', c: '3'}, {a: '1', b: '2', c: '3'}); // => should PASS
assertObjectsEqual({a: '1', b: '2', c: '3'}, {a: '3', b: '2', c: '1'}); // => false

const cd = {"2": 3};
const dc = {"2": 3};
assertObjectsEqual(cd, dc); // => true