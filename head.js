// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if ((actual === undefined) && (expected === undefined)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return false;
  }
  if (actual.length !== expected.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return true;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      return true;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  return false;
};
const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  // if (array.length === 1) {
  //   return array[0];
  // }
  return array[0];
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([6]), 6);
