// let arr = [10, 9, 15,6, 30];
//
// function getMaxProfit(arr){
//
//   let min = 0;
//   let max = 0;
//   let maxIndex;
//   let minIndex;
//   let profitOptions = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     let price = arr[i];
//
//     if (!min && !max){
//       min = price;
//       max = price;
//       minIndex = i;
//       maxIndex = i;
//     } else {
//       if (price < min){
//         min = price;
//         minIndex = i;
//       }
//
//       if (price > max){
//         max = price;
//         maxIndex = i;
//       }
//
//       if (i > maxIndex && (price < max)){
//         profitOptions.push(min - max);
//       } else {
//         profitOptions.push(max - min);
//       }
//     }
//   }
//   return profitOptions.reduce((max, val) => {
//      return val > max ? val : max;
//    }, 0);
// }
//
// getMaxProfit(arr);

let foundNum = [];
const stockProfit = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      foundNum.push(arr[j] - arr[i])
    }
  }
  return Math.max(...foundNum)
}

console.log(stockProfit([10, 7, 5, 8, 11, 9]))
console.log(stockProfit([40, 7, 5, 8, 11, 9]))
console.log(stockProfit([40, 7, 5, 4, 0]))
