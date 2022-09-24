let findMaxSumSubArray = function(A) {
    let total = 0;
    let max = -Infinity;
  
    for(let i = 0; i < A.length; i++){
      total += A[i];
      max = Math.max(total, max);
  
      if(total < 0) total = 0;
    }
    return max;
  };

  console.log(findMaxSumSubArray([1, 10, -1, 11, 5, -30, -7, 20, 25, -35]));
  console.log(findMaxSumSubArray([200, 200, -300, 40, 90]))