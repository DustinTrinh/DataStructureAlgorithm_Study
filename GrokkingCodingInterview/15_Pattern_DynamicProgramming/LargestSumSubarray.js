let findMaxSumSubArray = function (nums) {
    // Check if the size of the array is at least 2
    if (nums.length < 1) {
        return 0;
    }

    // Setting the current max and global max to nums[0]
    var currMax = nums[0];
    var globalMax = nums[0];

    // Start the loop from the second element as we used
    // the first element to initialize our maximums
    for (let i = 1; i < nums.length; i++) {
        // If the current subarray max becomes negative
        if (currMax < 0) {
            // Reset it with the current element
            currMax = nums[i];
        } else {
            // Else, we add it to the current sub array maximum
            currMax += nums[i];
        }
        // If the current subarray max is greater than the global
        // max, update the global max
        if (globalMax < currMax) {
            globalMax = currMax;
        }
    }
    return globalMax;
};

let numsList = [
    [-4, 2, -5, 1, 2, 3, 6, -5, 1],
    [5, -2, 1, -3, 4, -2, 1, -3, 7],
    [4, -1, 2, -7, 3,4]
];
for (let i = 0; i < numsList.length; i++) {
    console.log("Sum of largest subarray: ", findMaxSumSubArray(numsList[i]));
}
