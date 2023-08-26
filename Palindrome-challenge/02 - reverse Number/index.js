/*

In this challenge the goal is the check if a number is palindrome or not.

*/

function isPalindrome(num) {
  // convert number to string
  let numString = num.toString(); // 7 -> "7"
  let numStringReverse = numString.split("").reverse().join(""); // "78" => ["7", "8"] => ["8", "7"] => "87"

  if (numString === numStringReverse) {
    return true;
  } else {
    return false;
  }
}


console.log(isPalindrome(7)); // true
console.log(isPalindrome(78)); // false
console.log(isPalindrome(787)); // true
console.log(isPalindrome(1001)); // true
console.log(isPalindrome(10001)); // true
console.log(isPalindrome(10010)); // false
console.log(isPalindrome(2002)); // true
