//Loop through the array and keep hold of the MINIMUM then swap it with the first element(index 0)
//Runtime is O(nlogn) and worst case is O(n²) 
 
function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let minimum = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minimum]){
                minimum = j;
            }
        }
        if(i <= minimum){
            var temp = arr[i];
            arr[i] = arr[minimum];
            arr[minimum] = temp;
        }
        
    }
    return arr;
}

let arr2 = [4,5,7,3,1,6,7,88,43,65,234,774,74,12,44,56,67];
console.log(selectionSort(arr2));