const Heap = require("../../node_modules/collections/heap");

const find_maximum_distinct_elements = function (nums, k) {
    let countDistinct = 0;
    let minHeap = new Heap([], null, (a, b) => b - a);
    let storeElement = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!storeElement.has(nums[i])) {
            storeElement.set(nums[i], 1);
        } else {
            storeElement.set(nums[i], storeElement.get(nums[i]) + 1);
        }
    }

    storeElement.forEach((value, key) => {
        if (value === 1) countDistinct++;
        else {
            minHeap.push(value);
        }
    });

    while (minHeap.length > 0 && k > 0) {
        let temp = minHeap.pop();

        k -= temp - 1;

        if (k >= 0) countDistinct++;
    }

    if (k > 0) {
        countDistinct -= k;
    }
    return countDistinct;
};

console.log(
    `Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements(
        [7, 3, 5, 8, 5, 3, 3],
        2
    )}`
);

console.log(
    `Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements(
        [3, 5, 12, 11, 12],
        3
    )}`
);

console.log(
    `Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements(
        [1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5],
        2
    )}`
);
