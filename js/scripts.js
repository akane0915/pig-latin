//Business Logic



// If string is only letters, return true, else false
const ISWORD = function(word) {
  if (word.match(/^[A-Za-z]+$/)) {
    return true ;
  } else {
    return false;
  }
};

// If string is a string, return string, else return string
const PIGOUTPUT = function(word) {
  if (ISWORD(word) === true) {
    return WORDAY(word);
  } else {
    return word;
  }
};

// Add ay to end of a word
const WORDAY = function(word) {
  return word + "ay";
};

// Split string into an array
const STRTOARRAY = function(word) {
  return word.split("");
};

// Return first element of an array
const FIRSTLETTER = function(word){
  return (STRTOARRAY(word)[0]);
};

// Evaluate if a letter is a vowel, return true, else return false
const ISVOWEL = function(letter) {
  if (letter.match(/^[AEIOUaeiou]$/)) {
    return true ;
  } else {
    return false;
  }
};

// Move first element of array to end of array
const FIRSTTOEND = function(array){
  const FIRST = array.shift();
  array.push(FIRST);
  return array;
};


// User Interface Logic
$(document).ready(function() {
  $("form#pig-latin-form").submit(function(event) {
    event.preventDefault();
    let userInput = $("input#pig-latin-input").val();
    console.log(FIRSTTOEND(STRTOARRAY(userInput)));
  });



}); // document ready close
