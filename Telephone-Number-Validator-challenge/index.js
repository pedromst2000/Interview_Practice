/* 
Return True if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

==> 555-555-5555
==> (555)555-5555
==> (555) 555-5555
==> 555 555 5555
==> 5555555555
==> 1 555 555 5555

*/

function telephoneCheck(str) {
  /* 
        REGEX EXPLANATION
        /^(1\s?)? ==> ^ means start of string, (1\s?)? means the string can start with 1 and an optional space
        (\(\d{3}\)|\d{3}) ==> (\(\d{3}\)|\d{3}) means the string can have either 3 digits inside parentheses, or 3 digits
        [\s\-]? ==> [\s\-]? means the string can have an optional space or dash
        \d{3} ==> \d{3} means the string must have 3 digits
        [\s\-]? ==> [\s\-]? means the string can have an optional space or dash
        \d{4}$/ ==> \d{4}$ means the string must end with 4 digits
     */

  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    // test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
  return regex.test(str);
}

// TESTS CASES
console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("1 555-555-5555")); // true.
console.log(telephoneCheck("1 (555) 555-5555")); // true.
console.log(telephoneCheck("5555555555")); // true.
console.log(telephoneCheck("555-555-5555")); // true.
console.log(telephoneCheck("(555)555-5555")); // true.
console.log(telephoneCheck("1(555)555-5555")); // true.
console.log(telephoneCheck("555-5555")); // false.
