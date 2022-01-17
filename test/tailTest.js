const assert = require('chai').assert;
const tail   = require('../tail');
const words = ["Hello", "Lighthouse", "Labs"];
describe("#tail", () => {

  it("returns 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words), [ 'Lighthouse', 'Labs' ]);
  });
  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(words.length, 3);
  });
});
