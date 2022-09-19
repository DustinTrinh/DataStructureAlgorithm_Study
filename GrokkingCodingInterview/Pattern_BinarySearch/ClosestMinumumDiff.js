/*
Time Complexity: O(logN)
Space Complexity:O(1)
*/
const search_min_diff_element = function (arr, key) {
    if(arr[arr.length-1] < key) return arr[arr.length-1];
    else if(key < arr[0]) return arr[0];
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
    

    return Math.abs(key - arr[left]) < Math.abs(key - arr[right]) ? arr[left] : arr[right];
};

console.log(search_min_diff_element([4, 6, 10], 7));
console.log(search_min_diff_element([4, 6, 10], 4));
console.log(search_min_diff_element([1, 3, 8, 10, 15], 12));
console.log(search_min_diff_element([4, 6, 10], 17));
console.log(search_min_diff_element([4, 6, 10], -2));
