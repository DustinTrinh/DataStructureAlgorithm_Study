/*
Time Complexity: O(N)
Space Complexity:O(1)
*/
const find_duplicate = function (nums) {
    // TODO: Write your code here
    let i = 0;
    while (i < nums.length) {
        j = nums[i] - 1;
        if (nums[i] !== i + 1) {
            
            if (nums[i] !== nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            } else {
                return nums[i];
            }
        } else {
            i++;
        }
    }

    return -1;
};
console.log(find_duplicate([1, 4, 4, 3, 2]));
console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
console.log(find_duplicate([2, 4, 1, 4, 4]));
