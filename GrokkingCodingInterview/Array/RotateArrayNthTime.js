/* Not optimize yet
Time complexity O(n)
Space complexity O(n)
*/
/*
let rotateArray = function(nums, n) {
    let newArr = new Array(nums.length).fill(0);
    
    for(let i = 0; i < nums.length; i++){
        let newIdx = i + n;
        if(newIdx >= nums.length){
            //newIdx = newIdx % 10;
            newIdx = Math.abs(i + n - nums.length);
        }
        else if(newIdx < 0){
            newIdx = nums.length + n + i;
        }
        newArr[newIdx] = nums[i];
        
    }
    
    return newArr;
};
*/
/* Best solution
Time complexity O(n)
Space complexity O(1)

reverse whole array
reverse beginning of array to n-1
reverse from n to end of array

*/
let reverseArray = function(nums, start, end) {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };
  
  let rotateArray = function(nums, n) {
    let len = nums.length;
  
    // Normalizing the 'n' rotations
    n = n % len;
    if (n < 0) {
      // calculate the positive rotations needed.
      n = n + len;
    }
    // Let's partition the array based on rotations 'n'.
    reverseArray(nums, 0, len - 1);
    reverseArray(nums, 0, n - 1);
    reverseArray(nums, n, len - 1);
  };


nums = [1, 2,3,4,5,6]
n = 2
let result = (rotateArray([1,2,3,4,5,6,7], 3));
console.log(result)
let test =[0,59,86,32,11,9,40,1,10,20];