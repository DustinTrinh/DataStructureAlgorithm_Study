/*
Time complexity O(log n)
Space complexity O(log n)
.
*/
let binarySearchRotated = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    console.log("mid: " + mid);
    console.log("left: " + left);
    console.log("right: " + right);
  }

  return -1;
};

let nums = [6, 7, 1, 2, 3, 4, 5];
let target = 3;
console.log(binarySearchRotated(nums, target));
