// var chai = require("chai");
// var assert = chai.assert;
// var ipAddress = require("./app.js");
//
// describe("A method to test whether a given string is a valid IP address", function() {
//   it("Should return true if each set of numbers is between 0 to 255", function() {
//     assert.isTrue(ipAddress("172.16.254.1"));
//   });
//   it("Should return false when string is invalid number", function() {
//     assert.isFalse(ipAddress("300.16.256.1"));
//   });
// });

var chai = require("chai");
var assert = chai.assert;
var findFunction = require("./app.js");

describe("Takes a search term and returns phrases that match", function()){
  it (“Should take a search term and return phrases containing that term”, function
      assert.deepEqual(findFunction("e", ["Hello", "Hi", "Fellow"], ["Hello"]
}
