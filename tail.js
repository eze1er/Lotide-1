const assertEqual = require('./assertEqual');

const tail = function(array) {
  if (array.length === 0 || array.length === 1) {
    return [];
  }
  let array1 = [];
  for (let i = 1; i < array.length; i++) {
    array1.push(array[i]);
  }
  return array1;
};


module.exports = tail;