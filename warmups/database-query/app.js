// Given a query object and an array of objects, write a function that returns an array of items that match the query.
//
// If the query object is empty, return the entire array.
// If the array contains no matches, return an empty array

const database = [
{a: 1, b: 1, c: 2},
{a: 0, b: 0, c: 2},
{a: 0, b: 1, c: 0},
{a: 1, b: 2, c: 2}
];

function filterDatabase(query, databse){
  if (Object.keys(query).length === 0) {
    return database
  }
  return database.filter(entry => {
    for (let prop in query) {
      if (query[prop] !== entry[prop]) {
        return false;
      }
    }
    return true;
  });
}

console.log(filterDatabase({}, database));
console.log(filterDatabase({dolphin: "squeak!"}, database));
console.log(filterDatabase({a: 1, c: 2}, database));
