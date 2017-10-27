var str = "Hello, raceCar, bAnAnA";

function isCaps(letter){
    return letter === letter.toUpperCase();
}

function antiCaps(str){
  var newStr = "";
  for (var i = 0; i<str.length; i++){
    if (isCaps(str[i])){
      newStr+= str[i].toLowerCase()
    }else{
      newStr+= str[i].toUpperCase()
    }
  }
  console.log(newStr);
}
antiCaps("Hello")
antiCaps("raceCar")
antiCaps("bAnAnA")
