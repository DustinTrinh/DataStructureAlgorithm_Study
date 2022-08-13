//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

var findMin = function(nums) {
    let left = 0;
    let right = nums.length-1;

    while(left < right){
        let mid  = Math.floor((left + right)/2);

        //search right
        if(nums[mid] > nums[right]){
            left = mid+1;
        }
        else{
            right = mid;
        }
    }
    return nums[left];
};

let nums = [3,0,1,2];
let result = findMin(nums);
console.log(result);
