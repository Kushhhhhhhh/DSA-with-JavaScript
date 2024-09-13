// Problem Statement:
// Write a function that takes a string and returns the reverse of the string.

// Approach 1: Using JavaScript’s built-in methods
// We can split the string into an array of characters, reverse the array, and join it back into a string.

const reverseString = (s) => {
    return s.split('').reverse().join('');
}

console.log(reverseString("Kush"));


// Approach 2: Using recursion
// We can use recursion to reverse the string.

const reverseStringRecursion = (s) => {
    if (s.length <= 1) return s;
    return reverseStringRecursion(s.slice(1)) + s[0];
}

console.log(reverseStringRecursion("hello"));