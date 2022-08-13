

const mergeSortedArray = (arr1, arr2) =>{
    let finalArray = [];
    let len = arr1.length + arr2.length + 2;
    while(len > 0){

        if(arr1.length === 0 && arr2.length !== 0){
            finalArray.push(arr2.shift());
        }
        else if(arr1.length !== 0 && arr2.length === 0){
            finalArray.push(arr1.shift());
        }
        else if(arr1.length === 0 && arr2.length === 0){
            break;
        }
        else if(arr1[0] > arr2[0]){
            finalArray.push(arr2.shift());
        }
        else if(arr1[0] < arr2[0]){
            finalArray.push(arr1.shift());
        }
        else if(arr1[0] === arr2[0]){
            finalArray.push(arr1.shift());
            finalArray.push(arr2.shift());
        }
        len--;
    }
    return finalArray;
};

const mergeSortedArray2 = (array1, array2) =>{
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
    if(array1.length === 0) {
      return array2;
    }
    if(array2.length === 0) {
      return array1;
    }
  
    while (array1Item || array2Item){
     if(array2Item === undefined || array1Item < array2Item){
       mergedArray.push(array1Item);
       array1Item = array1[i];
       i++;
     }   
     else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
    }
    return mergedArray;
  
}
arr1 = [1,4,5,6,7,10,22,99,100];
arr2 = [0,2,3,8,9,300,400,900];
const result = mergeSortedArray2(arr1, arr2);
console.log(result);