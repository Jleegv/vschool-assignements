var results = [];

let keyWords = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.";

// / WORKING
function hasDuplicates(keyWords) {
  let newArr = keyWords.split(" ");
  console.log(newArr);
  let tempArr;
  const results = [];
  for (let i = 0; i < newArr.length; i++) {
    tempArr = newArr[i];
    for (let j = i; j < newArr.length; j++) {
      if (results.includes(tempArr)) {
        break;
      }
      if (tempArr === newArr[j + 1]) {
        results.push(tempArr);
      }
    }
  }
  return results;
}

//ES6 not yet working
// const hasDuplicates = keyWords => {
//   const codeArr = keyWords.replace("/\w/g", " ").toLowerCase().split(" ").sort();
//   const double = codeArr.filter((item, index) => codeArr[index] === codeArr[index + 1])
// }

console.log(hasDuplicates(keyWords));
module.exports = hasDuplicates;
