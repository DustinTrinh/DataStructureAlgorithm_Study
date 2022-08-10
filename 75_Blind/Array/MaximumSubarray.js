//https://leetcode.com/problems/maximum-subarray/


const maxSubArray = (nums) => {
    let max = -Infinity;
    let total = 0;
    for(let i = 0; i < nums.length; i++){
        total += nums[i];
        max = Math.max(total, max);
        if(total < 0) total = 0;
    }
    return max;
};
nums =  [-2,1,-3,4,-1,2,1,-5,-99];
const result = maxSubArray(nums);
console.log(result);