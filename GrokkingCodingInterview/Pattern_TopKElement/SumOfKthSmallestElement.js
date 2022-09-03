const find_sum_of_elements = function (nums, k1, k2) {
    if (k1 > nums.length || k2 > nums.length) return -1;
    nums.sort((a, b) => a - b);
    let sum = 0;
    console.log(nums)
    for(let i = k1; i < k2-1; i++){
      console.log(nums[i])
      sum += nums[i];
    }
    return sum;
};

console.log(
    `Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements(
        [1, 3, 12, 5, 15, 11],
        1,
        5
    )}`
);
console.log(
    `Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements(
        [3, 5, 8, 7],
        1,
        4
    )}`
);
