//NOT WORKING

// var read = require("readline-sync");
//
//
// var diction = {};
// var addWord = function(word, definition){
//   diction.word = word;
//   diction.definition = definition;
//
// });
//
// var diction = function (word) {
//     return diction.word.value + diction.definition.value
// }
//
// module.exports = {
//   addWord,
//   diction
// }
//
// var word = read.question("Enter a word! ");
// var definition = read.question("Enter a definition! ");
//
// console.log(word);
// console.log(definition);

//NOT WORKING

// var dictionary = {};
// var addWord = function(word, defnition){
//   //put word and definition into our object as key value pair
//   // word: definition,
//   dictionary[word] = definition;
// }
//
// var lookItUp = function(word){
//   return dictionary[word];
// }
//
// module.exports = {
//   addWord,
//   lookItUp
// }

var dictionary = {};

var addWord = function(word, definition) {
  dictionary[word] = definition;
}

var lookItUp = function(word) {
  return dictionary[word];
}

module.exports = {
  addWord,
  lookItUp
};
