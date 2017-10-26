
document.getElementById("btn1").addEventListener("click", function(){
  var addOne = parseInt(document.getElementById("add1").value);
  var addTwo = parseInt(document.getElementById("add2").value);
  document.getElementById("addResult").innerText = addOne + addTwo

})

document.getElementById("btn2").addEventListener("click", function(){
  var subOne = parseInt(document.getElementById("sub1").value);
  var subTwo = parseInt(document.getElementById("sub2").value);
  document.getElementById("addResult1").innerText = subOne - subTwo

})

document.getElementById("btn3").addEventListener("click", function() {
  var mulOne = parseInt(document.getElementById("mul1").value);
  var mulTwo = parseInt(document.getElementById("mul2").value);
  document.getElementById("addResult2").innerText = mulOne * mulTwo
})



// document.getElementById("btn1").addEventListener("click",function(){
//   var myAdd= document.getElementbyId("add1").value;
//   var myAdd2 = document.getElementbyId("add1").value;
//     output.innerHTML = myAdd + myAdd2;
// })

// document.getElementById("btn2").addEventListener("click", function(){
//   var mySub = document.getElementById("sub").value;
//   var sub1 = document.getElementById("sub1").value;
//   var sub2 = document.getElementById("sub2").value;
//     output.innerHTML = mySub - 2;
// })
//
//
// document.getElementById("btn3").addEventListener("click", function(){
//   var myMul = document.getElementById("mul").value;
//   var sub1 = document.getElementById("mul1").value;
//   var sub2 = document.getElementById("mul2").value;
//     myMul = sub1*sub2;
// })
