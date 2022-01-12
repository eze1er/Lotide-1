// test function
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
// letterPosition function
const letterPositions = function(sentence) {
  let newArray = {};
  let position = [];
  // we lower letter first to have all in same value
  // then we split it for to read it like element of array
  let array = sentence.toLowerCase().split('');
  // loop in the sentence
  for (const array1 of array) {
  // the space is not count
    if (array1 !== ' ') {
      // loop for each letter
      for (let i = 0; i < array.length; i++) {
        if (array[i] === array1) {
          position.push(i + 1);
        }
      }
      newArray[array1] = position;
      position = [];
    }
  }
  // console.log(newArray);
  return newArray;
};
// TEST CODE
const sentence = "lighthouse in the house";
letterPositions(sentence);
assertArraysEqual(letterPositions(sentence), {
  l: [ 1 ],
  i: [ 2, 12 ],
  g: [ 3 ],
  h: [ 4, 6, 16, 19 ],
  t: [ 5, 15 ],
  o: [ 7, 20 ],
  u: [ 8, 21 ],
  s: [ 9, 22 ],
  e: [ 10, 17, 23 ],
  n: [ 13 ]
});
assertArraysEqual(letterPositions("lighthouse").h, [4, 6]);

