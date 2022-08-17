/*
Time complexity O(n)
Space complexity O(1)
*/
let moveZerosToLeft = function(nums) {
    let tracker = nums.length-1;
    for(let i = nums.length-1; i >= 0; i--){
      if(nums[i] !== 0){
        nums[tracker] = nums[i];
        tracker--;
      }
    }
  
    while(tracker >= 0){
      nums[tracker] = 0;
      tracker--; 
    }
    return nums;
  };

  let nums = [1, 10, 20, 0, 59, 63, 0, 88, 0];
  console.log(moveZerosToLeft(nums))