/*
Time Complexity: O(N)
Space Complexity:O(1)
*/
//Dont stop till find the correct START
const cyclic_sort = function (nums) {
    let i = 0;

    while (i < nums.length) {
        let j = nums[i] - 1;
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            i++;
        }
    }
    return nums;
};

console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`);
console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`)
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`)
