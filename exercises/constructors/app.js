// var read = require("readline-sync");
// var firstName = read.question("What is your first name?");
// var lastName = read.question("What is your last name?");
// var age = read.question("How old are you?");
// var isMale = read.keyInYN("Are you a male?");
//
//
// function Person(fname, lname, age, isMale, hobbies) {
//   this.firstName = fname;
//   this.lastName = lname;
//   this.age = age;
//   this.isMale = true;
//   this.hobbies = hobbies;
//   this.speak = function (){
//     console.log("Hi my name is " + this.firstName + ' ' +this.lastName);
//   }
// }
//
// var myArr = [];
//
// for (var i=0; i < 50; i++) {
//   var newUser = new Person(firstName, lastName, age, ['kayaking', 'knitting']);
//   myArr.push(eric)
//
// }
//
// console.log(myArr);

// function Car(make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
// };
//
// var toyota = new Car('Toyta', 'Tacoma', 2002, 'White');

// var myArr = []
// function Employee(name, jobTitle, hourlySalary){
//   this.name = name;
//   this.jobTitle = jobTitle;
//   this.hourlySalary = hourlySalary;
//   this.status = "Full-time";
//     this.printEmployeeForm = function (){
//       console.log(this.name);
//       console.log(this.jobTitle);
//       console.log(this.hourlySalary);
//       console.log(this.status);
//     }
// }
//
// var lisa = new Employee('Lisa', 'Supervisor', 30);
// var bob = new Employee('Bob', 'Ballin', 3000);
//   bob.status = "Part time"
// var lina = new Employee('Lina', 'Janitor', 12);
//
// myArr.push(lisa,bob,lina);
//
// console.log(myArr);
//
// lisa.printEmployeeForm()
// bob.printEmployeeForm()
// lina.printEmployeeForm()

var carArr = [];
function Car(year,make,model,isRunning){
  this.year = year;
  this.make = make;
  this.model = model;
  this.isRunning = true;
    this.varCar = function() {
      console.log(this.year);
      console.log(this.make);
      console.log(this.model);
      console.log(this.isRunning);
    }
}

var toyota = new Car('2002','Toyota', 'Tacoma');
var honda = new Car('2015','Honda', 'Prelude');
var hyundai = new Car('1999','Hyundai', 'Elantra');
  hyundai.isRunning = false;
var bmw = new Car('2017','BMW', 'M3');
carArr.push(toyota,honda,hyundai,bmw);
console.log(carArr)
toyota.varCar()
honda.varCar()
hyundai.varCar()
bmw.varCar()
