/*
Time Complexity: O(N)
Space Complexity:O(1)
*/
let findMaxSumSubsequence = function (nums) {
    // Case for empty input
    if (nums.length < 1) {
        return 0;
    }
    // Case for input with only 1 element
    else if (nums.length === 1) {
        return nums[0];
    }

    // prevOfPrev will store the maximum sum until index i - 2
    let prevOfPrev = nums[0];

    // prev will store the maximum sum until index i - 1
    prev = Math.max(nums[0], nums[1]);

    // Starting from index 2 as i -1 and i - 2 have been used already
    for (var i = 2; i < nums.length; i++) {
        // Store the maximum sum until index i as curr
        let curr = Math.max(nums[i], Math.max(prev, prevOfPrev + nums[i]));
        prevOfPrev = prev;
        prev = curr;
    }

    return prev;
};

let nums1 = [1, 2, 9, 4, 5, 0, 4, 11, 6];
console.log("1. Input array: " + nums1);
console.log("   The maximum sum is: " + findMaxSumSubsequence(nums1));
console.log(
    "\n------------------------------------------------------------------------------------------------------\n"
);
let nums2 = [-5, 2, 1, -3, -4, 2, 1, -3, 7];
console.log("2. Input array: " + nums2);
console.log("   The maximum sum is: " + findMaxSumSubsequence(nums2));
console.log(
    "\n------------------------------------------------------------------------------------------------------\n"
);
