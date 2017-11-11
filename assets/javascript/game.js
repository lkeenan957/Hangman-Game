var currentWordFull;
var currentWord = [];
var wordBlanks = [];
var userGuess;
var winAudio = new Audio('./assets/win.wav');
var congratsAudio = new Audio('./assets/congrats.flac');


var wordToGuessDOM = document.getElementById("wordToGuess");
console.log(wordToGuessDOM);

var guessesRemainingDOM = document.getElementById("guessesRemaining");
console.log(guessesRemainingDOM);

var guessedLettersDOM = document.getElementById("guessedLetters");
console.log(guessedLettersDOM);

var hangmanWords = ["washington", "jefferson", "madison", "jackson", "obama", "abraham", "roosevelt", "kennedy", "reagan", "bush"];
console.log(hangmanWords, hangmanWords.length);

//filter() method creates a new array with all elements that pass the test implemented by the provided function.
// var easyArray = hangmanWords.filter(function(word){
//   return word.length <= 4;
// });
//
// var hardArray = hangmanWords.filter(function(word){
//   return word.length > 4;
// });

//check (array.length - 1));
function wordSelect(array){
  var num = Math.floor(Math.random() * array.length);
  var word = array[num];
  return word;
};

function setWordToBeGuessed(){
  wordBlanks = [];
  //getting the random word that was selected
  currentWordFull = wordSelect(hangmanWords);
  //converting to uppercase
  //turn current word into and array so we can loop it
  currentWord = currentWordFull.toUpperCase().split("");
  console.log(currentWord, "this is our currentWord arr");

    //on each itteration we want to display a blank on the screen
    for (var i = 0; i < currentWord.length; i++) {
      wordBlanks.push("_");
    }
    console.log(wordBlanks, "this is our wordBlanks");

    wordToGuessDOM.innerHTML = wordBlanks.join(" ");

};

function initializeGame(){
  allowedGuesses = 12;
  wrongGuesses = [];
  correctGuesses = [];
  guessedLettersDOM.innerHTML = wrongGuesses;
  guessesRemainingDOM.innerHTML = allowedGuesses;
  setWordToBeGuessed();
  // document.write("Press any key to get started!");
};

//user presses a key to guess what letter is in our blanks
document.addEventListener("keyup", function(event){
	console.log(event);
	console.log(event.key);
  //grab the key they pressed
  userGuess = event.key.toUpperCase();
  console.log(userGuess, "this is our userGuess");
  for (var i = 0; i < currentWord.length; i++) {
    //soo if that key exists in our currentWord array
    if (userGuess === currentWord[i]) {
      console.log("you Found me");
      //if it does we want to fill the blank with that letter
      wordBlanks[i] = userGuess;
      winAudio.play();
      //then redisplay the wordBlanks array to the DOM
    }
    else{
      console.log("you didnt find me");
    }
  }

  if(!wrongGuesses.includes(userGuess))
  {
    if (allowedGuesses != -1) {
      allowedGuesses = allowedGuesses - 1;
      console.log(allowedGuesses);
      wrongGuesses.push(userGuess);
      guessedLettersDOM.innerHTML = wrongGuesses;
      guessesRemainingDOM.innerHTML = allowedGuesses;
    }
  }

  //trying to get a music when the entire word is complete
   // if(wordBlanks){
   //   congratsAudio.play();
   // }

   function checkWin() {
      if (wordBlanks.indexOf('_') === -1) {
        alert('You Won!');
        setTimeout(congrats, 3000)
        function congrats() {
          congratsAudio.play();
        }
      } else if (allowedGuesses === 0) {
        alert('You Lost!');
        initializeGame()
      }
    }
    checkWin()

  if (currentWord.join('') == wordBlanks.join('')) {
    initializeGame()
  }
  console.log(wordBlanks, "this is out maniplulated wordBlanks array");
  wordToGuessDOM.innerHTML = wordBlanks.join(" ");

})


initializeGame();




/*

function setTimeout(function, time) {
  function();
}



-------------------------------



event loop
  var event =  []
  user clicks a button
  event.push(button)








*/
