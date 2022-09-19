const Heap = require("../../node_modules/collections/heap");

const find_sum_of_elements = function (nums, k1, k2) {
    let minHeap = new Heap(nums, null, ((a,b) => b - a));
    let tracker = 1;
    let sum = 0
    
    while(minHeap.length){
        let temp = minHeap.pop();
        console.log(temp + " " + tracker)
        if(tracker === k1 || tracker === k2){
            sum += temp;
        }
        tracker++;
    }
    return sum;
};

console.log(
    `Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements(
        [1, 3, 12, 5, 15, 11],
        3,
        6
    )}`
);
console.log(
    `Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements(
        [3, 5, 8, 7],
        1,
        4
    )}`
);
