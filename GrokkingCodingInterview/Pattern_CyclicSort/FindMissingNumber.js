//Simple Solution
/*
const find_missing_number = function(nums) {
    // TODO: Write your code here
    let sum = 0;
    let result = 0;
    let n = nums.length ;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    result = Math.floor(n*(n+1)/2) - sum;
    return result;
  };
  */
/*
Time Complexity: O(N)
Space Complexity:O(1)
*/
function find_missing_number(nums) {
    let i = 0;
    const n = nums.length;
    while (i < n) {
        j = nums[i] -1;
        if (nums[i] < n && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
        } else {
            i += 1;
        }
    }

    // find the first number missing from its index, that will be our required number
    for (i = 0; i < n; i++) {
        if (nums[i] !== i+1) {
            return i+1;
        }
    }

    return n;
}

console.log(find_missing_number([4,  3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 1]));
