//Only work on Sorted array. Looking at half then another half and another half until reach the target.
//Worst case is Olog(n) and best is O(1)

function binarySearch(arr, target){
    arr = arr.sort((a, b) => a - b)
    console.log(arr);
    let start = 0;
    let end = arr.length - 1;
    let middle = 1;

    while(arr[middle] != target && start <= end){
        middle = Math.floor((start+end)/2);
        console.log(middle);
        if(arr[middle] < target){
            start = middle + 1;
        }
        else if(arr[middle] > target){
            end = middle -1;
        }
        else{
            console.log("Found " + target);
            return arr[middle];
        }

    }
    
    console.log("Cannot find " + target);
    return -1;
    
}

let arr1 = ["cat", "dog", "bird", "monkey"];
let arr2 = [4,5,7,3,1,6,7,88,43,65,234,774,74,12,44,56,67];
let target = 9999;

binarySearch(arr2, target);