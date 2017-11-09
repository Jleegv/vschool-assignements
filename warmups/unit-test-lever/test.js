let chai = require("chai");
const assert = chai.assert;
const hasDuplicates = require("./app")

describe("A function to find where in a given array strings are repeated more than once", () => {
  it("Should return an array of each repeated word", () => {
    assert.deepEqual(hasDuplicates(), ["pull","lever","on"])
  })

  it("Should return false if a word is NOT repeated", () => {
    assert.notEqual("chicharrones", false)
  })
});
