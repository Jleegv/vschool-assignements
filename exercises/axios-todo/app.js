// working APi webpage via postman

axios.get("https://api.vschool.io/jeremyjones/todo")
.then(function(response){
  console.log(response.data)
  var toDos = response.data;
  for (var i = 0; i < toDos.length; i++){
      document.getElementById("todos").innerHTML += "<div>" + toDos[i].title + "</div>"
  }
})


document.getElementById("button").addEventListener("click", function(){
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var price = document.getElementById("price").value;

  axios.post("https://api.vschool.io/jeremyjones/todo", {"title": title, "description": description, "price": price})
  .then(function(response){
    document.getElementById("todos").innerHTML += "<h3>" + response.data.title + "</h3>";
    document.getElementById("todos").innerHTML += "<h3>" + response.data.description + "</h3>";
    document.getElementById("todos").innerHTML += "<h3>" + response.data.price + "</h3>";

  });
});








// function Person(name, age){
//   this.name=name;
//   this.age=age;
// }
//
//  Person ([
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
// ])
//  var Angie = new Person("<h1>'Angelina Jolie'</h1><h2>80</h2>")
//   console.log(Angie);
//  // "<h1>'Eric Jones'</h1><h2>2</h2>",
//  // "<h1>'Paris Hilton'</h1><h2>5</h2>",
//  // "<h1>'Kayne West'</h1><h2>16</h2>",
//  // "<h1>'Bob Ziroll'</h1><h2>100</h2>"]




function readyToPutInTheDOM(arr){
  return arr.map(function(item){
    return "<h1>"+ item.name + "</h1>" + "<h2>" + item.age + "</h2>";
  })
}

console.log(readyToPutInTheDOM([
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
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
