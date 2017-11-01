//BATTLESHIP

// var grid = [];
// var readline = require("readline-sync");
//
// var goodHit = 0;
// var misses = 0;
//
// function randomBool() {
//   return Math.random() >= 0.5;
// }
//
// function Location(isShip, isHit, display){
//   this.isShip = isShip;
//   this.isHit = isHit;
//   this.display = display;
// }
//
// for(var i = 0; i < 10; i++){
//   grid.push([])
//   for(var j = 0; j < 10; j++){
//     var water = new Location(randomBool(), false, "~");
//     grid[i].push(water);
//   }
// }
//
// console.log(grid);
//
// while(goodHit < 3 && misses < 20) {
//   var x = readline.question("Pick your first coordinate: ");
//   var y = readline.question("Pick your second coordinate: ");
//
//   if(grid[x][y].isHit || grid[x][y].display === 'M') {
//     console.log("You've used those already. Choose differenly.");
//     continue;
//   }
//
//   if(grid[x][y].isShip && grid[x][y].isHit === false) {
//     goodHit++;
//     grid[x][y].isShip = false;
//     grid[x][y].isHit = true;
//     grid[x][y].display = "X";
//     console.log("Good hit!");
//   } else {
//     misses++;
//     grid[x][y].display = "M";
//     console.log("You missed.");
//   }
// }


// COUNT CODE ASSIGNMENT. Count the amound of times the word "code" appears in a given string
//NOT WORKING VERSION
// var count = 0;
// var index = 0;
//
// function countCode(str){
//   for (var i =0; i <str.length; i++){
//     if (str === str[i]){
//       index = str.substr((i)+1);
//       count += 1
//         return count
//     }
//   }
// }
//
//
// console.log(countCode("aaacodebbb", "code"));
// console.log(countCode("codexxcode", "code"));
// console.log(countCode("cozexxcope", "code"));


//WORKING VERSION WITH REG EX
// var word = 'code';
// function countCode(str) {
//   return str.match(/co.e/g).length
// }
// console.log(countCode("cozexxcopecopzcode"));
