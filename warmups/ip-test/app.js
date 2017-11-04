// var ipWork = "172.16.254.1";
//
// let ipWorking = function(str){
//   var arrStr = ipWork.split(".");
//     var newArr = [];
//   for (var i=0; i < ipWorking.length; i++){
//     if ((a > 0 && a <= 255)){
//       return arrStr.push(newArr);
//     }else{
//       if((b < 0) || (b > 255))
//         console.log("Ip is invalid");
//     }
//   }
// }
//
// ipWorking("172.16.254.1")
// module.exports = ipWorking;

// var ipAddress = function(str) {
//  var sections = str.split(".");
//  if (sections.length === 4) {
//    return sections.every(function(sections) {
//      return parseInt(sections) >= 0 && parseInt(sections) <= 255;
//    });
//  };
// }
// module.exports = ipAddress;

function findFunction(searchTerm, phrases){
  phrases.filer(function(phrase)){
    return phrase.indexOf(searchTerm) !== -1;
  })
}
