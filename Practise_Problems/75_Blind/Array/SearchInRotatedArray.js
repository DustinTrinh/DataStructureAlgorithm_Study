//https://leetcode.com/problems/search-in-rotated-sorted-array/

var search = function(nums, target) {

    let left = 0;
    let right = nums.length-1;
    
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        
        if(nums[mid] === target){
            return mid;
        }

        if(nums[left] <= nums[mid]){
            if(nums[left] <= target && nums[mid] >= target){
                right = mid-1;
            }
            else {
                left = mid+1;
            }
        }

        else{
            if(nums[right] >= target && nums[mid] <= target){
                left = mid+1;
            }
            else{
                right = mid-1;
            }
        }
    }
    return -1;
};

let nums = [4,5,6,7,0,1,2];
let nums2 = [9,3,4,5,6,7,8];
let result = search(nums, 0);
console.log(result);