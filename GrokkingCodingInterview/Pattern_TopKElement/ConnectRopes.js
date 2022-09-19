/*
Time Complexity: O(NlogN)
Space Complexity:O(N)
*/
const Heap = require("../../node_modules/collections/heap");

const minimum_cost_to_connect_ropes = function(ropeLengths) {
    let result = [];
    let sum = 0
    let minHeap = new Heap(ropeLengths, null, ((a,b) => b-a));
    
    while(minHeap.length > 1){
        let temp1 = minHeap.pop();
        let temp2 = minHeap.pop();
        minHeap.push(temp1+temp2);
        result.push(temp1+temp2);
    }
    console.log(result);
    for(let i = 0; i < result.length; i++){
        sum += result[i]
    }
    return sum;
  };
  
  
  console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5])}`)
  console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([3, 4, 5, 6])}`);
  console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5, 2])}`)
  