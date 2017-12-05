// //.every mimic function
// function isBelowThreshold(currentValue) {
//   currentValue();
// }
//
// console.log(()=> {});
//
// //.some mimic function
// function hasNumber(num) {
//   num();
// }
//
// console.log(()=> {});

// function isBelowThreshold(currentValue) {
//   return currentValue < 40;
// }
//
// let arr = [1, 30, 39, 29, 10, 13];
//
// console.log(arr.every(isBelowThreshold));

// function hasNum(num) {
//   return num < 40;
// }
//
// let arr = [1, 30, 39, 29, 10, 13];
//
// console.log(arr.some(hasNum));

//working higher order function
// function runFunction(fun, str) {
//   fun(str);
// }
//
// function thisOne(thisString) {
//   console.log(thisString);
// }
//
// runFunction(thisOne, "hey");

// function every(arr, f) {
//     for (let i = 0; i < arr.length; i++){
//         if (!checkTrue(arr[i])){
//             return false
//         };
//     }
//     return true;
// }
//
// function checkTrue (theSingleNumber) {
//     return typeof theSingleNumber === "number"
// }
//
// console.log(every([1,2,"3"], checkTrue))
// console.log(every([1,2,3], checkTrue))

function every(arr, callBack) {
    for (let i = 0; i < arr.length; i++){
        if (callBack(arr[i])){
            return true
        };
    }
    return false;
}

function checkTrue (theSingleNumber) {
    return typeof theSingleNumber === "number"
}

console.log(every(["1","2","3"], checkTrue))
console.log(every([1,2,3], checkTrue))
