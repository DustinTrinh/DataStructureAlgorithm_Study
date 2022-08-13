const mergeSort = (arr) => {
    if(arr.length === 1){
        return arr;
    }
    //split array into Left & Right
    const len = arr.length;
    const mid = Math.floor(len/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

//Compare & Merge
const merge = (left, right) => {
    const result = [];
    let leftIdx = 0;
    let rightIdx = 0;

    while(leftIdx < left.length && rightIdx < right.length){
        if(left[leftIdx] < right[rightIdx]){
            result.push(left[leftIdx]);
            leftIdx++;
        }
        else{
            result.push(right[rightIdx]);
            rightIdx++;
        }
    }
    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));

};

let arr = [4,5,7,3,1,6,7,88,43,65,234,774,74,12,44,56,67];
let result = mergeSort(arr);
console.log(result);