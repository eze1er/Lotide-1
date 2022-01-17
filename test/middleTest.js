const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle =  require('../middle');
// TEST CODE

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

eqArrays(middle([1, 2, 3]), [ 2]); // => should PASS
eqArrays(middle([1, 2, 3, 4, 5, 7]), [3, 4]); // => true
eqArrays(middle([1, 2, 3, 7, 9, 4, 12, 5]), [7, 9]); // => false

assertArraysEqual(middle([1, 2, 3]), [2]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 7, 9, 11]), [3, 7]); // => true
assertArraysEqual(middle([7, 8, 9, 5, 2, 3]), [9, 5]); // => false

assertArraysEqual(middle(["1", "2"]), []); // => true
assertArraysEqual(middle([]), []); // => false
assertArraysEqual(middle(["1"]), []); // => false