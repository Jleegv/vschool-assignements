var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

//This prints the array
function printLyrics(array){
  console.log(array.join(' '));
}


//This prints array in reverse
function printBackward(array){
var reversed = array.reverse();
  console.log(printLyrics(reversed));
}


//This prints the array skipping every other string
function everyOther(array){
  var newArray = [];
  for(var i = 0; i < array.length; i += 2){
    newArray.push(array[i]);
    }
  printLyrics(newArray);
}
everyOther(lyrics);
