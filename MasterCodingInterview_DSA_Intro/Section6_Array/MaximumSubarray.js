//https://leetcode.com/problems/maximum-subarray

nums =  [1, 10, -1, 11, 5, -30, -7, 20, 25, -35 ];

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