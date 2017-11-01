axios.get("https://api.vschool.io/jeremyjones/todo").then(function(response){
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

  axios.post("https://api.vschool.io/jeremyjones/todo", {"title": title, "description": description, "price": price}).then(function(response){
    document.getElementById("todos").innerHTML += "<h3>" + response.data.title + "</h3>";
    document.getElementById("todos").innerHTML += "<h3>" + response.data.description + "</h3>";
    document.getElementById("todos").innerHTML += "<h3>" + response.data.price + "</h3>";

  });
});
