const search_min_diff_element = function (arr, key) {
    if(arr[arr.length-1] < key) return arr[arr.length-1];
    let left = 0;
    let right = arr.length-1;
    let mid = 1;

    while(left <= right){
        mid = Math.floor((left+right)/2);

        if(arr[mid] < key){
            left = mid+1;
        }
        else if(arr[mid] > key){
            right = mid-1;
        }
        else{
            return arr[mid];
        }
    }
    
    if(mid - 1 > 0){
        if(Math.abs(key - arr[mid]) < Math.abs(key-arr[mid-1])){
            return arr[mid];
        }
        else{
            return arr[mid-1]
        }

    }
    
   //console.log(arr[mid])
    return -1;
};

console.log(search_min_diff_element([4, 6, 10], 7));
console.log(search_min_diff_element([4, 6, 10], 4));
console.log(search_min_diff_element([1, 3, 8, 10, 15], 12));
console.log(search_min_diff_element([4, 6, 10], 17));
