/*
Time complexity#
The time complexity of the above algorithm is O(N*logN)

Space complexity#
The space complexity will be O(N)
*/

const Heap = require("collections/heap");

const reorganize_string = function(str, k) {
    let charMap = new Map();
    let maxHeap = new Heap([], null, ((a,b) => a[1] - b[1]));
    let queue = [];
    let result = [];

    for(char of str){
        if(charMap.has(char)){
            charMap.set(char, charMap.get(char) + 1);
        }
        else{
            charMap.set(char, 1);
        }
    }

    charMap.forEach((value, key) => {
        maxHeap.push([key, value]);
    })

    while(maxHeap.length > 0){
        let [char, freq] = maxHeap.pop();
        result.push(char);
        //console.log(result)
        queue.push([char, freq-1]);
        if(queue.length === k){
            [char, freq] = queue.shift();
            if(freq > 0){
                maxHeap.push([char, freq]);
            }
        }
    }

    return result.length === str.length ? result.join('') : "Cannot Rearrange";
  };
  
  console.log(`Reorganized string: ${reorganize_string("Programming", 3)}`)
  console.log(`Reorganized string: ${reorganize_string("mmpp", 2)}`)
  console.log(`Reorganized string: ${reorganize_string("aab", 2)}`)
  console.log(`Reorganized string: ${reorganize_string("aapa", 3)}`)
  