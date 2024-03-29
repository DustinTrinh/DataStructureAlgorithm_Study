/*
Time Complexity: O(N)
Space Complexity:O(1)
*/

const length_of_longest_substring = function (str, k) {
    let countOnes = 0;
    let maxLength = 0;
    let start = 0;
    for(let i = 0 ; i < str.length; i++){
      if(str[i] === 1) countOnes++;
  
      if(i - start + 1 - countOnes > k){
       if(str[start] === 1) countOnes--;
       start++; 
      }
      maxLength = Math.max(maxLength, i - start + 1);
    }
    
    return maxLength === 0 ? -1 : maxLength;
  };

console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log(length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));
