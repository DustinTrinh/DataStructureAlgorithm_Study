/*
Time complexity
The time complexity of the above algorithm is O(D*logD)
O(D∗logD) where ‘D’ is the number of distinct characters in the input string. This means, in the worst case, when all characters are unique the time complexity of the algorithm will be O(N*logN)
O(N∗logN) where ‘N’ is the total number of characters in the string.

Space complexity#
The space complexity will be O(N), as in the worst case, we need to store all the ‘N’ characters in the HashMap.
*/

const Heap = require("../../node_modules/collections/heap");
const sort_character_by_frequency = function(str) {
    let maxHeap = new Heap([], null, ((a,b) => a[1] - b[1]));
    let storeChar = new Map();
    let result = "";

    for(char of str){
        if(!storeChar.has(char)){
            storeChar.set(char, 1);
        }
        else{
            storeChar.set(char, storeChar.get(char)+1);
        }
    }

    storeChar.forEach((value, key) => {
        maxHeap.push([key, value]);
    });
    
    while(maxHeap.length){
        let [key, value] = maxHeap.pop();
        console.log([key, value])
        
        for(let j = 0; j < value; j++){
            result = result.concat(key)
        }
    }

    return result;
  };
  
  
  console.log(`String after sorting characters by frequency: ${sort_character_by_frequency("Programming")}`)
  console.log(`String after sorting characters by frequency: ${sort_character_by_frequency("abcbab")}`)
  