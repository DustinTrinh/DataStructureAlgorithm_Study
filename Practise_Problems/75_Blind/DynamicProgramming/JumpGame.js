//https://leetcode.com/problems/jump-game/
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  let goal = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    console.log("Before: " + goal + " " + i + " " + nums[i]);
    if (i + nums[i] >= goal) {
      goal = i;
    }
    console.log(goal);
  }
  return goal === 0 ? true : false;
};

let nums = [1,1,1,1,1,1,1, 2];
let result = canJump(nums);
console.log(result);
