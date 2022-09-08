/*
Implement a function called countUniqueValues, which accepts a sorted array, 
and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted.
*/

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)); // 10
//console.log(maxSubarraySum([1,2,5,2,8,1,5],4));
//console.log(maxSubarraySum([4,2,1,6],1));
//console.log(maxSubarraySum([4,2,1,6,2],4));
//console.log(maxSubarraySum([],4))

/*Explanation
Let's take first example. maxSubarraySum([1,2,5,2,8,1,5],2)
First forloop is to take the sum of first 2 digits which is 3.
Second loop is like taking ==> 1 + 2 + 5(next index) - 1(first index of our calculation streak) = 7
Continue for demo purpose ====> 2 + 5 + 2(next index) - 2first index of our calculation streak) = 7
Continue for demo purpose ====> 5 + 2 + 8(next index) - 5first index of our calculation streak) = 10 
10 is the largest after whole loop had been go through
*/ 