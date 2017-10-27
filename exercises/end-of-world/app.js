// var time = 30;
// var end = document.getElementById("world-end");
// end.innerText = time;
// var secondsLeft = setInterval(function(){
//   end.innerText = time -= 1;
//   if (time === 0){
//     clearInterval (secondsLeft);
//   }
// },1000);

// var numbers = [2,4,5];
// var newNumb = numbers.map(function(number){
//   return number * 2
//
// }).join(" ");
// console.log(newNumb);

// function nameOnly(arr){
//   return arr.map(function(name){
//     return name.name
//
// });}
//
//
// console.log(nameOnly([
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },{
//     name: "Eric Jones",
//     age: 2
//   },{
//     name: "Paris Hilton",
//     age: 5
//   },{
//     name: "Kayne West",
//     age: 16
//   },{
//     name: "Bob Ziroll",
//     age: 100
//   }
// ]));

// function thereIsNoSpoon(arr) {
function nameOnly(arr){
  return arr.filter(function(item){
    return item.age >= 17;
  });
}

console.log(nameOnly([
  {
    name: "Angelina Jolie",
    age: 80
  },{
    name: "Eric Jones",
    age: 2
  },{
    name: "Paris Hilton",
    age: 5
  },{
    name: "Kayne West",
    age: 16
  },{
    name: "Bob Ziroll",
    age: 100
  }
]));
