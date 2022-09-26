//Better watch the animation
// Pick a pivot point, move all numbers that are less than Pivot to left and larger than pivot to the right

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
function pivot(arr, start = 0, end=arr.length+1){
    var pivot = arr[start];
    var swapIndex = start;

    for(var i = start+1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIndex++;
            arr = swap(arr, swapIndex, i);
        }
    }
    arr = swap(arr, start, swapIndex);
    //console.log(arr);
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1){
    
    if(left<right){
        let pivotIndex = pivot(arr, left, right);
        //left
        quickSort(arr, left, pivotIndex-1);
        //right
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}

let mA = [1,4,6,8,9];
let mB = [0,2,3,5,7,9];
let arr = [100, 4,5,7,3,1,6,7,88,43,65,234,774,74,12,44,56,67];

console.log(quickSort(arr));