
// Orange when the mouse scroll is used somewhere in the window (not just over the square).


// var on = document.getElementById("on");
// on.addEventListener("mouseover", function() {
//   console.log("entered");
//   this.style.backgroundColor = "blue";
//
// })
// // console.log(onLoad);

var on = document.getElementById("on");

function turnBlue() {
  on.style.backgroundColor = "blue";
}
on.addEventListener("mouseover", turnBlue);

function turnRed() {
  on.style.backgroundColor = "red";
}
on.addEventListener("mousedown", turnRed);

function turnYellow() {
  on.style.backgroundColor = "yellow";
}
on.addEventListener("mouseup", turnYellow);

function turnGreen () {
  on.style.backgroundColor = "green";
}
on.addEventListener("dblclick", turnGreen);

function on () {
  on.style.backgroundColor = "orange";
}
on.addEventListener("wheelDelta", on);
