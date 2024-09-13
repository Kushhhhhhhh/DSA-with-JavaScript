// Problem Statement:
// Given an array of strings, write a function to find the longest common prefix string among them.

// Approach:
// 1. Sort the array.
// 2. Compare the first and last strings in the sorted array.
// 3. Find the longest common prefix between these two.

const longestCommonPrefix = (arr) => {

    if(arr.length === 0) return "";

    arr.sort();
    let first = arr[0];
    let last = arr[arr.length - 1];
    let i = 0;

    while(i < first.length && first[i] === last[i]) {
        i++;
    }

    return first.substring(0, i);
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));