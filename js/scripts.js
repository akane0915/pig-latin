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

// If single letter word begins with vowel, add ay to end of word, else do nothing
const WORDAY = function(word) {
  return word + "ay";
};


// User Interface Logic
$(document).ready(function() {
  $("form#pig-latin-form").submit(function(event) {
    event.preventDefault();
    let userInput = $("input#pig-latin-input").val();
    console.log(PIGOUTPUT(userInput));
  });



}); // document ready close
