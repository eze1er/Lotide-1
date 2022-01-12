const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if ((actual === undefined) && (expected === undefined)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  }
  if ((actual === undefined) || (expected === undefined) || (actual.length !== expected.length))  {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      return false;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  return true;
};


const countLetters = function(sentence) {
  let newArray = {};
  let count = 0;
  // we lower letter first to have all in same value
  // then we split it for to read it like element of array
  let array = sentence.toLowerCase().split('');
  // loop in the sentence
  for (const array1 of array) {
  // the space is not count
    if (array1 !== ' ') {
      // loop for each letter
      array.forEach(element => {
        if (element === array1) {
          count++;
        }
      });
      newArray[array1] = count;
      count = 0;
    }
  }
  return newArray;
};
// TEST CODE
assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });