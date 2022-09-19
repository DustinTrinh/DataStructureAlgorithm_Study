//A longer version but save lots of time, without sorting. But find if it is ascending or descending
/*
Time Complexity: O(logN)
Space Complexity:O(1)
*/


const binary_search2 = function (arr, key) {
    let left = 0;
    let right = arr.length - 1;
    let mid = 1;
    let isAscending = arr[left] < arr[right];

    while (arr[mid] != key && left <= right) {
        mid = Math.floor((right + left) / 2);

        if (isAscending) {
            if (arr[mid] > key) {
                right = mid - 1;
            } else if (arr[mid] < key) {
                left = mid + 1;
            } else {
                return mid;
            }
        } else {
            if (arr[mid] > key) {
                left = mid + 1;
            } else if (arr[mid] < key) {
                right = mid - 1;
            } else {
                return mid;
            }
        }
    }

    return false;
};

console.log(binary_search2([4, 6, 10], 10));
console.log(binary_search2([1, 2, 3, 4, 5, 6, 7], 5));
console.log(binary_search2([10, 6, 4], 10));
console.log(binary_search2([10, 6, 4], 4));
