// Problem Statement:
// Write a function that checks if two strings are anagrams of each other.
// Two strings are anagrams if they contain the same characters in the same frequency, but in a different order(e.g., "listen" and "silent").

// Approach:

// Sort both strings and compare them.
// If they are the same after sorting, they are anagrams.

const areAnagram = (s1, s2) => {
    return s1.split('').sort().join('') === s2.split('').sort().join('');
}

console.log(areAnagram("listen", "silent"));
console.log(areAnagram("hello", "world"));