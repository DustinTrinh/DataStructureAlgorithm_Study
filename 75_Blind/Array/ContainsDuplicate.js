//https://leetcode.com/problems/contains-duplicate/
//T: O(n)
//S: O(n)
var containsDuplicate = function(nums) {
    let checker = new Set();
    for(let i = 0 ; i < nums.length; i++){
        if(!checker.has(nums[i])){
            checker.add(nums[i]);
        }
        else{
            return true;
        }
    }
    return false;
};

let nums = [1,2,3,4,5,6,90];
let result = containsDuplicate(nums);
console.log(result);