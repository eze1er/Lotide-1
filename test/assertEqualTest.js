// test/assertEqualTest.js

const assertEqual = require('../assertEqual');

// TEST CODE  
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const cd = ["2", 3];
const dc = ["2", 3];
assertEqual(cd, dc); // => true
const cd1 = undefined;
const dc1 = ["2", 3];
assertEqual(cd1, dc1); // => true
const cd2 = ["2", 3, 4];
assertEqual(cd, cd2); // => false
