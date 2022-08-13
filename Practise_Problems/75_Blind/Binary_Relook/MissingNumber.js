//https://leetcode.com/problems/missing-number/

var missingNumber = function(nums) {
    let sum = 0;
    let len = nums.length;
    for(let i = 0 ; i < nums.length; i++){
        sum += nums[i];
    }
    return Math.floor(len*(len+1)/2) - sum; 
};

let nums = [9,6,4,2,3,5,7,0,1];
let result = missingNumber(nums);
console.log(result);