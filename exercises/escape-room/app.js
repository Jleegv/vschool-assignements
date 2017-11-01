var question = "Welcome to the escape room, would you like to see some ways to get out? ";

var flag = true;
var keyFound = false;
var choices = ['Reach into hole','Search for a key','Try the door'];
var readline = require("readline-sync");

console.log(question);
while (flag) {
  var index = readline.keyInSelect(choices, 'Which will you choose');
    switch (index){
      case 0:
        console.log('You reached into the hole and got bit by a snake. You are dead');
        flag = false;
        break;

      case 1:
        console.log('Your search returned a key for the door! ');
        flag = true;
        break;
}
}
