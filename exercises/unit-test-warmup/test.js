// var chai = require('chai');
// var assert = chai.assert;
// var newWord = require('./app.js').newWord;
// var dictionary = require('./app.js').search;
//
// describe("A dictionary to add and look up words", function(){
//   it("Should store the word and definition in the dictionary when added", function(){
//     newWord("Apple", "Crispy and delishpy");
//     assert.equal(search('Apple'), "Crispy and delishpy");
//   });
//
//   it("Should return null when we lookup a word not present", function(){
//     assert.isNull(search("Pear"));
//   })
// });

var chai = require("chai");
var assert = chai.assert;
var addWord = require("./app").addWord;
var dictionary = require("./app").lookItUp;

describe("A dictionary to add and lookup words", function() {
  it("Should store the word when added.", function() {
    addWord('apple', 'a fuzzy fruit');
    assert.equal(addWord('apple'), 'a fuzzy fruit');
  });
  it("Should return null when we lookup a word not present", function() {
    assert.isNull(lookItUp("apple"));
  });
});
