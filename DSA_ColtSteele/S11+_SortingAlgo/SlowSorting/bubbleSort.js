//It compare 1 by one then swap them until it's all sorted. Ain't that good

function bubbleSort(arr){
    var swap = false;
    for(var i = arr.length; i > 0; i--){
        swap = false;
        for(var j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swap = true
            }
        }
        if(!swap) break;
    }
    return arr;
}

let arr2 = [4,5,7,3,1,6,7,88,43,65,234,774,74,12,44,56,67];
console.log(bubbleSort(arr2));