// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
}

module.exports = head;
