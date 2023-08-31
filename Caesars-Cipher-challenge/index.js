/* 
    The Caesars Cipher Challenge

    One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.

    In a shift cipher the meanings of the letters are shifted by some set amount.

    => A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

    Write a function which takes a ROT13 encoded string as input and returns a decoded string.

    All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/


function rot13(str) {
    let decoded = ""; // decoded string
    let charCode = 0; // char code of each character
    let char = ""; // character


    /* 
        Explanation of the algorithm:

        1. Loop through each character in the string
        2. Get the char code of the character
        3. If the char code is between 65 and 90 (A-Z)
        4. If the char code is less than 78 (N)
        5. Add 13 to the char code
        6. Else subtract 13 from the char code

        // 65 - 90 (A-Z) EXPLAINED

        // Why 65 and 90?
        // 65 is the char code of A
        // 90 is the char code of Z
    */

    // loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        charCode = str.charCodeAt(i); // get the char code of the character
        if (charCode >= 65 && charCode <= 90) { // if the char code is between 65 and 90
            if (charCode < 78) { // if the char code is less than 78
                charCode += 13; // add 13 to the char code
            } else {
                charCode -= 13; // else subtract 13 from the char code
            }
        }
        char = String.fromCharCode(charCode); // get the character from the char code
        decoded += char; // add the character to the decoded string
    }
    return decoded;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC")); // should decode to "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")); // should decode to "FREE PIZZA!"
console.log(rot13("SERR YBIR?")); // should decode to "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // should decode to "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."