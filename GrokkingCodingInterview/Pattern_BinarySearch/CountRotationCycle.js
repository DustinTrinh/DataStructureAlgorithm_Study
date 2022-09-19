/*
Time Complexity: O(logN)
Space Complexity:O(1)
*/
const count_rotations = function (arr) {
    return findSmallest(arr);
};

const findSmallest = (arr) => {
    let left = 0;
    let right = arr.length-1;
    let mid = 0;

    while (left < right) {
        mid = Math.floor((left + right) / 2);
        
        if(arr[left] < arr[right]){
            right = mid;
        }
        else if(arr[left] > arr[right]){
            left = mid;
        }
        //console.log(left + " " + right + " " + mid)
    }
    return left;
};
console.log(count_rotations([10, 15, 1, 3, 8]));
console.log(count_rotations([4, 5, 7, 9, 10, -1, 2]));
console.log(count_rotations([1, 3, 8, 10]));

console.log(findSmallest([3,4,5,6,7,8,9,10,1,2]));

