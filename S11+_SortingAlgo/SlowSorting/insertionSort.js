//Go look for it https://visualgo.net/en/sorting

function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var currentVal = arr[i];
        for(var j = i-1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}
let arr2 = [4,5,7,3,1,6,7,88,43,65,234,774,74,12,44,56,67];
console.log(insertionSort(arr2));