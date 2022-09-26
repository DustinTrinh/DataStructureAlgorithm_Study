/*
Time complexity#
The time complexity of the above algorithm is O(N*logN)

Space complexity#
The space complexity will be O(N)
*/
const Heap = require("collections/heap");

const rearrange_string = function(str) {
    let charMap = new Map();
    let maxHeap = new Heap([], null, ((a,b) => a[1] - b[1]));
    let previousChar = null;
    let previousFreq = 0;
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
        const [char, freq] = maxHeap.pop();

        if(previousChar !== null && previousFreq > 0){
            maxHeap.push([previousChar, previousFreq]);
        }

        result.push(char);
        previousChar = char;
        previousFreq = freq - 1;
    }

    return result.length === str.length ? result.join('') : "Cannot Rearrange";
  };
  
  
  console.log(`Rearranged string: ${rearrange_string("aappp")}`)
  console.log(`Rearranged string: ${rearrange_string("Programming")}`)
  console.log(`Rearranged string: ${rearrange_string("aapa")}`)
  