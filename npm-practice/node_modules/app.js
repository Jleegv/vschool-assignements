//
// var ask = require('readline-sync');
//   console.log('Hello! My name is Betty. Help me get to know you!\n');
//
// var firstName = ask.question('What is your first name? ');
//   console.log('Hi, ' +  firstName + '!');
//   console.log(firstName.toUpperCase());
//
// var letterName = ask.keyInYN("Do you know how many letters are in your name? ");
//   console.log("It's this many! " +  firstName.length);
//
// var animal = ask.keyInYN("You know so much about me but I know nothing about you! Let's change that. Would you like to tell me your favorite animal from this list I compiled?");
//   console.log("Okay it's a small list... ");
//
// var animalList = ask.question("[1]Lions [2]Tigers [3]Bears: ");
// var myAnimals = [" ", "Lions", "Tigers", "Bears "];
//   console.log(myAnimals[animalList]);
//   console.log("Great choice!");
//
// var animalLong = ask.question("Now I need you to make up an animal name that's 20 or more characters but here's the catch, I can only tell you the last half because I bonk my head too much and can't remember! \n");
//   if (animalLong.length >= 20){
//     console.log("Here's what I can remember:  " + animalLong.substr(animalLong.length / 2));
//   }


 var readLine = require("readline-sync");

 function add (num1, num2){
   return num1 + num2;
 }

 function sub (num1, num2){
   return num1 - num2;
 }

 function mul (num1, num2){
   return num1 * num2;
 }

 function div (num1, num2){
   return num1 / num2;
 }
 var value1 = Number(readline.question("What's your first number?"));
 var value2 = Number(readline.question("What's your first number?"));

var operations = ["add", "sub", "multiply", "divide"];
 var operation = readline.keyInSelect(operations, "What operation would you like performed?") + 1;
 console.log("You have chosen " + operation);
  if (operation === 0) {
    console.log(add(value1, value2));
  }else if (operation === 1){
    console.log(sub(value1, value2));
  }
