var lastIndex=-1;

// data is the JSON object from file grundwortschatz.java  
var wordCount=data.words.length;

function showOtherWord() {
  
  const div = document.getElementById('words');
  var random = getRandomInt(0, wordCount);
  while (random == lastIndex) {
    random = getRandomInt(0, wordCount);
  };
  
  lastIndex=random;
    
  div.innerHTML=data.words[lastIndex];
}
// gets a random int between min (inclusive) and max (exclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max); 
  return Math.floor(Math.random() * (max - min)) + min;
}


