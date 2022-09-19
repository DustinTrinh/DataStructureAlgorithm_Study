/*
Time Complexity: O(N + NlogK)
Space Complexity:O(N)
*/
const Heap = require("../../node_modules/collections/heap");

const find_Kth_smallest_number = function (nums, k) {
    let minHeap = new Heap(nums, null, ((a,b) => b-a));

    for(let i = 0 ; i < k-1; i++){
        minHeap.pop();
    }
    return minHeap.peek();
};

console.log(
    `Kth smallest number is: ${find_Kth_smallest_number(
        [1, 5, 12, 2, 11, 5],
        3
    )}`
);
// since there are two 5s in the input array, our 3rd and 4th smallest numbers should be a '5'
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
