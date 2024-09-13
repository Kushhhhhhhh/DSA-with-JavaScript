// Problem Statement:
// Write a function to check if a given string is a palindrome.

// Approach:
// Compare the original string with its reversed version.

const isPalindrome = ( str ) => {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));