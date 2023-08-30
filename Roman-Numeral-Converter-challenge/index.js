/* 

!! This challenge is to convert the given number into a roman numeral !!

Note: The function sould return a uppercase string 

!! Some Use Cases !! To help you understand the challenge better

convertToRoman(2) should return a string "II"

convertToRoman(3) should return a string "III"

*/

function convertToRoman(num) {

    // roman array to store the roman numerals and their corresponding numbers
  let roman = [
    {number: 1000, roman: "M"},
    {number: 900, roman: "CM"},
    {number: 500, roman: "D"},
    {number: 400, roman: "CD"},
    {number: 100, roman: "C"},
    {number: 90, roman: "XC"},
    {number: 50, roman: "L"},
    {number: 40, roman: "XL"},
    {number: 10, roman: "X"},
    {number: 9, roman: "IX"},
    {number: 5, roman: "V"},
    {number: 4, roman: "IV"},
    {number: 1, roman: "I"}
  ] ;

    let result = "";   
    
    // Loop through the roman array
    for (let i = 0; i < roman.length; i++) {
        // While the number is greater than or equal to the current number in the array
        while (num >= roman[i].number) {
            // Add the roman numeral to the result string - this will loop until the number is less than the current number in the array
            result += roman[i].roman;
            // Subtract the number from the current number in the array - this will loop until the number is less than the current number in the array
            num -= roman[i].number;
        }
        }

    return result;
    
}

console.log(convertToRoman(2)); // II
console.log(convertToRoman(3)); // III