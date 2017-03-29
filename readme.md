_Specs for a Single Word_

* The program does nothing to non-alphabetical characters.
Example Input: 3
Example Output: 3

* The program adds "ay" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iay

* For words with multiple letters beginning with a vowel add "ay" to the end of the word.
Example Input: ate
Example Outout: ateay

* For words beginning with only one consonant, move the consonant to the end and add "ay".
Example Input: see
Example Output: eesay

* For words starting with two consonants, move both consonants to the end and add "ay".
Example Input: tree
Example Output: eetray

* For words starting with three consonants, move all three consonants to the end and add "ay".
Example Input: three
Example Output: eethray

* For words starting with any number of consonants, move all beginning consecutive consonants to the end and add "ay".
Example Input: schrodinger
Example Output: odingerschray

* If the word starts with "qu" move both letters to the end of the word and add "ay".
Example Input: quake
Example Output: akequay

* If the first consecutive consonants include a "qu" pair, move all the consonants excluding the "u" to the end of the word and add "ay".
Example Input: squeal
Example Output: uealsqay

* For words beginning with a "y", move the "y" and the following consecutive consonants to the end of the word and add "ay".
Example Input: ywis
Example Output: isyway

_Specs for Sentences_

* For multi word strings, program evaluates each word separated by a " " as an individual word.
Example Input: this is a sentence
Example Output: ["this"," ","is"," ","a"," ","sentence"]

* Program will iterate over the array and translate the individual words using the single word specs.

* Program will join the words and spaces into a string.

_Specs for User Interface_

* Page will display a form field to enter a string.

* Page will display a submit button to process the string.

* Program will display the translated string to the user.
