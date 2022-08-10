//https://leetcode.com/problems/longest-increasing-subsequence/

var lengthOfLIS = function(nums) {
    let LIS = [];

    for(let i = 0; i < nums.length ; i++){
        LIS.push(1);
        for(let j = 0; j < i; j++  ){
            if(nums[j] < nums[i]){
                LIS[i] = Math.max(LIS[i], LIS[j] +1);
            }
        }
    }
    console.log(LIS)
    return nums.length ? Math.max.apply(null, LIS) : 0;
};

let nums = [10,9,2,5,3,7,101,18];
let result = lengthOfLIS(nums);
console.log(result);