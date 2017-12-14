// Write a function that takes an object as a parameter and returns a copy. The new object should have all the same properties and values of the original. In the spirit of Pure Functions, your function should not modify the original object.

//this is called a deep copy
//a shadow copy is where you make a new version but it points at the original object
function copyCat(obj) {
  return Object.assign({}, obj);

  //or do Object.assign manually
  // const copy = {};
  // for (let prop in obj) {
  //   copy[prop] = obj[prop];
  // }
  // return copy
}

const person = {name: "Joe"}
const copy = copyCat(person);

console.log(person.name) // "Joe"
console.log(copy.name)  // "Joe"

person.name = "Jane"

console.log(person.name) // "Jane"
console.log(copy.name)  // "Joe"
