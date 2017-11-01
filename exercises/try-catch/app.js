// var myName = "John Doe";
// try {
//   if (name === "John Doe"){
//     throw 'Name must be defined';
//   }catch(e){
//     console.log(catch);
//   }
// }

// console.log(name);
//
// function movieCheck(age) {
//   if(age < 0) {
//     throw "Error cannot be less than 0";
//   } else if(age <= 12) {
//     console.log("You can see PG movies");
//   } else if(age >= 13 && age < 18) {
//     console.log("You can see PG-13 movies");
//   } else if(age >= 18) {
//     console.log("You can see R rated movies");
//   }
// }
// movieCheck(-1);

var name = "John Doe";
console.log(name);
function movieCheck(age) {
  if(age < 0) {
    throw "Error cannot be less than 0";
  } else if(age <= 12) {
    console.log("You can see PG movies");
  } else if(age >= 13 && age < 18) {
    console.log("You can see PG-13 movies");
  } else if(age >= 18) {
    console.log("You can see R rated movies");
  }
}
movieCheck(0);
