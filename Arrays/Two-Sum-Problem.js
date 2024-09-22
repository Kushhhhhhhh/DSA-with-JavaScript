// Problem Statement:
// You are given an array of integers and a target sum. You need to find two numbers in the array that add up to the target sum and return their indexes. There's always one solution, and you cannot use the same element twice.

// We can solve this efficiently using a hash map (object in JavaScript).

const twoSum = (arr, target) => {
    let map = {}; // empty object to store index of elements

    for(let i = 0; i < arr.length; i++) {
        let complement = target - arr[i]; // calculating the complement

        // Check if complement exists in map
        if(map[complement] !== undefined) {
            return [map[complement], i]; // Return indices if we found the pair
        } 

        // Otherwise, store the current number with its index
        map[arr[i]] = i;
    }
    
    return null; // Return null if no solution is found (though problem states there's always one solution)
}

console.log(twoSum([2, 7, 11, 15], 9));

// Time Complexity: O(n) where n is the length of the array
// Space Complexity: O(n) in the worst case, we might need to store all elements in the hash map

// Another way to do it using Hash map

const twoSumWithHash = (arr, target) => {
    const numToIndexMap = {};

    for(let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if(complement in numToIndexMap) {
            return [numToIndexMap[complement], i];
        }
        numToIndexMap[arr[i]] = i;
    }
    return null;
}