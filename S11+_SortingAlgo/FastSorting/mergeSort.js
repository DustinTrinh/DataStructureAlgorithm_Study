//Can improve the big(O) from O(n²) to O(nlogn)
//Split, Sort, Merge

function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;

    while(i<arr1.length && j < arr2.length){
        if(arr1[i] <arr2[j]){
            results.push(arr1[i]);
            i+=1;
        }
        else if(arr1[i] > arr2[j]){
            results.push(arr2[j]);
            j+=1;
        }
        else if(arr1[i] === arr2[j]){ 
            results.push(arr1[i]);
            results.push(arr2[j]);
            i+=1;
            j+=1;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }

    return results;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

let mA = [1,4,6,8,9];
let mB = [0,2,3,5,7,9];
let arr = [4,5,7,3,1,6,7,88,43,65,234,774,74,12,44,56,67];

console.log(mergeSort(arr));