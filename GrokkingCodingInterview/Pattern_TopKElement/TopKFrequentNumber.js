/*
Time Complexity: O(NlogK)
Space Complexity:O(K)
*/
const Heap = require("../../node_modules/collections/heap");
const find_Kth_smallest_number = function (nums, k) {
    let maxHeap = new Heap([], null, (a, b) => a - b);
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        maxHeap.push(nums[i]);
    }

    for (let i = 0; i < k; i++) {
        result = maxHeap.pop();
    }

    return result;
};

console.log(
    `Kth smallest number is: ${find_Kth_smallest_number(
        [1, 5, 12, 2, 11, 5],
        3
    )}`
);
console.log(
    `Kth smallest number is: ${find_Kth_smallest_number(
        [1, 5, 12, 2, 11, 5],
        4
    )}`
);
console.log(
    `Kth smallest number is: ${find_Kth_smallest_number(
        [5, 12, 11, -1, 12],
        3
    )}`
);
