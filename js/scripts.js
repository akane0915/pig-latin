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

// Evaluate if first element in array is a vowel, return true, else return false
// const ISFIRSTVOWEL = function(word){
//   const VOWELS = ["a","e","i","o","u"];
//   VOWELS.forEach(function(vowel){
//     let firstLetter = STRTOARRAY(word)[0];
//     if (firstLetter === vowel) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };

// User Interface Logic
$(document).ready(function() {
  $("form#pig-latin-form").submit(function(event) {
    event.preventDefault();
    let userInput = $("input#pig-latin-input").val();
    console.log(ISFIRSTVOWEL(userInput));
    console.log(PIGOUTPUT(userInput));
  });



}); // document ready close
