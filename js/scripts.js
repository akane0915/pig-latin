//Business Logic



// If string is only letters, return true, else false
const ISWORD = function(word) {
  if (word.match(/^[A-Za-z]+$/)) {
    return true ;
  } else {
    return false;
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

// Return first element of an array, which is a string
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
const FIRSTTOEND = function(letters){
  const FIRST = letters.shift();
  letters.push(FIRST);
  return letters.join("");
};

const ISSINGLE = function(word) {
  if (word.length === 1) {
    return true;
  } else {
    return false;
  }
};

// If string is a string, return string, else return string
const PIGOUTPUT = function(word) {
  if (ISWORD(word) === true) { // input is all letters
    if (ISSINGLE(word) ===  true) { // word is single letter
      if (ISVOWEL(FIRSTLETTER(word)) === true) { //single letter is a vowel
        return WORDAY(word); //return single letter with ay
      } else { // single letter is consonant
        return word; // do nothing to word, return word
      }
    } else { // not a single letter word
      if (ISVOWEL(FIRSTLETTER(word)) === true) { // multiple letter word with first letter a vowel
        return WORDAY(word); // return word with ay at the end
      }
      else { // word is multi letter and starts with a consonant
        return WORDAY(FIRSTTOEND(STRTOARRAY(word))); // return word with consonant at end and add ay
      }
    }
  } else {
    return word;
  }
};

// User Interface Logic
$(document).ready(function() {
  $("form#pig-latin-form").submit(function(event) {
    event.preventDefault();
    let userInput = $("input#pig-latin-input").val();
    console.log(PIGOUTPUT(userInput));
  });



}); // document ready close
