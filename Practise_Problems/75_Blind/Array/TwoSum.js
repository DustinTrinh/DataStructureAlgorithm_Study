//https://leetcode.com/problems/two-sum/
//T: O(n)
//S: O(n)
var twoSum = function(nums, target) {
    let map = new Map();
    let res = [];
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] === undefined){
            map[target - nums[i]] = i;
        }
        else{
            res.push(map[nums[i]]);
            res.push(i);
            break;
        }
    }
    return res;
};

let arr = [2,3,4,5,67,89,64,1,9];
let target = 6;
let res = twoSum(arr, target);
console.log(res);