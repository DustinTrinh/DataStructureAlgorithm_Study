//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1;
    
    while(left < right){
        let sum = numbers[left] + numbers[right];
        console.log(sum);
        if( sum > target){
            right--;
        }
        else if(sum < target){
            left++;
        }
        else{
            return [left+1,right+1];
        }
    }
    return [];
};

let arr = [2,7,11,15,20,30,65,90];
let target = 13;
let res = twoSum(arr, target);
console.log(res);