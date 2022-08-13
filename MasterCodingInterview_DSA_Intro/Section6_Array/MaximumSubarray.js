//https://leetcode.com/problems/maximum-subarray

nums =  [-2,-1,-3,-4,-1,2,-1,-5,-99];

const maxSubArray = (nums) => {
    let total = 0
    let max = -Infinity
    for(const n of nums){
        total += n
        max = Math.max(total, max)
		// if the total is negative, that means its not worth to add the current 'n' which we set total to zero (total = 0)
        if(total < 0) total = 0
    }
    return max
};

const result = maxSubArray(nums);
console.log(result);