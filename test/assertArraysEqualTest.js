const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

// test code
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
const cd = ["2", 3];
const dc = ["2", 3];
assertArraysEqual(cd, dc); // => true
