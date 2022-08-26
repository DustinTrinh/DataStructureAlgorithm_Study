const Heap = require("../../node_modules/collections/heap");
const find_Kth_smallest = function (lists, k) {
    let minHeap = new Heap([], null, (a, b) => b - a);

    for (let i = 0; i < lists.length; i++) {
        for (let element of lists[i]) {
            minHeap.push(element);
            if (minHeap.length > k) {
                minHeap.pop();
            }
        }
    }

    // TODO: Write your code here
    return minHeap.peek();
};

/*
Time complexity#
Since we’ll be going through at most ‘K’ elements among all the arrays, and we will remove/add one element in the heap in each step, the time complexity of the above algorithm will be O(K*logM)
O(K∗logM)
 where ‘M’ is the total number of input arrays.

Space complexity#
The space complexity will be O(M)
O(M)
 because, at any time, our min-heap will be storing one number from all the ‘M’ input arrays.
*/

/*
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

function find_Kth_smallest(lists, k) {
  minHeap = new Heap([], null, ((a, b) => b[0] - a[0]));

  // put the 1st element of each list in the min heap
  for (let i = 0; i < lists.length; i++) {
    minHeap.push([lists[i][0], 0, lists[i]]);
  }
  
  // take the smallest(i.e., top) element form the min heap, if the running count is equal to k return the number
  let numberCount = 0,
    number = 0;
  while (minHeap.length > 0) {
    [number, i, list] = minHeap.pop();
    console.log(minHeap)
    numberCount += 1;
    if (numberCount === k) {
      break;
    }
    // if the array of the top element has more elements, add the next element to the heap
    if (list.length > i + 1) {
      minHeap.push([list[i + 1], i + 1, list]);
    }
  }
  return number;
}
*/


console.log(
    `Kth smallest number is: ${find_Kth_smallest(
        [
            [2, 6, 8],
            [3, 6, 7],
            [1, 3, 4],
        ],
        5
    )}`
);
