
//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
function binarySearch(arr, left, right, target){
    arr = arr.sort((a, b) => a - b)
    console.log(arr);
    let start = left;
    let end = right;
    let middle = 0;

    while(start <= end){
        middle = Math.floor((start+end)/2);
        if(arr[middle] < target){
            start = middle + 1;
        }
        else if(arr[middle] > target){
            end = middle -1;
        }
        else{
            return middle;
        }
    }
    return -1;
}

var searchRange = function(nums, target) {
    let firstPosition = binarySearch(nums, 0, nums.length-1, target);
    let startPos = firstPosition, endPos = firstPosition, temp1, temp2;

    if(nums.length === 0 || firstPosition === -1) return [-1,-1];
    while(startPos !== -1){
        temp1 = startPos;
        startPos = binarySearch(nums, 0, startPos-1, target);
    }
    startPos = temp1;

    while(endPos !== -1){
        temp2 = endPos;
        endPos = binarySearch(nums, endPos+1, nums.length-1, target);
    }
    endPos = temp2;

    return [startPos, endPos];
}

let nums = [1,2,3,4,5,6,7, 7,7,7,7,899], target = 7;
console.log(searchRange(nums,target));