// Problem Statement: 
// You are given an array of integers where each integer appears only once except for one. Your task is to find the duplicate number in the array. The array contains numbers between 1 and n.

// Approach: This problem can be solved using Floyd’s Tortoise and Hare (Cycle Detection Algorithm). 

const findDuplicate = (arr) => {

    let slow = arr[0];
    let fast = arr[0];

    // Phase 1: Finding the intersection point
    do {

        slow = arr[slow]; // Slow moves one step
        fast = arr[arr[fast]]; // Fast moves two steps

    } while (slow !== fast);

    // Phase 2: Finding the entrance to the cycle (duplicate)
    slow = arr[0];

    while (slow !== fast) {

        slow = arr[slow];
        fast = arr[fast];

    }

    return slow;
}

console.log(findDuplicate([1, 3, 4, 2, 2]));