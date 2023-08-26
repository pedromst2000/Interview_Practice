/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. 

!! Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

!! Note: It can be pass strings with varying formats, such as racerar, RaceCar and race Car among others.

!! Note: Also strings with special symbols, such as 2A3*3a2, 2A3 3a2 and 2_A3*3#A2.

*/

function palindrome(str) {
  // remove all non-alphanumeric characters (punctuation, spaces and symbols) - using regex
  let regex = /[^a-z0-9]/gi;

  /* 
    Explanation of the regex: 
    / - start of regex
    [] - match any character in the set
    ^ - match any character not in the set
    a-z - match any character in the range a-z
    0-9 - match any character in the range 0-9
    / - end of regex
    gi - g - global match; i - case-insensitive match
  */


  str = str.replace(regex, ""); //will remove any char that matches the regex from the string 

  // turn everything into the same case (lower or upper case)
  str = str.toLowerCase(); //WelCoME => welcome

  // split the string into an array of characters
  let reverseString = str.split("").reverse().join(""); // ola => ["o", "l", "a"] => ["a", "l", "o"] => "alo"


  // check if the original string is equal to the reversed string
  if (str === reverseString) {
    return true; 
  } else {
    return false;
  }
}

console.log(palindrome("eye")); // true
console.log(palindrome("_eye")); // true
console.log(palindrome("race car")); // true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("never odd or even")); // true
console.log(palindrome("nope")); // false
console.log(palindrome("almostomla")); // false
console.log(palindrome("My age is 0, 0 si ega ym.")); // true
console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("0_0 (: /- :) 0-0")); // true
console.log(palindrome("five|_/|four")); // false
