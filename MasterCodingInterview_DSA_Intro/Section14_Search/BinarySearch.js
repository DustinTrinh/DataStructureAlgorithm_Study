const BinarySearch = (arr, target) => {

    while(arr.length >= 1 ){
        let middle = Math.floor(arr.length/2);
        if(arr[middle] > target){
            arr = arr.slice(0, middle);
        }
        else if (arr[middle] < target){
            arr = arr.slice(middle);
        }
        else{
            return true;
        }
        console.log(arr);
    }
    return false;
};

const arr = [
    1, 2,   3,   4,  5,  6, 7,
   12,  43,  44, 56, 65, 67, 74,
   88, 234, 774, 934
 ];
 const arr2 = [1];
 const target = 1;
let result = BinarySearch(arr2, target);
console.log(result)