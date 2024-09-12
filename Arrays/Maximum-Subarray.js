// Problem Statement: 
// You are given an array of integers, and your task is to find the contiguous subarray (containing at least one number) that has the largest sum.

const maxSubArray = (arr) => {
    let maxCurrent = arr[0];
    let maxGlobal = arr[0];

    for(let i = 1; i < arr.length; i++) {

        // Should we continue with the current subarray or start a new one?
        maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);

         // Update global max if necessary
        if(maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }

    return maxGlobal;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));