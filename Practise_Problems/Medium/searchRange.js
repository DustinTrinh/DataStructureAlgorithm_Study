//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var searchRange = function(nums, target) {
    let ranges = [];

    if(nums.length === 0) return [-1,-1];

    for(let i =0; i < nums.length; i++){
        if(nums[i] === target){
            ranges.push(i)
        }
    }
    if(ranges.length === 0) return [-1,-1];
    return [ranges[0], ranges[ranges.length-1]];
};

nums = [5,7,7,8,8,10];
target = 8;
let res = searchRange(nums, target);
console.log(res);