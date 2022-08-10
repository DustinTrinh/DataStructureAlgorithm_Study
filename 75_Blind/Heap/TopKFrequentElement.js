//https://leetcode.com/problems/top-k-frequent-elements/

/**

 * @param {number[]} nums

 * @param {number} k

 * @return {number[]}

 */

var topKFrequent = function (nums, k) {
  let storeElement = new Map();
  let storage = [];
  let result = [];

  for (let i = 0; i < nums.length + 1; i++) {
    storage[i] = [];
  }

  for (let i = 0; i < nums.length; i++) {
    if (!storeElement.has(nums[i])) {
      storeElement.set(nums[i], 1);
    } else {
      storeElement.set(nums[i], storeElement.get(nums[i]) + 1);
    }
  }

  storeElement.forEach(function (value, key) {
    storage[value].push(key);
  });

  for (let i = nums.length; i > 0; i--) {
    if (storage[i].length > 0) {
      for (let j = 0; j < storage[i].length; j++) {
        result.push(storage[i][j]);

        if (result.length === k) {
          break;
        }
      }
    }

    if (result.length === k) {
      break;
    }
  }
  return result;
};

let nums = [1, 1, 1, 2, 2, 3];
let k = 2;
let storage = topKFrequent(nums, k);
console.log(storage);
