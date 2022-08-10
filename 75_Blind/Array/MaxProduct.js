//https://leetcode.com/problems/maximum-product-subarray/

var maxProduct = function(nums) {
    if(nums.length === 1) return nums;
    let prevMax = nums[0];
    let prevMin = nums[0];
    let result = nums[0];
    for (let i=1;i<nums.length;i++) {
        curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        curMin = Math.min(nums[i] * prevMax, nums[i], nums[i] * prevMin);

        prevMax = curMax
        prevMin = curMin

        result = Math.max(curMax, result);
        
        console.log("------------------i: " + i);
        console.log("PrevMax: " + prevMax);
        console.log("PrevMin: " + prevMin);
        console.log("Result: " + result);
    }
    return result;
}

let nums = [2,3,-2,4];
let result = maxProduct(nums);
console.log(result);