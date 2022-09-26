/*
Time Complexity: 
Best: O(N + K)
Average: O(N + K)
Worst: O(N + K)

Space Complexity:O(K)
*/
function countingSort(arr, min, max) {
    let count = [];
    let z = 0;
   
    for (let i = min; i <= max; i++) {
      count[i] = 0;
    }
  
    for (let i = 0; i < arr.length; i++) {
       count[arr[i]]++;
    }
  
    for (let i = min; i <= max; i++) {
      while (count[i]-- > 0) {
        arr[z++] = i;
      }
    }
    return arr;
  }