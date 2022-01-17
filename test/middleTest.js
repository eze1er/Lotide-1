const assert = require('chai').assert;
const middle   = require('../middle');
let words = [1, 2, 3, 7, 9, 4, 12, 5];
describe("#middle", () => {

  it("returns [7, 9] for [1, 2, 3, 7, 9, 4, 12, 5]", () => {
    assert.deepEqual(middle(words), [7, 9]);
  });
  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(words.length, 8);
  });
  it("returns [4] for [1, 2, 3, 4, 5, 6, 7]", () => {
    words = [1, 2, 3, 4, 5, 6, 7];
    assert.deepEqual(middle(words), [4]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 7]", () => {
    words = [1, 2, 3, 4, 5, 7];
    assert.deepEqual(middle(words), [3, 4]);
  });
  it("returns [] for []", () => {
    words = [1, 2, 3, 4, 5, 7];
    assert.deepEqual(middle([]), []);
  });
});
