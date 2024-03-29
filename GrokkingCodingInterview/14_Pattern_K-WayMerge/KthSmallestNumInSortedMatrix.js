const Heap = require("../../node_modules/collections/heap");
const find_Kth_smallest = function (matrix, k) {
    number = -1;
    let maxHeap = new Heap([], null, (a, b) => a - b);

    for (let i = 0; i < matrix.length; i++) {
        for (let j of matrix[i]) {
          maxHeap.push(j);
            if (maxHeap.length > k) {
              maxHeap.pop();
            }
        }
    }
    return maxHeap.peek();
};

/*
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

function find_Kth_smallest(matrix, k) {
  const minHeap = new Heap([], null, ((a, b) => b[0] - a[0]));

  // put the 1st element of each row in the min heap
  // we don't need to push more than 'k' elements in the heap
  for (i = 0; i < Math.min(k, matrix.length); i++) {
    minHeap.push([matrix[i][0], 0, matrix[i]]);
    console.log(minHeap)
  }

  // take the smallest(top) element form the min heap, if the running count is equal to k' return the number
  // if the row of the top element has more elements, add the next element to the heap
  let numberCount = 0,
    number = 0;
  while (minHeap.length > 0) {
    [number, i, row] = minHeap.pop();
    numberCount += 1;
    if (numberCount === k) {
      break;
    }

    if (row.length > i + 1) {
      minHeap.push([row[i + 1], i + 1, row]);
    }
  }

  return number;
}

*/

console.log(
    `Kth smallest number is: ${find_Kth_smallest(
        [
            [2, 6, 8],
            [3, 7, 10],
            [5, 8, 11],
        ],
        5
    )}`
);
