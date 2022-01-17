const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array.slice(1);
};
const words = ["Hello", "Lighthouse", "Labs"];
console.log(tail(words));

module.exports = tail;