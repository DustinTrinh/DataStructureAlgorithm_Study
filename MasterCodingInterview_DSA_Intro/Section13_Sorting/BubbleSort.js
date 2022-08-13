let arr1 = [4,5,7,3,1,6,7,88,43,65,234,774,74,12,44,56,67];

const bubbleSort = (arr) => {
    const len = arr.length;

    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(arr[j] > arr[j+1]){
                //swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
};

console.log(bubbleSort(arr1));