_Specs for a Single Word_

1. The program does nothing to non-alphabetical characters.
Example Input: 3
Example Output: 3

2. The program adds "ay" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iay

3. For words beginning with only one consonant, move the consonant to the end and add "ay".
Example Input: see
Example Output: eesay

4. For words starting with two consonants, move both consonants to the end and add "ay".
Example Input: tree
Example Output: eetray

5. For words starting with three consonants, move all three consonants to the end and add "ay".
Example Input: three
Example Output: eethray

6. For words starting with any number of consonants, move all beginning consecutive consonants to the end and add "ay".
Example Input: schrodinger
Example Output: odingerschray

7. If the word starts with "qu" move both letters to the end of the word and add "ay".
Example Input: quake
Example Output: akequay

8. If the first consecutive consonants include a "qu" pair, move all the consonants including the "u" to the end of the word and add "ay".
Example Input: squeal
Example Output: ealsquay

9. For words beginning with a "y", move the "y" and the following consecutive consonants to the end of the word and add "ay".
Example Input: ywis
Example Output: isyway

_Specs for Sentences_

10. For multi word strings, program evaluates each word separated by a " " as an individual word.
Example Input: this is a sentence
Example Output: ["this"," ","is"," ","a"," ","sentence"]

11. Program will iterate over the array and translate the individual words using the single word specs.

12. Program will join the words and spaces into a string.

_Specs for User Interface_

13. Page will display a form field to enter a string.

14. Page will display a submit button to process the string.

15. Program will display the translated string to the user.
