//https://leetcode.com/problems/kth-largest-element-in-an-array/

//Built in JS sort
var findKthLargest = function(nums, k) {
    if(k > nums.length) return -1;

    nums = nums.sort((a, b) => a - b);
    
    return nums[nums.length-k];
};

//==========================Using Quick sort===================================
//O(nlogn) and O(logn)
function quickSort(array, left, right){
    if(left < right){
        const partitionIndex = partition(array, left, right);
        quickSort(array, left, partitionIndex-1);
        quickSort(array, partitionIndex+1, right);
    }
}

function partition(array, left, right){
    const pivot = array[right];
    let partitionIndex = left;

    for(let j = left; j < right; j++){
        if(array[j] < pivot){
            swap(array, partitionIndex, j);
            partitionIndex++;
        }
    }
    swap(array, partitionIndex, right);
    return partitionIndex;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

var findKthLargest2 = function(nums, k) {
    if(k > nums.length) return -1;
    let index = array.length -k;
    quickSort(array, 0, array.length-1);
    return array[index];
};
//================================================

//==========================Using HOARE's QuickSelect sort===================================
var findKthLargest3 = function(nums, k) {
    if(k > nums.length) return -1;
    let index = nums.length -k;
    quickSelect(nums, 0, nums.length-1, index);
    return nums[index];
};

function quickSelect(array, left, right, idx){
    if(left < right){
        const partitionIndex = partition(array, left, right);
        if(partitionIndex == idx){
            return array[partitionIndex];
        }
        else if(idx < partitionIndex){
            return quickSelect(array, left, partitionIndex-1, idx);
        }
        else{
            return quickSelect(array, partitionIndex+1, right, idx);
        }
    }
}

nums = [3,2,1,5,6,4];
console.log(findKthLargest(nums, 2));