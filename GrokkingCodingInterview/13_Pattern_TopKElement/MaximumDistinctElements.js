/*
Time complexity#
Since we will insert all numbers in a HashMap and a Min Heap, this will take O(N*logN)
 where ‘N’ is the total input numbers. While extracting numbers from the heap, in the worst case, 
 we will need to take out ‘K’ numbers. This will happen when we have at least ‘K’ numbers with a 
 frequency of two. Since the heap can have a maximum of ‘N/2’ numbers, therefore, 
 extracting an element from the heap will take O(logN)
 and extracting ‘K’ numbers will take O(KlogN)

Space complexity#
The space complexity will be O(N)
 as, in the worst case, we need to store all the ‘N’ characters in the HashMap.
*/

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
        [1,2,3,4,5,6,7],
        2
    )}`
);

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
