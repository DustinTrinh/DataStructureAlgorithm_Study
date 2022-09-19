/*
Time Complexity: O(N)
Space Complexity:O(1)
*/
const find_corrupt_numbers = function (nums) {
    let i = 0;

    while (i < nums.length) {
        let j = nums[i] - 1;

        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++;
        }
    }
    console.log(nums)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return [nums[i], i + 1];
        }
    }

    return [-1, -1];
};
console.log(find_corrupt_numbers([3, 1, 2, 5, 2]));
console.log(find_corrupt_numbers([3, 1, 2, 3, 6, 4]));
