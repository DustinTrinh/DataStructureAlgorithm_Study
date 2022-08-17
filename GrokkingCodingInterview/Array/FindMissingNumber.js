const find_missing_number = function(nums) {
    // TODO: Write your code here
    let sum = 0;
    let result = 0;
    let n = nums.length ;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    result = Math.floor(n*(n+1)/2) - sum;
    console.log(Math.floor(n*(n+1)/2))
    console.log(sum);
    return result;
  };

  let sequence = [8, 3, 5, 2, 4, 6, 0, 1]

  console.log(find_missing_number(sequence))