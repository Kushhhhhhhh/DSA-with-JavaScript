// Problem Statement: 
// You are given an array of n elements, and you need to rotate it to the right by k steps.

const rotateArray = ( nums , k ) => {

    k = k % nums.length; // In case k is greater than the array size
    nums.reverse();  // Reverse the entire array

    reverseSubArray(nums, 0, k - 1); // Reverse the first k elements
    reverseSubArray(nums, k, nums.length - 1); // Reverse the remaining elements

    // Helper function to reverse a subarray
    function reverseSubArray(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];  // Swap elements
            start++;
            end--;
        }
    }
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));