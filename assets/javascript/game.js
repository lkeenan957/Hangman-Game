var hangmanWords = [
  "monkey", "donkey", "lion", "cat", "dog", "puppy"
];

//filter() method creates a new array with all elements that pass the test implemented by the provided function.
var easyArray = hangmanWords.filter(function(word)){
  return word.length <= 4;
};

var hardArray = hangmanWords.filter(function(word)){
  return word.length > 4;
}

//check (array.length - 1));
function wordSelect(array){
  var num =Math.floor(Math.random()*array.length);
  var word = array[num];
  return word;
}

function setWordToBeGuessed(){
  //getting the random word that was selected
  currentWordFull = wordSelect(hangmanWords);
  //converting to uppercase
  currentWord = currentWordFull.toUpperCase();
}

function initializeGame(){
  allowedGuesses = 12;
  wrongGuesses = [];
  correctGuesses = [];

  document.write("Press any key to get started!");
}
