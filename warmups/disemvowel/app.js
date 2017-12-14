// Today we are going to be building a function that removes all vowels and spaces from a string. It will then return the result as an object with two keys "str" and "vowels".

function disemvowel(str) {
  arr = str.split("")
  return arr.reduce((prev, currentChar) => {
    let c = currentChar.toLowerCase()
    if (c === "a" || c == "e" || c == "i"|| c == "o" || c == "u"){
      prev.vowels += currentChar
    } else {
      prev.str += currentChar
    }
      return prev
  }, {str: "", vowels: " "})
}
console.log(disemvowel("Pickle Rick"))
// function vowels(string) {
//   return {
//     cons: string.toLowerCase().match()
//     vowels: string.toLowerCase().match()
//   }
// }
