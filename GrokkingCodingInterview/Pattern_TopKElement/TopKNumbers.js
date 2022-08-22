const Heap = require ('../../node_modules/collections/heap');

const find_k_largest_numbers = function(nums, k) {
    result = []
    let maxHeap = new Heap([], null, ((a,b) => a-b));

    for(let i = 0; i < nums.length; i++){
        maxHeap.push(nums[i]);
    }

    for(let i = 0; i < k; i++){
        result.unshift(maxHeap.pop());
    }

    return result;
  };
  
  
  console.log(`Here are the top K numbers: ${find_k_largest_numbers([3, 1, 5, 12, 2, 11], 3)}`)
  console.log(`Here are the top K numbers: ${find_k_largest_numbers([5, 12, 11, -1, 12], 3)}`)
  