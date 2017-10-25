function randomPass(num) {
  var txt = "abcdefghijklmnop6547252TTTTTTSGGFBDBBFGH__*^%^$^@%@";
  var pass = "";
    console.log(pass)
    for (var i=0, n =txt.length; i<num; i++) {
      pass +=  txt.charAt(Math.floor(Math.random() * n));
  }


    return pass
}

console.log(randomPass(7));
randomPass(7);
