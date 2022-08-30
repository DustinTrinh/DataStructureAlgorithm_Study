/*
1. Do cyclic sort
2. If any number not in place => Push to array
*/
const find_missing_numbers = function(nums) {
    missingNumbers = [];
    
    let i = 0;
    while(i < nums.length){
        let j = nums[i] -1;
        if(nums[i] !== nums[j]){
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        else{
            i++;
        }
    }

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== i+1){
            missingNumbers.push(i+1);
        }
    }


    return missingNumbers;
  };
  
console.log(find_missing_numbers([1,1,1,1,1,1, 1]));
console.log(find_missing_numbers([2, 4, 1, 2]));
//console.log(find_missing_numbers([2, 3, 2, 1]));