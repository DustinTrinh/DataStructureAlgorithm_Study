const selectionSort = (arr) => {
    let lowest = 0;
    
    for(let i = 0; i < arr.length; i++){
        let lowestIdx = i;
        for (let j = i+1; j < arr.length; j++){
            if(arr[lowestIdx] > arr[j]){
                lowestIdx = j
            }
        }
        //swap
        let temp = arr[i];
        arr[i] = arr[lowestIdx];
        arr[lowestIdx] = temp;
    }
    return arr;
};

let arr = [4,5,7,3,1,6,7,88,43,65,234,774,74,12,44,56,67];
let result = selectionSort(arr);
console.log(result);